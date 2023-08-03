const mongoose = require('mongoose');

const loginuserSchema = new mongoose.Schema({
  email:String,
  password:String,
  firstname:String,
  lastname:String
   
});


module.exports = mongoose.model("loginusers",loginuserSchema)