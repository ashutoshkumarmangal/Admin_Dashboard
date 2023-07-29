const moongoose = require ("mongoose");

const faqSchema = new moongoose.Schema({
    question:String,
      answer:String,
})   
module.exports = moongoose.model("faq",faqSchema)