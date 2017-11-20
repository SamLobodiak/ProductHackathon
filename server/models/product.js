const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new mongoose.Schema({
    name: String,
    location: String,
    picture: String,
    desc: String,
    price: Number,
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

mongoose.model('Product', ProductSchema);
