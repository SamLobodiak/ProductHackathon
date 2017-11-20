const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {timestamps: true});

mongoose.model('User', UserSchema);
