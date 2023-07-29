const mongoose = require ("mongoose");

const appsettingSchema = new mongoose.Schema({
    androidversion:String,
    cloud:String,
    email:String,
    emailpassword:String,
    iosversion:String,
    massagereminder:String,
    minandroidversion:String,
    miniosversion:String,
    morningremindermessage:String,
    passforapi:String,
    paypal:String,
    paypalclientid:String,
    paypalclientsecret:String,
    publicid:String,
    robokassa:String,
    stripe:String,
    subscriptionkey:String,
    termcondition: String,
   
})   
module.exports = mongoose.model("appsetting",appsettingSchema)