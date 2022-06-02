const mongoose = require('mongoose');
const { create } = require('./Word');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', User);
