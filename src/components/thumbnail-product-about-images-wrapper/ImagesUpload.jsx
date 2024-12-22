import React, { useRef, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
// import userName from "../assets/user-name.png";
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import ChooseFiles from './images-upload/ChooseFiles';
import UploadFiles from './images-upload/UploadFiles';
import UploadInProgress from "./images-upload/UploadInProgress";

const ImagesUpload = (props) => {
const [uploadInProgress, setUploadInProgress] = useState(false);

const [productImg, setProductImg] = useState({
  productImagesFd: new FormData(),
  productImages: [],
  productImagesUrls: []
})

const handleBannerImageUpload = function(){
  setUploadInProgress(true);

  setTimeout(()=>{
    props.setBannerImageUploadStep(2)
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
          }} >Images</Typography>
        </Box>
        {/* header Box ends here  */}

       <Box className=" w-[70%] mx-auto" sx={{display: "flex", flexDirection: "column", alignItems: "center", my: "30px"}} >
        <Typography sx={{mb: "20px", textAlign: "center"}} >This catalog contains **12** images. At one time you can upload 10 images</Typography>
       </Box>


         {/* file upload Componets starts here  */}
         {
          uploadInProgress? <UploadInProgress />

          :

         <div>

         
       {                              
        (productImg.productImagesUrls.length > 0)?
        <UploadFiles productImg={productImg} setProductImg={setProductImg}/>

:     

       <ChooseFiles setProductImg={setProductImg} productImg={productImg} /> 

      } 
        


      {
        (!(productImg?.productImagesUrls.length > 0)) &&
         <div>
        <Typography sx={{textAlign: "center", mt: "10px"}} >Upload images with .jpeg .png and .pdf extensions</Typography>
        </div>
      }

      </div>

      }
      {/* file upload Components ends here  */}



{/* Golder color Proceed button div starts here  */}
{
        (productImg.productImagesUrls.length > 0) && 
        <div className=' flex justify-center fixed bottom-[100px] z-50 w-[100vw]' >
           <Button
           onClick={handleBannerImageUpload}
           className=' w-[70%] md:w-[320px]'
      sx={{ color: 'black', fontWeight: 'bold', background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)", py: "10px", borderRadius: "25px", textTransform: "none", fontSize: "20px" }}
    >
      Proceed 
    </Button>
        </div>
      }
{/* Golden color Proceed button div ends here  */}


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

export default ImagesUpload;
