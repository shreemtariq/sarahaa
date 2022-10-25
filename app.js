
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
res.set('Access-Control-Allow-Origin', '*');
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use('/users',require('./api/user.api'));
app.use('/messages',require('./api/message.api'));
app.get('/',(req,res)=>{
    res.json("ok");
})
mongoose.connect("mongodb+srv://tariq:Tariq@@55cluster0.n51mawe.mongodb.net/saraha");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));