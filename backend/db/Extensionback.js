const moongoose = require ("mongoose");

const extensionSchema = new moongoose.Schema({
  selectmarathon:String,
  isavailable:String,
  title:String,
  subtitle:String,
  cost:String,
  usdcost:String,
  tenure:String
})   
module.exports = moongoose.model("extension",extensionSchema)