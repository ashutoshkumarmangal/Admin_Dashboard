const moongoose = require ("mongoose");

const couponsSchema = new moongoose.Schema({
  enddate:String,
  discount:String,
  discounttype:String,
  couponcode:String,
  noofuses:String,
  description:String,
  startdate:String
})   
module.exports = moongoose.model("coupons",couponsSchema)