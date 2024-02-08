import "./Signin.css";
import logo from "../image/logo.png"
import React from "react";
import firebase from "./firebase";
import { useState } from "react";
import {useHistory} from "react-router-dom";

const Verify = () => {

    const [aahno , setAahNo] = useState("");

    const history = useHistory();
  
    
    const configureCaptcha = () =>{
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptcha verified")
        },
        defaultCountry: "IN"
      });
    }
  
    const onSignInSubmit = (e) => {
      e.preventDefault();
      const number = {aadhaar_no:aahno};
      var phone = {
            "738253776546": "9158010987",
        "123456789": "7506772831",
            "1234567890": "9820113310",
        "3598105887498": "9967630085",
            "121212121212": "9967678746"

        };
        
      configureCaptcha();
      console.log(aahno);
      const phoneNumber = "+91" + phone[number.aadhaar_no];
      console.log(phoneNumber);
      const appVerifier = window.recaptchaVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent");
            const code = window.prompt("Enter OTP");
            confirmationResult.confirm(code).then((result) => {
                  // User signed in successfully.
                  const user = result.user;
                  console.log(JSON.stringify(user))
                  alert("User is verified");
                  history.push("/Home");
                  // ...
                }).catch((error) => {
                  // User couldn't sign in (bad verification code?)
                  // ...
                });
            // ...
          }).catch((error) => {
            // Error; SMS not sent
            // ...
            console.log("SMS not sent")
          });
    }
  
  
  
     return (
      <div className="main">
          <div className='container'>
             <div className='field'>
                 <h1 > <img src={logo} alt="logo" className="profile"/> </h1>
             </div>
               <h3 className='txt-clr'>Verify Aadhaar</h3>
             <form onSubmit={onSignInSubmit}>
              <div id="sign-in-button"></div>
             <div className='field'>
               <div>
                 <input 
                   type="text"
                   placeholder="Enter Aadhaar No." 
                   autoComplete="off" 
                   className="name"
                   value={aahno}
                   onChange = { (e) => setAahNo(e.target.value)}
                 />
               </div>
               <div className="login-button">
                 <button className='btn-primary'>Get OTP</button>
               </div>
            </div>
           </form>
        </div>
        
      </div>
      
     );
   }
  
   export default Verify;