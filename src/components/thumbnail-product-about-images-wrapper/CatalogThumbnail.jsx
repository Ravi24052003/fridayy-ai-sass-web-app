import React, { useRef, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
// import userName from "../assets/user-name.png";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import ChooseFiles from './catalog-thumbnail/ChooseFiles';
import UploadFile from './catalog-thumbnail/UploadFile';
import UploadInProgress from "./catalog-thumbnail/UploadInProgress";

const CatalogThumbnail = (props) => {

const [uploadInProgress, setUploadInProgress] = useState(false);

const handleBannerImageUpload = function(){
  setUploadInProgress(true);

  setTimeout(()=>{
    props.setImageUploadStep(2)
  setUploadInProgress(false)
  }, 4000) 
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
          }} >Catalog Thumbnail</Typography>
        </Box>
        {/* header Box ends here  */}

       <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", my: "40px"}} >
        <Typography sx={{mb: "20px"}} >Upload an image that best defines your company.</Typography>
        <Typography sx={{color: "#299585", fontSize: "22px", fontWeight: 600}} >Upload Banner Image</Typography>
       </Box>


         {/* file upload Componets starts here  */}

         {
          uploadInProgress? <UploadInProgress />

          :

         <div>

         
       {                              
        (props?.bannerImg?.bannerImageUrl)?
        <UploadFile bannerImg={props?.bannerImg} />

:     

       <ChooseFiles setBannerImg={props?.setBannerImg} bannerImg={props?.bannerImg} /> 

      } 
        


      {
        (!props?.bannerImg?.bannerImageUrl) &&
         <div>
        <Typography sx={{textAlign: "center"}} >Upload images with .jpeg .png and .pdf extensions</Typography>
        </div>
      }

      {
        (props?.bannerImg?.bannerImageUrl) && 
        <div className=' flex justify-center mt-6' >
           <Button
           onClick={handleBannerImageUpload}
           className=' w-[60%] md:w-[280px]'
      sx={{ color: '#299585', fontWeight: 'bold', backgroundColor: "rgba(224, 224, 224, 0.6)", py: "10px", borderRadius: "12px", textTransform: "none", fontSize: "20px" }}
    >
      Submit
    </Button>
        </div>
      }

      </div>

}
      {/* file upload Components ends here  */}



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

export default CatalogThumbnail;
