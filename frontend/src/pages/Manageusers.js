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
  <div className="tablemanage">
  <ul className="headingmanage">
    <li className="headinglistmanage">S.No</li>
    <li className="headinglistmanage">Profile Picture</li>
    <li className="headinglistmanage">Display Name</li>
    <li className="headinglistmanage">Email</li>
    <li className="headinglistmanage">Instagram Id</li>
    <li className="headinglistmanage">Phone Number</li>
    <li className="headinglistmanage">Send Notification</li>
    <li className="headinglistmanage">Login as User</li>
    <li className="headinglistmanage">Action</li>
  </ul>
  {usersdetail.length > 0 ? (
    usersdetail.map((item, index) => (
      <ul key={item.id} className="belowlistmanage">
        <li>{index + 1}</li>
        <li>{item.profilepicture}</li>
        <li>{item.name}</li>
        <li>{item.email}</li>
        <li>{item.instagramid}</li>
        <li>{item.phonenumber}</li>
        <li>{item.sendnotification}</li>
        <li>{item.loginasuser}</li>
        <li>{item.action}</li>
      </ul>
    ))
  ) : (
    <h2 className="no-usersmanage">No Users Found</h2>
  )}
</div>

      </div>
      </div>
      </div>
  )
}

export default Manageusers