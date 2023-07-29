import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Feedback = () => {

  const [answer, setAnswer] = useState([]);
  useEffect(() => {
    getAnswer();
  }, []);

  const getAnswer = async () => {
    let result = await fetch('http://localhost:8080/feedback');
    result = await result.json();
    setAnswer(result);
  };

  const [newanswer , setNewanswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/givefeedback', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         
         answer: newanswer,
        }),
      });
   
      if (response.ok) {
        const result = await response.json();
        console.warn(result);
        localStorage.setItem("users", JSON.stringify(result));
        navigate("/feedback");
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
        Feedback
      </div>
      
      <div class="form-group4">
      <div className='feedbackarea'>
        <label for="answer">Your Feedback:</label>
        <textarea id="answer"  value={newanswer} onChange={(e)=> setNewanswer(e.target.value)} required></textarea>
      
      <button className='faqbutton' onClick={handleSubmit} >ADD</button>
      </div>
      </div>

      <div className="table1">
            <ul className="heading">
              <li className="headinglist">S.No</li>
             
              <li className="headinglist">Email</li>
              <li className="headinglist">Rating </li>
              <li className="headinglist">Feedback</li>
             
            </ul>

            {answer.length >0?(
          
          answer.map((item, index) => (
           
            <ul className="heading">
              <li className="belowlist">{index + 1}</li> 
              <li className="belowlist">{item.email}</li>

              <li className="belowlist">{item.rating}</li>
              <li className="belowlist">{item.feedback}</li>
              
            </ul>
            
          ))
        ):(<h2 className="no-users">No data Found</h2>
        )}

          </div>

      </div>
      </div>
     
  )
}

export default Feedback