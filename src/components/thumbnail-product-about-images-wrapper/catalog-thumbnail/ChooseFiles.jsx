import { Box, Button } from '@mui/material';
import React, { useRef } from 'react'

const ChooseFiles = (props) => {
    const bannerImageRef = useRef(null);

    const handleBannerImageSelection = function(e){
        props.setBannerImg((preVal)=>({...preVal, bannerImage: e.target.files[0], bannerImageUrl: URL.createObjectURL(e.target.files[0])}));
    console.log("bannerImg",props.bannerImg.bannerImage.name);
    }

    const handleBannerImageRef = function(){
        bannerImageRef.current.click()
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

<input ref={bannerImageRef} type="file" className=' hidden' onChange={handleBannerImageSelection} />

 <Button
 onClick={handleBannerImageRef}
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
