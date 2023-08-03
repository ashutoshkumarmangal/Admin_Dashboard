import React from 'react'

const Order = () => {
  return (
    <div className="wholeareanotifications">
     <div className="wholeareadashboard">
        
          <select className="selectorder">
            <option disabled selected>
              --Select Name--
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
              <li className="headinglist">Order no.</li>
              <li className="headinglist">Transaction id</li>
              <li className="headinglist">Coupons</li>
              <li className="headinglist">Transaction Amount</li>
              <li className="headinglist">Status</li>
              <li className="headinglist">Order Active </li>
              <li className="headinglist">Title</li>
              <li className="headinglist">Full Name </li>
            </ul>
          </div>
          
</div>
  )
}

export default Order