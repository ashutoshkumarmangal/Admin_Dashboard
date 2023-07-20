import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Createmarathon = () => {
   const [ispaid, setIspaid] = useState("");
   const [isavailable, setIsavailable] = useState("");
   const  [image, setImage] = useState("");
   const [title, setTitle] = useState("");
   const [subtitle, setSubtitle] = useState("");
   const [description,setDescription]=useState("");
   const [noofdays, setNoofdays] = useState("");
   const [cost, setCost] = useState("");
   const [usdcost, setUsdcost] = useState("");
   const [materialavailability, setMaterialavailability]= useState("");
   const [ispublic, setIspublic] = useState("");
   const [isdisplay, setIsdisplay] = useState("");
   const [contest, setContest] = useState("");
   const [comment, setComment] = useState("");
   const [autocrop, setAutocrop] = useState("");
   const [language, setLanguage] = useState("");
    const [parentssc, setParentssc] = useState(""); 
    const [startdate, setStartdate] = useState("");
    const [contestupload, setContestupload] = useState("");
    const [finalist, setFinalist] = useState("");
    const [voting, setVoting] = useState("");
    const [winner, setWinner] = useState("");



  const navigate = useNavigate();
  const handleBack =() =>{
    navigate("/managemarathon");
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
  

try{
  const response = await fetch("http://localhost:8080/createmarathon",{
    method:"POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify({
      ispaid,
      isavailable,
      image,
      title,
      subtitle,
      description,
      noofdays,
      cost,
      usdcost,
      materialavailability,
      ispublic,
      isdisplay,
      contest,
      comment, 
      autocrop, language,parentssc,startdate,contestupload, finalist,voting,winner
    }),
  });
  if(response.ok){
    const result = await response.json();
    console.warn(result);
    localStorage.setItem("marathon",JSON.stringify(result));
    navigate("/managemarathon");
  }
  else{
    console.error("Error: ", response.status);
  }
  
}
catch(error){
  console.log('error encountered', error)
}};

  return (
    <div className='wholeareadashboard'>
      <div className='wholeareamanagemarathon'>
        <div className='uppernavbar'>
         ()- Manage Marathon
        </div>
        <div className='managemarathon1'>
            
        
          <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Is Paid</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox"  value={ispaid} onChange={(e) =>setIspaid(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Is Available for IOS</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox"  value={isavailable} onChange={(e) =>setIsavailable(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Image</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox1" type="file"  value={image} onChange={(e) =>setImage(e.target.value)}/>
        </div>
      </div>


      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon"> Title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={title} onChange={(e) =>setTitle(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon"> Sub title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text"  value={subtitle} onChange={(e) =>setSubtitle(e.target.value)}/>
        </div>
      </div>
      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Description</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={description} onChange={(e) =>setDescription(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Number of Days</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="number" value={noofdays} onChange={(e) =>setNoofdays(e.target.value)}  />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Cost</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="number" value={cost} onChange={(e) =>setCost(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon"> USD Cost</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="number" value={usdcost} onChange={(e) =>setUsdcost(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Material Availability Days</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="number" value={materialavailability} onChange={(e) =>setMaterialavailability(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Is Public</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox"  value={ispublic} onChange={(e) =>setIspublic(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Is Display</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox"  value={isdisplay} onChange={(e) =>setIsdisplay(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Contest</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox"  value={contest} onChange={(e) =>setContest(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Comment</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox" value={comment} onChange={(e) =>setComment(e.target.value)} />
        </div>
      </div>

      
      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Auto Crop</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox" value={autocrop} onChange={(e) =>setAutocrop(e.target.value)}/>
        </div>
      </div>
      
      
      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Language</div>
        </div>
        <div className="block-type-area">
          <select className="selectauditlogmanageextension" value={language} onChange={(e) =>setLanguage(e.target.value)}>
            <option disabled selected>
              --Russian--
            </option>
            <option value="option1">English</option>
            <option value="option2">French</option>
            <option value="option3">Italian</option>
          </select>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Parent ssc or Marathon level</div>
        </div>
        <div className="block-type-area">
          <select className="selectauditlogmanageextension"
          value={parentssc} onChange={(e) =>setParentssc(e.target.value)}>
            <option disabled selected>
              --Select Tag--
            </option>
            <option value="option1">Miyabi basic</option>
            <option value="option2">Young Body</option>
            <option value="option3">Skin Care</option>
            <option value="option3">New I</option>
          </select>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Start Date</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="date"  value={startdate} onChange={(e) =>setStartdate(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Contest Upload Last Date</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="date"  value={contestupload} onChange={(e) =>setContestupload(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Finalist Announcement Date</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="date"  value={finalist} onChange={(e) =>setFinalist(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Voting Last Date</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="date"  value={voting} onChange={(e) =>setVoting(e.target.value)}/>
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Winner Announcement Date</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="date"  value={winner} onChange={(e) =>setWinner(e.target.value)}/>
        </div>
      </div>
      

      <div className="blockmanagemarathon1">
          <button className="back" onClick={handleBack}>{'\u00AB'} Back</button>
          <button className="back" onClick={handleSubmit}>Submit</button>
        </div>
      
        </div>
        </div>
        </div>
        
  )
  }

export default Createmarathon