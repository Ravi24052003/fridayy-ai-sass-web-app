import React, { useRef, useState } from 'react';
import ThumbnailDescAiDesc from "../../assets/thumbnail-desc-ai-desc.png";

import { Box, Typography, TextField, Button } from '@mui/material';
// import userName from "../assets/user-name.png";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

import {thumbClick} from "./ThumbnailDescFns.js";

const ThumbnailDesc = (props) => {

  const handleDescAboutCompany = function(e){
    props.setBannerImg((preVal)=> ({...preVal, descAboutCompany: e.target.value}))
  }

  const handlebannerImageUploadStep = function(){
    props.setImageUploadStep(4)
  }

  return (
    <>
      <div style={{ overflowX: "hidden"}} className='pb-[100px]' >
        {/* header Box starts here  */}
        <Box sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)', display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "relative" }} >

          <Box sx={{
            background: 'linear-gradient(180deg, #299585, #2EA993)', color: "white", width: "40px", height: "40px", fontSize: "25px", fontWeight: "bold", textTransform: "none", my: "10px", ml: "20px", borderRadius: "50%", display: 'flex',
            justifyContent: 'center'  // Horizontally center
          }}>&larr;</Box>

          <Typography sx={{
            fontSize: "24px", color: "#299585", position: "absolute", right: '50%',
            transform: 'translate(50%, 0%)',
          }} >Description</Typography>
        </Box>
        {/* header Box ends here  */}


        {/* image Box starts here  */}
        <Box sx={{mt: "40px", display: "flex", justifyContent: "center"}} >
            <img src={ThumbnailDescAiDesc} alt="" />
        </Box>
       {/* image Box ends here  */}


     {/* TextField Box starts here  */}
    <Box className="w-[80%] md:w-[380px] mt-11 mx-auto flex flex-col items-center mb-14" >
    <Typography sx={{color: "#299585", fontWeight: 600, textAlign: "center"}} >Enter a description about your company.</Typography>
    
    <TextField
    value={props?.bannerImg?.descAboutCompany}
    onChange={(e)=>handleDescAboutCompany(e)}
    sx={{my: "8px"}}
       className=' w-[100%] md:w-[350px]'
          id="outlined-multiline-static"

          multiline
          rows={4}
        />

    <Typography>Enter upto 250 words</Typography>
    </Box>
    {/* TextField Box ends here  */}
   



    {/* Two Button Box starts here  */}
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}} >
      <Button
      className=' w-[67%] md:w-[300px]'
      sx={{ color: 'black', py: "8px", borderRadius: '20px', border: '1px solid gray', backgroundColor: "rgba(224, 224, 224, 0.1)", mb: "10px", textTransform: "none", fontSize: "16px" }}
    >
      Generate with AI
    </Button>

    <Button
    onClick={handlebannerImageUploadStep}
      className=' w-[67%] md:w-[300px]'
      sx={{ color: 'white', py: "8px", borderRadius: '20px', background: 'linear-gradient(to right, #299585, #4FC6B0)', textTransform: "none", fontSize: "16px", fontWeight: 700 }}
    >
      Proceed
    </Button>
      </Box>
     {/*Two Button box ends here  */}



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

export default ThumbnailDesc;
