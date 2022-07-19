const mongoose = require('mongoose');
const userProfileSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        require: false,
    },
});

const userProfile = module.exports = mongoose.model('User', userProfileSchema);