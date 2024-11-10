const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Listing = require('../models/Listing');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anshulsaha15@gmail.com',
        pass: `${process.env.EMAIL_PASSWORD}`
    }
});

router.post('/register', async (req, res) => {
    let token = Math.floor(Math.random() * 1000000)
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        verified: false,
        verify_token: token
    });
    let user = await newUser.save();

    var mailOptions = {
        from: 'anshulsaha15@gmail.com',
        to: `${user.email}`,
        subject: 'Verification Email',
        html: `<p>Your U-Sell verification token is ${token}.</p>`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.json({ success: false, error: error })
        } else {
            res.json({success: true, accessToken: user._id})
        }
    });
})

router.post('/verify', async (req, res) => {
    let user = await User.findById(req.body.accessToken)
    if (user.verify_token == req.body.token) {
        console.log("hello");
        user.verified = true
        await user.save()
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
});

router.post('/login', async (req, res) => {
    let user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if (user) {
        res.json({ success: true, accessToken: user._id });
    } else {
        res.json({ success: false });
    }
});

router.post('/listings/new', (req, res) => {
    let newListing = new Listing({
        title: req.body.title,
        bought_by: 'none',
        status: 'unsold',
        description: req.body.description,
        condition: req.body.condition,
        size: req.body.size,
        price: req.body.price,
        bidPrice: req.body.bidPrice,
        category: req.body.category,
        tags: req.body.tags,
        photos: req.body.photos,
        owner: req.body.user_id
    });
    newListing.save()
    res.json({ success: true })
})

router.get('/listings', async (req, res) => {
    const user = await User.findOne({ _id: req.query.token })
    let query = {}
    if (req.query.search) {
        query.title = new RegExp(req.query.search, 'i')
    }
    if (req.query.category) {
        query.category = req.query.category
    }
    if (req.query.price) {
        if (req.query.price == '0-50') {
            query.price = { $gte: 0, $lt: 50 }
        } else {
            query.price = { $gte: 50, $lt: 100 }
        }
    }
    if (req.query.filter) {
        if (req.query.filter == 'hot') {
            query.date_created = { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) }
        } else if (req.query.filter == 'new') {
            query.date_created = { $gt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
        } else if (req.query.filter == 'donated') {
            query.price = 0
        }
    }
    let listings = await Listing.find(query)
    res.json({
        listings: listings,
        liked_listings: user.liked_listings
    })
});

router.get('/listings/:id', async (req, res) => {
    let listing = await Listing.findOne({ _id: req.params.id })
    res.json(listing)
})

router.post('/listing/placebid', async (req, res) => {
    let user = await User.findOne({ _id: req.body.accessToken })
    let listing = await Listing.findOne({ _id: req.body.listing_id })
    user.bids_made.push(req.body.listing_id)
    listing.current_bids.push({ user: req.body.accessToken, bid_price: req.body.bid_price, username: user.username })
    user.markModified('bids_made')
    listing.markModified('current_bids')
    await user.save()
    await listing.save()
    res.json({ success: true })
});

router.get('/profile/:id', async (req, res) => {
    let user = await User.findOne({ _id: req.params.id })
    user.password = undefined
    res.json(user)
})

router.get('/wishlist', async (req, res) => {
    let user = await User.findOne({ _id: req.query.accessToken })
    let listings = await Listing.find({ _id: { $in: user.liked_listings } })
    res.json(listings)
});

router.post('/wishlist/add', async (req, res) => {
    let user = await User.findOne({ _id: req.body.token })
    if (user.liked_listings.includes(req.body.listing_id)) {
        user.liked_listings = user.liked_listings.filter(id => id != req.body.listing_id)
    } else {
        user.liked_listings.push(req.body.listing_id)
    }
    user.markModified('liked_listings')
    await user.save()
    console.log(user.liked_listings);
    res.json({ success: true })
});

// router.post('/wishlist/remove', async (req, res) => {
//     let user = await User.findOne({ _id: req.body.accessToken })
//     user.liked_listings = user.liked_listings.filter(id => id != req.body.listing_id)
//     user.markModified('liked_listings')
//     await user.save()
//     res.json({ success: true })
// });

router.get('/ongoing/buying', async (req, res) => {
    let user = await User({ _id: req.query.accessToken })
    let listings = await Listing.find({ _id: { $in: user.bids_made }, status: 'unsold' })
    return res.json(listings)
});

router.get('/ongoing/selling', async (req, res) => {
    let listings = await Listing.find({ owner: req.query.accessToken, status: 'unsold' })
    return res.json(listings)
});

router.get('/completed/buying', async (req, res) => {
    let listings = await Listing.find({ bought_by: req.query.accessToken, status: 'sold' })
    return res.json(listings)
});

router.get('/completed/selling', async (req, res) => {
    let listings = await Listing.find({ owner: req.query.accessToken, status: 'sold' })
    return res.json(listings)
});

router.post('/listing/approvebid', async (req, res) => {
    let listing = await Listing.findOne({ _id: req.body.listing_id })
    listing.bought_by = req.body.buyer_id
    console.log(req.body.buyer_id);
    console.log(listing.current_bids);
    listing.price = listing.current_bids.find(bid => bid.user == req.body.buyer_id).bid_price
    listing.status = 'sold'
    await listing.save()
    res.json({ success: true })
});

router.post('/listing/rejectbid', async (req, res) => {
    let listing = await Listing.findOne({ _id: req.body.listing_id })
    listing.current_bids = listing.current_bids.filter(bid => bid.user != req.body.buyer_id)
    listing.markModified('current_bids')
    await listing.save()
    res.json({ success: true })
});

module.exports = router