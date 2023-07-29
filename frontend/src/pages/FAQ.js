import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
 const [question,setQuestion] = useState("");
 const [answer , setAnswer] = useState("");


 const navigate = useNavigate();
 
 
const handleSubmit = async (e) => {
 e.preventDefault();
 
 try {
   const response = await fetch('http://localhost:8080/createfaq', {
     method: "post",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
      question,
      answer
     }),
   });

   if (response.ok) {
     const result = await response.json();
     console.warn(result);
     localStorage.setItem("users", JSON.stringify(result));
     navigate("/faqlist");
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
      <div className='wholeareamultilanguage'>
        <div className='uppernavbarmultilanguage'>
          Frequently Asked Question
        </div>
        <div className='faqtextarea'>
        
        <div class="form-group">
        <label for="question">Question:</label>
        <input type="text" id="question"  value={question} onChange={(e)=> setQuestion(e.target.value)} required>
        </input>
        </div>
      
      <div class="form-group">
        <label for="answer">Answer:</label>
        <textarea id="answer"  value={answer} onChange={(e)=> setAnswer(e.target.value)} required></textarea>
      </div>
      <button className='faqbutton' onClick={handleSubmit} type="submit">ADD</button>


        </div>

      </div>
    </div>
  )
}

export default FAQ