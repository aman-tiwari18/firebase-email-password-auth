import React from "react";
import { useState } from "react";
import {auth}  from "../firebase";
import { useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
// import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';


function  Login(){
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");
    const navigate = useNavigate();
    const SignIn = ()=>{
        signInWithEmailAndPassword(auth,email,passowrd)
        .then(auth=>{navigate('/Home')})
        .catch(error=>console.error(error))
    }

    const register = ()=>{
        createUserWithEmailAndPassword(auth,email,passowrd)
        .then(auth=>{navigate('/Home')})
        .catch(error=>console.error(error))
    }

    return (
        
        <div id = "login-page">
            
            <div id = "login-card">
            <form>
                <label>
                    Email:
                    <input onChange = {(event)=>setEmail(event.target.value)}  className = "login-button"  type="email" name="email" />
                </label>
                <br/>
                <br/>
                <label>
                    Password:
                    <input onChange = {(event)=>setPassword(event.target.value)}   className = "login-button" type="password" name="password" />
                </label>
            {/* <input type="submit" value="Submit" /> */}
            </form>
            <br/>
            <br/>
            
            {/* <label>Email</label>
            <input   onChange = {(event)=>setEmail(event.target.value)}  autoComplete = "off" className = "login-button" type="email" name="email"/>
            <br/>
            <br/>
            <label> Password</label>
            <input  autoComplete = "off"   onChange = {(event)=>setPassword(event.target.value)} className = "login-button" type="password" name="password" /><br/> */}
            
            <button  onClick = {SignIn} className = "button"> Sign in</button>
            <br/>
            <p>if you are not registerd !,,click on register button</p>
            <br/>
            <button  onClick = {register} className = "button">Register</button>
            

       

            </div>
        </div>
        
    )
}

export default Login;