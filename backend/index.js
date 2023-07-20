
const express = require('express');
const cors = require("cors");
const User = require("./db/User");
const Marathon = require("./db/Marathon")
const Course = require("./db/Course")
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

app.get("/users", async (req, res) => {
    try {
      const user = await User.find();
      if (user.length > 0) {
        res.send(user);
      } else {
        res.send("Data not found");
      }
    } catch (error) {
      console.error("Error fetching users: ", error);
      res.status(500).send("Internal Server Error");
    }
  });
  
// ----------------------createmarathon------------------------

app.post("/createmarathon",async(req,res)=>{

  const marathon = new Marathon(req.body);
  let result = await marathon.save();
  res.send(result);
})

app.get("/marathon", async (req, res) => {
  try {
    const marathon = await Marathon.find();
    if (marathon.length > 0) {
      res.send(marathon);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// ----------------------course------------------------------------

app.post("/createcourse",async(req,res)=>{

  const course = new Course(req.body);
  let result = await course.save();
  res.send(result);
})

app.get("/course", async (req, res) => {
  try {
    const course = await Course.find();
    if (course.length > 0) {
      res.send(course);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});






app.listen(8080);






