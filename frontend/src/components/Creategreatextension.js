import React, {useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/themes/dark.min.css";
import FroalaEditor from "react-froala-wysiwyg";
// import { text } from '@fortawesome/fontawesome-svg-core';

const Creategreatextension = () => {

    const [selectedMarathon, setSelectedMarathon] = useState("");
    const [isavailable, setIsavailable] = useState("");
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [tenure, setTenure] = useState("");
    
    
    
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const editorRef = useRef(null);
  
    const handleBack = () => {
      navigate("/greatextension");
    };
  
    const handleModelChange = (model) => {
      setContent(model);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch("http://localhost:8080/creategreatextension", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newmarathon: selectedMarathon,
            title,
            subtitle,
            tenure,
            
          }),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.warn(result);
          localStorage.setItem("course", JSON.stringify(result));
          navigate("/greatextension");
        } else {
          console.error("Error: ", response.status);
        }
      } catch (error) {
        console.log("error encountered", error);
      }
    };


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
    <div className="wholeareadashboard">
      <div className='wholeareamanagemarathon1'>
       <div className='uppernavbar'>
         Create Great Extension
       </div>
       <div className='managemarathon5'>
    
          
       <div className="blockmanagemarathon2">
         <button className="back" onClick={handleBack}>{'\u00AB'} Back</button>
         <button className="back" onClick={handleSubmit}>Submit</button>
       </div>


       </div>
       <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">isAvailable for IOS</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="checkbox"  value={isavailable} onChange={(e) =>setIsavailable(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Select Marathon</div>
        </div>
        <div className="block-type-area">
          <select className="selectauditlogmanageextension" value={selectedMarathon} onChange={(e)=> setSelectedMarathon(e.target.value)}>
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
          <div className="blocknamemanagemarathon">Title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text"  value={title} onChange={(e) =>setTitle(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Sub title</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text" value={subtitle} onChange={(e) =>setSubtitle(e.target.value)} />
        </div>
      </div>
      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Tenure</div>
        </div>
        <div className="block-type-area">
          <input className="inputbox" type="text"  value={tenure} onChange={(e) =>setTenure(e.target.value)} />
        </div>
      </div>

      <div className="blockmanagemarathon">
        <div className="blocknameareamanagemarathon">
          <div className="blocknamemanagemarathon">Description</div>
        </div>
        <div className="block-type-area">
        <FroalaEditor
              ref={editorRef}
              model={content}
              onModelChange={handleModelChange}
              />

        </div>
      </div>
      
          
       </div>
       </div>
       
  )
}

export default Creategreatextension