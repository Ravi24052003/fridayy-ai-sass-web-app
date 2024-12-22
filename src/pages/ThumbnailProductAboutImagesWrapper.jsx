import React, { useState } from 'react'
import CatalogThumbnail from '../components/thumbnail-product-about-images-wrapper/CatalogThumbnail'
import ThumbnailUploaded from "../components/thumbnail-product-about-images-wrapper/ThumbnailUploaded"
import ThumbnailDesc from "../components/thumbnail-product-about-images-wrapper/ThumbnailDesc"
import AIDesc1 from "../components/thumbnail-product-about-images-wrapper/AIDesc1"
import AIDesc from "../components/thumbnail-product-about-images-wrapper/AIDesc"
import AboutDescDone from "../components/thumbnail-product-about-images-wrapper/AboutDescDone"
import Done from "../components/thumbnail-product-about-images-wrapper/Done"

const ThumbnailProductAboutImagesWrapper = () => {
  const [imageUploadStep, setImageUploadStep] = useState(1);

  const [bannerImg, setBannerImg] = useState({
    bannerImageFd: new FormData(),
    bannerImage: {},
    bannerImageUrl: null,
    descAboutCompany: ""
})  

const [productImg, setProductImg] = useState({
  productImagesFd: new FormData(),
  productImages: [],
  productImagesUrls: []
})

  return (
    <div>
      {
        (imageUploadStep === 1) && <CatalogThumbnail setImageUploadStep={setImageUploadStep} bannerImg={bannerImg} setBannerImg={setBannerImg} />
       } 

       {
        (imageUploadStep === 2) && <ThumbnailUploaded setImageUploadStep={setImageUploadStep} bannerImg={bannerImg} setBannerImg={setBannerImg} />
       }

       {
        (imageUploadStep === 3) && <ThumbnailDesc setImageUploadStep={setImageUploadStep} bannerImg={bannerImg} setBannerImg={setBannerImg} />
       }

       {
        (imageUploadStep === 4) && <AIDesc1 setImageUploadStep={setImageUploadStep} bannerImg={bannerImg} setBannerImg={setBannerImg} />
       }

       {
        (imageUploadStep === 5) && <AIDesc setImageUploadStep={setImageUploadStep} bannerImg={bannerImg} setBannerImg={setBannerImg} />
       }

       {
        (imageUploadStep === 6) && <AboutDescDone setImageUploadStep={setImageUploadStep} bannerImg={bannerImg} setBannerImg={setBannerImg} />
       }

       {
        (imageUploadStep === 7) && <Done />
       }
      
    </div>
  )
}

export default ThumbnailProductAboutImagesWrapper
