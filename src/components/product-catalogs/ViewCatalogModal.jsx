import React, { useContext, useState } from 'react';
import { MainContext } from "../../context/MainContext";

import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  py: "12px",
  px: "20px"
};

const ViewCatalogModal = (props) => {
  const {catalogName, setCatalogName, setContentfulHtmlTemplate, contentfulHtmlTemplate} = useContext(MainContext);

  const handleBackButton = function(){
    console.log("handle back contentgulhtml tempalte ",contentfulHtmlTemplate)
    props.setIsModalOpen(false)
  }

  const handleNextButton = function(){
    console.log("tyhis is next button viewCatalogModel.jsx", catalogName);

setContentfulHtmlTemplate(props.htmlTemplate);

props.setIsModalOpen(false);

props.setIsLoadCatalog1Comp(true);
  }

const handleCloseModal = function(){
    // props.setIsModalOpen(false)
}

  return (
    <Modal
      open={props.isModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-signup-title"
      aria-describedby="modal-signup-description"
    >

      <Box sx={style} className=" w-[80%] md:w-[380px]" >
        {/* Modal content box starts here  */}
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}} >


    <Typography  sx={{textAlign: "center", color: "#299585", my: "12px", fontSize: "18px", fontWeight: 600}} >Enter your catalog name</Typography>

     {/* single TextField starts here  */}
           <div>
              <TextField
              value={catalogName}
               onChange={(e)=>setCatalogName(e.target.value)}
                required
                variant="outlined"
                className='w-[280px] md:w-[330px]'
                style={{ backgroundColor: '#E1E1E1' }}
              />
              {/* <p className=' text-sm text-red-500'>{addressLine1ReqErr}</p> */}
            </div>
            {/* single TextField ends here  */}

{/* two button Box starts here  */}
<Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", mt: "30px"}} >
    <Button
    onClick={handleBackButton}
      variant="contained"
      sx={{
        py: "5px",  // padding y-axis (top and bottom)
        fontWeight: 'bold', // equivalent to font-semibold
        mb: "12px", // margin-bottom
        background: '#e1e1e1',
        color: 'black',
        textTransform: "none",
        fontSize: '16px', 
        // px: "20px"
        width: "38%"
      }}

    >
      Back
    </Button>

    <Button
    onClick={handleNextButton}
      variant="contained"
      sx={{
        py: "5px", 
        fontWeight: 'bold', 
        mb: "12px", 
        background: 'linear-gradient(90deg, #207e69, #4fc6b0)',
        color: 'white',
        textTransform: "none",
        fontSize: '16px', 
        // px: "20px"
        width: "38%"
      }}

    >
      Done
    </Button>
    </Box>
    {/* two button box ends here  */}

        </Box>
{/* Modal content Box ends here  */}

      </Box>


    </Modal>
  );
};

export default ViewCatalogModal;
