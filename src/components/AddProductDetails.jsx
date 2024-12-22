import React, { useContext, useEffect, useState } from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, CircularProgress, TextField } from '@mui/material';
import { MainContext } from '../context/MainContext';
import axios from 'axios';
import conf from "../../conf/conf"
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Alert from '@mui/material/Alert';


const AddProductDetails = (props) => {
  const {addProductDetails, setAddProductDetails, store, setIsAddProductDetailsComp, setUploadResponse, uploadResponse} = useContext(MainContext);
  
  const cookies = new Cookies();
  const tokenFromCookies = cookies.get("token");

  console.log("AddproductDetails.jsx props.state ", props.state);
  console.log("AddproductDetails.jsx props.state ", props.state.productCatalogs[props.state.productCatalogIndex].catalog_id);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [createProductLoading, setCreateProductLoading] = useState(false);
  const [aiBgLoading, setAiBgLoading] = useState(false);

  const [backgroundImagesArray, setBackgroundImagesArray] = useState([]);
  const [clickedBgImage, setClickedBgImage] = useState(null);
  
  const [isAiBackgroundGenerated, setIsAiBackgroundGenerated] = useState(false);
  
  const [originalPrice, setOriginalPrice] = useState(addProductDetails?.product_price || "");
  const [discountedPrice, setDiscountedPrice] = useState(addProductDetails?.discounted_price || "");
  const [productName, setProductName] = useState(addProductDetails?.product_name || "");

  const [aiDescValue, setAiDescValue] = useState("");

  const [productNameReqErr, setProductNameReqErr] = useState("");
  const [originalPriceReqErr, setOriginalPriceReqErr] = useState("")
  const [discountedPriceReqErr, setDiscountedPriceReqErr] = useState("");

  console.log("addProductDetails", addProductDetails);

  if(!addProductDetails?.detection){
    setIsAddProductDetailsComp(false)
  } 

  const generateAiDesc =  function(){
console.log("outside iffe");

   (async function(){
    try {
      setLoading(true);

      console.log("inside fn iffe");
      console.log("after inside iffe", addProductDetails?.detection);

      const response = await axios.get(`${conf.backendBaseUrl}/api/product/description/?img_keyword=${addProductDetails?.detection}`,
      //  {img_keyword: addProductDetails?.detection},
        {
        headers: {
          Authorization: "token "+tokenFromCookies
        }
      });
  
      console.log("generateAiDesc response.data aiDesc", response.data?.AI_description);
  
      setAiDescValue(response.data?.AI_description);
  
      console.log("aiDescrition value", aiDescValue);

      setLoading(false)
    } catch (error) {
      setLoading(false);
     console.log("error", error.response.data);
    }
   })();

  }


  const useAiGeneratedDesc = function(){
    setAddProductDetails((preVal)=> ({...preVal, detection: aiDescValue}))

    console.log("inside useAiGeneratedDesc");

    console.log("uploadAbout ",addProductDetails?.uploadAbout);

    // if(addProductDetails?.uploadAbout){
    //   console.log("inside addproductDEtails.uploadAbout");

    //   const newImageDetails = [...uploadAboutResponse.image_details];

    //   console.log("newImageDetails",newImageDetails)

    //   newImageDetails[addProductDetails.i].detection = aiDescValue
      
    //   setUploadAboutResponse({...uploadAboutResponse, image_details: newImageDetails});

    //   console.log("uploadAboutResponse inside onchange", uploadAboutResponse);

    //   return
    // }

    // if(addProductDetails?.uploadHero){
    //   console.log("inside addproductDEtails.uploadHero");

    //   const newImageDetails = [...uploadHeroResponse.image_details];

    //   console.log("newImageDetails",newImageDetails)

    //   newImageDetails[addProductDetails.i].detection = aiDescValue
      
    //   setUploadHeroResponse({...uploadHeroResponse, image_details: newImageDetails});

    //   console.log("uploadEroResponse inside onchange", uploadHeroResponse);

    //   return
    // }

  
      console.log("inside addproductDEtails.upload");

      const newImageDetails = [...uploadResponse.image_details];

      console.log("newImageDetails",newImageDetails)

      newImageDetails[addProductDetails.i].detection = aiDescValue
      
      setUploadResponse({...uploadResponse, image_details: newImageDetails});

      console.log("uploadResponse inside onchange", uploadResponse);

    
  }


  const generateAiBackground = function(){

    ;(async function(){
      try {
        console.log("addProductDetails image_type", addProductDetails.image_type)
        console.log("addproductDEtails", addProductDetails.image_url)
        console.log("addorductDEtqls", addProductDetails.detection)
        console.log("store.id", store.id);
        // console.log("catalog_id from the useNavigate state", state);

        setAiBgLoading(true);

      console.log(addProductDetails.image_url,"sdfghjk")

      const response = await axios.post(`${conf.backendBaseUrl}/api/product/background/`, {

      "img_url": addProductDetails.image_url,
      "store_id": store.id,
      "catalog_id": props.state.productCatalogs[props.state.productCatalogIndex].catalog_id, 
      "image_type": addProductDetails.image_type, 
      "img_keyword": addProductDetails.detection
    }, {
        headers: {
        Authorization: "token "+tokenFromCookies
        }
      });

      console.log("response for ai response.data", response.data);

      setIsAiBackgroundGenerated(true);

      setBackgroundImagesArray(response.data.background);

      console.log("backgroundImagesArray ",backgroundImagesArray);

      setAiBgLoading(false)
      } catch (error) {
        setIsAiBackgroundGenerated(false)
        setAiBgLoading(false)
        console.log("error ai background", error);
      }
    })()

  }


  const selectBackgroundImage = function(url){
      setClickedBgImage(url);

      // if(uploadAboutResponse.image_type == addProductDetails.image_type){
      //   console.log("inside addproductDEtails.upload");

      //   const newImageDetails = [...uploadAboutResponse.image_details];
  
      //   console.log("newImageDetails",newImageDetails)
  
      //   newImageDetails[addProductDetails.i].ai_image = url
        
      //   setUploadAboutResponse({...uploadAboutResponse, image_details: newImageDetails});
  
      //   console.log("uploadResponse inside onchange BG", uploadAboutResponse);

      //   return
      // }

      // if(uploadHeroResponse.image_type == addProductDetails.image_type){
      //   console.log("inside addproductDEtails.upload");

      //   const newImageDetails = [...uploadHeroResponse.image_details];
  
      //   console.log("newImageDetails",newImageDetails)
  
      //   newImageDetails[addProductDetails.i].ai_image = url
        
      //   setUploadHeroResponse({...uploadHeroResponse, image_details: newImageDetails});
  
      //   console.log("uploadResponse inside onchange BG ", uploadHeroResponse);

      //   return
      // }

      
        console.log("inside addproductDEtails.upload");

        const newImageDetails = [...uploadResponse.image_details];
  
        console.log("newImageDetails",newImageDetails)
  
        newImageDetails[addProductDetails.i].ai_image = url
        
        setUploadResponse({...uploadResponse, image_details: newImageDetails});
  
        console.log("uploadResponse inside onchange BG", uploadResponse);
  }


// createProduct function starts here
  const createProduct = function(){
    console.log("addproductDetails inside createProduct", addProductDetails);

    setProductNameReqErr("");
    setOriginalPriceReqErr("");
    setDiscountedPriceReqErr("");

    if(!productName || !originalPrice){
  
      if(!productName){
        setProductNameReqErr("Product name is required");
      }

      if(!originalPrice){
        setOriginalPriceReqErr("Original price is required");
      }

      // if(!discountedPrice){
      //   setDiscountedPriceReqErr("Discounted price is required");
      // }

      return;
     }

     console.log(" ");
    

        (
          async function(){

       try {
        setCreateProductLoading(true);

console.log("inside try block /api/product/create api");

         const response = await axios.post(`${conf.backendBaseUrl}/api/product/create/`, 
         {
               "store_id": store.id,
         "catalog_id": props.state.productCatalogs[props.state.productCatalogIndex].catalog_id,
         "product_name": productName,
         "product_image": addProductDetails?.image_url,
         "ai_image": clickedBgImage || addProductDetails?.ai_image || "",
         "product_price": originalPrice,
         "discounted_price": discountedPrice || originalPrice,
         "product_description": addProductDetails?.detection,
         "image_type": addProductDetails?.image_type,
        //  "image_type": 1,
         "img_order": addProductDetails?.i
             }, 
             
             {
               headers: {
                 Authorization: "token "+tokenFromCookies
               }
             }
           );
 
           console.log("response createProduct /product/create", response.data);



          //  if(uploadAboutResponse.image_type == addProductDetails.image_type){
          //   console.log("inside addproductDEtails.upload");
    
          //   const newImageDetails = [...uploadAboutResponse.image_details];
      
          //   console.log("newImageDetails",newImageDetails)
      
          //   newImageDetails[addProductDetails.i].ai_image = response.data.ai_image;
          //   newImageDetails[addProductDetails.i].catalog_id = response.data.catalog_id;
          //   // newImageDetails[addProductDetails.i].detection = response.data.detection;
          //   newImageDetails[addProductDetails.i].discounted_price = response.data.discounted_price;
          //   newImageDetails[addProductDetails.i].id = response.data.id;
          //   newImageDetails[addProductDetails.i].image_type = response.data.image_type;
          //   // newImageDetails[addProductDetails.i].image_url = response.data.image_url;
          //   newImageDetails[addProductDetails.i].img_order = response.data.img_order;
          //   newImageDetails[addProductDetails.i].product_description = response.data.product_description;
          //   newImageDetails[addProductDetails.i].product_name = response.data.product_name;
          //   newImageDetails[addProductDetails.i].product_price = response.data.product_price;
          //   newImageDetails[addProductDetails.i].store_id = response.data.store_id;
          //   newImageDetails[addProductDetails.i].user_id = response.data.user_id;

          //   // newImageDetails[addProductDetails.i].detection = uploadAboutResponse.image_details[addProductDetails.i].detection;

          
          //   // newImageDetails[addProductDetails.i].image_url = uploadAboutResponse.image_details[addProductDetails.i].image_url;
            
          //   setUploadAboutResponse({...uploadAboutResponse, image_details: newImageDetails});
      
          //   console.log("uploadResponse inside /product/create uploadAbout", uploadAboutResponse);

          //   setIsAddProductDetailsComp(false);

          //   setCreateProductLoading(false);

          //   navigate("/product-view");
    
          //   return
          // }

    
          // if(uploadHeroResponse.image_type == addProductDetails.image_type){
          //   console.log("inside addproductDEtails.upload");
    
          //   const newImageDetails = [...uploadHeroResponse.image_details];
      
          //   console.log("newImageDetails",newImageDetails)
      
          //   newImageDetails[addProductDetails.i].ai_image = response.data.ai_image;
          //   newImageDetails[addProductDetails.i].catalog_id = response.data.catalog_id;
          //   // newImageDetails[addProductDetails.i].detection = response.data.detection;
          //   newImageDetails[addProductDetails.i].discounted_price = response.data.discounted_price;
          //   newImageDetails[addProductDetails.i].id = response.data.id;
          //   newImageDetails[addProductDetails.i].image_type = response.data.image_type;
          //   // newImageDetails[addProductDetails.i].image_url = response.data.image_url;
          //   newImageDetails[addProductDetails.i].img_order = response.data.img_order;
          //   newImageDetails[addProductDetails.i].product_description = response.data.product_description;
          //   newImageDetails[addProductDetails.i].product_name = response.data.product_name;
          //   newImageDetails[addProductDetails.i].product_price = response.data.product_price;
          //   newImageDetails[addProductDetails.i].store_id = response.data.store_id;
          //   newImageDetails[addProductDetails.i].user_id = response.data.user_id;

          //   // newImageDetails[addProductDetails.i].detection = uploadHeroResponse.image_details[addProductDetails.i].detection;

          
          //   // newImageDetails[addProductDetails.i].image_url = uploadHeroResponse.image_details[addProductDetails.i].image_url;
            
          //   setUploadHeroResponse({...uploadHeroResponse, image_details: newImageDetails});
      
          //   console.log("uploadResponse inside /product/create uploadHero ", uploadHeroResponse);

          //   setIsAddProductDetailsComp(false);

          //   setCreateProductLoading(false);

          //   navigate("/product-view");
    
          //   return
          // }

    
          
            console.log("inside addproductDEtails.upload");
    
            const newImageDetails = [...uploadResponse.image_details];
      
            console.log("newImageDetails",newImageDetails)
      
            // newImageDetails[addProductDetails.i].ai_image = response.data.ai_image;
            // newImageDetails[addProductDetails.i].catalog_id = response.data.catalog_id;
            // // newImageDetails[addProductDetails.i].detection = response.data.detection;
            // newImageDetails[addProductDetails.i].discounted_price = response.data.discounted_price;
            // newImageDetails[addProductDetails.i].id = response.data.id;
            // newImageDetails[addProductDetails.i].image_type = response.data.image_type;
            // // newImageDetails[addProductDetails.i].image_url = response.data.image_url;
            // newImageDetails[addProductDetails.i].img_order = response.data.img_order;
            // newImageDetails[addProductDetails.i].product_description = response.data.product_description;
            // newImageDetails[addProductDetails.i].product_name = response.data.product_name;
            // newImageDetails[addProductDetails.i].product_price = response.data.product_price;
            // newImageDetails[addProductDetails.i].store_id = response.data.store_id;
            // newImageDetails[addProductDetails.i].user_id = response.data.user_id;

            newImageDetails[addProductDetails.i] = response.data;

            newImageDetails[addProductDetails.i].detection = uploadResponse.image_details[addProductDetails.i].detection;

          
            newImageDetails[addProductDetails.i].image_url = uploadResponse.image_details[addProductDetails.i].image_url;
            
            setUploadResponse({...uploadResponse, image_details: newImageDetails});
      
            console.log("uploadResponse inside /product /create upload", uploadResponse);

            setIsAddProductDetailsComp(false);

            setCreateProductLoading(false);

            navigate("/product-view", {
              state: {
                ...props.state
              }
            });

console.log("/api/product/create try end ", response.data);

       } catch (error) {
        setCreateProductLoading(false);
        console.log("error /product/create", error.response.data)
       }




          }

        )();


  }
// createProduct function ends here 


  useEffect(()=>{
    setAiDescValue(addProductDetails?.detection)

  }, [])

  return (

    <>

<div className='w-full fixed top-0'>

<div className='flex flex-col items-center'>

{
productNameReqErr && 
<div className='mb-2'>
<Alert variant="filled" severity="error">
    {productNameReqErr}
  </Alert>
</div> 
}


{
originalPriceReqErr && 
<div className=' mb-2'>
<Alert variant="filled" severity="error">
    {originalPriceReqErr}
  </Alert>
</div>
}

{/* {
discountedPriceReqErr && 
<div className=' mb-2'>
<Alert variant="filled" severity="error">
    {discountedPriceReqErr}
  </Alert>
</div>
} */}

</div>

</div>
    
   

  {
    createProductLoading ? 
   
    <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', height: "25vh" }}>
         <CircularProgress />
         </Box>

         :


    <div className=' flex flex-col items-center w-[95%] mx-auto gap-5 mt-5 border border-gray-500 rounded-md pb-4 px-4'>
        <div className=' flex justify-end w-full'>
            <button className=' text-3xl font-bold text-gray-400' onClick={()=>{
              setProductNameReqErr("")
              setOriginalPriceReqErr("")
              setDiscountedPriceReqErr("")
            setIsAddProductDetailsComp(false);
            }}>&#10005;</button>
        </div>

<div className=' flex flex-col items-center mb-4'>
<p>{addProductDetails?.detection}</p>
<img src={clickedBgImage || addProductDetails?.ai_image || addProductDetails?.image_url} alt="" className=' w-[95%] mt-6 mb-6' />

<TextField variant="outlined" className=' w-[260px] md:w-[350px]' value={productName} onChange={(e)=>{
  setProductNameReqErr("")
  setProductName(e.target.value)}} label="Product Name"/>
<p className='text-sm text-red-500'>{productNameReqErr}</p>

</div>
              
    


     <div className=' w-[95%] mx-auto'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="h1" variant='h5'>Add Pricing</Typography>
        </AccordionSummary>


        <AccordionDetails>
        <div className=' flex flex-col items-center'>
  <div>
  <h1 className=' text-lg'>Original price*</h1>
      <TextField type='number' id="addressLine2" required variant="outlined"  name='addressLine2' className=' w-[260px] md:w-[350px]' value={originalPrice} onChange={(e)=>{
        setOriginalPriceReqErr("")
        setOriginalPrice(e.target.value)}}/>
      <p className='text-sm text-red-500'>{originalPriceReqErr}</p>
  </div>
</div>

<div className=' flex flex-col items-center mt-4'>
<div>
<h1 className=' text-lg'>Discounted price</h1>
    <TextField type='number' id="addressLine2" required variant="outlined"  name='addressLine2' className=' w-[260px] md:w-[350px]' value={discountedPrice} onChange={(e)=>{
      setDiscountedPriceReqErr("")
      setDiscountedPrice(e.target.value)}}/>
    {/* <p className=' text-sm text-red-500'>{discountedPriceReqErr}</p> */}
</div>
</div>

        </AccordionDetails>
      </Accordion>
      </div>




      <div className=' w-[95%] mx-auto'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="h1" variant='h5'>Generate AI Description</Typography>
        </AccordionSummary>


        <AccordionDetails>
         {
         loading? 
        <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', height: "25vh" }}>
         <CircularProgress />
         </Box>

         :

        
        <div className=' flex flex-col items-center border border-gray-500 w-[90%] rounded mx-auto md:w-[40%] md:mb-7 px-4 py-2'>

<TextField
       fullWidth
          id="outlined-multiline-static"
          value={aiDescValue}
          onChange={(e)=>{
            setAiDescValue(e.target.value)
          }}
          multiline
          rows={5}

          variant='standard'

          InputProps={{
            disableUnderline: true,
          }}
        />

     
  
<button className=' rounded w-[90%] py-3 font-semibold my-4 border border-gray-600 bg-gray-200 text-gray-800' onClick={()=>
useAiGeneratedDesc()}>Use this</button>

<button className=' rounded w-[90%] py-3 font-semibold mb-4 border border-gray-600 bg-gray-200 text-gray-800' onClick={()=> generateAiDesc()} >Regenerate</button>

</div>
} 
        </AccordionDetails>
      </Accordion>
      </div>



      <div className=' w-[95%] mx-auto'>
      <Accordion>

        <AccordionSummary
          expandIcon={<ArrowDropDownIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="h1" variant='h5'>Generate AI Background</Typography>
        </AccordionSummary>


        <AccordionDetails>
       {
         aiBgLoading?
         <div>
          <p className='text-center'>It may take 2 - 3 mins for the images to get generated</p>
         
         <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', height: "25vh" }}>
         <CircularProgress />
         </Box> 

         </div>

         :


    


       <div className=' flex items-center flex-col gap-5'>
        {
          backgroundImagesArray.length > 0 && backgroundImagesArray.map((url, i)=> (
            <img src={url} alt="" key={i} 

            width={150}

            className={` cursor-pointer ${clickedBgImage === url? ' border-4 border-blue-600 scale-110 rounded': ''}`}

            onClick={() => selectBackgroundImage(url)}

            />
          ) )
        }
        
     <button className=' rounded w-[90%] py-3 font-semibold mb-4 border border-gray-600 bg-gray-200 text-gray-800 mt-5' onClick={()=> generateAiBackground()} >{isAiBackgroundGenerated? <span>Regenerate</span> : <span>Generate</span> }</button> 

       </div>

}
        </AccordionDetails>


      </Accordion>

      </div>

     <button className=' rounded w-[90%] py-3 font-semibold mb-4 border border-gray-600 bg-gray-200 text-gray-800 mt-5' onClick={()=>createProduct()}>Submit</button>
    </div>

}

    </>
  )
}

export default AddProductDetails
