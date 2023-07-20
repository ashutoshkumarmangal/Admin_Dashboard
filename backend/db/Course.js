const moongoose = require ("mongoose");

const courseSchema = new moongoose.Schema({
    // ispaid: {type:Boolean, default:false},
    // isavailable: {type:Boolean, default:false},
    // image:{data:Buffer, contentType: String},
    // title:String,
    // subtitle:String,
    // description:String,
    // noofdays:Number,
    // cost:Number,
    // usdcost:Number,
    // materialavailability:Number,
    // ispublic:{type:Boolean, default:false},
    // isdisplay:{type:Boolean, default:false},
    // contest:{type:Boolean, default:false},
    // comment:{type:Boolean, default:false},
    // autocrop:{type:Boolean, default:false},
    //  language:String,
    //  parentssc:String,
    //  startdate:Date,
    //  contestupload:Date,
    //   finalist:Date,
    //   voting:Date,
    //   winner:Date

    marathon:String,
    course:String,
    cost:String,
    planid:String,
    image:String,
    title:String,
    subtitle:String,
    description:String,
    
    autocrop:String,
    
     parentssc:String,
     startdate:String,
     
});
module.exports = moongoose.model("course",courseSchema)