const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors');
app.use(cors());
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const port = process.env.PORT;
app.use(express.json());
app.use('/users',require('./api/user.api'));
app.use('/messages',require('./api/message.api'));
app.get('/',(req,res)=>{
    res.json("ok");
})
mongoose.connect("mongodb+srv://tariq:Tariq55@cluster0.n51mawe.mongodb.net/saraha");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));