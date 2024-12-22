import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoggedInUserCreateCatalog = () => {
const navigate = useNavigate();

  const navigateToSignupStep1 = function(){
   navigate("/", {
    state: {
      makeSignupStep1: true
    }
   });
  }


  return (
   <>
   <div className='flex flex-col items-center justify-evenly h-[50vh]'>
    <h1>You don't have any catalogs created yet.</h1>

<button className=' bg-gray-200 px-20 rounded-lg py-3' onClick={navigateToSignupStep1}>Create Catalog</button>
   </div>
   </>
  )
}

export default LoggedInUserCreateCatalog
