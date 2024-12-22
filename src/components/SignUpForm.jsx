import * as React from 'react';
import axios from 'axios';
import { MainContext } from '../context/MainContext';
import GoogleSignIn from './GoogleSignIn';
import conf from '../../conf/conf';
import Cookies from 'universal-cookie';
import { Box, CircularProgress, Input, InputAdornment, Typography } from '@mui/material';
import loginSignup from "../assets/login-and-signup.png";
import SignupModal from "./signup-form/SignupModal";
import { AccountCircle, Lock } from '@mui/icons-material';
import MobileRegistrationWrapper from './mobile-registration/MobileRegistrationWrapper';

export default function SignUp(props) {
  const { isLogin, setIsLogin } = React.useContext(MainContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const cookies = new Cookies();

  const [emailReqErr, setEmailReqErr] = React.useState('');
  const [passwordReqErr, setPasswordReqErr] = React.useState('');

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isMobileRegistration, setIsMobileRegistration] = React.useState(false);

  const handleCloseModal = () => setIsModalOpen(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailReqErr('');
    setPasswordReqErr('');


    // return;
    console.log("event.target[0].value ->", event.target[0].value);
    console.log("event.target[0].value ->", event.target[1].value);

    const signupDetails = {
      email: event.target[0].value,
      password: event.target[1].value
    };

    if (!event.target[0].value || !event.target[1].value) {
      if (!event.target[0].value) {
        setEmailReqErr('Email is required');
      }
      if (!event.target[1].value) {
        setPasswordReqErr('Password is required');
      }
      return;
    }

    setIsLoading(true);
    axios.post(`${conf.backendBaseUrl}/api/register/`, signupDetails)
      .then((response) => {
        setIsLoading(false);
        cookies.set('token', response.data.token, { path: '/' });
        setIsModalOpen(true);
        // props.setStoreInputData((preVal) => ({ ...preVal, signupStep: 1 }));
      })
      .catch((err) => {
        setIsLoading(false);
        setIsModalOpen(true);
        console.log('registration error ', err);
      });
  };

  const toggleForm = () => {
    props.setIsClickedOnLoginBtn(true);
    props.setIsClickedOnCreateAccountBtn(false);
  };


const handleMobileRegistration = function(){
setIsMobileRegistration(true)
}

  return (
    <>
    {
      isMobileRegistration? 

<MobileRegistrationWrapper setStoreInputData={props.setStoreInputData} setIsMobileRegistration={setIsMobileRegistration} />

      :

     <div>

      {isLoading ? (
        <div className="flex justify-center items-center h-[33vh]">
          <CircularProgress />
        </div>
      )
      
      :


       (

        <div>

        <div className="bg-gradient-to-b from-[#AEFEEC] to-white h-[38vh] flex flex-col justify-end items-center mb-[50px]">
            <img
              src={loginSignup}
              alt="Illustration"
              className=" w-[220px]"
            />

<h1 className="text-2xl font-semibold text-[#299585] mt-3 text-center">Welcome!</h1>
        </div>


        {/* form starts here  */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>

<Input
  id="email"
  placeholder='abc@gmail.com'
  name="email"
  autoComplete="email"
  autoFocus

  sx={{
    border: "1px solid black", borderRadius: "12px", width: "300px" , py: "4px", 

    '&&:before': {
    borderBottom: 'none',
  },

  '&&:after': {
    borderBottom: 'none',
  },

}}

startAdornment={
<InputAdornment position="start" sx={{mx: "10px"}}>
<AccountCircle sx={{color: "white", bgcolor: "black", borderRadius: "50%"}} />

</InputAdornment>
}
/>
<Typography sx={{textAlign: "start", width: "300px", color: "red", mb: "14px"}} >{emailReqErr}</Typography>

<Input
  name="password"
  placeholder='Password'
  type="password"
  id="password"
  autoComplete="current-password"

  sx={{
    border: "1px solid black", borderRadius: "12px", width: "300px", py: "4px", 

    '&&:before': {
    borderBottom: 'none',
  },

  '&&:after': {
    borderBottom: 'none',
  },

}}

  startAdornment={
    <InputAdornment position="start" sx={{mx: "10px"}}>
      <Lock sx={{ color: "white", bgcolor: "black", borderRadius: "50%", border: "0.5px solid white", px: "3px", py: "3px"}} />
    </InputAdornment>
  }
/>
<Typography sx={{textAlign: "start", width: "300px", color: "red", mb: "20px"}} >{passwordReqErr}</Typography>

<div className=' flex justify-center'>
  <button
    type="submit"
    className=" bg-gradient-to-r  from-[#299585] to-[#4FC6B0] text-white font-bold py-2 px-8 rounded-3xl"
  >
    Sign Up
  </button>
  </div>



  <div className="flex items-center justify-center w-[80%] mx-auto my-5">
        <div className="flex-grow h-px bg-gray-800"></div>
        <span className="px-4 text-gray-800">Or Sign Up With</span>
        <div className="flex-grow h-px bg-gray-800"></div>
      </div>

</Box>
{/* form ends here  */}


            <div className=' flex justify-center'>
            <button onClick={handleMobileRegistration} className=" w-[260px] py-3 rounded-3xl font-semibold mb-3" style={{background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)"}}>
              Mobile Number
            </button>
            </div>


            <GoogleSignIn />
            <div className="flex flex-col items-center gap-4 mb-4 mt-4">

              <span className="text-gray-700">
                {props.isClickedOnCreateAccountBtn ? "Already have an account? " : "Don't have an account? "}
                <span
                  className="underline cursor-pointer text-[#299585]"
                  onClick={toggleForm}
                >
                  {props.isClickedOnCreateAccountBtn ? 'Login' : 'Sign Up'}
                </span>
              </span>

            </div>
          
       
            <SignupModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} setStoreInputData={props.setStoreInputData} />

        </div>
      )}

</div>

}
    </>
  );
}
