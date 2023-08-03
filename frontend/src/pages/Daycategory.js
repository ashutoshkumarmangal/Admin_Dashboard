import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Daycategory = () => {
  const [categoryName, setcategoryName] = useState('');
  const [categoryImage, setcategoryImage] = useState('');
  const [Language, setLanguage] = useState('');
  const [DayCategory, setDayCategory] = useState([]);

  const navigate = useNavigate();
  

  const handleBack = () => {
    setCurrentPage('DayCategory1');
    handleExtraButtonClickoff();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/creatdaycategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoryName,
          categoryImage,
          Language,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.warn(result);
        localStorage.setItem('daycategory', JSON.stringify(result));
        setCurrentPage('DayCategory1');
        // navigate('/daycategory');
      } else {
        console.error('Error: ', response.status);
      }
    } catch (error) {
      console.log('error encountered', error);
    }
  };



  useEffect(() => {
    getDayCategory();
  }, []);

  const getDayCategory = async () => {
    try {
      const response = await fetch('http://localhost:8080/daycategory');
      if (response.ok) {
        const result = await response.json();
        setDayCategory(result);
      } else {
        console.error('Error: ', response.status);
      }
    } catch (error) {
      console.log('error encountered', error);
    }
  };

// ----------------------frontend------------------------
  const [currentPage, setCurrentPage] = useState('DayCategory1');
  const [showExtraButtons, setShowExtraButtons] = useState(false);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  const handleExtraButtonClickoff = () => {
    setShowExtraButtons(false);
  };

  const handleExtraButtonClickon = () => {
    setShowExtraButtons(true);
  };

  const renderCurrentPage = () => {
    if (currentPage === 'DayCategory1') {
    
      return (
        <div className="box_AdminUser_body">
         
          <div className="box_DayCategory_body_sectionB">
            {/* DayCategory1 - Body 2 */}
            <div className="tableday">
            <ul className="headingday">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Category Name</li>
              <li className="headinglist">Category Image</li>
              <li className="headinglist">Action</li>
              
              
            </ul>
          </div>
              {DayCategory.length>0 ?(
                DayCategory.map((item, index) => (
                  <ul className='heading'> 
              {/* <ul key={item.id} className="heading"> */}
                <li className="belowlist">{index + 1}</li>
                <li className="belowlist">{item.categoryName}</li>
                <li className="belowlist"><img src="" alt="img" /></li>
                <li className="belowlist"><i class="fa-sharp fa-solid fa-trash fa-xl"></i></li>
                
                
                
                
              </ul>
              
            ))
          ):(<h2 className="no-users">No Users Found</h2>
          )}
          
        </div>
        </div>
      );
    } else if (currentPage === 'DayCategory2') {
      return (
        <div>
          <div className="box_AdminUser_body_sectionA">
            {/* DayCategory2 - Body 1 */}
          </div>
          <div className="box_DayCategory_body_sectionB">
            {/* DayCategory2 - Body 2 */}
            <table className="table-table-striped-columns">
              <thead className="DayCategory_table_head">
                <tr className='table_headding_row'>
                  <th className='table_head1' scope="col">Sno.</th>
                  <th className='DayCategory2_table_head1_CategoryName' scope="col">Category Name</th>
                  <th className='table_head1' scope="col">Category Image</th>
                  <th className='table_head1' scope="col">Language</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr className='DayCategory2_table_row'>
                  <td>S.no.</td>
                  <td><input type="text" maxLength="50" className='selectListInput' placeholder="Category Name" value={categoryName} onChange={((e)=> setcategoryName(e.target.value))} /></td>
                  <td><input type="file" className='selectListInput DayCategory2_ChooseFile' placeholder="Category Image" value={categoryImage} onChange={((e)=> setcategoryImage(e.target.value))} /></td>
                  <td>
                    <select name="" id="" className='selectListInput' value={Language} onChange={((e)=> setLanguage(e.target.value))} >
                      <option value="">--Select Language--</option>
                      <option value="Russian">Russian</option>
                      <option value="Italian">Italian</option>
                    </select>
                  </td>
                </tr>
                {/* Rest of the rows */}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="wholeareadashboard">
      <div className="wholeareanotifications">
        <div className="uppernavbar">Day Category</div>
        <div className="box_AdminUser_body">
        <div className="DayCategory_Navigation">
        <div className='togglebutton'>
          <button onClick={() => { handleButtonClick('DayCategory1'); handleExtraButtonClickoff(); }} className='DayCategory_NavigationButtons'>Category</button>
          <button onClick={() => { handleButtonClick('DayCategory2'); handleExtraButtonClickon(); }} className='DayCategory_NavigationButtons'>Create Category</button>
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
          <div className="search_Field">
            {/* Search field */}
          </div>
        </div>
        <div className="box_DayCategory_body_sectionB">
          {/* Additional content */}
        </div>
        </div>
        </div>
        </div>
        
  )
}

export default Daycategory