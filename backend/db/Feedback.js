const mongoose = require ("mongoose");

const feedbackSchema = new mongoose.Schema({
    email:String,
    rating:String,
    feedback:String
   
})   
module.exports = mongoose.model("feedback",feedbackSchema)