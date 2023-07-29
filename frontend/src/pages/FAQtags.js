import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQtags = () => {
  const [faqtag, setFaqtag] = useState([]);
  useEffect(() => {
    getFaqtag();
  }, []);

  const getFaqtag = async () => {
    let result = await fetch('http://localhost:8080/faqtag');
    result = await result.json();
    setFaqtag(result);
  };

  const [newFaqtag, setNewFaqtag] = useState(''); // Separate state for the new tag
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/faqtag', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          faqtag: newFaqtag, // Use the newFaqtag state for the new tag value
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.warn(result);
        localStorage.setItem('users', JSON.stringify(result));
        navigate('/faqtags');
      } else {
        // Handle error case
        console.error('Error: ', response.status);
      }
    } catch (error) {
      // Handle fetch errors
      console.error('Error: ', error);
    }
  };

  return (
    <div className='wholeareadashboard'>
    <div className='wholeareafaqtag'>
      <div className='uppernavbar'>
        Frequently Asked Question
      </div>
      <div className='tagaddingarea'>
      <div className='tagsentryarea'>

        <label className='labelfaqtags'> Tag</label>
        <input className='inputfaqtags' type='text' value={newFaqtag} onChange={(e)=> setNewFaqtag(e.target.value)}></input>
        </div>
        <div className='buttontagentry'>
        <button type='submit' onClick={handleSubmit} >Create</button>
      </div>

      </div> 
   
      <div className="belowDashboard">
<div class="container">
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
    <input type="text" placeholder="Search"  />
  </div>
</div>
</div>


<div className="tableDashboard">
        <div className="table">
          <ul className="heading">
            <li className="headinglist">S.No</li>
            <li className="headinglist">Tags</li>
            {/* <li className="headinglist">Active</li> */}
            
          </ul>

          {faqtag.length >0?(
          
          faqtag.map((item, index) => (
            /*<ul key={item._id}>*/
            <ul className="heading">
              <li className="belowlist">{index + 1}</li> 
              <li className="belowlist">{item.faqtag}</li>
              {/* <li className="belowlist">{item.active}</li> */}
              
            </ul>
            /*</ul>*/
          ))
        ):(<h2 className="no-users">No data Found</h2>
        )}
</div>
</div></div>
      </div>
  );
};

export default FAQtags;
