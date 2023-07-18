const moongoose = require ("mongoose");

const userSchema = new moongoose.Schema({
    userrole:String,
      language:String,
      name:String,
      lastName:String,
      email:String,
      password:String,
      confirmPassword:String
});
module.exports = moongoose.model("users",userSchema)