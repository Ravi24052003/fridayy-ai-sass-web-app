import { Box, Button } from '@mui/material';
import React, { useRef } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const UploadFiles = (props) => {

  const removeProductImageFromArray = function(i){
    const newProductImagesArr = [...props?.productImg.productImages];
    const newProductImagesUrls = [...props?.productImg.productImagesUrls];
    
    newProductImagesArr.splice(i, 1);
    newProductImagesUrls.splice(i, 1);

    // setProductImages(newProductImagesArr);
    props?.setProductImg((preVal)=> ({...preVal, productImages: newProductImagesArr}));

    // setProductImagesUrls(newProductImagesUrls);
    props?.setProductImg((preVal)=> ({...preVal, productImagesUrls: newProductImagesUrls}));
    }

  return (
    <Box
    className="w-[100vw] min-h-[50vh] md:min-h-[60vh] flex flex-col items-center"
 sx={{
    margin: '0 auto', padding: '20px', 
   border: '2px solid #ffff', borderRadius: '8px', display: 'flex', justifyContent: 'center',
   alignItems: 'center'
 }}
>

{
props?.productImg?.productImagesUrls?.length > 0 && props?.productImg?.productImagesUrls.map((url, i)=> 
<div key={i} className='px-2 py-2 my-3 mx-auto border-2 border-gray-700 rounded-md w-[100%] md:w-[350px] '>
    <div className='flex justify-between items-center w-full mb-3'>
        <div className='flex justify-start items-center'>
            <img src={url} width={100} /> 
        </div>
        <button className='font-bold text-gray-900 text-2xl' onClick={()=>removeProductImageFromArray(i)}><DeleteIcon sx={{fontSize: "35px"}} /></button>
    </div>
</div>)
}

</Box>
  )
}

export default UploadFiles
