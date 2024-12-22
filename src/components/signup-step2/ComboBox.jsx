import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MainContext } from '../../context/MainContext';
import { useNavigate } from 'react-router-dom';

export default function ComboBox(props) {

const [product, setProduct] = React.useState("");

  
console.log("ComboBox.jsx product",product)

// console.log(" SignupStep2 combox companyName addressLine1 addressLine2 contactNumber whatsappNumber", formData, formData.get("companyName"), formData.get("addressLine1"), formData.get("addressLine2"), formData.get("contactNumber"), formData.get("product"));

console.log("step2 combox this is product ->", product)



  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top10Products}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} />}
      onChange={(e)=>{
        console.log("Combox.jsx e.target.innerText ", e.target.innerText)

        setProduct(e.target.innerText)

        props.setStoreInputData((preVal)=>({...preVal, category: e.target.innerText, signupStep: 3}))

        // setCategory(e.target.innerText)

        // setSignupStep(3)

      }}
    />
  );
}


const top10Products = [
  { label: 'Consumer Electronics' },
  
  { label: 'Fashion and Apparel' },

  { label: 'Home and Kitchen Appliances' },

  { label: 'Health and Beauty Products' },

  {label: 'Books and Media'},

 {label: 'Toys and Games'},

 {label: 'Home Decor and Furniture'},

 {label: 'Sports and Fitness Equipment'},

 {label: 'Automotive Products'},

 {label: 'Food and Groceries'},
  
];