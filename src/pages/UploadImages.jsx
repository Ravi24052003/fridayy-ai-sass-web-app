import React, { useContext, useEffect, useState } from 'react'
import { useRef } from 'react'
import { MainContext } from '../context/MainContext';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import conf from '../../conf/conf';
import Cookies from 'universal-cookie';
import Alert from '@mui/material/Alert';

const UploadImages = () => {
    const [loading, setLoading] = useState(false);
    const [productImagesReqErr, setProductImagesReqErr] = useState("");
    const [catalogThumbnailReqErr, setCatalogThumbnailReqErr] = useState("");
    const [aboutImageReqErr, setAboutImageReqErr] = useState("");
    const [uploadImagesStep, setUploadImagesStep] = useState(1);

    const {state} = useLocation();

    console.log("uploadImages.jsx state from  useLocation", state);
    // console.log("uploadImages.jsx state from  useLocation image_type", state.productCatalogs[state.productCatalogIndex].image_type.includes("about_image"));


    const navigate = useNavigate();

//    const [productImagesFd, setProductImagesFd] = useState(new FormData());
//    const [catalogThumbnailFd, setCatalogThumbnailFd] = useState(new FormData());
//    const [aboutImageFd, setAboutImageFd] = useState(new FormData());

//    const [productImagesUrls, setProductImagesUrls] = useState([]);

   const { store, setUploadAboutResponse, setUploadHeroResponse, setUploadResponse} =
    useContext(MainContext);

    const [productImg, setProductImg] = useState({
        productImagesFd: new FormData(),
        productImages: [],
        productImagesUrls: []
    })


    const [catalogImg, setCatalogImg] = useState({
        catalogThumbnailFd: new FormData(),
        catalogThumbnail: {},
        catalogThumbnailUrl: null
    })


    const [aboutImg, setAboutImg] = useState({
        aboutImageFd: new FormData(),
        aboutImage: {},
        aboutImageUrl: null
    })


    const cookies = new Cookies();
   const tokenFromCookies = cookies.get("token");


    const productImagesRef = useRef(null);
    const catalogThumbnailRef = useRef(null);
    const aboutImageRef = useRef(null);


    const productImagesSelector = function(){
        productImagesRef.current.click()
    }

    const catalogThumbnailSelector = function(){
        catalogThumbnailRef.current.click()
    }

    const aboutImageSelector = function(){
        aboutImageRef.current.click()
    }


    const onProductImagesSelection = function(e){
        // setProductImagesUrls([]);
        setProductImagesReqErr("")

        console.log("onProductImagesSelection", e);
        // console.log("store", store.id);
        // console.log("token", tokenFromCookies);

        console.log("uploadImages.jsx typeof ", typeof e.target.files);

        const iterable = Array.from(e.target.files);

        iterable.map((obj)=>{
            // setProductImagesUrls(preVal => [...preVal, URL.createObjectURL(obj)]);

            setProductImg((preVal)=> ({...preVal, productImagesUrls: [...preVal.productImagesUrls, URL.createObjectURL(obj)] }))

        });

    // productImagesFd.append("images", e.target.files);

    // setProductImages(e.target.files);


    iterable.map((obj)=>{
        // setProductImages((preVal)=> ([...preVal, obj]));

        setProductImg((preVal)=> ({...preVal, productImages: [...preVal.productImages, obj]}));
    })

    // console.log("productImages after setProductImages", productImages);
    
    // productImagesFd.append("store_id", store.id);
    }


    const onCatalogThumbnailSelection = function(e){
        setCatalogThumbnailReqErr("")
        console.log("onThumbnailSelection", e);
        // console.log("store", store.id);
        // console.log("token", tokenFromCookies);

        // setCatalogThumbnailUrl(URL.createObjectURL(e.target.files[0]));
        setCatalogImg((preVal)=> ({...preVal, catalogThumbnailUrl: URL.createObjectURL(e.target.files[0])}))

   
    // setCatalogThumbnail(e.target.files[0]);
    setCatalogImg((preVal)=> ({...preVal, catalogThumbnail: e.target.files[0]}))

    }


    const onAboutImageSelection = function(e){
        setAboutImageReqErr("")
        console.log("onAboutImageSelection", e);
        // console.log("store", store.id);
        // console.log("token", tokenFromCookies);

        // setAboutImageUrl(URL.createObjectURL(e.target.files[0]));
        setAboutImg((preVal)=> ({...preVal, aboutImageUrl: URL.createObjectURL(e.target.files[0])}));

    
    // setAboutImage(e.target.files[0])
      setAboutImg((preVal)=> ({...preVal, aboutImage: e.target.files[0]}))
    }



    // handleUploadImagesSubmit function starts here 
    const handleUploadImagesSubmit = function(){

        setProductImagesReqErr("")
        setAboutImageReqErr("")
        setCatalogThumbnailReqErr("")

    if((productImg.productImages.length == 0) || !catalogImg.catalogThumbnail.name){
    if(productImg.productImages.length == 0){
        setProductImagesReqErr("Product images required");
    }

    if(!catalogImg.catalogThumbnail.name){
        setCatalogThumbnailReqErr("Catalog thumbnail is required");
    }

    if(state?.productCatalogs[state?.productCatalogIndex]?.image_type.includes("about_image") && !aboutImg.aboutImage.name){
        setAboutImageReqErr("About image is required");
    }
  
    return
    }

    if(state?.productCatalogs[state?.productCatalogIndex]?.image_type.includes("about_image") && !aboutImg.aboutImage.name){
        setAboutImageReqErr("About image is required");

        return
    }


    // setProductImagesFd(new FormData());
    setProductImg((preVal)=> ({...preVal, productImagesFd: new FormData()}));

    // setCatalogThumbnailFd(new FormData());
    setCatalogImg((preVal)=> ({...preVal, catalogThumbnailFd: new FormData()}));

    // setAboutImageFd(new FormData());
    setAboutImg((preVal)=> ({...preVal, aboutImageFd: new FormData()}));

    console.log("productImages", productImg.productImages);

    for(var i = 0 ; i < productImg.productImages.length; i++){
        productImg.productImagesFd.append('img1', productImg.productImages[i])
    }

    
    //  productImagesFd.append("store_id", store.id);
    productImg.productImagesFd.append("store_id", store.id);

     catalogImg.catalogThumbnailFd.append("img0", catalogImg.catalogThumbnail);
     catalogImg.catalogThumbnailFd.append("store_id", store.id);

     aboutImg.aboutImageFd.append("img2", aboutImg.aboutImage);
     aboutImg.aboutImageFd.append("store_id", store.id);


        // setProductImagesFd(productImagesFd);
        setProductImg((preVal)=> ({...preVal, productImagesFd: productImg.productImagesFd}));

        // setCatalogThumbnailFd(catalogThumbnailFd);
        setCatalogImg((preVal)=> ({...preVal, catalogThumbnailFd: catalogImg.catalogThumbnailFd}));

        // setAboutImageFd(aboutImageFd);
        setAboutImg((preVal)=> ({...preVal, aboutImageFd: aboutImg.aboutImageFd}));



        (async () => {
            try {
                console.log("inside try handle Upload imagesSubmit aboutImage", aboutImg.aboutImage);
                console.log("inside try handle Upload imagesSubmit catalogThumbanail", catalogImg.catalogThumbnail);
                console.log("inside try handle Upload imagesSubmit productImages", productImg.productImages);

                
                    const requests = [
                        axios.post(`${conf.backendBaseUrl}/api/images/upload_about/`, aboutImg.aboutImageFd, {
                            headers: {
                                Authorization: "token "+tokenFromCookies
                            }
                        }),
                        axios.post(`${conf.backendBaseUrl}/api/images/upload_hero/`, catalogImg.catalogThumbnailFd, {
                            headers: {
                                Authorization: "token "+tokenFromCookies
                            }
                        }),
                        axios.post(`${conf.backendBaseUrl}/api/images/upload/`, productImg.productImagesFd, {
                            headers: {
                                Authorization: "token "+tokenFromCookies
                            }
                        })
                      ];
              
            
      
              // Make parallel requests
              setLoading(true);

              const [aboutResponse, heroResponse, regularResponse] = await Promise.all(requests);
              console.log("uploadImages.jsx aboutResponse",aboutResponse.data)
              console.log("uploadImages.jsx heroResponse",heroResponse.data)
              console.log("uploadImages.jsx regularResponse", regularResponse.data)

              setUploadAboutResponse(aboutResponse.data);
              setUploadHeroResponse(heroResponse.data);
              setUploadResponse(regularResponse.data);

              navigate("/product-details", {
                state: {
                    ...state
                }
              });

              setLoading(false);
              

            } catch (error) {
                setLoading(false);
              console.error('Error fetching images:', error);
            }
          })();
    }
    // handleUploadImagesSubmit function ends here 


    const removeProductImageFromArray = function(i){
    const newProductImagesArr = [...productImg.productImages];
    const newProductImagesUrls = [...productImg.productImagesUrls];
    
    newProductImagesArr.splice(i, 1);
    newProductImagesUrls.splice(i, 1);

    // setProductImages(newProductImagesArr);
    setProductImg((preVal)=> ({...preVal, productImages: newProductImagesArr}));

    // setProductImagesUrls(newProductImagesUrls);
    setProductImg((preVal)=> ({...preVal, productImagesUrls: newProductImagesUrls}));
    }


    const handleUploadImagesStep = function(){
        setProductImagesReqErr("")

        if(productImg?.productImages.length == 0){
            setProductImagesReqErr("Product images required");

            return;
        }

        // if(state?.productCatalogs[state?.productCatalogIndex]?.total_images != productImg?.productImages.length){

        //     setProductImagesReqErr(`Please upload exactly ${state?.productCatalogs[state?.productCatalogIndex]?.total_images} product images`);

        //     return;
        // }

        setUploadImagesStep(2);
    }


  return (
   <>

   <div className='w-full fixed top-0'>

    <div className='flex flex-col items-center'>
  
{
    productImagesReqErr && 
    <div className='mb-2'>
<Alert variant="filled" severity="error">
        {productImagesReqErr}
      </Alert>
    </div> 
}


{
    catalogThumbnailReqErr && 
    <div className=' mb-2'>
<Alert variant="filled" severity="error">
        {catalogThumbnailReqErr}
      </Alert>
    </div>
}

{
    aboutImageReqErr && 
    <div className=' mb-2'>
<Alert variant="filled" severity="error">
        {aboutImageReqErr}
      </Alert>
    </div>
}

</div>

</div>


   {
    loading? <Box sx={{ display: 'flex' }} className=" flex h-[30vh] justify-center items-center">
    <CircularProgress />
  </Box> 

: 

<div className=' flex flex-col items-center w-[90%] mx-auto'>
    <button onClick={()=>{console.log("UploadImages.jsx See all images Info button productImages catalogThumbnail aboutImage catalogThumbnail.name aboutImage.name -> ", productImg.productImages, catalogImg.catalogThumbnail, aboutImg.aboutImage, catalogImg.catalogThumbnail.name, aboutImg.aboutImage.name)}}>See all images info</button>


{

(uploadImagesStep === 1) && 
    //  upload product images div starts here  
<div className='flex flex-col items-center mb-8 mt-12'>

<input type="file" ref={productImagesRef} multiple onChange={onProductImagesSelection}  className=' hidden'/>
<h1 className=' mb-2'>Upload {state?.productCatalogs[state?.productCatalogIndex]?.total_images} Product Images for your catalog</h1>


<div className=' w-[90%] mx-auto flex flex-wrap justify-between items-start'>
{
productImg?.productImagesUrls?.length > 0 && productImg?.productImagesUrls.map((url, i)=> 
<div key={i} className=' px-2 py-2 my-3 mx-3 border-2 border-gray-500 rounded-md'>

    <div className=' flex justify-end items-start w-full mb-3' >
    <button className='font-bold text-gray-900 text-2xl' onClick={()=>removeProductImageFromArray(i)} >&#10005;</button>
    </div>
    
<div className=' flex justify-start items-end w-full'>
<img src={url} width={100} /> 
</div>


</div>)
}
</div>


<button onClick={productImagesSelector} className=' mt-2 border-2 border-gray-400 w-[70%] rounded-md font-semibold py-7'>Upload Product Images</button>
<p className=' text-sm text-red-500'>{productImagesReqErr}</p>

<button className='underline text-blue-600 mt-5' onClick={()=> handleUploadImagesStep()}>Next</button>

</div>
//  upload product images div ends here  
}


{
    (uploadImagesStep === 2) && 


 <div>

{/* upload catalog thumbnail div starts here  */}
<div className='flex flex-col items-center my-8'>
<input type="file" ref={catalogThumbnailRef} onChange={onCatalogThumbnailSelection}  className=' hidden'/>
<h1 className=' mb-2'>Upload 1 banner Image for your catlog</h1>

<img src={catalogImg?.catalogThumbnailUrl} alt="" width={150} />

<button onClick={catalogThumbnailSelector} className=' mt-2 border-2 border-gray-400 w-[75%] rounded-md font-semibold py-7'>Upload Catalogs Thumbnail</button>
<p className=' text-sm text-red-500'>{catalogThumbnailReqErr}</p>
</div>
{/* upload catalog thumbnail div ends here  */}


{/* upload about image div starts here  */}
{
    state?.productCatalogs[state?.productCatalogIndex]?.image_type?.includes("about_image") 
&& 

<div className='flex flex-col items-center my-8'>
<input type="file" ref={aboutImageRef} onChange={onAboutImageSelection} className=' hidden'/>
<h1 className=' mb-2'>This catalog has an About Us section where you can showcase a unique image of your liking. please upload an About image</h1>

<img src={aboutImg?.aboutImageUrl} alt="" width={150} />

<button onClick={aboutImageSelector} className=' mt-2 border-2 border-gray-400 w-[70%] rounded-md font-semibold py-7'>Upload About Image</button>
<p className=' text-sm text-red-500'>{aboutImageReqErr}</p>
</div>
}

{/* upload about image div ends here  */}


<div className=' flex justify-center'>
<button onClick={handleUploadImagesSubmit} className=' border-2 border-gray-400 w-[90%] mt-12 rounded-md font-semibold text-2xl py-7 mb-4'>Submit</button>
</div>


</div>
}


</div>

}


 </>
  )
}

export default UploadImages
