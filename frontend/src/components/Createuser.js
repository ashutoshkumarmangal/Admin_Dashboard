import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [userrole, setUserrole] = useState("");
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastname] =useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/adminuser");
  };
 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:8080/createusers', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userrole,
        language,
        name,
        lastName,
        email,
        password,
        confirmPassword
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.warn(result);
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/adminuser");
    } else {
      // Handle error case
      console.error("Error: ", response.status);
    }
  } catch (error) {
    // Handle fetch errors
    console.error("Error: ", error);
  }
};


  return (
    <div className="wholeareaDashboard">
      <div className="wholeareaCreateuser">
        <div className="uppernavbar"> Create User</div>
        {/* <div className="form-container"> */}
          <form onSubmit={handleSubmit}>


            {/* <div className="required">
              <label>User Role:</label>
              <select id="userrole"  value={userrole} onChange={(e)=> setUserrole(e.target.value)}>
                <option value="">--Select Role--</option>
                <option >User</option>
                <option >Admin</option>
              </select>
            </div> */}

            <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">User Role</div>
        </div>
        <div className="block-type-area">
          <select className="selectauditlogmanageextension" value={userrole} onChange={(e)=> setUserrole(e.target.value)}>
            <option disabled selected>
              --User Role--
            </option>
            <option >User</option>
                <option >Admin</option>
           
          </select>
        </div>
      </div>

            

            <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Select Language</div>
        </div>
        <div className="block-type-area">
          <select className="selectauditlogmanageextension" value={language} onChange={(e)=> setLanguage(e.target.value)}>
            <option disabled selected>
            Select a language
            </option>
            <option >English</option>
                <option >French</option>
           
          </select>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Name:</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Last Name</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={lastName} onChange={(e)=> setLastname(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Email</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Password</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Confirm Password</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="password" value={confirmPassword} onChange={(e)=> setConfirmpassword(e.target.value)} />
        </div>
      </div>
<div className="blockmanagemarathon">
           <button className="submitcreateuser" type="button" onClick={handleBack}>Back</button>
            <button className="submitcreateuser" type="submit">Submit</button>
        </div>
          </form>
        </div>

        {/* <input type='text' placeholder='--Select Role--' className='userroletextbox' value = {userrole}
    onChange={(e)=>{setUserrole(e.target.value)}}/> */}
      </div>
    // </div>
  );
};

export default Createuser;
