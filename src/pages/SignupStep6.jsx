import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import socialId from "../assets/social-id.png";

const SignupStep6 = (props) => {
   

   const handleSkip = function(){
    props.setStoreInputData((preVal)=> ({...preVal, signupStep: 7}))
   }


    const handleSubmit = (e)=>{
      e.preventDefault()

      console.log(e);
      console.log("this is e singupstep5 ", e.target[0].value);

    props.setStoreInputData((preVal)=> ({...preVal, instagram_id: e.target[0].value,  signupStep: 7 }));
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
        </Box>
        {/* three dots ends here  */}

         {/* image Box starts here  */}
       <Box sx={{ display: "flex", justifyContent: "center", mt: "25px" }} >
          <img src={socialId} alt="" />
        </Box>
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
              <Typography sx={{fontSize: "22px", color: "#299585", fontWeight: "bold", textAlign: "center", mb: "15px"}} >Enter your Instagram ID</Typography>
              <TextField
                id="insta"
                required
                variant="outlined"
                name='insta'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Social ID"
                style={{ backgroundColor: '#E1E1E1' }}
              />
            </div>
            {/* single TextField and its label ends here  */}


             {/* single TextField and its label starts here  */}
            
            {/* single TextField and its label ends here  */}


             {/* single TextField and its label starts here  */}
          
            {/* single TextField and its label ends here  */}

            <Box sx={{ width: "100vw", display: "flex", flexDirection: "row", justifyContent: "center", mt: "18px", mb: "40px" }} >
              <Typography sx={{ width: "300px" }} >You can always change your company Name in <span className=' text-[#299585] font-semibold'>Settings</span>  </Typography>
            </Box>
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'center' }} >
            <Button
              type="submit"
              sx={{
                background: 'linear-gradient(to right, #299585, #4FC6B0)',
                color: "white",
                fontWeight: 'bold',
                paddingX: "50px",
                paddingY: "8px",
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: "20px"
              }}
            >
              Next
            </Button>
          </Box>

         <Typography onClick={handleSkip} className=' font-semibold text-center text-[#299585] underline' sx={{fontSize: "20px"}} >Skip</Typography>

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

export default SignupStep6
