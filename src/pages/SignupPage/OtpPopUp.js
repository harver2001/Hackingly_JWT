import React, { useState } from 'react';
import { axiosInstance } from '../../axiosInstance/axiosInstance';
import axios from 'axios';

const OtpPopUp = ({ isOpen, togglePopup, email, username, name, password, phone_number }) => {
  const [otp, setOtp] = useState();
  const [valid, setValid] = useState(false);
  const [error, setError] = useState(false);

  const verifyOtp = async () => {
    setError(false);
    // try {

    //   const OtpResponse = await axiosInstance.post("https://api.hackingly.xyz/users/verify/otp", {
    //     email,
    //     otp
    //   },{
    //     withCredentials: true,
    //   })
    //   console.log("Otp Successfully verified",OtpResponse)
    //   // console.log(res.data);
    //   // console.log(window.location);
    //   // res.data && window.location.replace("/login");
    // } catch (error) {
    //   console.log(error);
    //   setError(true);
    // }
    try {
      const res = await axiosInstance.post("https://api.hackingly.xyz/users/verify/otp/", {
        email: email,
        otp: otp,
      }, {
        withCredentials: true,
      });
      console.log("Success OTP", res);
    } catch (error) {
      console.log("An error occurred:", error);
    }
    // fetch({
    //   method: 'POST',
    //   url: "/users/verify/otp",
    //   data: {
    //     email: email,
    //     otp: otp
    //   },
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   withCredentials: true,
    //   credentials: 'same-origin',
    //   crossdomain: true,
    // })
    //   .then(function (response) {
    //     // const accessToken = response.data.access_token;
    //     // setToken(accessToken);
    //     //The setToken function is present in AuthContext
    //     console.log(response.status);
    //     if(response.status === 200) console.log("OTP Registered")
    //   })
    //   .catch(function (error) {
    //     //In this case too, the most likely error is that the refreshToken has expired, so logout the user and ask them to login again
    //     console.log("Not Registered")
    //     return error.message;
    //   });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-10 rounded-lg w-1/4'>
        <h2 className='text-xl font-bold mb-4'>Verify OTP</h2>
        <label className='block mb-2'>Email:</label>
        <input type='email' value={email} className='border p-2 mb-4 w-full disabled:opacity-50" disabled' />
        <label className='block mb-2'>OTP:</label>
        <input type='text' value={otp} onChange={(e) => setOtp(e.target.value)} className='border p-2 mb-4 w-full' />
        <button onClick={verifyOtp} className='bg-blue-500 text-black px-4 py-2 rounded mr-4'>Verify OTP</button>
        <button onClick={togglePopup} className='bg-red-500 text-black px-4 py-2 rounded'>Close</button>
        {error && <span style={{ color: "red", margin: "10px" }}>"Something went Wrong !!"</span>}
      </div>
    </div>
  );
};

export default OtpPopUp;
