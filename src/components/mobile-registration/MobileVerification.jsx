import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import mobileNoAndOtp from "../../assets/mobile-no-and-otp.png";
import MobileRegistrationModal from './MobileRegistrationModal';

const MobileVerification = (props) => {
    const [otp, setOtp] = useState(['', '', '', '']);

  const [otpReqErr, setOtpReqErr] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


   const handleNavigateToPreviousStep = function(){
    props.setIsMobileRegistration(false)
   }  



   const handleChange = (event, index) => {
    setOtpReqErr("");

    const { value } = event.target;
    if (!/^\d*$/.test(value)) return; // Restrict to numeric values

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };



    const handleSubmit = function(e){
      e.preventDefault();

     console.log("e.target.value mobileRegistration.jsx", e);

     if(!e.target[0].value || !e.target[2].value || !e.target[4].value || !e.target[6].value){
      setOtpReqErr("Please enter the 4 digits code");

      return;
     }

     

     setIsModalOpen(true);
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
       <Typography sx={{textAlign: "center", width: "80%", fontSize: "26px", fontWeight: "bold", color: "#299585", mb: "20px", mt: "60px"}} >Verification</Typography>
       <Typography sx={{textAlign: "center", width: "80%"}} >Enter the 4-digit code that was sent to your mobile number.</Typography>
        </Box>


        {/* form starts here  */}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: "50px" }}>

        <Box display="flex" justifyContent="center" alignItems="center">
        {otp.map((data, index) => (
        <TextField
          key={index}
          id={`otp-${index}`}
          value={data}
          onChange={(event) => handleChange(event, index)}
          variant="outlined"
          margin="normal"
          inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: '24px' }, inputMode: 'numeric', pattern: '[0-9]*' }}
          style={{ width: '60px', margin: '0 12px'}}
        />
      ))}
      </Box>

<Typography sx={{width: "320px", color: "red", textAlign: "center", mb: "25px"}} >{otpReqErr}</Typography>


<div className=' flex justify-center my-4'>
  <button
    type="submit"
    className=" bg-gradient-to-r  from-[#299585] to-[#4FC6B0] text-white font-bold py-3 px-8 rounded-3xl"
  >
    Verify
  </button>
  </div>


</Box>
{/* form ends here  */}

<MobileRegistrationModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setStoreInputData={props.setStoreInputData} />
    </>
  )
}

export default MobileVerification
