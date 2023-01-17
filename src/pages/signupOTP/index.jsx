import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import { confirmSignUp } from "../../functions/auth";

export default function SignUpOTP (props) {
  const navigate = useNavigate()
  const [otp, setOtp] = useState()
  
  async function handleSubmit(){
    
  }

  return (
    <>
    <div className={styles.body}>
      <input type="text" 
      value={otp}
      onChange={setOtp}
      />
      
      <button>Verify</button>
    </div>
    </>
  );
}
