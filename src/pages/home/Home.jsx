import React, { useState } from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { Auth, Hub } from 'aws-amplify';
import { useAuth } from "../../contexts/AuthContext";


export default function Home (props) {
  const navigate = useNavigate()
  const [phone, setPhone] = useState()
  const [otp, setOtp] = useState()

  const {currentUser} = useAuth()

  async function handleSubmit() {
    try {
      const result = await Auth.updateUserAttributes(currentUser, {
        phone_number: phone
      });
      console.log(result)
    } catch (err) {
      console.log(err)
    }
  }

  async function verifyOTP() {
    await Auth.verifyCurrentUserAttributeSubmit('phone_number', otp)
      .then(() => {
        console.log('email verified');
      })
      .catch((e) => {
        console.log('failed with error', e);
      });
  }

  return (
    <>
    <div className={styles.home}>
      <div className={styles.homecontent}>
        <p>Homepage - {currentUser.attributes.email}</p>
        <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              />
               <button onClick={()=>handleSubmit()}>Send</button>
               <input type="text"
            placeholder="Enter OTP"
              value={otp}
              onChange={(e)=>setOtp(e.target.value)}
            />

            <button onClick={()=>verifyOTP()}>Verify</button>
      </div>
    </div>
    </>
  );
}
