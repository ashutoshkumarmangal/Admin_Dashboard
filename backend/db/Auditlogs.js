const moongoose = require ("mongoose");

const auditlogsSchema = new moongoose.Schema({
  ipaddress:String,
  tablename:String,
  action:String,
  createddate:String,
  
})   
module.exports = moongoose.model("auditlogs",auditlogsSchema)