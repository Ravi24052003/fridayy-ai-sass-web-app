import React, { useContext, useEffect, useState } from 'react'
import SignUp from '../components/SignUpForm'
import { MainContext } from '../context/MainContext'
import SignupStep1 from "./SignupStep1"
import SignupStep2 from "./SignupStep2"
import SignupStep3 from "./SignupStep3"
import SignupStep4 from "./SignupStep4"
import SignupStep5 from "./SignupStep5"
import SignupStep6 from './SignupStep6'
import SignupStep7 from './SignupStep7'

const SignupWrapper = (props) => {
    // const {signupStep, setSignupStep} = useContext(MainContext);

    console.log("props",props);

    const [storeInputData, setStoreInputData] = useState({
      firstName: "",
      lastName: "",
      companyName: "",
      storeAddressLine1: "",
      storeAddressLine2: "",
      phoneNumber: "",
      whatsappNumber: "",
      category: "",
      aboutStore: "",
      instagram_id: "",
      signupStep: 0
    })

    const [formData, setFormData] = useState(new FormData());

    useEffect(()=>{
   if(props?.state?.makeSignupStep1){
    setStoreInputData((preVal)=>({...preVal, signupStep: 1}))
   }
    }, [])
  return (
    <>
    {(storeInputData.signupStep === 0)? <SignUp  setStoreInputData={setStoreInputData} setIsClickedOnLoginBtn={props.setIsClickedOnLoginBtn} isClickedOnLoginBtn={props.isClickedOnLoginBtn} setIsClickedOnCreateAccountBtn={props.setIsClickedOnCreateAccountBtn} isClickedOnCreateAccountBtn={props.isClickedOnCreateAccountBtn} /> : (storeInputData.signupStep === 1)? <SignupStep1 setStoreInputData={setStoreInputData} /> : (storeInputData.signupStep === 2)? <SignupStep2  setStoreInputData={setStoreInputData}  /> : (storeInputData.signupStep === 3)? <SignupStep3 setStoreInputData={setStoreInputData}  /> : (storeInputData.signupStep === 4)? <SignupStep4 storeInputData={storeInputData} setStoreInputData={setStoreInputData}/> : (storeInputData.signupStep === 5)? <SignupStep5 storeInputData={storeInputData} setStoreInputData={setStoreInputData} /> : (storeInputData.signupStep === 6)? <SignupStep6 setStoreInputData={setStoreInputData} /> : (storeInputData.signupStep === 7)? <SignupStep7 storeInputData={storeInputData} setStoreInputData={setStoreInputData} formData={formData} setFormData={setFormData} /> : null }
    </>
  )
}

export default SignupWrapper
