const moongoose = require ("mongoose");

const moduleSchema = new moongoose.Schema({
    module:String,
      font:String,
})   
module.exports = moongoose.model("module",moduleSchema)