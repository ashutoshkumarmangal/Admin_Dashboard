import React from "react";
import { useNavigate } from "react-router-dom";

const Login =()=>{
     const [email,setEmail]=React.useState('');
     const[password, setPassword] = React.useState('');
     const navigate = useNavigate();
     const handleLogin=async ()=>{
        console.warn("email,password" ,email,password)
        let result = await fetch('http://localhost:8080/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }

            });
            result = await result.json();
            console.warn(result)
            if(result.name){
                localStorage.setItem("loginuser",JSON.stringify(result));
                navigate("/adminuser")

            }else{
               navigate("/register")
            }
        
     }
    

    return(
      <div className="wholeareadashboard">
      <div className="wholeareaappsetting">
        <h1>Login</h1>
        <input type="text" className="inputBox" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>

        <input type="password" className="inputBox" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>

        <button onClick ={handleLogin}className="appButton" type="button">Login</button>
            
        </div>
        </div>
    )
}

export default Login;