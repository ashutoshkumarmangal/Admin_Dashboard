import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdduserModules = () => {

   const [items, setItems] = useState([
    {id:1, name: 'Admin User'},
    {id:2, name: 'App Settings' },
    {id:3, name:  'Contest'},
    {id:4, name : 'Contest Rules'},
    {id:5, name:'Coupons'},
    {id:6, name:'Course'},
    {id:7, name: 'Create coupons'},
    {id:8, name: 'Dashboard' },
    {id:9, name:  'Day Category'},
    {id:10, name : 'Exercises'},
    {id:11, name:'FAQ'},
    {id:12, name:'FAQ List'},
    {id:13, name: 'FAQ Tags'},
    {id:14, name: 'Feedback' },
    {id:15, name:  'Great Extension'},
    {id:16, name : 'Gx Course'},
    {id:17, name:'Manage Comments'},
    {id:18, name:'Manage Extension'},
    {id:19, name: 'Manage Marathon'},
    {id:20, name: 'Manage Users' },
    {id:21, name:  'Modules'},
    {id:22, name : 'Multierror'},
    {id:23, name:'Multilanguage'},
    {id:24, name:'Notifications'},
    {id:25, name:'Revenue'},
    {id:26, name:'User Sessions Logs'},

   ])

   const [selectedItems1, setSelectedItems1] = useState([]);
   const [selectedItems2, setSelectedItems2] = useState([]);
 
   const [addedItems, setAddedItems] = useState([]);
 
  const handleItemSelect = (itemId, boxNumber) => {
  const selectedItem = items.find((item) => item.id === itemId);
  if (boxNumber === 1) {
    setSelectedItems1((prevSelectedItems) =>
      prevSelectedItems.some((item) => item.id === itemId)
        ? prevSelectedItems.filter((item) => item.id !== itemId)
        : [...prevSelectedItems, selectedItem]
    );
  } else if (boxNumber === 2) {
    setSelectedItems2((prevSelectedItems) =>
      prevSelectedItems.some((item) => item.id === itemId)
        ? prevSelectedItems.filter((item) => item.id !== itemId)
        : [...prevSelectedItems, selectedItem]
    );
  }
};

 
   const handleItemRemove = (boxNumber) => {
    if (boxNumber === 1) {
      setAddedItems((prevAddedItems) => prevAddedItems.filter((item) => !selectedItems1.some((selectedItem) => selectedItem.id === item.id)));
      setSelectedItems1([]);
    } else if (boxNumber === 2) {
      setAddedItems((prevAddedItems) => prevAddedItems.filter((item) => !selectedItems2.some((selectedItem) => selectedItem.id === item.id)));
      setSelectedItems2([]);
    }
  };
  
 
   const handleAddItems = () => {
     setAddedItems((prevAddedItems) => [...prevAddedItems, ...selectedItems1]);
     setSelectedItems1([]);
   };

   const handleSelectAll = () => {
    setSelectedItems1(items);
  };

  const handleSelectNone = () => {
    setSelectedItems1([]);
  };

  const handleSelectAll1 = () => {
    setSelectedItems2(items);
  };

  const handleSelectNone1 = () => {
    setSelectedItems2([]);
  };



  const navigate = useNavigate();
  const handleBack = () =>{
    navigate("/adminuser");
  
  }
  return (
    <div className='wholeareadashboard'>
      <div className='wholeareaprofile'>
        <div className='uppernavbar'>
          Add User Modules
        </div>
        <div className='cardarea'>
        <div className='card1'>
        <div className='addarea'>
        <button onClick={handleAddItems}>Add</button>
        </div>
        <div className='slidingarea'>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={selectedItems1.some((selectedItem) => selectedItem.id === item.id)}
                onChange={() => handleItemSelect(item.id, 1)}
              />
              {item.name}
            </li>
          ))}
        </ul>
        
      
        </div>
        <div className="card1buttons">
        <button className="button1a" onClick={handleSelectAll}>All</button>
          <button className="button1a" onClick={handleSelectNone}>None</button>
        </div>
        </div>

        <div className='card2'>
        <div className='addarea'>
        <button onClick={()=> handleItemRemove(2)}>Remove</button>
        </div>
        <div className='slidingarea'>
        <ul>
          {addedItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={selectedItems2.some((selectedItem) => selectedItem.id === item.id)}
                onChange={() => handleItemSelect(item.id, 2)}
              />
              {item.name}{''}
              
            </li>
          ))}
        </ul>

        </div>
        <div className="card1buttons">
        <button className="button1a" onClick={handleSelectAll1}>All</button>
          <button className="button1a" onClick={handleSelectNone1}>None</button>
        </div>
        
        </div>
        </div>
        <div className='lowerbuttonarea'>
        <div className="card1buttons">
        <button className="button1a">Update</button>
          <button className="button1a" onClick={handleBack}>Back</button>
        </div>
        </div>
        </div>
        </div>
        
  )
}

export default AdduserModules