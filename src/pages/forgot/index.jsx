import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function SignUp (props) {
  const navigate = useNavigate()
  const [phone, setPhone] = useState()
  return (
    <>
    <div className={styles.body}>
      <input type="email" />
      
      <button>Reset Password</button>
    </div>
    </>
  );
}
