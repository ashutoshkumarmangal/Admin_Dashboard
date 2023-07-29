// import { text } from "@fortawesome/fontawesome-svg-core";
import React,{useState,useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/themes/dark.min.css";
import FroalaEditor from "react-froala-wysiwyg";

const AppSetting = () => {
  const [appsetting, setAppsetting] = useState([]);
  useEffect(() => {
    getAppsetting();
  }, []);
  const getAppsetting = async () => {
    let result = await fetch("http://localhost:8080/appsettingback");
    result = await result.json();
    setAppsetting(result);
  };


  const [content, setContent] = useState("");
  // const [androidversion, setAndroidversion] = useState("");
  // const [cloud, setCloud] = useState("");
  // const [email, setEmail] = useState("");
  // const [emailpassword, setEmailpassword] = useState("");
  // const [iosversion, setIosversion] = useState("");
  // const [massagereminder,setMassagereminder] = useState("");
  // const [minandroidversion, setMinandroidversion] = useState("");
  // const [miniosversion, setMiniosversion] = useState("");
  // const [morningremindermessage, setMorningremindermessage] = useState("");
  // const [passforapi, setPassforapi] = useState("");
  // const [paypal, setPaypal] = useState("");
  // const [paypalclientid, setPaypalclientid] = useState("");
  // const [paypalclientsecret,setPaypalclientsecret] = useState('');
  // const [publicid, setPublicid] = useState("");
  // const [robokassa, setRobokassa] = useState("");
  // const [stripe, setStripe] = useState("");
  // const [subscriptionkey, setSubscriptionkey] = useState("");
  // const [termcondition, setTermcondition] = useState("");


  const navigate = useNavigate();
  const editorRef = useRef(null);

  const handleModelChange = (model) => {
    setContent(model);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const plainText = doc.body.textContent;

    
//     const response = await fetch("http://localhost:8080/appsetting", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         androidversion,
//         cloud,
//         email,
//         emailpassword,
//         iosversion,
//         massagereminder,
//         minandroidversion,
//         miniosversion,
//         morningremindermessage,
//         passforapi,
//         paypal,
//         paypalclientid,
//         paypalclientsecret,
//         publicid,
//         robokassa,
//         stripe,
//         subscriptionkey,
//         termcondition: plainText,
        
//       }),
//     });

//     if (response.ok) {
//       const result = await response.json();
//       console.warn(result);
//       localStorage.setItem("course", JSON.stringify(result));
//       navigate("/appsetting");
//     } else {
//       console.error("Error: ", response.status);
//     }
  } 
  catch (error) {
    console.log("error encountered", error);
  }
};
return(
  <div className="wholeareadashboard">
  <div className="wholeareaappsetting">
    {appsetting.map((set)=>{
      return (
  // <div className="wholepage">
  <div >
  
  
  {/* <div className="wholepage"> */}
    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Android Version</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.androidversion}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Cloud</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.cloud}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Email</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.email}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Email Password</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.emailpassword}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">IOS Version</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.iosversion}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Massage Reminder Message</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.massagereminder}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Min Android Version</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.minandroidversion} />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Min IOS Version</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.miniosversion}  />
      </div>
    </div>


    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Morning Reminder Message</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.morningremindermessage}  />
      </div>
    </div>


    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Pass For API</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.passforapi}/>
      </div>
    </div>


    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Paypal</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.paypal}  />
      </div>
    </div>


    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Paypal Client_Id</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.paypalclientid}  />
      </div>
    </div>


    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Paypal Client Secret</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.paypalclientsecret}  />
      </div>
    </div>


    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Public ID</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.publicid}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Robokassa</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.robokassa}  />
      </div>
    </div>

    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Stripe</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.stripe}  />
      </div>
    </div>
    <div className="block">
      <div className="blocknamearea">
        <div className="blockname">Subscription Key</div>
      </div>
      <div className="block-type-area">
        <input className="inputbox" type="text" value={set.subscriptionkey}  />
      </div>
    </div>

    <div className="editorareaappsetting">
                  <FroalaEditor
                    ref={editorRef}
                    model={content}
                    onModelChange={handleModelChange}
                  value={set.termcondition}
                    // onChange={(e) => setTermcondition(e.target.value)}
                  />
                </div>

  </div>
 
  
  
);
    })}
    <div className="buttonappsetting">
                <button className="back" onClick={handleSubmit}>
            Submit
          </button>
          </div>
  </div>
  </div>
)


};

export default AppSetting;
