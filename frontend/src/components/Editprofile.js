import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Editprofile = () => {
  const [profilepic, setProfilepic] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  
  

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/profile");
  };
 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:8080/loginuser', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       profilepic,
       firstname,
       lastname

      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.warn(result);
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/profile");
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
    <div className='wholeareadashboard'>
      <div className='wholeareaprofile'>
        <div className='uppernavbar'>
         Edit Profile
          </div>
          <div className='editprofileheading'>
            Edit Profile
          </div>
          <div className='areaofuploadandtext'>
          <div className='photouploadarea'>
          <img src="" alt=""  width="100px" height="100px"/>
          <br></br>
          <div className='uploadbuttonsection'>
          <p>Upload a different File</p>
          <input type="file" value={profilepic} onChange={(e)=> setProfilepic(e.target.value)}></input>
          </div>

          </div>
          <div className='entryarea'>
          <p>Personal Info</p>
          <label>First Name:</label>
          <input type='text' value={firstname} onChange={(e)=> setFirstname(e.target.value)}></input>
          
        
          <label>Last Name:</label>
          <input type='text' value={lastname} onChange={(e)=> setLastname(e.target.value)}></input>
          
           <div className='buttonsentryarea'>
          <button onClick={handleSubmit} className='savebutton' >Save Changes</button>
          <button onClick={handleBack} className='cancelbutton' >Cancel</button>
          </div>

          </div>

          </div>
          </div>
          </div>
  )
}

export default Editprofile