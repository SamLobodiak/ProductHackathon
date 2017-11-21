const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {

  create: (req, res) => {
    console.log("made it to CREATE PRODUCTS in controller");
    console.log(req.body);
    const product = new Product(req.body);

    console.log("made it right before product.save");



    product.save((err) =>{
        if(err) {
            res.send(err);
        } else {
            // can access id here to put in session
            // req.session.user_id = product._id;
            res.json(product);
        }
    })
  },
  show: (req, res) => {
    console.log("inside SHOW PRODUCTS in express controller")
    Product.find({}, (products, error)=>{
        if(products){
            res.json(products)
        } else {
            res.send(error)
        }
    })
  },

}
