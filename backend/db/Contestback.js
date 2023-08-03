const moongoose = require ("mongoose");

const contestSchema = new moongoose.Schema({
  fullname:String,
  email:String,
  download:String,
  finalist:String,
  collage:String,
  loginasuser:String,
  notification:String
})   
module.exports = moongoose.model("contest",contestSchema)