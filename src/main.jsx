import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MainContextProvider } from "./context/MainContext.jsx";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import ProductCatalogs from "./pages/ProductCatalogs.jsx";
import UploadImages from "./pages/UploadImages.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import ProductView from "./pages/ProductView.jsx";
import ReadyProductCatalog from "./pages/ReadyProductCatalog.jsx";
import LoggedInUserCreateCatalog from "./pages/LoggedInUserCreateCatalog.jsx";
import LoggedInUserDisplayCatalog from "./pages/LoggedInUserDisplayCatalogs.jsx";
import GuideWrapper from "./pages/GuideWrapper.jsx";
import ThumbnailProductAboutImagesWrapper from "./pages/ThumbnailProductAboutImagesWrapper.jsx";
import ImagesUpload from "./components/thumbnail-product-about-images-wrapper/ImagesUpload.jsx";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="product-catalogs" element={<ProductCatalogs />} />
      <Route path="upload-images" element={<UploadImages />} />
      <Route path="product-details" element={<ProductDetails />} />
      <Route path="product-view" element={<ProductView />} />
      <Route path="ready-product-catalog" element={<ReadyProductCatalog />} />
      <Route path="login-create-catalog" element={<LoggedInUserCreateCatalog />} />
      <Route path="login-display-catalog" element={<LoggedInUserDisplayCatalog />} />
      <Route path="workflow" element={<GuideWrapper />} />
      <Route path="thumbnail-product-about" element={<ThumbnailProductAboutImagesWrapper />} />
      <Route path="temp-images-upload" element={<ImagesUpload />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainContextProvider>
      
    <GoogleOAuthProvider clientId="36041545915-pt9r3ligo7bmuh7j2ostj3ek6ndtkb5p.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>

    </MainContextProvider>
  </React.StrictMode>
);
