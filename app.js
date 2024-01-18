
const express = require("express");
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const Model = require('./models/model');
const app =express();

app.set("view engine","ejs")
app.use(express.static('public'));
// Model.create({
//     name:"John",
//     age:30,

// })
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})



app.use('/', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})