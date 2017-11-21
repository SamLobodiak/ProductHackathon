//  TESTING FOR GITHUB
const mongoose = require('mongoose');
const Product = mongoose.model('Product');


module.exports = {

  create: (req, res) => {
    console.log("made it to CREATE PRODUCTS in controller");
    console.log(req.body);
    const product = new Product(req.body);
    product._user = req.session.user_id
    console.log(product._user)
    console.log("made it right before product.save");

    product.save((err) =>{
        if(err) {
            res.send(err);
        } else {
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
  update: function(req, res) {
      console.log('update function hit!');
    Product.update({ _id: req.params.id }, req.body, function(err, result){
        if (err) { console.log(err); }
      });
},


  delete: function(req, res) {
      console.log("delete function hit!");
      console.log(req.params.id)
    Product.remove({ _id: req.params.id }, function(err, result){
        if (err) { console.log(err); }
    })
},
}
