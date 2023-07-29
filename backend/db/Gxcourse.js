const moongoose = require ("mongoose");

const gxcourseSchema = new moongoose.Schema({
  

    marathon:String,
    
    cost:String,
    
    image:String,
    title:String,
    subtitle:String,
    description:String,
    isavailable:String,
    
    autocrop:String,
    usdcost:String,
    
    noofdays:String,
    materialavailability:String,
     startdate:String,
     
});
module.exports = moongoose.model("gxcourse",gxcourseSchema)