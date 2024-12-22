import { Box, Button } from '@mui/material';
import React, { useRef } from 'react'

const UploadFile = (props) => {

  return (
    <Box
    className="w-[80%] md:w-[380px] h-[80vw] md:h-[380px]"
 sx={{
    margin: '0 auto', padding: '20px', backgroundColor: 'rgba(41, 159, 133, 0.1)',
   border: '2px dashed #299585', borderRadius: '8px', display: 'flex', justifyContent: 'center',
   alignItems: 'center'
 }}
>

<img src={props?.bannerImg?.bannerImageUrl} alt="" className=' h-[100%]' />

</Box>
  )
}

export default UploadFile
