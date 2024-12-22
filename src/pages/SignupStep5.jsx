import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import userName from "../assets/user-name.png";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

const SignupStep5 = (props) => {

    const [addressLine1ReqErr, setAddressLine1ReqErr] = useState("");
    const [addressLine2ReqErr, setAddressLine2ReqErr] = useState("");

    const [phoneNumberReqErr, setPhoneNumberReqErr] = useState("");
   


    const handleSubmit = (e)=>{
      e.preventDefault()

      console.log("this is e singupstep5 ",e);
      setAddressLine1ReqErr("");
      setAddressLine2ReqErr("");

      setPhoneNumberReqErr("");
     
      console.log("this is whats number",e.target[4].value);
  
     if(!e.target[0].value || !e.target[2].value || !e.target[4].value){
      if(!e.target[0].value){
        setAddressLine1ReqErr("Company's address line 1 is required");
      }

      if(!e.target[2].value){
        setAddressLine2ReqErr("Company's address line 2 is required");
      }

      if(!e.target[4].value){
        setPhoneNumberReqErr("Phone number is required");
      }

      return;
     }


    props.setStoreInputData((preVal)=> ({...preVal, storeAddressLine1: e.target[0].value, storeAddressLine2: e.target[2].value, phoneNumber: e.target[4].value, whatsappNumber: e.target[6].value, signupStep: 6 }));
    }




  return (
    <>
   <div style={{ overflowX: "hidden"}} className='pb-[100px]' >
        <Box sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)', display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "relative" }} >
          <Box sx={{
            background: 'linear-gradient(180deg, #299585, #2EA993)', color: "white", width: "40px", height: "40px", fontSize: "25px", fontWeight: "bold", textTransform: "none", my: "10px", ml: "20px", borderRadius: "50%", display: 'flex',
            justifyContent: 'center'  // Horizontally center
          }}>&larr;</Box>
          <Typography sx={{
            fontSize: "24px", color: "#299585", position: "absolute", right: '50%',
            transform: 'translate(50%, 0%)',
          }} >Details</Typography>
        </Box>


        {/* three dots starts here */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%', // Ensure full width
            mt: "20px", // Top margin
          }}
        >
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#AEFEEC',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#299585',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#AEFEEC',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
        </Box>
        {/* three dots ends here  */}
 
        <Typography sx={{textAlign: "center", mt: "10px"}} >Help us understand your business better.</Typography>

        
        <Typography sx={{textAlign: "center", mt: "20px", fontSize: "25px", color: "#299585"}} >Enter the following details of your company.</Typography>
         {/* image Box starts here  */}
       
        {/* image box ends here  */}


       {/* form starts here  */}
        <Box
          className=' flex flex-col items-center mt-[50px]'
          onSubmit={handleSubmit}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <div className=' flex flex-col items-center'>

            {/* single TextField and its label starts here  */}
            <div>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Company Address Line 1</Typography>
              <TextField
                id="address1"
                required
                variant="outlined"
                name='address1'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Company's Address Line 1"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'>{addressLine1ReqErr}</p>
            </div>
            {/* single TextField and its label ends here  */}



             {/* single TextField and its label starts here  */}
             <div className=' mt-5'>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Company Address Line 2</Typography>
              <TextField
                id="address2"
                required
                variant="outlined"
                name='address2'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Company's Address Line 2"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'>{addressLine2ReqErr}</p>
            </div>
            {/* single TextField and its label ends here  */}


             {/* single TextField and its label starts here  */}
             <div className=' my-5'>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Your phone Contact</Typography>
              <TextField
                id="phone"
                required
                variant="outlined"
                name='phone'
                type='number'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Phone Number"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'>{phoneNumberReqErr}</p>
            </div>
            {/* single TextField and its label ends here  */}


             {/* single TextField and its label starts here  */}
             <div>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Your Whatsapp Contact</Typography>
              <TextField
                id="whatsapp"
                required
                variant="outlined"
                name='whatsapp'
                type='number'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Whatsapp Number"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'></p>
            </div>
            {/* single TextField and its label ends here  */}

           <div className=' mt-20 mb-4'>
            <Typography className=' w-[85vw] md:w-[380px]' >You can always change your company Name in <span className=' text-[#299585] font-semibold'>Settings</span>  </Typography>
            </div>


            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
            <Button
              type="submit"
              className=' w-[70vw] md:w-[300px]'
              sx={{
                background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)",
                color: "black",
                fontWeight: 'bold',
                // width: "100%",
                paddingY: "8px",
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: "20px"
              }}
            >
              Submit
            </Button>
          </Box>

          </div>

        

        </Box>
         {/* form ends here  */}


        {/* footer starts here  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            pb: "30px",
            pt: "10px",
            boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
            position: 'fixed',
            bottom: 0,
            zIndex: 1000, // Ensure higher z-index
            backgroundColor: 'white', // Ensure background color to avoid transparency issues
          }}
        >
          <HomeIcon sx={{ fontSize: "35px" }} />
          <AccountCircleIcon sx={{ fontSize: "35px", color: "white", bgcolor: "black", borderRadius: "50%" }} />
          <MenuBookIcon sx={{ fontSize: "35px" }} />
          <SettingsIcon sx={{ fontSize: "35px" }} />
        </Box>

      </div>
    </>
  )
}

export default SignupStep5
