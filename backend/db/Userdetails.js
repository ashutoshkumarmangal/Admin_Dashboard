const moongoose = require ("mongoose");

const usersdetailSchema = new moongoose.Schema({
    profilepicture:String,
      name:String,
      email:String,
      instagramid:String,
      phonenumber:String,
      sendnotification:String,
      loginasuser:String,
      action:String
});
module.exports = moongoose.model("usersdetail",usersdetailSchema)