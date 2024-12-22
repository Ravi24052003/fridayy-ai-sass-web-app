import { Box, Input, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import mobileNoAndOtp from "../../assets/mobile-no-and-otp.png";
import GoogleSignIn from '../GoogleSignIn';

const MobileRegistration = (props) => {
  const [mobileNumReqErr, setMobileNumReqErr] = useState("");


   const handleNavigateToPreviousStep = function(){
    props.setIsMobileRegistration(false)
   }  

    const handleSubmit = function(e){
      e.preventDefault();

setMobileNumReqErr("");

     console.log("e.target.value mobileRegistration.jsx", e.target[0].value);

     if(!e.target[0].value){
      setMobileNumReqErr("Please enter your mobile number");

      return;
     }

props.setMobileRegistrationStep(2)

    }
    
  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center" }} >
          <Box onClick={handleNavigateToPreviousStep} sx={{
            background: 'linear-gradient(180deg, #299585, #2EA993)', color: "white", width: "40px", height: "40px", fontSize: "25px", fontWeight: "bold", textTransform: "none", my: "10px", ml: "20px", borderRadius: "50%", display: 'flex',
            justifyContent: 'center'  // Horizontally center
          }}>&larr;</Box>
         
        </Box>


        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}} >
        <img src={mobileNoAndOtp} alt="" />
       <Typography sx={{textAlign: "center", width: "80%", fontSize: "26px", fontWeight: "bold", color: "#299585", my: "20px"}} >Mobile Registration</Typography>
       <Typography sx={{textAlign: "center", width: "80%"}} >Enter your Mobile Number, we will send you OTP for verification.</Typography>
        </Box>


        {/* form starts here  */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "50px" }}>

<Input
  id="mobileNumber"
  placeholder='Enter your Mobile Number'
  name="mobileNumber"
  type="number"
  sx={{
    border: "1px solid black", borderRadius: "12px", width: "320px" , py: "5px", 

    '&&:before': {
    borderBottom: 'none',
  },

  '&&:after': {
    borderBottom: 'none',
  },

}}

startAdornment={
<InputAdornment position="start" sx={{mx: "10px"}}>
<PhoneAndroidIcon />

</InputAdornment>
}
/>
<Typography sx={{width: "320px", color: "red", textAlign: "start"}} >{mobileNumReqErr}</Typography>

<div className=' flex justify-center my-4'>
  <button
    type="submit"
    className=" bg-gradient-to-r  from-[#299585] to-[#4FC6B0] text-white font-bold py-3 px-8 rounded-3xl"
  >
    Send OTP
  </button>
  </div>


</Box>
{/* form ends here  */}

<div className="flex items-center justify-center w-[70%] mx-auto mt-5 mb-7">
        <div className="flex-grow h-px bg-gray-800"></div>
        <span className="px-4 text-gray-800">Or</span>
        <div className="flex-grow h-px bg-gray-800"></div>
      </div>

      <GoogleSignIn />
    </>
  )
}

export default MobileRegistration
