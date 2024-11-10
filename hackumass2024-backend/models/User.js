const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verify_token: {
        type: String,
        required: false
    },
    verified: {
        type: Boolean,
        required: true
    },
    liked_listings: {
        type: Array,
        required: false
    },
    bids_made: {
        type: Array,
        required: false
    },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;