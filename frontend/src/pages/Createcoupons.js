 import React, { useState,useEffect,useRef } from 'react'
 import { useNavigate } from 'react-router-dom';
 import "froala-editor/js/plugins.pkgd.min.js";
 import "froala-editor/css/froala_editor.pkgd.min.css";
 import "froala-editor/css/froala_style.min.css";
 import "froala-editor/css/themes/dark.min.css";
 import FroalaEditor from "react-froala-wysiwyg";

const Createcoupons = () => {

  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    getCoupons();
  }, []);
  const getCoupons = async () => {
    let result = await fetch("http://localhost:8080/couponsback");
    result = await result.json();
    setCoupons(result);
  };



  
  const [enddate, setEnddate] = useState("");
  const [discount, setDiscount] = useState("");
  const [discounttype, setDiscountType] =useState("");
  
  const [couponcode, setCouponcode] = useState("");
  const [noofuses, setNoofuses] = useState("");
  const [description, setDescription] = useState("");
  const [startdate, setStartdate] = useState("");

  const navigate = useNavigate();
  // const handleBack = () => {
  //   navigate("/createcoupons");
  // };
 const handleSubmit = async (e) => {
  e.preventDefault();


  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const plainText = doc.body.textContent;
  
  try {
    const response = await fetch('http://localhost:8080/createcoupons', {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        enddate,
        discount,
        discounttype,
        couponcode,
        noofuses,
        description:plainText,
        startdate
    })
  })

    if (response.ok) {
      const result = await response.json();
      console.warn(result);
      localStorage.setItem("users", JSON.stringify(result));
      navigate("/createcoupons");
    } else {
      // Handle error case
      console.error("Error: ", response.status);
    }
  } catch (error) {
    // Handle fetch errors
    console.error("Error: ", error);
  }
};



  const [content, setContent] = useState("");
     const editorRef = useRef(null);
  
     useEffect(() => {
       // Access the Froala Editor instance via editorRef.current
       console.log(editorRef.current);
     }, []);
  
     // Handle editor content change
     const handleModelChange = (model) => {
       setContent(model);
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
    <div className="wholeareaDashboard">
    <div className="adminDashboard6">
    <div className='createcouponfield'>

  <div className='createcouponMandatoryfield'>
  
  <div className='mandatoryfield1part'>
  
  <div className='mandatoryfield1partitem1'>
    Discount type
  </div>
  
  <div className='manadatoryfield1partitem2'>
  <select className="selectionpart1" value={discounttype} onChange={(e)=> setDiscountType(e.target.value)}>
              <option>
                --Select Discount type--
              </option>
              <option >Amount</option>
              <option >Percentage</option>
              
            </select>
  </div>
  </div>

  

  <div className='mandatoryfield1part'>
  <div className='mandatoryfield1partitem1'>
    Discount
  </div>
  <div className='manadatoryfield1partitem2'>
  <input className='selectionpart2' type='number'  value={discount} onChange={(e)=> setDiscount(e.target.value)}
  >

  </input>
  </div>
  </div>

  <div className='mandatoryfield1part'>
  <div className='mandatoryfield1partitem1'>
    Number of Uses
  </div>
  <div className='manadatoryfield1partitem2'>
  <input className='selectionpart2' type='number'  value={noofuses} onChange={(e)=> setNoofuses(e.target.value)}>

  </input>
  </div>
  </div>


  </div>

  <div className='createcouponMandatoryfield2'>
  <div className='mandatoryfield1part'>
  <div className='mandatoryfield1partitem1'>
    Coupon Code
  </div>
  <div className='manadatoryfield1partitem2'>
  <input className='selectionpart2' type='text'  value={couponcode} onChange={(e)=> setCouponcode(e.target.value)}>

  </input>
  
  </div>
  </div>

  <div className='texteditorarea'>
  <label>Description</label>
  <div className='editor'>
  <FroalaEditor
              ref={editorRef}
              model={content}
              onModelChange={handleModelChange}
              value={description} onChange={(e)=> setDescription(e.target.value)}
            />
  </div>
  <div className='couponsdate1'>
  <div className='couponsdate'>
    <label >Start Date</label><br/>
    <input type='date'  value={startdate} onChange={(e)=> setStartdate(e.target.value)}></input>

  </div>

  <div className='couponsdate'>
    <label >End Date</label><br/>
    <input type='date'  value={enddate} onChange={(e)=> setEnddate(e.target.value)}></input>

  </div>
  </div>

  <div className="marathoncoupons">
          <span>Marathon </span><br/>
          <select className="selectcontest1">
          {marathon.map((item,index)=>(
              <option>{item.title}</option>
            ))}
          </select>
        </div>
        <div className='submitcoupons'>
        <button className="back" onClick={handleSubmit}>Submit</button>
        </div>

  </div>

  </div>



  </div>

 
        
          <div className="leftText">Marathon
          
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
              <li className="headinglist">Created date</li>
              <li className="headinglist">Discount</li>
              <li className="headinglist">Discount type</li>
              <li className="headinglist">marathan name </li>
              <li className="headinglist">order no</li>
              <li className="headinglist">no of uses </li>
              <li className="headinglist">consumed count  </li>
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
      </div>
    
          

  )
}

export default Createcoupons