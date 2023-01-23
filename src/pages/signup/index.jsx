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
        <div className="min-[420px]:w-[95%] mx-auto flex flex-row justify-between items-center small:mt-5 little:mb-0 -mb-8">
          <p className="text-[#dcdedf] text-[15px] cursor-pointer min-[420px]:scale-100 scale-75 min-[420px]:ml-0 -ml-3"><i className="fa-solid fa-chevron-left text-[#dcdedf] min-[500px]:mr-5 mr-1"></i> Back  To  Store</p>
          <div className="flex flex-row justify-evenly items-center xl:w-[20%] md:w-[35%] min-[500px]:w-[50%] min-[500px]:gap-0 gap-5 min-[420px]:scale-100 scale-[65%] min-[420px]:mr-0 -mr-10">
            <p className="text-[#dcdedf] text-lg cursor-pointer">Already A Member?</p>
            <p className="text-[#dcdedf] text-lg font-semibold border-[#dcdedf] border-2 px-5 py-2 rounded cursor-pointer" onClick={()=>{navigate("/login")}}>Login</p>
          </div>
        </div>
        <img src={logo} alt="" height={"150"} width={"150"} className="mx-auto tall:mt-20 short:mb-20 tiny:mb-0 -mb-5 min-[360px]:scale-100 scale-[60%]" />
        <div className="border-t border-[#698184] min-[360px]:w-[350px] w-[200px] tiny:pt-4 pl-5 mx-auto">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Email Address</p>
          <input placeholder="example@test.com" type="text" className=" bg-transparent placeholder:opacity-[0.5] text-[#dcdedf] font-semibold tracking-widest mt-4" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="border-t border-[#698184] min-[360px]:w-[350px] w-[200px] tiny:pt-4 pt-1 pl-5 mx-auto">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Password</p>
          <input placeholder="********" type="password" className=" bg-transparent placeholder:opacity-[0.5] text-[#dcdedf] font-semibold tracking-widest mt-4" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
        </div>
         <div className="border-t border-[#698184] min-[360px]:w-[350px] w-[200px] tiny:pt-4 pt-1 pl-5 mx-auto">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Confirm Password</p>
          <input placeholder="********" type="password" className=" bg-transparent placeholder:opacity-[0.5] text-[#dcdedf] font-semibold tracking-widest mt-4" value={passConfirm} onChange={(e)=>{setPassConfirm(e.target.value)}} />
        </div>
         <div className="border-t border-[#698184] min-[360px]:w-[350px] w-[200px] tiny:pt-4 pt-1 pl-5 mx-auto">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Name</p>
          <input placeholder='John Doe' type="text" className=" bg-transparent placeholder:opacity-[0.5] text-[#dcdedf] font-semibold tracking-widest mt-4" value={name} onChange={(e)=>{setName(e.target.value)}} />
        </div>
         <div className="border-t border-[#698184] min-[360px]:w-[350px] w-[200px] tiny:pt-4 pt-1 pl-5 mx-auto">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Username</p>
          <input placeholder="@Doe1234" type="text" className=" bg-transparent placeholder:opacity-[0.5] text-[#dcdedf] font-semibold tracking-widest mt-4" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        </div>
         <div className="border-t border-[#698184] min-[360px]:w-[350px] w-[200px] tiny:pt-4 pt-1 pl-5 mx-auto">
          <p className="uppercase text-[#698184] text-[13px] font-semibold tracking-widest">Phone</p>
          <input placeholder="+91 9458684784" type="text" className=" bg-transparent placeholder:opacity-[0.5] text-[#dcdedf] font-semibold tracking-widest mt-4" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />
        </div>
        <p className="bg-[#a7b7b8] text-[rgba(40,56,60,1)] w-min mx-auto font-semibold min-[360px]:px-36 px-20 tiny:py-4 py-2 rounded mt-5 cursor-pointer">SignUp</p> 
      </div>
    </>


  );
}
