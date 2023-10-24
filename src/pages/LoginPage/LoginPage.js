import React, { useRef, useState } from 'react'
import loginFormImage from "../../assets/images/loginImage.png";
import LoginPageNavBar from '../../components/navbars/LoginPageNavbar';
import ReCAPTCHA from "react-google-recaptcha";
import { axiosInstance } from '../../axiosInstance/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';

const LoginPage = () => {
  const [valid,setValid] = useState(true);
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const { setToken } = useAuth();

  function onChange(){
    setValid(true);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axiosInstance.post("https://api.hackingly.xyz/users/login/", {
        email: email,
        password: password,
      }, {
        withCredentials: true,
      });
      console.log("Success Login");
      setToken(res.data.data.access,res.data.data.refresh);
      if(res.status === 200){
        Navigate('/');
        window.location.reload();
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  }
  return (
    <div>
      <LoginPageNavBar />
      <div className='h-[650px] w-screen bg-primary flex justify-center items-center'>
        <div className='w-3/4 h-3/4 flex justify-between items-center flex-row shadow-2xl rounded-lg'>
          <div className='flex justify-center align-middle w-2/4'>
            <img className='w-3/4 align-middle' src={loginFormImage} />
          </div>
          <div className='w-2/4 h-2/4 mt-[-10%] flex flex-col text-center'>
            <div className='w-1/2 flex justify-center align-middle '><h1 className='text-3xl font-bold mx-screen text-black'>Sign In</h1></div>
            <br />
            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
              <input className="w-3/5 px-3 py-2 mt-1 mb-1 text-black placeholder-black  bg-input  border border-blue-600 rounded-lg outline-none ring-2 ring-blue-900 border-transparent" type="email" placeholder="Email"  onChange={(event) => { setEmail(event.target.value) }}></input>
              <input type="password" className='w-3/5 px-3 py-2 mt-1 text-black placeholder-black  bg-input  border border-blue-600 rounded-lg outline-none ring-2 ring-blue-900 border-transparent' placeholder="Password" onChange={(event) => { setPassword(event.target.value) }}/>
              <br />
              <ReCAPTCHA
                sitekey= '{process.env.SITEKEY}'
                onChange={onChange}
              />
              <br />
              {!valid ? <button className="h-12 w-3/5 px-4 py-2 font-medium text-white bg-secondary rounded-lg opacity-50 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 ring-opacity-50 pointer-events-none" type="submit">Log In</button> 
                : 
              <button className="h-12 w-3/5 px-4 py-2 font-medium text-white bg-secondary rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Log In</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
