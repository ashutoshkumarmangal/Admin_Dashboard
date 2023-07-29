import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const AdminUser = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    let result = await fetch("http://localhost:8080/users");
    result = await result.json();
    setUsers(result);
  };

  // const searchHandle = async (event) => {
  //   let key = event.target.value;
  //   if (key) {
  //     let result = await fetch(`http://localhost:8080/search/${key}`);
  //     result = await result.json();
  //     if (result) {
  //       setUsers(result);
  //     }
  //   } else {
  //     getUsers();
  //   }
  // };


  return (
    <div className="wholeareaDashboard">
      <div className="adminDashboard">
        <div className="adminDashboardUpper">
          <div className="leftText">Admin User List</div>
          {/* <button className="rightButton">CREATE USER</button> */}
          <Link to={"/createuser"} className="rightbutton1">
            Create User
          </Link>
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
              <input type="text" placeholder="Search" /*onChange={searchHandle}*/ />
            </div>
          </div>
        </div>
        <div className="tableDashboard">
          <div className="table">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">User Role</li>
              <li className="headinglist">Language</li>
              <li className="headinglist">Full Name</li>
              <li className="headinglist">Email</li>
              <li className="headinglist">Action</li>
            </ul>
            {user.length >0?(
            
              user.map((item, index) => (
                /*<ul >*/
                <ul key={item._id} className="heading">
                  <li className="belowlist">{index + 1}</li>
                  <li className="belowlist">{item.userrole}</li>
                  <li className="belowlist">{item.language}</li>
                  <li className="belowlist">{item.name +" " +item.lastName}</li>
                  <li className="belowlist">{item.email}</li>
                  <li className="belowlist">
                  {/* <Link to={`/addusermodule/${item._id}`} className="addusermodulebutton">
            Add User Modules
          </Link> */}
          <Link to={`/addusermodule/${item._id}`} className="addusermodulebutton">
            Add User Modules
          </Link>
                  </li>
                </ul>
                /*</ul>*/
              ))
            ):(<h2 className="no-users">No Users Found</h2>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
