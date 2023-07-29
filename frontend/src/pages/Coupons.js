import React,{useState,useEffect} from 'react'

const Coupons = () => {

  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    getCoupons();
  }, []);
  const getCoupons = async () => {
    let result = await fetch("http://localhost:8080/couponsback");
    result = await result.json();
    setCoupons(result);
  };



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
    <div className="adminDashboard">
        <div className="adminDashboardUpper">
          <div className="leftText">Marathon
          </div>
          <select className="selectorder">
            <option disabled selected>
              --Select Marathon--
            </option>
            {marathon.map((item,index)=>(
              <option>{item.title}</option>
              ))}
          </select></div>


          <div className="belowDashboard1">
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
            <div class="search-container">
              <input type="text" placeholder="Search"/>
            </div>
          </div>
        </div>
        {/* <div className="tableDashboard"> */}
          <div className="table1">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">email</li>
              <li className="headinglist">Coupons</li>
              <li className="headinglist">Created Date</li>
              <li className="headinglist">Discount</li>
              <li className="headinglist">Discount type</li>
              <li className="headinglist">Marathon name </li>
              <li className="headinglist">Order no</li>
              <li className="headinglist">no of uses </li>
              <li className="headinglist">consumed count </li>
              <li className="headinglist">valid </li>
              
            </ul>
          </div>

          
          {coupons.length >0?(
            
            coupons.map((item, index) => (
              <ul className='heading'> 
              {/* <ul key={item.id} className="heading"> */}
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.email}</li>
                <li className="belowlist">{item.couponcode}</li>
                <li className="belowlist">{item.startdate}</li>
                <li className="belowlist">{item.discount}</li>
                <li className="belowlist">{item.discounttype}</li>
                <li className="belowlist">{item.marathon}</li>
                <li className="belowlist">{item.orderno}</li>
                <li className="belowlist">{item.noofuses}</li>
                <li className="belowlist">{item.consumedcount}</li>
                <li className="belowlist">{item.valid}</li>
                
                
              </ul>
              
            ))
          ):(<h2 className="no-users">No Users Found</h2>
          )}
          
        </div>
      
  )
}

export default Coupons