import React, {useEffect,useState} from "react";



const Notifications = () => {
 

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
      <div className="wholeareanotifications">
        <div className="uppernavbar">Notifications</div>
        <div className="notifications1line">
          <div className="notification1">
            <span>Marathon </span>
            <select className="selectauditlog">
              <option disabled selected>
                --Select Name--
              </option>
              {marathon.map((item,index)=>(
              <option>{item.title}</option>
              ))}
            </select>
          </div>

          <div className="notification1">
            <span>SSC </span>
            <select className="selectauditlog">
              <option disabled selected>
                --Select Name--
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>

          <div className="notification1">
            <span>Extension </span>
            <select className="selectauditlog">
              <option disabled selected>
                --Select Name--
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="notification2line">
          <div className="notification1">
            <span>Users </span>
            <select className="selectauditlog">
              <option disabled selected>
                --Select Tags--
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="notification3line">
        
          Image Url
          
          <div className="notification3text">
          <input className="choosefileboxouter" type="file"></input>
          </div>
          <div className="notification3text">
          <input className="notification-image-url" type="none" disabled name ="image-url" placeholder="Notification Image Url"></input>
          </div>
        </div>

        <div className="notification4line">
          Notification Title
          <div className="notification4inputclass">
           <input className="notification4input" type="text" placeholder="Enter Notification Title">

           </input>
          </div>
        </div>

        <div className="notification5line">
          Notification Body
          <div className="notification5inputclass">
           <input className="notification5input" type="text" placeholder="Enter Notification Body">

           </input>
          </div>
        </div>
        <div className="notificationButtons">
        <button className="notificationButton1">Send</button>
          <button className="notificationButton1">Reset</button>
        </div>
        

      </div>
    </div>
  );
};

export default Notifications;
