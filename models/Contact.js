const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        
    }
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('user', UserSchema); 