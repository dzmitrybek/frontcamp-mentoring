const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    username: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('users', userSchema);