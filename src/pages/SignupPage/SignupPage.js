import React, { useRef, useState } from 'react'
import registerFormImage from "../../assets/images/registerImage.png";
import RegisterPageNavBar from '../../components/navbars/RegisterPageNavbar';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import OtpPopUp from './OtpPopUp';
import axios from 'axios';
import { axiosInstance } from '../../axiosInstance/axiosInstance';


const SignupPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <RegisterPageNavBar />
      <div className='h-[650px] w-screen bg-primary flex justify-center items-center'>
        <div className='w-3/4 h-3/4 flex justify-between items-center flex-row shadow-2xl rounded-lg'>
          <div className='flex justify-center align-middle w-2/4'>
            <img className='w-3/4 align-middle' src={registerFormImage} />
          </div>
          <div className='w-2/4 mt-[-15%] h-2/4 flex flex-col text-center'>
            <div className='w-1/2 flex justify-center align-middle '><h1 className='text-3xl font-bold mx-screen text-black'>Sign Up</h1></div>
            <br />
            <form className='flex flex-col justify-center' onSubmit={async (event) => {
              event.preventDefault();
              togglePopup();
              try {
                const res = await axiosInstance.post("https://api.hackingly.xyz/users/register/", {
                  username: username,
                  email: email,
                  password: password,
                }, {
                  withCredentials: true,
                });
                console.log("Success", res);
              } catch (error) {
                console.log("An error occurred:", error);
              }
              setIsPopupOpen(true);
            }}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }} >
                <input type="text" className='w-2/6 px-3 py-2 mt-1 mb-1 text-black placeholder-black bg-input border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 border-transparent' placeholder="First Name" onChange={(event) => setFirstName(event.target.value)} />
                <input type="text" className='w-2/6 px-3 py-2 mt-1 mb-1 text-black placeholder-black bg-input border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 border-transparent' placeholder="Last Name" onChange={(event) => setLastName(event.target.value)} />
              </div>
              <input type="text" className='w-2/3 px-3 py-2 mt-2 mb-1 text-black placeholder-black bg-input border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 border-transparent' placeholder="User name" onChange={(event) => setUsername(event.target.value)} />
              <input type="text" className='w-2/3 px-3 py-2 mt-2 mb-1 text-black placeholder-black bg-input border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 border-transparent' placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
              <input type="password" className='w-2/3 px-3 py-2 mt-2 mb-1 text-black placeholder-black bg-input border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 border-transparent' placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
              <input type="password" className='w-2/3 px-3 py-2 mt-2 mb-1 text-black placeholder-black bg-input border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 border-transparent' placeholder="Confirm Password" />
              <input type="password" className='w-2/3 px-3 py-2 mt-2 mb-1 text-black placeholder-black bg-input border border-blue-600 rounded-lg focus:outline-none ring-2 ring-blue-900 border-transparent' placeholder="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} />
              <button className="w-2/3 mt-2 px-4 py-2 font-medium text-white bg-[#5161e9] rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" type="submit">Sign Up</button>
              {/* <PrimaryButton size={'xl'} content={'SignUp'} margin={'mt-[4px]'} isValid={false} /> */}
              <OtpPopUp isOpen={isPopupOpen} togglePopup={togglePopup} email={email} username={username} name={firstName + lastName} password={password} phoneNumber={phone_number} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
