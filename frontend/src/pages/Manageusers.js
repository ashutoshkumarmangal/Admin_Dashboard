import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const Manageusers = () => {

  const [usersdetail, setUsersdetail] = useState([]);
  useEffect(() => {
    getUsersdetail();
  }, []);
  const getUsersdetail = async () => {
    let result = await fetch("http://localhost:8080/userdetailsback");
    result = await result.json();
    setUsersdetail(result);
  };
  return (
    <div className='wholeareadashboard'>
    <div className='wholeareaprofile'>
      <div className='uppernavbar'>
        Manage Users
      </div>
      <div className="belowDashboard">
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
      <div className="inprogress">
      <Link to={"/inprogresspage"} className="inprogresslink">
            All
          </Link>
      </div>
      <div className="inprogress">
      <Link to={"/allpage"} className="inprogresslink">
            Active
          </Link>
      </div>
      <div className="inprogress">
      <Link to={"/finalistpage"} className="inprogresslink">
            Inactive
          </Link>
      </div>
    
    <div class="search-container">
      <input type="text" placeholder="Search"  />
    </div>
  </div>
  <div className="table1">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Profile Picture</li>
              <li className="headinglist">Display Name</li>
              <li className="headinglist"Email></li>
              <li className="headinglist">Instagram Id</li>
              <li className="headinglist">Phone Number</li>
              <li className="headinglist">Send Notification </li>
              <li className="headinglist">Login as user</li>
              <li className="headinglist">Action</li>
              
            </ul>
          </div>
          {usersdetail.length >0?(
            
            usersdetail.map((item, index) => (
              <ul className='heading'> 
              {/* <ul key={item.id} className="heading"> */}
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.profilepicture}</li>
                <li className="belowlist">{item.name}</li>
                <li className="belowlist">{item.email}</li>
                <li className="belowlist">{item.instagramid}</li>
                <li className="belowlist">{item.phonenumber}</li>
                <li className="belowlist">{item.sendnotification}</li>
                <li className="belowlist">{item.loginasuser}</li>
                <li className="belowlist">{item.action}</li>
                
                
                
              </ul>
              
            ))
          ):(<h2 className="no-users">No Users Found</h2>
          )}
          


        </div>

      </div>
      </div>
  )
}

export default Manageusers