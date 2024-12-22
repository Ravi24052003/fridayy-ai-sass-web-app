import React, { useState } from 'react'
import MobileRegistration from './MobileRegistration'
import MobileVerification from "./MobileVerification"

const MobileRegistrationWrapper = (props) => {
const [mobileRegistrationStep, setMobileRegistrationStep] = useState(1);

  return (
    <div>

      {
        (mobileRegistrationStep === 1)?  
      <MobileRegistration setMobileRegistrationStep={setMobileRegistrationStep} setStoreInputData={props.setStoreInputData} setIsMobileRegistration={props.setIsMobileRegistration} />
:
      (mobileRegistrationStep === 2)? 
      <MobileVerification setStoreInputData={props.setStoreInputData} /> : null
    }


    </div>
  )
}

export default MobileRegistrationWrapper
