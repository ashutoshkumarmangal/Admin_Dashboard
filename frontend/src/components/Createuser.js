import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [userrole, setUserrole] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastName, setLastname] = React.useState("");
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
    const response = await fetch('http://localhost:5003/createusers', {
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
        confirmPassword,
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
        <div className="form-container">
          <form onSubmit={handleSubmit}>


            <div className="required">
              <label>User Role:</label>
              <select id="userrole"  value={userrole} onChange={(e)=> setUserrole(e.target.value)}>
                <option value="">--Select Role--</option>
                <option value="english">User</option>
                <option value="spanish">Admin</option>
              </select>
            </div>

            <div className="required">
              <label>--Select Language--</label>
              <select id="language" value={language} onChange={(e) =>setLanguage(e.target.value)}>

                <option value="">Select a language</option>
                <option value="english">English</option>

                <option value="french">French</option>
              </select>
            </div>

            <div className="required">
              <label>Name:</label>
              <input type="text" id="name" value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>

            <div className="required">
              <label>Last Name:</label>
              <input type="text" id="lastName" value={lastName} onChange={(e)=> setLastname(e.target.value)} />
            </div>

            <div className="required">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email"
              value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className="required">
              <label>Password:</label>
              <input type="password" id="password"  value={password} onChange={(e)=> setPassword(e.target.value)}
             />
            </div>

            <div className="required">
              <label>Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword} onChange={(e)=> setConfirmpassword(e.target.value)}
              />
            </div>

           <button type="button" onClick={handleBack}>Back</button>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* <input type='text' placeholder='--Select Role--' className='userroletextbox' value = {userrole}
    onChange={(e)=>{setUserrole(e.target.value)}}/> */}
      </div>
    </div>
  );
};

export default Createuser;
