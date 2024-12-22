import { Box, Button } from '@mui/material';
import React, { useRef } from 'react'

const ChooseFiles = (props) => {
    const productImagesRef = useRef(null);

    const onProductImagesSelection = function(e){
      const iterable = Array.from(e.target.files);

      iterable.map((obj)=>{
          props.setProductImg((preVal)=> ({...preVal, productImagesUrls: [...preVal.productImagesUrls, URL.createObjectURL(obj)] }))

      });

  iterable.map((obj)=>{
      props.setProductImg((preVal)=> ({...preVal, productImages: [...preVal.productImages, obj]}));
  })

  }

    const handleProductImagesRef = function(){
        productImagesRef.current.click()
    }

  return (
    <Box
    className="w-[80%] md:w-[380px] h-[70vw] md:h-[320px]"
 sx={{
    margin: '0 auto', padding: '20px', backgroundColor: 'rgba(41, 159, 133, 0.1)',
   border: '2px dashed #299585', borderRadius: '8px', display: 'flex', justifyContent: 'center',
   alignItems: 'center'
 }}
>

<input ref={productImagesRef} multiple type="file" className=' hidden' onChange={onProductImagesSelection} />

 <Button
 onClick={handleProductImagesRef}
 className='w-[50%] md:w-[190px]'
   variant="contained"
   sx={{
     backgroundColor: '#299585', color: 'white', borderRadius: '50px', textTransform: 'none',
     '&:hover': { backgroundColor: '#299585' }
   }}
 >
   Choose files
 </Button>

</Box>
  )
}

export default ChooseFiles
