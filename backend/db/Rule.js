const moongoose = require ("mongoose");

const ruleSchema = new moongoose.Schema({
    selectedmarathon:String,
      rule:String,
      createdDate: String
})   
module.exports = moongoose.model("rule",ruleSchema)