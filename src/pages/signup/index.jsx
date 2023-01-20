import React, { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import { useAuth } from "../../contexts/AuthContext";

import logo from "../../assets/logo192.png"

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
        <div className="w-[95%] mx-auto flex flex-row justify-between items-center mt-5">
          <p className="text-[#dcdedf] text-[15px] cursor-pointer"><i className="fa-solid fa-chevron-left text-[#dcdedf] mr-5"></i> Back  To  Store</p>
          <div className="flex flex-row justify-evenly items-center w-[20%]">
            <p className="text-[#dcdedf] text-lg cursor-pointer">Not A Member?</p>
            <p className="text-[#dcdedf] text-lg font-semibold border-[#dcdedf] border-2 px-5 py-2 rounded cursor-pointer">Sign Up</p>
          </div>
        </div>

        <img src={logo} alt="" height={"150"} width={"150"} className="mx-auto mt-20 mb-20" />
        <div className="border-t border-[#698184] w-[350px] pt-4 pl-5 mx-auto">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Email Address</p>
          <input type="text" className=" bg-transparent text-[#dcdedf] font-semibold tracking-widest mt-4" value={"test@test.com"} />
        </div>
        <div className="border-t border-[#698184] w-[350px] pt-4 pl-5 mx-auto mt-5">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Password</p>
          <input type="password" className=" bg-transparent text-[#dcdedf] font-semibold tracking-widest mt-4" value={"test@test.com"} />
        </div>
        <p className="bg-[#a7b7b8] text-[rgba(40,56,60,1)] w-min mx-auto font-semibold px-36 py-4 rounded mt-5">Login</p>
        
      </div>
    </>


  );
}
