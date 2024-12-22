import { Alert, Box, CircularProgress, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MainContext } from '../context/MainContext'
import AddProductDetails from "../components/AddProductDetails"
import axios from 'axios'
import conf from '../../conf/conf'
import { useLocation, useNavigate } from 'react-router-dom'
import Cookies from "universal-cookie";

const ProductDetails = () => {
    const {uploadAboutResponse, uploadHeroResponse, uploadResponse, setUploadResponse, setAddProductDetails, isAddProductDetailsComp, setIsAddProductDetailsComp, store, setTemplateUrl} = useContext(MainContext);

    const cookies = new Cookies();
    const tokenFromCookies = cookies.get("token");
    const [loading, setLoading] = useState(false);
    const [deleteProductLoading, setDeleteProductLoading] = useState(false);
    const [indexForDeleteProductLoading, setIndexForDeleteProductLoading] = useState(null);
    const [productDetailsReqErr, setProductDetailsReqErr] = useState("");

    const navigate = useNavigate();
    const {state} = useLocation();

    console.log("productrView.jsx useLocation state", state);
    console.log("productView.jsx useLocation state", state.productCatalogs[state.productCatalogIndex].catalog_id)

    

    console.log("ProductDetalis.jsx uploadAboutResponse", uploadAboutResponse);
    console.log("ProductDetalis.jsx uploadHeroResponse", uploadHeroResponse);
    console.log("ProductDetalis.jsx uploadResponse", uploadResponse);


   //  const handleUploadAboutResponseDetection = function(e, i){
   //    const newImageDetails = [...uploadAboutResponse.image_details];

   //    console.log("newImageDetails",newImageDetails)

   //    newImageDetails[i].detection = e.target.value
      
   //    setUploadAboutResponse({...uploadAboutResponse, image_details: newImageDetails});

   //    console.log("uploadAboutResponse inside onchange", uploadAboutResponse);
   //  }


   //  const handleUploadHeroResponseDetection = function(e, i){
   //    const newImageDetails = [...uploadHeroResponse.image_details];

   //     console.log("newImageDetails",newImageDetails)
 
   //     newImageDetails[i].detection = e.target.value
       
   //     setUploadHeroResponse({...uploadHeroResponse, image_details: newImageDetails});
   //  }


    const handleUploadResponseDetection = function(e, i){
      const newImageDetails = [...uploadResponse.image_details];

      console.log("newImageDetails",newImageDetails)
     
      newImageDetails[i].detection = e.target.value
      
      setUploadResponse({...uploadResponse, image_details: newImageDetails});
    }


    // generateProductCatalog function starts here
    const generateProductCatalog = function(){
     setProductDetailsReqErr("")

   const productIndexNotHavingIdKey = uploadResponse.image_details.findIndex((obj)=> !obj.hasOwnProperty("id"));

   console.log(`Please add details to product no. ${productIndexNotHavingIdKey+1}`);

   

   if(productIndexNotHavingIdKey != -1){
      setProductDetailsReqErr(`Please add details to product no. ${productIndexNotHavingIdKey+1}`);

      return;
   }

   console.log(" ");

      (
     async function(){

      try {
setLoading(true);

         console.log("productView.jsx api/update_template sotre.id", store.id);

         const cook = new Cookies();
       console.log("token productView.jsx token api/update_template", cook.get("token"));

      const response =  await  axios.post(`${conf.backendBaseUrl}/api/update_template/`, {
            store_id: store.id,
            catalog_id: state.productCatalogs[state.productCatalogIndex].catalog_id
         }, {
            headers: {
               Authorization: "token "+tokenFromCookies
            }
         });

         console.log("update_template", response.data);

       setTemplateUrl(response.data);
       setLoading(false)

       navigate("/ready-product-catalog");
      } catch (error) {
         setLoading(false)
         console.log("/api/update_template/ error", error.response.data);
      }

     }

      )();

    }
   //  generateProductCatalog function ends here 


    const RemoveObjFromUploadImageDetails = function(i){

   setIndexForDeleteProductLoading(i)

   console.log("RemvoeObjFromUploadImageDEtails productDetails ", uploadResponse.image_details[i]);
   console.log("RemvoeObjFromUploadImageDEtails productDetails ", uploadResponse.image_details[i].id);

   if(uploadResponse.image_details[i].id){
      console.log("hurray id is present", uploadResponse.image_details[i].id);

      (
         async function(){

        try {
         setDeleteProductLoading(true);
          const response = await axios.post(`${conf.backendBaseUrl}/api/delete_product/`, {
                product_id: uploadResponse.image_details[i].id
             },
             
             {
                headers: {
                   Authorization: "token "+tokenFromCookies
                }
             });

             console.log("productView.jsx api/delete_product response.data",response.data);

             const newImageDetails = [...uploadResponse.image_details];
             newImageDetails.splice(i, 1);
       
             setUploadResponse({...uploadResponse, image_details: newImageDetails});

             setDeleteProductLoading(false);

        } catch (error) {
         setDeleteProductLoading(false);
         console.log("productView.jsx api/delete_product error", error.response.data);
        }


         }
      )();
   }
   else{
      console.log("oops id is not present", uploadResponse.image_details[i].id);

      const newImageDetails = [...uploadResponse.image_details];
      newImageDetails.splice(i, 1);

      setUploadResponse({...uploadResponse, image_details: newImageDetails});
   }

    }





  return (
   <>

   <div className='w-full fixed top-0'>

<div className='flex flex-col items-center'>

{
productDetailsReqErr && 
<div className='mb-2'>
<Alert variant="filled" severity="error">
    {productDetailsReqErr}
  </Alert>
</div> 
}


</div>

</div>



   <div>

      {
         loading? <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', height: "25vh" }}>
         <CircularProgress />
         </Box> 

         :


   <div>

   
{
   isAddProductDetailsComp? <AddProductDetails state={state} />


   :



<div>



   <h1 className=' text-center my-5'>Add Product description, pricing, and generate AI Backgrounds for your products</h1>


{/* {
   uploadAboutResponse?.image_details?.length > 0 && uploadAboutResponse?.image_details.map((obj, i)=> 

   <div key={i} className=' flex flex-col items-start w-[95%] mx-auto'>
    <div className=' flex justify-between items-center'>
        <img src={obj?.ai_image || obj?.image_url}  className=' w-[50%] rounded' />
        <button className=' rounded-md border border-gray-600 px-2 py-2' onClick={()=>{
         setAddProductDetails({...obj, i, uploadAbout: true, image_type: uploadAboutResponse.image_type});
         setIsAddProductDetailsComp(true);
        }}>{(obj?.product_price)? <span>View product details</span> : <span>Add product details</span> }</button>
    </div>
    <TextField variant="outlined" className='w-[50%]' value={obj?.detection} onChange={(e)=>handleUploadAboutResponseDetection(e, i)}/>
   </div>
)
} */}



{/* {
   uploadHeroResponse?.image_details?.length > 0 && uploadHeroResponse?.image_details.map((obj, i)=> 

   <div key={i} className=' flex flex-col items-start w-[95%] mx-auto'>
    <div className=' flex justify-between items-center'>
        <img src={obj?.ai_image || obj?.image_url}  className=' w-[50%] rounded' />
        <button className=' rounded-md border border-gray-600 px-2 py-2' onClick={()=>{
         setAddProductDetails({...obj, i, uploadHero: true, image_type: uploadHeroResponse.image_type});
         setIsAddProductDetailsComp(true);
        }}>{(obj?.product_price)? <span>View product details</span> : <span>Add product details</span> }</button>
    </div>
    <TextField variant="outlined" className=' w-[50%]' value={obj?.detection} onChange={(e)=>handleUploadHeroResponseDetection(e, i)} />
   </div>
)
} */}



{
   uploadResponse?.image_details?.length > 0 && uploadResponse?.image_details.map((obj, i)=> 
<div key={i}>

{
   ((deleteProductLoading) && (indexForDeleteProductLoading == i))? <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', height: "25vh" }}>
   <CircularProgress />
   </Box> 

   :



   <div className='flex flex-col items-center w-[95%] mx-auto rounded border-b border-gray-500 mb-7 pb-3'>

    <div className=' flex justify-between mb-3'>
        <img src={obj?.ai_image || obj?.image_url}  className=' w-[50%] rounded' />

        <div className='flex flex-col justify-around items-center'>
        <button onClick={()=>RemoveObjFromUploadImageDetails(i)} className=' text-blue-500 underline'>Remove</button>
        
        <button className=' rounded-md border border-gray-600 px-2 py-2' onClick={()=>{
         setProductDetailsReqErr("")
         setAddProductDetails({...obj, i, upload: true, image_type: uploadResponse.image_type});
         setIsAddProductDetailsComp(true);
        }}>{(obj?.product_price)? <span>View product details</span> : <span>Add product details</span> }</button>
        </div>

    </div>
    <TextField
     multiline
     rows={4}
     className=' w-[260px] md:w-[350px]'
    variant="outlined"  value={obj?.detection} onChange={(e)=>handleUploadResponseDetection(e, i)}/>
   </div>
}


   </div>
)
}


<div className=' flex flex-col items-center'>

   <button className=' w-[90%] py-3 font-semibold my-4 border border-gray-600 text-gray-800 rounded-md' onClick={()=>generateProductCatalog()}>Generate Product catalog</button>

{/* <button className='w-[90%] py-3 font-semibold my-4 border border-gray-600 text-gray-800 rounded-md' onClick={()=>{
}}>Upload more images</button>

<button className=' w-[90%] py-3 font-semibold my-4 border border-gray-600 text-gray-800 rounded-md' onClick={()=>{
}}>Save in Drafts</button> */}

</div>

</div>

}

</div>


}

</div>

   </>
  )
}

export default ProductDetails
