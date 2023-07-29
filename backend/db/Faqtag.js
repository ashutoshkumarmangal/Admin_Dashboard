const mongoose = require ("mongoose");

const faqtagSchema = new mongoose.Schema({
    faqtag:String,
   
})   
module.exports = mongoose.model("faqtag",faqtagSchema)