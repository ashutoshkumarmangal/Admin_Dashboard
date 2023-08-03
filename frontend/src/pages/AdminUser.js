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
  <ul className="tableadmi">
    <li className="headingadmi">
      <span className="headinglist">S.No</span>
      <span className="headinglist">User Role</span>
      <span className="headinglist">Language</span>
      <span className="headinglist fullname">Full Name</span>
      <span className="headinglist email">Email</span>
      <span className="headinglist action">Action</span>
    </li>
    {user.length > 0 ? (
      user.map((item, index) => (
        <li key={item._id} className="belowlistadmi">
          <span>{index + 1}</span>
          <span>{item.userrole}</span>
          <span>{item.language}</span>
          <span className="fullname">{item.name + " " + item.lastName}</span>
          <span className="email">{item.email}</span>
          <span className="action">
            <Link to={`/addusermodule/${item._id}`} className="addusermodulebuttonadmi">
              Add Modules
            </Link>
          </span>
        </li>
      ))
    ) : (
      <li className="no-usersadmi">No Users Found</li>
    )}
  </ul>
</div>

      </div>
    </div>
  );
};

export default AdminUser;
