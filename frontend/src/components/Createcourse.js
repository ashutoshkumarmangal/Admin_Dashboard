import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
//import {useNavigate} from "react-router-dom"

const Createcourse = () => {
   
    const  [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description,setDescription]=useState("");
    const [autocrop, setAutocrop] = useState("");
    const [parentssc, setParentssc] = useState(""); 
    const [startdate, setStartdate] = useState("");
    const [marathon, setMarathon] = useState("");
    const [course, setCourse] = useState("");
    const [cost, setCost] = useState("");
    const [planid, setPlanid] = useState("");
     
 
 
   const navigate = useNavigate();
   const handleBack =() =>{
     navigate("/course");
   }
   const handleSubmit = async (e) =>{
     e.preventDefault();
   
 
 try{
   const response = await fetch("http://localhost:8080/createcourse",{
     method:"POST",
     headers: {
       "Content-Type": 'application/json',
     },
     body: JSON.stringify({
      
       image,
       title,
       subtitle,
       description, 
       autocrop,
       parentssc,
       startdate,
       marathon,course, cost , planid
     }),
   });
   if(response.ok){
     const result = await response.json();
     console.warn(result);
     localStorage.setItem("course",JSON.stringify(result));
     navigate("/course");
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
       <div className='wholeareamanagemarathon1'>
         <div className='uppernavbar'>
           Manage Course
         </div>
         <div className='managemarathon1'>
             
         <div className="blockmanagemarathon2">
           <button className="back" onClick={handleBack}>{'\u00AB'} Back</button>
           <button className="back" onClick={handleSubmit}>Submit</button>
         </div>

       <div className="blockmanagemarathon">
         <div className="blocknameareamanagemarathon">
           <div className="blocknamemanagemarathon">Select Marathon</div>
         </div>
         <div className="block-type-area">
           <select className="selectauditlogmanageextension" value={marathon} onChange={(e) =>setMarathon(e.target.value)}>
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
           <div className="blocknamemanagemarathon">Course Type</div>
         </div>
         <div className="block-type-area">
           <select className="selectauditlogmanageextension" value={course} onChange={(e) =>setCourse(e.target.value)}>
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
           <div className="blocknamemanagemarathon">Parent SSC or marathon level</div>
         </div>
         <div className="block-type-area">
           <select className="selectauditlogmanageextension" value={parentssc} onChange={(e) =>setParentssc(e.target.value)}>
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
           <div className="blocknamemanagemarathon">Cost</div>
         </div>
         <div className="block-type-area">
           <input className="inputbox" type="text" value={cost} onChange={(e) =>setCost(e.target.value)} />
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
           <div className="blocknamemanagemarathon">Description</div>
         </div>
         <div className="block-type-area">
           <input className="inputbox" type="text" value={description} onChange={(e) =>setDescription(e.target.value)} />
         </div>
       </div>
       

       <div className="blockmanagemarathon">
         <div className="blocknameareamanagemarathon">
           <div className="blocknamemanagemarathon">Plan Id</div>
         </div>
         <div className="block-type-area">
           <input className="inputbox" type="text" value={planid} onChange={(e) =>setPlanid(e.target.value)} />
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
          <div className="blocknamemanagemarathon">Contest</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox"  value={autocrop} onChange={(e) =>setAutocrop(e.target.value)}/>
        </div>
      </div>
 
       
 
       
       
         </div>
         </div>
         </div>
         
   )
   }

export default Createcourse