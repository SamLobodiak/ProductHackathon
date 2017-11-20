const users = require('./../controllers/users');
const questions = require('./../controllers/questions');

module.exports = (app)=>{
    // routes for users
    app.post('/users/create', users.create);
    app.get('/users/show', users.show);

    app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });
}
