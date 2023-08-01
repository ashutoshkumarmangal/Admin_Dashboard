import React,{ useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
//import Axios from 'axios';

const SignUp =()=>{
    const [name,setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(""); 
    
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('loginuser');
        if(auth){
            navigate('/')
        }
      
    },[])

    const collectData=async()=>{
        console.warn(name,email, password)
        let result = await fetch('http://localhost:8080/register',{
            method:'POST',
            body: JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json()

        // console.warn(await result.json)
        localStorage.setItem("loginuser",JSON.stringify(result))

        //if the signup process is done then redirect to particular page using here
            navigate('/login')
        
    }
    return(
      <div className="wholeareadashboard">
  <div className="wholeareaappsetting">
        
            <h1>Register</h1>
            <input className="inputBox" type="text"
            value={name} 
            onChange={(e)=>setName(e.target.value)}placeholder="Enter Name" />

            <input className="inputBox" type="text"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />

            <input className="inputBox" type="password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}placeholder="Enter Password" />
            
            <button onClick={collectData} className="buttonClass" type="button">Sign Up</button>
        </div>
        </div>
    )
}

export default SignUp;