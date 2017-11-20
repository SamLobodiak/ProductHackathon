const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new mongoose.Schema({
    name: String,
    location: String,
    picture: String,
    desc: String,
    price: Number
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
