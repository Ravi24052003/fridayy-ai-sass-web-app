import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import userName from "../assets/user-name.png";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

const SignupStep1 = (props) => {
 

  const [NameReqErr, setNameReqErr] = useState("");

  const handleSubmit = (e) => {
    setNameReqErr("");
    e.preventDefault();

    if (!e.target[0].value) {
        setNameReqErr("Name is required");

      return;
    }

    console.log("e.target[0].value", e.target[0].value);
    console.log("e.target[2].value", e.target[2].value);

    props.setStoreInputData((preVal) => ({
      ...preVal,
      firstName: e.target[0].value,
      lastName: e.target[2].value,
      signupStep: 2
    }));

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
          }} >User Details</Typography>
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


         {/* image Box starts here  */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: "25px" }} >
          <img src={userName} alt="" />
        </Box>
        {/* image box ends here  */}


       {/* form starts here  */}
        <Box
          className=' flex flex-col items-center'
          onSubmit={handleSubmit}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className=' flex flex-col items-center'>
            <div className=' mb-3'>
              <h1 className=' text-[24px] text-[#299585]'>First Name</h1>
              <TextField
                id="firstName"
                required
                variant="outlined"
                name='firstName'
                className='w-[300px] md:w-[350px]'
                placeholder='Enter Your First Name'
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'>{NameReqErr}</p>
            </div>

            <div>
              <h1 className=' text-[24px] text-[#299585]'>Last Name</h1>
              <TextField
                id="lastName"
                required
                variant="outlined"
                name='lastName'
                className='w-[300px] md:w-[350px]'
                placeholder='Enter Your Last Name'
                style={{ backgroundColor: '#E1E1E1' }}
              />
            </div>

            <Box sx={{ width: "100vw", display: "flex", flexDirection: "row", justifyContent: "center", mt: "20px" }} >
              <Typography sx={{ width: "300px" }} >You can always change your company Name in <span className=' text-[#299585] font-semibold'>Settings</span>  </Typography>
            </Box>
          </div>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              sx={{
                background: 'linear-gradient(to right, #299585, #4FC6B0)',
                color: 'white',
                fontWeight: 'bold',
                paddingY: "8px",
                paddingX: "50px",
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: "20px",
                mt: "80px"
              }}
            >
              Next
            </Button>
          </Box>

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

export default SignupStep1;
