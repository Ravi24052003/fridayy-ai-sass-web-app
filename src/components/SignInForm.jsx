import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import GoogleSignIn from './GoogleSignIn';
import { MainContext } from '../context/MainContext';
import conf from "../../conf/conf.js";
import Cookies from "universal-cookie";
import { CircularProgress, Input, InputAdornment } from '@mui/material';
import loginSignup from "../assets/login-and-signup.png";
import { AccountCircle, Lock } from '@mui/icons-material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {
  const {isLogin, setIsLogin, setLoggedInUserCatalogs} = React.useContext(MainContext)

  const [emailReqErr, setEmailReqErr] = React.useState('');
  const [passwordReqErr, setPasswordReqErr] = React.useState('');

  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();

  const navigate = useNavigate();
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailReqErr('');
    setPasswordReqErr('');

    if (!event.target[0].value || !event.target[1].value) {
      if (!event.target[0].value) {
        setEmailReqErr('Email is required');
      }
      if (!event.target[1].value) {
        setPasswordReqErr('Password is required');
      }
      return;
    }

    setLoading(true);
    
    const data = new FormData(event.currentTarget);

    let email  = data.get('email')
    let password = data.get('password')

    try {
        const response = await axios.post(`${conf.backendBaseUrl}/api/login/`, { email, password });
        console.log("SignInForm auth/login res.data", response.data);

        cookies.set('token', response.data.token, { path: '/' });

        console.log("cookies.get('token')", cookies.get("token"));

        const getUserCatalog = await axios.get(`${conf.backendBaseUrl}/api/user/display_catlogs/`, {
          headers: {
            Authorization: "token "+cookies.get("token")
          }
        });

        console.log("getUserCatalog", getUserCatalog.data);

        setLoggedInUserCatalogs(getUserCatalog.data);

        if(getUserCatalog?.data?.link){
         navigate("/login-display-catalog");
        }
        else{
           navigate("/login-create-catalog");
        }

        setLoading(false);

    } catch (error) {
        console.log("error", error);

    } finally {
      console.log("finally run");
        setLoading(false)
    }

  };

  const toggleForm = () => {
    // setIsLogin(!isLogin);
    props.setIsClickedOnLoginBtn(false);
    props.setIsClickedOnCreateAccountBtn(true);
  };



  return (

    <>
{
  loading? <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', height: "33vh" }}>
  <CircularProgress />
</Box>

:



<div>

<div className="bg-gradient-to-b from-[#AEFEEC] to-white h-[38vh] flex flex-col justify-end items-center mb-[50px]">
            <img
              src={loginSignup}
              alt="Illustration"
              className=" w-[220px]"
            />

<h1 className="text-2xl font-semibold text-[#299585] mt-3 text-center">Welcome Back!</h1>
        </div>


    <ThemeProvider theme={defaultTheme}>

      <Container component="main" maxWidth="xs">

        <CssBaseline />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
       
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
                Log In 
              </button>
              </div>


              <div className="flex items-center justify-center w-[80%] mx-auto mb-5 mt-5">
        <div className="flex-grow h-px bg-gray-800"></div>
        <span className="px-4 text-gray-800">Or Login With</span>
        <div className="flex-grow h-px bg-gray-800"></div>
      </div>

      
          </Box>


        </Box>

      </Container>
    </ThemeProvider>


<div className=' flex flex-col items-center'>

<div className=' flex justify-center'>
            <button className=" w-[260px] py-3 rounded-3xl font-semibold mb-3" style={{background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)"}}>
              Mobile Number
            </button>
            </div>

            <GoogleSignIn />

    <Typography variant="body2" sx={{mt: "20px"}}>
          {props.isClickedOnLoginBtn ? "Don't have an account? " : "Already have an account? "}
          <span style={{ textDecoration: 'underline', cursor: 'pointer', color: "#299585" }} onClick={toggleForm}>
            {props.isClickedOnLoginBtn ? 'Sign Up' : 'Login'}
          </span>
        </Typography>

</div>

</div>

}
    </>
  );
}