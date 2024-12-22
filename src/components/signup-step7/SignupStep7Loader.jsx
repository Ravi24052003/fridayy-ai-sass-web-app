import { Typography, Box } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

const SignupStep7Loader = () => {
  return (
    <>
    <div style={{background: 'linear-gradient(to bottom, #f9e6a8, white 50%, #aefeec)', minHeight: "100vh"}} >
    <Typography sx={{color: "#299585", textAlign: "center", fontSize: "24px", fontWeight: 500, py: "30px"}} >Catalogs</Typography>

    <Typography sx={{textAlign: "center", fontSize: "24px", fontWeight: 500, mt: "30px", width: "70%", mx: "auto"}} >Generating Catalogs based on your inputs.</Typography>


    {/* loader stats here  */}

    {/* loader ends here  */}

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

export default SignupStep7Loader
