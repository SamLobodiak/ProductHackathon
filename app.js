const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 8888;

const session = require('express-session');

const app = express();

app.use(express.static(path.join(__dirname, './public/dist' )));
app.use(session({secret: 'hackathon'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./server/config/mongoose');
require('./server/config/routes')(app);


app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}!`)
})
