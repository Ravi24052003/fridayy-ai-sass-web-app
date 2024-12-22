import React, { useContext, useState } from 'react'
import { TextField, Box, CircularProgress, Typography, Button } from '@mui/material'
import diversionCreateAccAndLogin from "../assets/diversion-create-acc-and-login.png"
import Simulation from "../assets/Simulation.svg";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

const SignupStep4 = (props) => {

  const handleProductCatalogButtonClick = function(){
   console.log("props.storeInputDataa", props.storeInputData);

    props.setStoreInputData((preVal)=> ({...preVal, signupStep: 5}));
  }

  return (
    <>
    <div className=' bg-gradient-to-b from-[#299585] to-[#59ccb7] ' >
    
   <Box style={{  width: "100%", minHeight: "100vh" }} >

{/* image and its text Box starts here  */}
<Box sx={{display: "flex", flexDirection: "column", alignItems: "center", pt: "60px"}} >
<img src={diversionCreateAccAndLogin} alt="" />
<Typography sx={{width: "85%", color: "white", fontSize: "24px", fontWeight: "bold", textAlign: "center"}} >Choose the kind of service that you require.</Typography>
</Box>
{/* image and its text Box ends here  */}

{/* Three golden button Box starts here  */}
<Box sx={{display: "flex", flexDirection: "column", alignItems: "center", mt: "60px"}} >

{/* <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)", width: "70%", py: "10px", px: "20px", borderRadius: "25px"}} >
<Typography>Virtual Catalog</Typography>
<img src={Simulation} alt="" />
</Box> */}

{/* <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)", width: "70%", py: "10px", px: "20px", borderRadius: "25px", my: "15px"}} >
  <Typography>Background Generator</Typography>
  <CameraAltIcon sx={{fontSize: "30px"}} />
</Box> */}

<Box onClick={handleProductCatalogButtonClick} sx={{display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)", width: "70%", py: "10px", px: "20px", borderRadius: "25px"}} >
<Typography>Product Catalog</Typography>
<MenuBookIcon sx={{fontSize: "30px"}} />
</Box>

</Box>
{/* Three golden button Box ends here  */}


{/* footer box starts here  */}
<Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            pb: "30px",
            pt: "10px",
            boxShadow: '0 -4px 6px rgba(32, 126, 105, 0.5)',
            position: 'fixed',
            bottom: 0,
            zIndex: 1000, 
            backgroundColor: '#207E69'
          }}
        >
          <HomeIcon sx={{ fontSize: "35px", color: "white" }} />
          <AccountCircle sx={{ fontSize: "35px", color: "#207E69", background: "white", borderRadius: "50%" }} />
          <MenuBookIcon sx={{ fontSize: "35px", color: "white" }} />
          <SettingsIcon sx={{ fontSize: "35px", color: "white" }} />
        </Box>
   </Box>


   </div>
    </>
  )
}

export default SignupStep4
