const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    bought_by: {
        type: String,
        required: true,
        default: ''
    },
    date_created: {
        type: Date,
        required: true,
        default: Date.now()
    },
    photos: {
        type: Array,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    bidPrice: {
        type: Number,
        required: false
    },
    tags: {
        type: Array,
        required: false
    },
    status: {
        type: String,
        required: true,
        default: 'unsold' // 'unsold', 'sold'
    },
    current_bids: { // stores objects of {user: <user id>, bid_price: <number>}
        type: Array,
        required: false
    }
})

const Listing = mongoose.model('Listing', ListingSchema);

module.exports = Listing;