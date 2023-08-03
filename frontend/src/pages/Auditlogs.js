import React, { useEffect, useState } from "react";

// import Auditlogtable from "../components/Auditlogtable";

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


  const [auditlogsback, setAuditlogsback] = useState([]);
  useEffect(()=>{
    getAuditlogsback();
  }, []);
  const getAuditlogsback = async ()=>{
    let result = await fetch("http://localhost:8080/auditlogsback");
    result = await result.json();
    setAuditlogsback(result);
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

        <div className="tableDashboard">
          <div className="table">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">ip address</li>
              <li className="headinglist">table name</li>
              <li className="headinglist">action</li>
              <li className="headinglist">createdDate</li>
             
            </ul>

            {auditlogsback.length >0?(
            
            auditlogsback.map((item, index) => (
              
              <ul key={item._id} className="heading">
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.ipaddress}</li>
                <li className="belowlist">{item.tablename}</li>
                <li className="belowlist">{item.action}</li>
                <li className="belowlist">{item.createddate}</li>
                
              </ul>
              
            ))
          ):(<h2 className="no-users">No Users Found</h2>
          )}
          
        </div>
</div>
       
      </div>
    </div>
    

  );
};

export default Auditlogs;
