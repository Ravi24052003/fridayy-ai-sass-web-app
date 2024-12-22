// src/SignupModal.js
import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
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

const MobileRegistrationModal = (props) => {

const handleSignupStep1 = function(){
  props.setStoreInputData((preVal)=> ({...preVal, signupStep: 1}))
}

const handleCloseModal = function(){
    props.setIsModalOpen(false)
}

  return (
    <Modal
      open={props.isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-signup-title"
      aria-describedby="modal-signup-description"
    >

      <Box sx={style}>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}} >
        <img src={accountAndCategoryPopup} alt="" />

    <Typography sx={{textAlign: "center", color: "#299585", my: "12px"}} >Great! you have created your account successfully.</Typography>

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

      onClick={handleSignupStep1}
    >
      Proceed
    </Button>

        </Box>
      </Box>


    </Modal>
  );
};

export default MobileRegistrationModal;
