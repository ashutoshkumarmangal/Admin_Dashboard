const mongoose = require('mongoose');

const loginuserSchema = new mongoose.Schema({
  email:String,
  password:String,
  name:String
   
});


module.exports = mongoose.model("loginusers",loginuserSchema)