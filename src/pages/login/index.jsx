import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useAuth } from "../../contexts/AuthContext";

export default function Login (props) {
  const navigate = useNavigate()
  const [phone, setPhone] = useState()
  const {login} = useAuth()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  async function handleSubmit() {
    try {

        console.log(email, pass)
        const res = await login(email, pass)
        console.log(res)
        if(res.status){
          navigate("/")
        }

      
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
    <div className={styles.body}>
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
      
      <button onClick={()=>handleSubmit()}>Sign In</button>
    </div>
    </>
  );
}
