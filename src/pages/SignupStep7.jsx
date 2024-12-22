import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';
import SignupStep7Loader from "../components/signup-step7/SignupStep7Loader.jsx";

const SignupStep7 = (props) => {

  const [addressLine1ReqErr, setAddressLine1ReqErr] = useState("");
  const [addressLine2ReqErr, setAddressLine2ReqErr] = useState("");
    const [phoneNumberReqErr, setPhoneNumberReqErr] = useState("");


    const handleSubmit = (e)=>{
      e.preventDefault()

      console.log("this is e singupstep5 ",e);
      setAddressLine1ReqErr("");
      setAddressLine2ReqErr("");
      setPhoneNumberReqErr("");
     
      console.log("this is whats number",e.target[4].value);
      console.log("props.storeInputData.storeData", props.storeInputData.storeAddressLine1);
  
     if(!props.storeInputData.storeAddressLine1 || !props.storeInputData.storeAddressLine2 || !props.storeInputData.phoneNumber){
      if(!props.storeInputData.storeAddressLine1){
        setAddressLine1ReqErr("Company's Address Line 1 is Required");
      }

      if(!props.storeInputData.storeAddressLine2){
        setAddressLine2ReqErr("Company's Address Line 2 is Required");
      }

      if(!props.storeInputData.phoneNumber){
        setPhoneNumberReqErr("Phone number is required");
      }

      return;
     }

     props.setFormData(new FormData())

    //  props.formData.append("user_id", cookies.get("token"))
     props.formData.append("instagram_id", props.storeInputData.instagram_id)
    //  props.formData.append("about_store", props.storeInputData.aboutStore)
     props.formData.append("name", props.storeInputData.name)
     props.formData.append("category", props.storeInputData.category)
     props.formData.append("store_address_line_1", props.storeInputData.storeAddress)
    //  props.formData.append("store_address_line_2", props.storeInputData.storeAddressLine2)
     props.formData.append("whatsapp_number", props.storeInputData.whatsappNumber)
     props.formData.append("phone_number", props.storeInputData.phoneNumber)

     props.setFormData(props.formData);

     
    }




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
          }} >Review Details</Typography>
        </Box>


        {/* three dots starts here */}
       
        {/* three dots ends here  */}
 
        <Typography sx={{textAlign: "center", mt: "30px"}} >Check the details entered of your company.</Typography>

         {/* image Box starts here  */}
       
        {/* image box ends here  */}


       {/* form starts here  */}
        <Box
          className=' flex flex-col items-center mt-[50px]'
          onSubmit={handleSubmit}
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <div className=' flex flex-col items-center'>

            {/* single TextField and its label starts here  */}
            <div>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Company Address Line 1</Typography>
              <TextField
              value={props?.storeInputData?.storeAddressLine1}
              onChange={(e)=>{
                setAddressLine1ReqErr("")
                props?.setStoreInputData((preVal)=> ({...preVal, storeAddressLine1: e.target.value}));
            }}
                id="address1"
                required
                variant="outlined"
                name='address1'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Company's Address Line 1"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'>{addressLine1ReqErr}</p>
            </div>
            {/* single TextField and its label ends here  */}



            {/* single TextField and its label starts here  */}
            <div className=' mt-5'>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Company Address Line 2</Typography>
              <TextField
              value={props?.storeInputData?.storeAddressLine2}
              onChange={(e)=>{
                setAddressLine1ReqErr("")
                props?.setStoreInputData((preVal)=> ({...preVal, storeAddressLine2: e.target.value}));
            }}
                id="address2"
                required
                variant="outlined"
                name='address2'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Company's Address Line 2"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'>{addressLine2ReqErr}</p>
            </div>
            {/* single TextField and its label ends here  */}


             {/* single TextField and its label starts here  */}
             <div className=' my-5'>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Your phone Contact</Typography>
              <TextField
              value={props?.storeInputData?.phoneNumber}
              onChange={(e)=>{ 
                setPhoneNumberReqErr("")
                props?.setStoreInputData((preVal)=> ({...preVal, phoneNumber: e.target.value}))
            }}
                id="phone"
                required
                variant="outlined"
                name='phone'
                type='number'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Phone Number"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'>{phoneNumberReqErr}</p>
            </div>
            {/* single TextField and its label ends here  */}


             {/* single TextField and its label starts here  */}
             <div className=' mb-5'>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Your Whatsapp Contact</Typography>
              <TextField
              value={props?.storeInputData?.whatsappNumber}
              onChange={(e)=> props?.setStoreInputData((preVal)=> ({...preVal, whatsappNumber: e.target.value}))}
                id="whatsapp"
                required
                variant="outlined"
                name='whatsapp'
                type='number'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Whatsapp Number"
                style={{ backgroundColor: '#E1E1E1' }}
              />
              <p className=' text-sm text-red-500'></p>
            </div>
            {/* single TextField and its label ends here  */}


             {/* single TextField and its label starts here  */}
             <div>
              <Typography sx={{fontSize: "18px", color: "#299585"}} >Your Instagram ID</Typography>
              <TextField
              value={props?.storeInputData?.instagram_id}
              onChange={(e)=> props?.setStoreInputData((preVal)=> ({...preVal, instagram_id: e.target.value}))}
                id="insta"
                required
                variant="outlined"
                name='insta'
                className='w-[85vw] md:w-[380px]'
                placeholder="Enter Your Social ID"
                style={{ backgroundColor: '#E1E1E1' }}
              />
            </div>
            {/* single TextField and its label ends here  */}

            
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: "50px", mb: "10px" }} >
            <Button
            className=' w-[70vw] md:w-[300px]'
              type="submit"
              sx={{
                background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)",
                color: "black",
                fontWeight: 'bold',
                paddingY: "8px",
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: "20px"
              }}
            >
              Confirm
            </Button>
          </Box>

          <Typography className=' w-[85vw] md:w-[380px]' >You can always change your company Name in <span className=' text-[#299585] font-semibold'>Settings</span>  </Typography>

          </div>

        </Box>
         {/* form ends here  */}


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

export default SignupStep7
