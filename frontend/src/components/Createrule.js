import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/themes/dark.min.css";
import FroalaEditor from "react-froala-wysiwyg";

const Createrule = () => {
  const [rule, setRule] = useState("");
  const [selectedMarathon, setSelectedMarathon] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const handleBack = () => {
    navigate("/contestrules");
  };

  const handleModelChange = (model) => {
    setContent(model);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, "text/html");
      const plainText = doc.body.textContent;

      const currentDate = new Date();
      const response = await fetch("http://localhost:8080/createrule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedMarathon,
          rule: plainText,
          createdDate: currentDate.toString(),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.warn(result);
        localStorage.setItem("course", JSON.stringify(result));
        navigate("/contestrules");
      } else {
        console.error("Error: ", response.status);
      }
    } catch (error) {
      console.log("error encountered", error);
    }
  };
  // -------------------------------------------------------------------

  // --------------------------------------------------------------

  const [marathon, setMarathon] = useState([]);
  useEffect(() => {
    getMarathon();
  }, []);
  const getMarathon = async () => {
    let result = await fetch("http://localhost:8080/marathon");
    result = await result.json();
    setMarathon(result);
  };

  return (
    <div className="wholeareadashboard">
      <div className="wholeareamanagemarathon1">
        <div className="uppernavbar">Create Rule</div>
        <div className="managemarathon1">
          <div className="blockmanagemarathon2">
            <button className="back" onClick={handleBack}>
              {"\u00AB"} Back
            </button>
            <button className="back" onClick={handleSubmit}>
              Submit
            </button>
          </div>

          <div className="tableDashboard">
            <div className="table">
              <ul className="heading">
                <li className="headinglist">
                  <div className="notification1">
                    <span>Marathon </span>
                    <select
                      className="selectauditlog"
                      value={selectedMarathon}
                      onChange={(e) => setSelectedMarathon(e.target.value)}
                    >
                      <option disabled selected>
                        --Select Name--
                      </option>
                      {marathon.map((item, index) => (
                        <option key={index} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
                <li className="headinglist">
                  <div>
                    <FroalaEditor
                      ref={editorRef}
                      model={content}
                      onModelChange={handleModelChange}
                      value={rule}
                      onChange={(e) => setRule(e.target.value)}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createrule;
