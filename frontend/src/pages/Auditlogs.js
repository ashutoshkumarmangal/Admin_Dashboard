import React, { useEffect, useState } from "react";

import Auditlogtable from "../components/Auditlogtable";

const Auditlogs = () => {
  const [user, setUsers] = useState([]);
  useEffect(()=>{
    getUsers();
  }, []);
  const getUsers = async ()=>{
    let result = await fetch("http://localhost:8080/users");
    result = await result.json();
    setUsers(result);
  };

  return (
    <div className="wholeareadashboard">
      <div className="wholeareaauditlogs">
        <div className="upperselectbar">
          <select className="selectauditlog">
            <option disabled selected>
              --Select Name--
            </option>
            {user.map((item, index) => (
                
                
                  <option>{item.name +" " +item.lastName}</option>
                 
                
                
              ))}
            
          </select>
        </div>

        <div className="lowerselectbar">
          <select>
            <option value="option1">100</option>
            <option value="option2">200</option>
            <option value="option3">300</option>
            <option value="option3">500</option>
          </select>

          <div class="searchauditlogs">
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="auditlogtablepart">
          <Auditlogtable />
        </div>
        <div className="pagination">
          <button className="previousButton">{'\u00AB'} Previous</button>
          <button className="nextButton">Next {'\u00BB'}</button>
        </div>
      </div>
    </div>
  );
};

export default Auditlogs;
