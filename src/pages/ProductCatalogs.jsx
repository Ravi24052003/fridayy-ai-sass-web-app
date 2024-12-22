import React, { useEffect, useState } from 'react'
import client from '../contentful/contentful';
import ViewCatalog from "../components/product-catalogs/ViewCatalog.jsx";
import LoadCatalog1 from "../components/product-catalogs/LoadCatalog1.jsx";

import { Box, Typography, Button, useTheme, MobileStepper, CircularProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ViewCatalogModal from '../components/product-catalogs/ViewCatalogModal.jsx';

const ProductCatalogs = () => {
 
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [contentfulDataArray, setContentfulDataArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoadCatalog1Comp, setIsLoadCatalog1Comp] = useState(false);

  const [contentfulDataArrayLength, setContentfulDataArrayLength] = useState(0);

  const [htmlTemplate, setHtmlTemplate] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductCatalogsModal = function(){
    setIsModalOpen(true)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };




   useEffect(()=>{
   
   (
    async function(){
      try {
setLoading(true);

        const response = await client.getEntries({
          content_type: "productCatalogs",
          "fields.category[in]": "Consumer Electronics"
          })

          console.log("response.data", response.items);

          setContentfulDataArray(response.items);
          setContentfulDataArrayLength(response.items.length);

          const newHtmlTemplate1 = response.items[activeStep]?.fields?.htmlTemplate.replace("__NICEPAGE_CSS__", `"${response.items[activeStep]?.fields?.nicepageCss}"`);

          const newHtmlTemplate2 = newHtmlTemplate1?.replace("__HOME_CSS__",  `"${response.items[activeStep]?.fields?.homepageCss}"`);
      
          const newHtmlTemplate3 = newHtmlTemplate2?.replaceAll("__IMAGES_HOST_URL__/", response.items[activeStep]?.fields?.imagesUrl);
      
          const newHtmlTemplate4 = newHtmlTemplate3?.replace("__CUSTOM_CSS_STYLE__", response.items[activeStep]?.fields?.cssTemplate || "");
      
          console.log("newHtmlTemplate4", newHtmlTemplate4);
      
          setHtmlTemplate(newHtmlTemplate4);

          setLoading(false);

      } catch (error) {
        setLoading(false)
        console.log("error", error);
      }
    }
   )();

   }, [])



   useEffect(()=>{
    setLoading(true);
    const newHtmlTemplate1 = contentfulDataArray[activeStep]?.fields?.htmlTemplate.replace("__NICEPAGE_CSS__", `"${contentfulDataArray[activeStep]?.fields?.nicepageCss}"`);

    const newHtmlTemplate2 = newHtmlTemplate1?.replace("__HOME_CSS__",  `"${contentfulDataArray[activeStep]?.fields?.homepageCss}"`);

    const newHtmlTemplate3 = newHtmlTemplate2?.replaceAll("__IMAGES_HOST_URL__/", contentfulDataArray[activeStep]?.fields?.imagesUrl);

    const newHtmlTemplate4 = newHtmlTemplate3?.replace("__CUSTOM_CSS_STYLE__", contentfulDataArray[activeStep]?.fields?.cssTemplate || "");

    console.log("newHtmlTemplate3", newHtmlTemplate4);

    setHtmlTemplate(newHtmlTemplate4);

    setLoading(false)
   }, [activeStep])

  return (
   <>
   {
    loading? <div className="flex justify-center items-center h-[50vh]">
          <CircularProgress />
        </div>

    :

    isLoadCatalog1Comp?

    <LoadCatalog1 />


    :

  

    <div style={{ overflowX: "hidden"}} className='pb-[100px] bg-[#000016] min-h-[100vh]' >
        <Box sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)', display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "relative", bgcolor: "white" }} >
          <Box  sx={{zIndex: 5,
            background: 'linear-gradient(180deg, #299585, #2EA993)', color: "white", width: "40px", height: "40px", fontSize: "25px", fontWeight: "bold", textTransform: "none", my: "10px", ml: "20px", borderRadius: "50%", display: 'flex',
            justifyContent: 'center'  // Horizontally center
          }}>&larr;</Box>

<Typography sx={{
            fontSize: "24px", color: "#299585", position: "absolute", right: '50%',
            transform: 'translate(50%, 0%)',
            width: "100%",
            textAlign: "center"
          }} >Category</Typography>
        </Box>

{
contentfulDataArray?.length > 0 &&
// stepper div starts here
       <div className=' flex flex-col items-center' >
        <Typography sx={{color: "white", mt: "20px"}} >Select the one that best suits your business</Typography>

       <Box sx={{ flexGrow: 1, mb: "10px" }}>

      {/* stepper content starts  */}
      <ViewCatalog htmlTemplate={htmlTemplate} setActiveStep={setActiveStep} activeStep={activeStep} contentfulDataArrayLength={contentfulDataArrayLength}  />  
     {/* stepper content ends  */}


      {/* stepper logic div starts here  */}
       <div className=' flex justify-center'>
      <MobileStepper
        variant="text"
        steps={contentfulDataArrayLength}
        position="static"
        activeStep={activeStep}
        
        className=' w-[90vw] md:w-[400px]'

        sx={{fontWeight: 600, fontSize: "18px", color: "white", background:"#000016"}}

        nextButton={
          <Button
          sx={{color: "#299585", fontSize: "18px", fontWeight: 700}}
            size="small"
            onClick={handleNext}
            disabled={activeStep === contentfulDataArrayLength - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft  />
            ) : (
              <KeyboardArrowRight sx={{fontWeight : 700}} />
            )}
          </Button>
        }

        backButton={
          <Button sx={{color: "#299585", fontSize: "18px", fontWeight : 700}} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft sx={{fontWeight : 700}} />
            )}
            Back
          </Button>
        }

      />
      </div> 
{/* stepper logic div ends here  */}

    </Box>

    <Button onClick={handleProductCatalogsModal} className=' w-[80%] md:w-[300px]' sx={{background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)", color: "black", py: "10px", borderRadius: "50px", fontSize: "18px", fontWeight: 700, textTransform: "none"}} >Use</Button>

       </div>
// stepper div ends here 
}
        

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




}


<ViewCatalogModal htmlTemplate={htmlTemplate} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setIsLoadCatalog1Comp={setIsLoadCatalog1Comp} />
   </>
  )
}

export default ProductCatalogs