import React, { useState, useEffect } from "react";

const FAQlist = () => {
  const [faqtag, setFaqtag] = useState([]);
  const [faq, setFaq] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getFaqtag();
    getFaq();
  }, []);

  useEffect(() => {
    getData();
  }, [faq, faqtag]);

  const getFaqtag = async () => {
    let result = await fetch("http://localhost:8080/faqtag");
    result = await result.json();
    setFaqtag(result);
  };

  // --------------------------------------------------

  const getFaq = async () => {
    let result = await fetch("http://localhost:8080/faq");
    result = await result.json();
    setFaq(result);
  };
  // --------------------------------------

  const getData = () => {
    const data = faq.map((item, index) => {
      return { ...item, ...faqtag[index] };
    });
    setData(data);
  };


  return (
    <div className="wholeareadashboard">
      <div className="wholeareaprofile">
        <div className="uppernavbar">Frequently Asked Question</div>

        <div className="belowDashboard">
          <div class="container">
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
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="tableDashboard">
          <div className="table">
            <ul className="heading">
              <li className="headinglist">S.No</li>
              <li className="headinglist">Question</li>
              <li className="headinglist">Answer</li>
              <li className="headinglist">Tags</li>
            </ul>

            {data.length > 0 ? (
              data.map((item, index) => (
                /*<ul key={item._id}>*/
                <ul className="heading">
                  <li className="belowlist">{index + 1}</li>
                  <li className="belowlist">{item.question}</li>
                  <li className="belowlist">{item.answer}</li>
                  <li className="belowlist">{item.faqtag}</li>
                </ul>
                /*</ul>*/
              ))
            ) : (
              <h2 className="no-users">No data Found</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQlist;
