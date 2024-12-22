// src/SignupStep3Modal.js
import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import accountAndCategoryPopup from "../../assets/account-and-category-popup.png";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  py: "12px",
  px: "20px"
};

const SignupStep3Modal = (props) => {

const handleSignupStep4 = function(){
  props.setStoreInputData((preVal)=> ({...preVal, signupStep: 4}))
}

  return (
    <Modal
      open={props.isModalOpen}
      onClose={props.handleCloseModal}
      aria-labelledby="modal-signup-title"
      aria-describedby="modal-signup-description"
    >

      <Box sx={style}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}} >
        <img src={accountAndCategoryPopup} alt="" />

    <Typography sx={{textAlign: "center", color: "#299585", my: "12px"}} >Great! Your categories are saved successfully.</Typography>

    <Button
      variant="contained"
      sx={{
        width: '260px',
        py: "12px",  // padding y-axis (top and bottom)
        borderRadius: '24px', // 24px border radius
        fontWeight: 'bold', // equivalent to font-semibold
        mb: "12px", // margin-bottom
        background: 'linear-gradient(90deg, #F8E5A6, #FFF4CD)',
        color: 'black',
        textTransform: "none",
        fontSize: '16px', // Set a font size to ensure styles apply correctly
      }}

      onClick={handleSignupStep4}
    >
      Proceed
    </Button>

        </Box>
      </Box>


    </Modal>
  );
};

export default SignupStep3Modal;
