import React, { useState } from "react";
//import { useSearchParams } from 'react-router-dom'

const Multierror = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [english, setEnglish] = useState("");
  const [russian, setRussian] = useState("");
  const [french, setFrench] = useState("");

  const [isOpen, setIsopen] = useState(false);
  const [comments, setComments] = useState("");

  const toggleDropdown =() =>{
    setIsopen(!isOpen);
  }


  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleSaveData = () => {
    // Here you can add code to save the data to the database or state
    console.log("English", english);
    console.log("French", french);
    console.log("Russian", russian);

    // After saving, close the dialog box
    handleCloseDialog();
  };

  return (
    <div className="wholeareadashboard">
      <div className="wholeareamultilanguage">
        <div className="uppernavbarmultilanguage">Set Multiple Error</div>
        <div className="buttonentryarea">
          <div className="multipleerrorbutton1">
            <button className="edit-button-profile3">Publish</button>
            <button className="edit-button-profile4" onClick={handleOpenDialog}>
              Add New Error
            </button>
          </div>
        </div>

<div className="dropdownmultierror">
        <div className={`dropdown-container ${isOpen ? "open" : ""}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
      <div className="errorthatoccured">
        English: User Not Found
      </div>

      </div>
      <div className="dropdown-content">
        
        {isOpen && (
          <div className="dropdownarea">
          <div className="dropdown-textareas">
          English
            <textarea
              placeholder="Write your comments..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
            
          </div>

           <div className="dropdown-textareas">
          French
            <textarea
              placeholder="Write your comments..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
            
          </div>

           <div className="dropdown-textareas">
          Russian
            <textarea
              placeholder="Write your comments..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
            
          </div>
          </div>
        )}
      </div>
    </div>
    </div>



    



        {showDialog && (
          <div className="overlay">
            <div className="dialog-container">
              <div className="dialog-content">
                <h2>Add Error</h2>
                <div className="necessaryarea">
                  <div className="englisharea">
                    <label>English</label>
                    <textarea
                      value={english}
                      onChange={(e) => setEnglish(e.target.value)}
                    />
                  </div>
                  <div className="englisharea">
                    <label>Italian</label>
                    <textarea
                      value={french}
                      onChange={(e) => setFrench(e.target.value)}
                    />
                  </div>

                  <div className="englisharea">
                    <label>Russian</label>
                    <textarea
                      value={russian}
                      onChange={(e) => setRussian(e.target.value)}
                    />
                  </div>
                  
                </div>
                <div className="dialogboxbuttons">
                  <button className="buttondialog" onClick={handleSaveData}>Save</button>
                  <button className="buttondialog" onClick={handleCloseDialog}>Close</button>
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Multierror;
