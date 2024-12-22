import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

const LoggedInUserDisplayCatalogs = () => {
  const {loggedInUserCatalogs} = useContext(MainContext);
  
  return (
    <div>
      {
        (loggedInUserCatalogs?.links?.length > 0) && loggedInUserCatalogs?.links?.map((url, i)=>
          <div key={i} style={{backgroundImage: `url("${url}")`}} className=' bg-cover bg-no-repeat bg-center w-[260px] mx-auto h-[260px] border border-gray-400 rounded-md px-2 py-2'>
               
               </div> )
      }
    </div>
  )
}

export default LoggedInUserDisplayCatalogs

