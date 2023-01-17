import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useAuth } from "../../contexts/AuthContext";

export default function SignUp(props) {
  const {signup, confirmSignUp} = useAuth()
  const navigate = useNavigate()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [passConfirm, setPassConfirm] = useState()
  const [username, setUsername] = useState()
  const [name, setName] = useState()
  const [toggle, setToggle] = useState(false)
  const [otp, setOtp] = useState()

  async function verifyOTP() {
    try {
      const res = await confirmSignUp(phone, otp)
      console.log(res)
      if(res === 'SUCCESS'){
        navigate("/")
      }
    } catch (err) {
      console.log(err)
    }
  }

  async function handleSubmit() {
    try {
      if (pass === passConfirm) {
        console.log(phone,email, pass, name)
        const res = await signup(phone, email, pass, name)
        if(res.status){
        setToggle(true)
        }

      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className={styles.body}>
        {
          !toggle &&
          <>
            <input type="text"
            placeholder="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <input type="email"
            placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="password"
            placeholder="Password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
            />
            <input type="password"
            placeholder="Confirm Password"
              value={passConfirm}
              onChange={(e)=>setPassConfirm(e.target.value)}
            />
            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              />
            <button onClick={()=>handleSubmit()}>Create Account</button></>
        }

        {
          toggle &&
          <>
            <input type="text"
            placeholder="Enter OTP"
              value={otp}
              onChange={(e)=>setOtp(e.target.value)}
            />

            <button onClick={()=>verifyOTP()}>Verify</button>
          </>
        }
      </div>
    </>


  );
}
