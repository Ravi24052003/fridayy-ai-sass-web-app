import React, { useEffect, useRef} from 'react'
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ViewCatalog = (props) => {
    const iframeRef = useRef(null);


  const handlePrevious = function(){
    console.log("handlePrev")
    if(props.activeStep === 0){
    console.log("enough can't go previous");
    }
    else{
      props.setActiveStep((preVal)=> preVal - 1)
    }
    
  }


  const handleNext = function(){
    console.log("handleNext");
    console.log(props.contentfulDataArrayLength);
    console.log(props.activeStep);
    if(props.activeStep === (props.contentfulDataArrayLength - 1)){
     console.log("enough cant go next");
    }
    else{
      props.setActiveStep((preVal)=> preVal + 1)
    }
   
  }


    useEffect(()=>{
        const iframeDocument = iframeRef.current.contentWindow.document;
console.log("ViewCatalog.jsx", iframeRef.current);

        iframeDocument.open();
     iframeDocument.write(props.htmlTemplate);
     iframeDocument.close();
    }, [props.htmlTemplate])


  return (
    <>
    <div className=' flex justify-center md:px-5' >

 
 <iframe ref={iframeRef} className='w-[95vw] h-[68vh]' ></iframe>


    </div>
    </>
  )
}

export default ViewCatalog
