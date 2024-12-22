import React, { useEffect } from 'react'
import loadCatalogs1 from "../../assets/load-catalogs1.png";
import Loading from "../../assets/Loading.png"

import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';


const FinalCatalogLoad = () => {

  return (
    <>
    <div style={{ overflowX: "hidden"}} className='pb-[100px]' >
        <Box sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)', display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", py: "14px" }} >
        
          <Typography sx={{
            fontSize: "24px", color: "#299585"
          }} >Congratulations</Typography>
          
        </Box>


       <div className=' flex flex-col items-center mt-12'>
        <img src={loadCatalogs1} alt="" />
        <img src={Loading} alt="" className=' my-10' />
        <Typography sx={{fontSize: "18px", color: "#299585", fontWeight: 600, textAlign: "center"}} >Congratulations! </Typography>
        <Typography sx={{fontSize: "18px", color: "#299585", fontWeight: 600, textAlign: "center"}} >All the information has been stored. Displaying the final catalog.</Typography>
       </div>


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

export default FinalCatalogLoad
