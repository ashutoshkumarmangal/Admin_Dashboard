import { text } from '@fortawesome/fontawesome-svg-core'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Manageextension = () => {

  const [selectmarathon, setSelectMarathon] = useState("");
  const [isavailable, setIsavailable] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [cost, setCost] = useState("");
  const [usdcost, setUsdcost] = useState("");
  const [tenure,setTenure]=useState("");


  const navigate = useNavigate();
  // const handleBack = () => {
  //   navigate("/createcoupons");
  // };
 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:8080/createextension', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        isavailable,
        selectmarathon,
        title,
        subtitle,
        tenure,
        cost,
        usdcost
    })
  })

    if (response.ok) {
      const result = await response.json();
      console.warn(result);
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/manageextension");
    } else {
      // Handle error case
      console.error("Error: ", response.status);
    }
  } catch (error) {
    // Handle fetch errors
    console.error("Error: ", error);
  }
};
// -----------------------------------------

const [extension, setExtension] = useState([]);
  useEffect(() => {
    getExtension();
  }, []);
  const getExtension = async () => {
    let result = await fetch("http://localhost:8080/extensionback");
    result = await result.json();
    setExtension(result);
  };
 

// -------------------------------------------------
const [marathon, setMarathon] = useState([]);
useEffect(()=>{
  getMarathon();

},[]);
const getMarathon  = async()=>{
  let result = await fetch("http://localhost:8080/marathon");
  result = await result.json();
  setMarathon(result);
}

  return (
    <div className="wholeareaDashboard">
      <div className="admindashboardmanageextension">
        <div className="adminDashboardUpper">
          <div className="leftText">Create Extension
          </div>
          </div>
          <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">isAvailable for IOS</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox" value={isavailable} onChange={(e)=> setIsavailable(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Select Marathon</div>
        </div>
        <div className="block-type-area">
          <select className="selectauditlogmanageextension" value={selectmarathon} onChange={(e)=> setSelectMarathon(e.target.value)}>
            <option disabled selected>
              --Select Marathon--
            </option>
            {marathon.map((item,index)=>(
              <option>{item.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Course Title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Course Sub title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={subtitle} onChange={(e)=> setSubtitle(e.target.value)} />
        </div>
      </div>
      
      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Tenure(in days)</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={tenure} onChange={(e)=> setTenure(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Cost</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={cost} onChange={(e)=> setCost(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">USD cost</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={usdcost} onChange={(e)=> setUsdcost(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon"></div>
        </div>
        <div className="block-type-area">
        <button className="nextButton" onClick={handleSubmit}>Create Extension</button>
        </div>
      </div>


  </div>
  <div className="admindashboardmanageextension1">
        <div className="adminDashboardUpper">
          <div className="leftText">Extension List
          </div></div>
          <div className="belowDashboard1">
          <div class="container1">
            <div class="dropdown">
              <span>Show</span>
              <select>
                <option value="option1">100</option>
                <option value="option2">200</option>
                <option value="option3">300</option>
                <option value="option3">500</option>
              </select>
            </div>
            <div class="search-container">
              <input type="text" placeholder="Search"/>
            </div>
          </div>
        </div>
        {/* <div className="tableDashboard"> */}
          <div className="table1">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Title</li>
              <li className="headinglist">Sub Title</li>
              <li className="headinglist">Tenure</li>
              <li className="headinglist">Cost</li>
              <li className="headinglist">Image</li>
              <li className="headinglist">Status</li>
            </ul>
          </div>

          {extension.length >0?(
            
            extension.map((item, index) => (
              <ul className='heading'> 
              {/* <ul key={item.id} className="heading"> */}
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.title}</li>
                <li className="belowlist">{item.subtitle}</li>
                <li className="belowlist">{item.tenure}</li>
                <li className="belowlist">{item.cost}</li>
                <li className="belowlist">{item.image}</li>
                <li className="belowlist">{item.status}</li> 
                
              </ul>
              
            ))
          ):(<h2 className="no-users">No Users Found</h2>
          )}
          
</div>
  </div>
  // </div>
  
)}

export default Manageextension