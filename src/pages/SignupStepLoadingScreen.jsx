import { Box, CircularProgress } from '@mui/material'
import React from 'react'


const SignupStepLoadingScreen = () => {
  return (
    <>
    <h1 className=' text-center text-lg my-8'>Creating AI generated Product Catlogs for you</h1>

    <Box sx={{ display: 'flex' }} className=" flex h-[30vh] justify-center items-center">
      <CircularProgress />
    </Box>
    </>
  )
}

export default SignupStepLoadingScreen