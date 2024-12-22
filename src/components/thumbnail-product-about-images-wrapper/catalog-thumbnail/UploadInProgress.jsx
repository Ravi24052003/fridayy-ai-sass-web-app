import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useRef } from 'react'

const UploadInProgress = (props) => {

  return (
    <Box
    className="w-[80%] md:w-[380px] h-[80vw] md:h-[380px] flex flex-col items-center justify-center"
 sx={{
    margin: '0 auto', padding: '20px', backgroundColor: 'rgba(41, 159, 133, 0.1)',
   border: '2px dashed #299585', borderRadius: '8px', display: 'flex', justifyContent: 'center',
   alignItems: 'center'
 }}
>

<CircularProgress />
<Typography sx={{mt: "20px", fontSize: "18px"}} >Upload in Progress</Typography>

</Box>
  )
}

export default UploadInProgress
