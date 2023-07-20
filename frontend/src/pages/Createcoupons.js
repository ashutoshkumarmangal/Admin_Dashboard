import React from 'react'

const Createcoupons = () => {
  return (
    <div className="wholeareaDashboard">
    <div className="adminDashboard">
    <div className='createcouponfield'>

  <div className='createcouponMandatoryfield'>
  <div className='mandatoryfield1part'>
  <div className='mandatoryfield1partitem1'>
    Discount type
  </div>
  <div className='manadatoryfield1partitem2'>
  <select className="selectionpart1">
              <option>
                --Select Discount type--
              </option>
              <option value="option1">Amount</option>
              <option value="option2">Percentage</option>
              
            </select>
  </div>
  </div>

  

  <div className='mandatoryfield1part'>
  <div className='mandatoryfield1partitem1'>
    Discount
  </div>
  <div className='manadatoryfield1partitem2'>
  <select className="selectionpart1">
              <option disabled selected>
                --Select Discount type--
              </option>
              
            </select>
  </div>
  </div>

  <div className='mandatoryfield1part'>
  <div className='mandatoryfield1partitem1'>
    Number of User
  </div>
  <div className='manadatoryfield1partitem2'>
  <input className='selectionpart2' type='number'>

  </input>
  </div>
  </div>


  </div>
  </div>
    </div></div>
  )
}

export default Createcoupons