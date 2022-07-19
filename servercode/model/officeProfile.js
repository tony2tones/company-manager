const mongoose = require('mongoose');
const officeProfileSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    officeCapacity: {
        type: Number,
        require: false,
    },
    address: {
        type: String,
        require: false,
    },
    colourScheme: {
        type: String,
        require: false,
    },
    users: {
        type: [Object],
        require: false,
    }
});

const OfficeProfile = module.exports = mongoose.model('Office', officeProfileSchema);