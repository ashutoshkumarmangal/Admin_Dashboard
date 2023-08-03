import React, { useEffect, useState, useRef } from 'react';
// import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/themes/dark.min.css";
import FroalaEditor from "react-froala-wysiwyg";

const DayCategory = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const handleModelChange = (model) => {
    setContent(model);
  };

  const [activeButtons, setActiveButtons] = useState([]);

  const handleClick = (buttonId) => {
    console.log("Button Clicked");
    if (activeButtons.includes(buttonId)) {
      setActiveButtons(activeButtons.filter((id) => id !== buttonId));
    } else {
      setActiveButtons([...activeButtons, buttonId]);
    }
  };

  const buttonData = [
    { id: 1, label: 'Русский' },
    { id: 2, label: 'Молодое тело' },
    { id: 3, label: 'SuperIntensiv' },
    { id: 4, label: 'FMD' },
    { id: 5, label: 'ЭСТЕТИКА' },
    { id: 6, label: 'Тейпирование' },
    { id: 7, label: 'НЯ' },
    { id: 8, label: 'Базовый' },
    { id: 9, label: 'Skin Care' },
    { id: 10, label: 'СИ' },
    { id: 11, label: 'test' }
  ];

  const [ExerciseName, setExerciseName] = useState('');
  const [ExerciseDescription, setExerciseDescription] = useState('');
  const [ExerciseLanguage, setExerciseLanguage] = useState('');

  const [Exercise, setExercise] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getExercise();
  }, []);

  const getExercise = async () => {
    try {
      const response = await fetch("http://localhost:8080/exerciseback");
      if (response.ok) {
        const result = await response.json();
        setExercise(result);
      } else {
        console.error("Error fetching exercise data: ", response.status);
      }
    } catch (error) {
      console.error("Error fetching exercise data: ", error);
    }
  };

  const handleBack = () => {
    setCurrentPage('DayCategory1');
    setShowExtraButtons(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/exercise', {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ExerciseName: ExerciseName,
          ExerciseDescription: ExerciseDescription,
          ExerciseLanguage: ExerciseLanguage
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.warn(result);
        localStorage.setItem("users", JSON.stringify(result));
        navigate("/exercise");
      } else {
        console.error("Error adding exercise: ", response.status);
      }
    } catch (error) {
      console.error("Error adding exercise: ", error);
    }
  };

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const handleExtraButtonClickoff = () => {
    setShowExtraButtons(false);
  };

  const handleExtraButtonClickon = () => {
    setShowExtraButtons(true);
  };

  const [currentPage, setCurrentPage] = useState('DayCategory1');
  const [showExtraButtons, setShowExtraButtons] = useState(false);

  const renderCurrentPage = () => {
    if (currentPage === 'DayCategory1') {
      return (
        <div className="wholeareaDashboard">
          {/* DayCategory1 - Body */}
          <div className="adminDashboard5">
            <div className="belowDashboard1">
              <div className="container1">
                <select className="selectorder">
                  <option disabled selected>
                    --Select Name--
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="dropdown">
                  <span>Show</span>
                  <select>
                    <option value="option1">100</option>
                    <option value="option2">200</option>
                    <option value="option3">300</option>
                    <option value="option3">500</option>
                  </select>
                </div>
                <div className="search-container">
                  <input type="text" placeholder="Search" />
                </div>
              </div>
            </div>
          </div>

          <div className="table1">
            {/* DayCategory1 - Body 2 */}
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">User role</li>
              <li className="headinglist">Language</li>
            
            </ul>

            {Exercise.length > 0 ? (
              Exercise.map((item, index) => (
                <ul key={item._id} className="heading">
                  <li className="belowlist">{index + 1}</li>
                  <li className="belowlist">{item.userrole}</li>
                  <li className="belowlist">{item.language}</li>
                
                </ul>
              ))
            ) : (
              <h2 className="no-users">No Users Found</h2>
            )}
          </div>
        </div>
      );
    } else if (currentPage === 'DayCategory2') {
      return (
        <div className='wholeareaDashboard'>
         
            <table className="table-table-striped-columns2">
              <thead className="DayCategory_table_head">
                <tr className='table_headding_row'>
                  <th className='table_head1_Email' scope="col">Exercise Name</th>
                  <th className='DayCategory2_table_head1_CategoryName table_head1_Email' scope="col">Exercise Description</th>
                  <th className='table_head1' scope="col">Language</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr className='DayCategory2_table_row'>
                  <td><input type="text" maxLength="50" className='selectListInput' placeholder="Exercise Name" value={ExerciseName} onChange={(e) => setExerciseName(e.target.value)} /></td>
                  <td>
                    <div className="Discription">
                      <div>
                        <FroalaEditor
                          ref={editorRef}
                          model={content}
                          onModelChange={handleModelChange}
                          value={ExerciseDescription}
                          onChange={(e) => setExerciseDescription(e.target.value)}
                        />
                      </div>
                    </div>
                  </td>

                  <td>
                    <select name="" id="" className='selectListInput' value={ExerciseLanguage} onChange={(e) => setExerciseLanguage(e.target.value)} >
                      <option value="">--Select Language--</option>
                      <option value="Russian">Russian</option>
                      <option value="Italian">Italian</option>
                    </select>
                  </td>

                </tr>
              </tbody>
            </table>


            <div className='tagsforexercise'>
              <label htmlFor="Exercise2_CreateTag" className='Exercise2_CreateTagLabel' >Tags</label>
              <input type="text" maxLength="20" id='Exercise2_CreateTag' className='Exercise2_CreateTagInput' placeholder="Category Name" />
              <button className='Exercise2_CreateTagButton' type='button' >+</button>
            </div>
            <div className="Exercise2_TagOptionsContainer">
              
              {buttonData.map((button) => (
                <button
                  key={button.id}
                  className={activeButtons.includes(button.id) ? 'Exercise2_TagOptions_Active' : 'Exercise2_TagOptions_InActive'}
                  onClick={() => handleClick(button.id)}
                >
                  {button.label}
                </button>
              ))}
            </div>

            <div>
              <table className="Exercise2_2ndTable-table-striped-columns">
                <thead className="DayCategory_table_head">
                  <tr className='table_headding_row'>
                    <th className='table_head1' scope="col">S.no.</th>
                    <th className='table_head1' scope="col">Media Type</th>
                    <th className='table_head1' scope="col">Source</th>
                    <th className='table_head1' scope="col">Azure Content List</th>
                    <th className='Exercise2_table_head1_Action table_head1' scope="col">Action</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        
      );
    }
  };

  return (
    <div className="wholeareadashboard">
    <div className="wholeareanotifications">
      <div className="uppernavbar">Exercise</div>
      <div className="box_AdminUser_body">
        <div className="DayCategory_Navigation">

          <div className='togglebutton'>
          <button onClick={() => { handleButtonClick('DayCategory1'); handleExtraButtonClickoff(); }} className='DayCategory_NavigationButtons'>Exercise</button>
          <button onClick={() => { handleButtonClick('DayCategory2'); handleExtraButtonClickon(); }} className='DayCategory_NavigationButtons'>Create Exercise</button>
          </div>


          {showExtraButtons && (
            <div className='extrabuttons'>
            <div className="DayCategory_Extra_NavigationButtons">
              <button className='DayCategory_Extra_NavigationButton1' onClick={handleBack} >&lt;&lt;BACK</button>
              <button className='DayCategory_Extra_NavigationButton2' onClick={handleSubmit} >ADD</button>
              <button className='DayCategory_Extra_NavigationButton3' onClick={handleSubmit} >SAVE</button>
            </div>
            </div>
          )}
          <hr className='DayCategory_hrTag'></hr>
        </div>
        {renderCurrentPage()}
        <div className="box_AdminUser_body_sectionA">
          
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default DayCategory;
