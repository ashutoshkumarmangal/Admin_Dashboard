
const express = require('express');
const cors = require("cors");
const User = require("./db/User");
require("./db/config")

const app = express();
app.use(express.json());
app.use(cors());

// -----------------createusers----------------

app.post("/createusers",async(req,res)=>{

    const users = new User(req.body);
    let result = await users.save();
    res.send(result);
})

app.get("/createusers", async (req, res) => {
    try {
      const users = await User.find();
      if (users.length > 0) {
        res.send(users);
      } else {
        res.send("Data not found");
      }
    } catch (error) {
      console.error("Error fetching users: ", error);
      res.status(500).send("Internal Server Error");
    }
  });
  


app.listen(5003,()=>{console.log("server is running on port 5003")});






