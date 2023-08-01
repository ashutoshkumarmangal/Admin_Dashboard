
const express = require('express');
const cors = require("cors");
const User = require("./db/User");
const Marathon = require("./db/Marathon")
const Course = require("./db/Course")
const Modules = require("./db/Modules");
const Faq = require("./db/Faq")
const Faqtag = require("./db/Faqtag");
const Createrule = require("./db/Rule")
const Feedback = require("./db/Feedback");
const Greatextension = require('./db/Greatextension');
const Gxcourse = require('./db/Gxcourse');
const Couponback = require("./db/Couponback")
const Extensionback = require("./db/Extensionback");
const Appsettingback = require('./db/Appsettingback');
const loginusers =require("./db/Loginuser");
const Daycategory = require('./db/Daycategory');
// const userdetailsback = require("./db/Userdetails");
const Userdetails = require('./db/Userdetails');
const Exercise_Module=require('./db/EXERCISE')

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


  // ----------------------------add user module---------------------
//   app.post("/users/:id",async(req,res)=>{

//     let result = await Product.findOne({ _id: req.params.id });
//     if (result) {
//       resp.send(result);
//     } else {
//       resp.send({ result: "No Record Found." });
//     }
// })

// app.get("/users", async (req, res) => {
//     try {
//       const user = await User.find();
//       if (user.length > 0) {
//         res.send(user);
//       } else {
//         res.send("Data not found");
//       }
//     } catch (error) {
//       console.error("Error fetching users: ", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });
  
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


// ------------------------------Modules---------------------

app.post("/createmodule",async(req,res)=>{

  const module = new Modules(req.body);
  let result = await module.save();
  res.send(result);
})

app.get("/module", async (req, res) => {
  try {
    const module = await Modules.find();
    if (module.length > 0) {
      res.send(module);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});


// ----------------------------------Faq------------------------

app.post("/createfaq",async(req,res)=>{

  const faq = new Faq(req.body);
  let result = await faq.save();
  res.send(result);
})

app.get("/faq", async (req, res) => {
  try {
    const faq = await Faq.find();
    if (faq.length > 0) {
      res.send(faq);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// --------------------------------------faqtag---------------------

app.post("/faqtag",async(req,res)=>{

  const faqtag = new Faqtag(req.body);
  let result = await faqtag.save();
  res.send(result);
})

app.get("/faqtag", async (req, res) => {
  try {
    const faqtag = await Faqtag.find();
    if (faqtag.length > 0) {
      res.send(faqtag);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});


// ------------------------------rule----------------------

app.post("/createrule",async(req,res)=>{

  const createrule = new Createrule(req.body);
  let result = await createrule.save();
  res.send(result);
})

app.get("/contestrules", async (req, res) => {
  try {
    const createrule = await Createrule.find();
    if (createrule.length > 0) {
      res.send(createrule);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// ---------------------------------feedback-------------------------

app.post("/givefeedback",async(req,res)=>{

  const createfeedback = new Feedback(req.body);
  let result = await createfeedback.save();
  res.send(result);
})

app.get("/feedback", async (req, res) => {
  try {
    const createfeedback = await Feedback.find();
    if (createfeedback.length > 0) {
      res.send(createfeedback);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});


// ----------------------------------great marathon----------------------


app.post("/creategreatextension",async(req,res)=>{

  const greatextension= new Greatextension(req.body);
  let result = await greatextension.save();
  res.send(result);
})

app.get("/greatextension", async (req, res) => {
  try {
    const creategreatextension = await Greatextension.find();
    if (creategreatextension.length > 0) {
      res.send(creategreatextension);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// -------------------------------gxcourse----------------------------

app.post("/creategxcourse",async(req,res)=>{

  const gxcourse= new Gxcourse(req.body);
  let result = await gxcourse.save();
  res.send(result);
})

app.get("/gxcourse", async (req, res) => {
  try {
    const creategxcourse = await Gxcourse.find();
    if (creategxcourse.length > 0) {
      res.send(creategxcourse);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// --------------------------couponsback-------------------------------

app.post("/createcoupons",async(req,res)=>{

  const coupons= new Couponback(req.body);
  let result = await coupons.save();
  res.send(result);
})

app.get("/couponsback", async (req, res) => {
  try {
    const createcoupons = await Couponback.find();
    if (createcoupons.length > 0) {
      res.send(createcoupons);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});
// --------------------------extension---------------

app.post("/createextension",async(req,res)=>{

  const extension= new Extensionback(req.body);
  let result = await extension.save();
  res.send(result);
})

app.get("/extensionback", async (req, res) => {
  try {
    const createextension = await Extensionback.find();
    if (createextension.length > 0) {
      res.send(createextension);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// ------------------------appsetting----------------------

app.post("/appsetting",async(req,res)=>{

  const appsetting= new Appsettingback(req.body);
  let result = await appsetting.save();
  res.send(result);
})

app.get("/appsettingback", async (req, res) => {
  try {
    const appsetting = await Appsettingback.find();
    if (appsetting.length > 0) {
      res.send(appsetting);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});



// ----------------------------loginand signup detail------------------
app.post("/register", async (req, resp) => {
  let loginuser = new loginusers(req.body);
  let result = await loginuser.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.password && req.body.email) {
    try {
      let loginuser = await loginusers.findOne({ email: req.body.email }).select("-password");
      if (loginuser) {
        resp.send(loginuser);
      } else {
        resp.send({ result: "No User Found" });
      }
    } catch (error) {
      console.error(error);
      resp.status(500).send({ result: "Server Error" });
    }
  } else {
    resp.send({ result: "No User Found" });
  }
});

// --------------------------day category--------------------

app.post("/createdaycategory",async(req,res)=>{

  const daycategory= new Daycategory(req.body);
  let result = await daycategory.save();
  res.send(result);
})

app.get("/daycategory", async (req, res) => {
  try {
    const daycategory = await Daycategory.find();
    if (daycategory.length > 0) {
      res.send(daycategory);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});
// ----------------------------Userdetails---------------------



app.get("/userdetailsback", async (req, res) => {
  try {
    const usersdetail = await Userdetails.find();
    if (usersdetail.length > 0) {
      res.send(usersdetail);
    } else {
      res.send("Data not found");
    }
  } catch (error) {
    console.error("Error fetching users: ", error);
    res.status(500).send("Internal Server Error");
  }
});
// ------------------------------exercise-------------------------------

app.post("/exercise", async (req, resp,) => {
  const exercise = new Exercise_Module(req.body);
  console.log("Working index.js Client side: CreateUser (POST)");
  // let result = await exercise.save();
  console.log("User Created:-->>",req.body);
})

// --------------------------------GET------

app.get("/exercise", async (req, resp) => {
  const exercise = await Exercise_Module.find();
  if (exercise.length > 0) {
      resp.send(exercise);
  }
  else {
      resp.send({ result: "Product not found" });
  }
});

app.listen(8080);






