const users = require('./../controllers/users');
const products = require('./../controllers/products');

module.exports = (app)=>{
    // routes for users
    app.post('/users/create', users.create);
    app.get('/users/show', users.show);
    //routes for products
    app.post('/products/create', products.create);
    app.get('/products/show', products.show);
    app.get('/products/:id', products.findone);
    app.put('/products/edit/:id', products.update);
    app.delete('/products/delete/:id', products.delete);
    app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
