import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Createmodules = () => {
  
  const [module, setModule] = useState("");
  const [font, setFont] = useState("");
  
  
  

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/modules");
  };
 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:8080/createmodule', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       module,
       font
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.warn(result);
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/modules");
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
              <label>Module</label>
              <input type="text" id="name" value={module} onChange={(e)=> setModule(e.target.value)}></input>
            </div>

            <div className="required">
              <label>Font</label>
              <input type="text" id="lastName" value={font} onChange={(e)=> setFont(e.target.value)} ></input>
            </div>

            

           <button type="button" onClick={handleBack}>Back</button>
            <button type="submit">Submit</button>
          </form>
        </div>

       
      </div>
    </div>
  );
};

export default Createmodules