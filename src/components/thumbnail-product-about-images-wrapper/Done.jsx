import React, { useRef, useState } from 'react';
import Done123 from "../../assets/done-1-2-3.png";

import { Box, Typography, TextField, Button } from '@mui/material';
// import userName from "../assets/user-name.png";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

import {thumbClick} from "./ThumbnailDescFns.js";

const Done = (props) => {

  return (
    <>
      <div style={{ overflowX: "hidden"}} className='pb-[100px]' >
        {/* header Box starts here  */}
        <Box sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)', display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "relative" }} >

          <Box sx={{
            background: 'linear-gradient(180deg, #299585, #2EA993)', color: "white", width: "40px", height: "40px", fontSize: "25px", fontWeight: "bold", textTransform: "none", my: "10px", ml: "20px", borderRadius: "50%", display: 'flex',
            justifyContent: 'center'  // Horizontally center
          }}>&larr;</Box>

        </Box>
        {/* header Box ends here  */}


        {/* image Box starts here  */}
        <Box sx={{mt: "40px", display: "flex", flexDirection: "column", alignItems: "center"}} >
            <img src={Done123} alt="" />

        </Box>
       {/* image Box ends here  */}


     {/* TextField Box starts here  */}
    <Box className="w-[80%] md:w-[380px] mt-11 mx-auto flex flex-col items-center mb-14" >
    
    <Typography sx={{color: "#299585", fontWeight: 600, textAlign: "center"}} >Great! Home section details saved successfully. The next step is the catalog section.</Typography>

    </Box>
    {/* TextField Box ends here  */}
   



    {/* Button Box starts here  */}
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}} >

    <Button
      className=' w-[75%] md:w-[350px]'
      sx={{color: "black", py: "12px", borderRadius: '20px', background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)", textTransform: "none", fontSize: "18px", fontWeight: 700 }}
    >
      Proceed
    </Button>
      </Box>
     {/* Button box ends here  */}



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

export default Done;
