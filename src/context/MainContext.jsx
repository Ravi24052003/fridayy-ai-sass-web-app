import { Login } from "@mui/icons-material";
import { createContext, useState } from "react"
import Cookies from "universal-cookie";

export const MainContext = createContext(null);

export const MainContextProvider = (props)=>{
const [store, setStore] = useState({});

const [isLogin, setIsLogin] = useState(true);

const [uploadAboutResponse, setUploadAboutResponse] = useState([]);
const [uploadHeroResponse, setUploadHeroResponse] = useState([]);
const [uploadResponse, setUploadResponse] = useState([]);


const [addProductDetails, setAddProductDetails] = useState({}); 

const [isAddProductDetailsComp, setIsAddProductDetailsComp] = useState(false);

const [templateUrl, setTemplateUrl] = useState("");

const [loggedInUserCatalogs, setLoggedInUserCatalogs] = useState({});

const [catalogName, setCatalogName] = useState("");

const [contentfulHtmlTemplate, setContentfulHtmlTemplate] = useState("");

    return (
        <MainContext.Provider value={{ isLogin, setIsLogin, store, setStore, uploadAboutResponse, setUploadAboutResponse, uploadHeroResponse, setUploadHeroResponse, uploadResponse, setUploadResponse, addProductDetails, setAddProductDetails, isAddProductDetailsComp, setIsAddProductDetailsComp, templateUrl, setTemplateUrl, loggedInUserCatalogs, setLoggedInUserCatalogs, catalogName, setCatalogName, contentfulHtmlTemplate, setContentfulHtmlTemplate}}>
          {props.children}
        </MainContext.Provider>
    )
}