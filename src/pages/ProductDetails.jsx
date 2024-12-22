import { TextField } from '@mui/material'
import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import AddProductDetails from "../components/AddProductDetails"
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const {uploadAboutResponse, uploadHeroResponse, uploadResponse, setUploadResponse, setAddProductDetails, isAddProductDetailsComp, setIsAddProductDetailsComp} = useContext(MainContext);
    const {state} = useLocation();   
 
    console.log("ProductDetalis.jsx uploadAboutResponse", uploadAboutResponse);
    console.log("ProductDetalis.jsx uploadHeroResponse", uploadHeroResponse);
    console.log("ProductDetalis.jsx uploadResponse", uploadResponse);

    console.log("productDetails.jsx state from useLocation", state);


    // const handleUploadAboutResponseDetection = function(e, i){
    //   const newImageDetails = [...uploadAboutResponse.image_details];

    //   console.log("newImageDetails",newImageDetails)

    //   newImageDetails[i].detection = e.target.value
      
    //   setUploadAboutResponse({...uploadAboutResponse, image_details: newImageDetails});

    //   console.log("uploadAboutResponse inside onchange", uploadAboutResponse);
    // }


    // const handleUploadHeroResponseDetection = function(e, i){
    //   const newImageDetails = [...uploadHeroResponse.image_details];

    //    console.log("newImageDetails",newImageDetails)
 
    //    newImageDetails[i].detection = e.target.value
       
    //    setUploadHeroResponse({...uploadHeroResponse, image_details: newImageDetails});
    // }


    const handleUploadResponseDetection = function(e, i){
      const newImageDetails = [...uploadResponse.image_details];

      console.log("newImageDetails",newImageDetails)
     
      newImageDetails[i].detection = e.target.value
      
      setUploadResponse({...uploadResponse, image_details: newImageDetails});
    }


    // const RemoveObjFromUploadAboutImageDetails = function(i){
    //   const newImageDetails = [...uploadAboutResponse.image_details];
    //   newImageDetails.splice(i, 1);

    //   setUploadAboutResponse({...uploadAboutResponse, image_details: newImageDetails});
    // }

    // const RemoveObjFromUploadHeroImageDetails = function(i){
    //   const newImageDetails = [...uploadHeroResponse.image_details];
    //   newImageDetails.splice(i, 1);

    //   setUploadHeroResponse({...uploadHeroResponse, image_details: newImageDetails});
    // }

    const RemoveObjFromUploadImageDetails = function(i){
      const newImageDetails = [...uploadResponse.image_details];
      newImageDetails.splice(i, 1);

      setUploadResponse({...uploadResponse, image_details: newImageDetails});
    }
  return (
   <>

{
   isAddProductDetailsComp? <AddProductDetails state={state} />


   :



<div>

   <h1 className=' text-center my-5'>Add Product description, pricing, and generate AI Backgrounds for your products</h1>


{/* {
   uploadAboutResponse?.image_details?.length > 0 && uploadAboutResponse?.image_details.map((obj, i)=> 

   <div key={i} className=' flex flex-col items-center w-[95%] mx-auto'>
    <div className=' flex justify-between'>
        <img src={obj?.ai_image || obj?.image_url}  className=' w-[50%] rounded' />
        <div className=' flex flex-col justify-around items-center'>
         <button onClick={()=>RemoveObjFromUploadAboutImageDetails(i)} className=' text-blue-500 underline'>Remove</button>
        <button className=' rounded-md border border-gray-600 px-2 py-2' onClick={()=>{
         setAddProductDetails({...obj, i, uploadAbout: true, image_type: uploadAboutResponse.image_type});
         setIsAddProductDetailsComp(true);
        }}>Add product details</button>
        </div>
        
    </div>
    <TextField 
      multiline
      rows={4}
      className=' w-[260px] md:w-[350px] mt-2'
    variant="outlined" value={obj?.detection} onChange={(e)=>handleUploadAboutResponseDetection(e, i)}/>
   </div>
)
} */}



{/* {
   uploadHeroResponse?.image_details?.length > 0 && uploadHeroResponse?.image_details.map((obj, i)=> 

   <div key={i} className=' flex flex-col items-center w-[95%] mx-auto'>
    <div className=' flex justify-between'>
        <img src={obj?.ai_image || obj?.image_url}  className=' w-[50%] rounded' />
        <div className='flex flex-col justify-around items-center'>
        <button onClick={()=>RemoveObjFromUploadHeroImageDetails(i)} className=' text-blue-500 underline'>Remove</button>
        <button className=' rounded-md border border-gray-600 px-2 py-2' onClick={()=>{
         setAddProductDetails({...obj, i, uploadHero: true, image_type: uploadHeroResponse.image_type});
         setIsAddProductDetailsComp(true);
        }}>Add product details</button>
        </div>
        
    </div>
    <TextField
      multiline
      rows={4}
      className=' w-[260px] md:w-[350px] mt-2'
    variant="outlined"  value={obj?.detection} onChange={(e)=>handleUploadHeroResponseDetection(e, i)} />
   </div>
)
} */}



{
   uploadResponse?.image_details?.length > 0 && uploadResponse?.image_details.map((obj, i)=> 

   <div key={i} className=' flex flex-col items-center w-[95%] mx-auto rounded border-b border-gray-500 mb-7 pb-3'>
    <div className=' flex justify-between mb-3'>

        <img src={obj?.ai_image || obj?.image_url}  className=' w-[50%] rounded' />
        
        <div className='flex flex-col justify-around items-center'>
        <button onClick={()=>RemoveObjFromUploadImageDetails(i)} className=' text-blue-500 underline'>Remove</button>
        <button className=' rounded-md border border-gray-600 px-2 py-2' onClick={()=>{
         setAddProductDetails({...obj, i, upload: true, image_type: uploadResponse.image_type});
         setIsAddProductDetailsComp(true);
        }}>Add product details</button>
        </div>
       
    </div>
    <TextField 
      multiline
      rows={4}
      className=' w-[260px] md:w-[350px]'
    variant="outlined"  value={obj?.detection} onChange={(e)=>handleUploadResponseDetection(e, i)}/>
   </div>
)
}



</div>

}

   </>
  )
}

export default ProductDetails
