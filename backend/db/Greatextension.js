const mongoose = require ("mongoose");

const greatextensionSchema = new mongoose.Schema({
    
    marathon:String,
    title:String,
    subtitle:String,
    
    tenure:String,
    
   
})   
module.exports = mongoose.model("greatextension",greatextensionSchema)