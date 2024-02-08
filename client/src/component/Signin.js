import "./Signin.css";
import logo from "../image/logo.png"
import React from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom";

const Signin = () => {

    const history = useHistory();
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();

        
    };

    const validate = () => {
        if (username ==='aanch' && password === "aanch"){
    
          history.push("/Verify");
          
          
        } else if (username === ""){
          alert("Username is required!");
    
        } else if (password === ""){
          alert("Password is required!");
        } else {
          alert("Wrong credentials!!")
        }
    };
    
    return (
        <div className="main">
            <div>
                <div>
                    <h1 >
                        <img src={logo} alt="logo" className="profile"/>
                    </h1>
                </div>
                <h3 className='txt-clr'>̀Welcome to Aadhaar Verfification</h3>
                <form onSubmit={handleSubmit}>
                    <div className="ui form">
                        <div className="field">
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                autoComplete='off' 
                                placeholder="Username"
                                className="name"
                                value={username}
                                onChange = { (e) => setUsername(e.target.value)}
                            />
                        </div>
                    {/* <p>{errors.username}</p> */}
                    <div className="second-input">
                        <input type="password" 
                            id="password" 
                            placeholder="Password" 
                            className="name"
                            value={password}
                            onChange = { (e) => setPassword(e.target.value)}
                            
                        />
                    </div>
                    <br></br><br></br>
                        {/* <p>{errors.password}</p> */}
                    <div className="second-input">
                        <button className='btn-primary'>Submit</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )

};

export default Signin;