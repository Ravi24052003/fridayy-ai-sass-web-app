import React, { useContext, useEffect, useRef, useState } from 'react'
import { MainContext } from '../context/MainContext'
import { Alert } from '@mui/material';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
import parse from 'html-react-parser';

const ReadyProductCatalog = () => {
    const {templateUrl} = useContext(MainContext);
    const [copied, setCopied] = useState(false);

    const [htmlTemplate, setHtmlTemplate] = useState("");

    const iframeRef = useRef(null);
    const divRef = useRef(null);

    console.log("ReadyProductCatalog.jsx templateUrl", templateUrl?.url);

    const handleCopy = () => {
      navigator.clipboard.writeText(templateUrl?.url)
        .then(() => {
          setCopied(true);
        })
        .catch((error) => {
          console.error('Failed to copy:', error);
          setCopied(false);
        });
    }


    const handleDownloadPdf = () => {

axios.post("http://localhost:8080/conversion", {
  htmlTemplateUrl: ""
})






      // const iframe = iframeRef.current;

      // console.log("iframe contentDocument ", iframe.contentDocument);

      // console.log("iframe contentWindow.document ", iframe.contentWindow.document);

    // (
    //   async function(){
    //    try {
    //      const response = await axios.get("https://image-fridayyai.s3.amazonaws.com/uploaded_images/fgjnert/60/1MTJFdIWqsojr0gwfK3hjp.html");
 
    //      console.log("response.data html template -> ");

    //      setHtmlTemplate(parse(response.data));

    //    } catch (error) {
    //     console.log("unable to get html template error -> ", error);
    //    }

    //   }
    // )();

       console.log("htmlTempate just before html2Canvas method", htmlTemplate);
       console.log("divRef.current just before html2Canvavsfunction", divRef.current);

    // return;

      // const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;


//       html2canvas(divRef.current).then(canvas => {
//         var imgData = canvas.toDataURL('image/jpeg');
//         var imgWidth = 210; 
//         var pageHeight = 297;  
//         var imgHeight = canvas.height * imgWidth / canvas.width;
//         var heightLeft = imgHeight;
//         var doc = new jsPDF('p', 'mm', "a4");
//         var position = 0;

// doc.addImage(imgData, 'jpeg', 0, 0, imgWidth, imgHeight);
// heightLeft -= pageHeight;

// while (heightLeft >= 0) {
//   position = heightLeft - imgHeight;
//   doc.addPage();
//   doc.addImage(imgData, 'jpeg', 0, 0, imgWidth, imgHeight);
//   heightLeft -= pageHeight;
// }
// doc.save( 'file.pdf');
//       });




const element = divRef.current;
const width = element.offsetWidth;
const scale = 2; // Increase the scale to ensure better quality
const pageHeight = 297; // Height of A4 page in mm
let position = 0;

html2canvas(element, {
    width: width * scale,
    scale: scale,
    logging: false, 
    scrollY: 0, 
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight
}).then(canvas => {
    const imgData = canvas.toDataURL('image/jpeg');
    const imgWidth = 210; // Width of A4 page in mm
    let imgHeight = canvas.height * imgWidth / canvas.width;

    const doc = new jsPDF('p', 'mm', "a4");

    while (position < element.offsetHeight) {
        doc.addImage(imgData, 'jpeg', 0, 0, imgWidth, imgHeight);
        position += pageHeight;

        if (position < element.offsetHeight) {
            doc.addPage();
        }
    }

    doc.save('file.pdf');
});


      
    };


    useEffect(()=>{
      (async function () {
        try {
            const response = await axios.get(templateUrl?.url);
            setHtmlTemplate(parse(response.data));
        } catch (error) {
            console.log("Unable to get HTML template", error);
        }
    })();
    }, [])



  return (
    <>

<div className='w-full fixed top-0'>

<div className='flex flex-col items-center'>

{
copied && 
<div className='mb-2'>
<Alert variant="filled" severity="success">
Web link has been successfully copied to clipboard
  </Alert>
</div> 
}

</div>

</div>



    <h1 className=' text-2xl my-7 px-2  text-center'>Congratulations!</h1>

    <h1 className=' text-2xl my-7 px-2 text-center'>Your Product Catalog is Ready!</h1>

<div className=' flex flex-col items-center'>

<button className='w-[90%] py-3 font-semibold my-4 border border-gray-600 text-gray-800 rounded-md' onClick={handleDownloadPdf}>Download as PDF</button>

<button className='w-[90%] py-3 font-semibold my-4 border border-gray-600 text-gray-800 rounded-md' onClick={handleCopy}>Share Web Link</button>

</div>

<div className=' mb-5'>
    <h1 className=' text-center mt-6 mb-2 text-lg'>Catalog Name</h1>

  <div className=' w-[95%] mx-auto border border-gray-400 rounded py-2 px-2'>
    
  <iframe
  ref={iframeRef}
  className=' w-full h-[100vh]'
  //  src="https://image-fridayyai.s3.amazonaws.com/uploaded_images/fgjnert/60/1MTJFdIWqsojr0gwfK3hjp.html"
  // src='../../table.html'

  src={templateUrl?.url}
    >

  </iframe>

  {/* <div ref={divRef}>
    {htmlTemplate}
  </div> */}




  </div>

   
</div>
  
    </>
  )
}

export default ReadyProductCatalog
