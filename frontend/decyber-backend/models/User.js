const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    team: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    college: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ap: {
        type: Number,
        default: 0
    },
    cp: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
})
const User= mongoose.model('User', UserSchema);
module.exports = User;