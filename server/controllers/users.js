const mongoose = require('mongoose');
const User = mongoose.model('User');


module.exports = {

  create: (req, res) => {
    console.log("made it to CREATE USER in express controller");
    console.log(req.body);
    const user = new User(req.body);
    console.log("made it right before user.save");
    user.save((err) =>{
        if(err) {
            res.send(err);
        } else {
            // can access id here to put in session
            req.session.user_id = user._id;
            console.log("inside users controller and req.session.user_id is: ", req.session.user_id)
            res.json(user);
        }
    })
  },
  show: (req, res) => {
    console.log("inside SHOW USERS in express controller")
    User.find({}, (users, error)=>{
        if(users){
            res.json(users)
        } else {
            res.send(error)
        }
    })
  },

}
