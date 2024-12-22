import React, { useState } from 'react'
import { Box, Typography, Button, FormControlLabel, Checkbox, RadioGroup, Radio } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import SignupStep3Modal from '../components/signup-step3/SignupStep3Modal';

const SignupStep3 = (props) =>  {
  const [categoryReqErr, setCategoryReqErr] = useState("");

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (event) => {
    setCategoryReqErr("")
    setSelectedCategory(event.target.value);
  };

  const categories = [
    'Consumer Electronics',
    'Fashion and Apparel',
    'Home and Kitchen Appliances',
    'Health and Beauty Products',
    'Books and Media',
    'Toys and Games',
    'Home Decor and Furniture',
    'Sports and Fitness',
    'Automotive Products',
    'Food and Groceries',
    'Office Supplies',
    'Crafts and DIY Materials',
    'Electrical Components',
    'Subscription Services',
  ];


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => setIsModalOpen(false);


  // form onSubmit function starts here 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!selectedCategory){
     setCategoryReqErr("Please select a category");
     return;
    }
    
    props.setStoreInputData((preVal)=> ({...preVal, category: selectedCategory}))
   
    console.log("selectedCategory", selectedCategory);
    
setIsModalOpen(true);
  }
// form onSubmit function ends here

  return (
    <>
      <div style={{ overflowX: "hidden"}} className='pb-[100px]' >
        <Box sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)', display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "relative" }} >
          <Box sx={{
            background: 'linear-gradient(180deg, #299585, #2EA993)', color: "white", width: "40px", height: "40px", fontSize: "25px", fontWeight: "bold", textTransform: "none", my: "10px", ml: "20px", borderRadius: "50%", display: 'flex',
            justifyContent: 'center'  // Horizontally center
          }}>&larr;</Box>
          <Typography sx={{
            fontSize: "24px", color: "#299585", position: "absolute", right: '50%',
            transform: 'translate(50%, 0%)',
            width: "100%",
            textAlign: "center"
          }} >Choose Your Category</Typography>
        </Box>


        {/* three dots starts here */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%', // Ensure full width
            mt: "20px", // Top margin
          }}
        >
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#AEFEEC',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#AEFEEC',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#299585',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
        </Box>
        {/* three dots ends here  */}


         <Typography sx={{textAlign: "center", my: "20px"}} >Select a category under which your business is done.</Typography>
        


       {/* form starts here  */}
        <Box
          className=' flex flex-col items-center'
          onSubmit={handleSubmit}
          component="form"
         
          noValidate
          autoComplete="off"
        >


      {/* map function starts here  */}
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "start", width: "100%"}} >
<div className=' w-full' >
  <Typography sx={{textAlign: "center", color: "red"}} >{categoryReqErr}</Typography>
</div>

<div className='md:flex md:flex-col md:items-center md:w-full'>
<RadioGroup
          value={selectedCategory}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <FormControlLabel
            sx={{ml: "20px"}}
              key={category}
              value={category}
              control={<Radio />}
              label={category}
            />
          ))}
        </RadioGroup>
        </div>

</Box>
{/* map function ends here  */}


          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              sx={{
                background: 'linear-gradient(to right, #299585, #4FC6B0)',
                color: 'white',
                fontWeight: 'bold',
                paddingY: "8px",
                paddingX: "50px",
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: "20px",
                mt: "30px"
              }}
            >
              Done
            </Button>
          </Box>


        </Box>
         {/* form ends here  */}

         <SignupStep3Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} setStoreInputData={props.setStoreInputData} />

        {/* footer starts here  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            pb: "30px",
            pt: "10px",
            boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
            position: 'fixed',
            bottom: 0,
            zIndex: 1000, // Ensure higher z-index
            backgroundColor: 'white', // Ensure background color to avoid transparency issues
          }}
        >
          <HomeIcon sx={{ fontSize: "35px" }} />
          <AccountCircleIcon sx={{ fontSize: "35px", color: "white", bgcolor: "black", borderRadius: "50%" }} />
          <MenuBookIcon sx={{ fontSize: "35px" }} />
          <SettingsIcon sx={{ fontSize: "35px" }} />
        </Box>

      </div>
    </>
  )
}

export default SignupStep3
