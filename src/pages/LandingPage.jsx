import React, { useContext, useEffect, useState } from 'react';
import MyAppBar from '../components/AppBar';
import SignInForm from '../components/SignInForm';
import { Stack} from '@mui/material';
import SignupWrapper from './SignupWrapper';
import { MainContext } from '../context/MainContext';
import Header from '../components/header/Header';
import { useLocation } from 'react-router-dom';
import mainPage from "../assets/main-page.png"

function LandingPage() {
 const {isLogin, setIsLogin} = useContext(MainContext);

 const [isClickedOnCreateAccountBtn, setIsClickedOnCreateAccountBtn] = useState(false);
const [isClickedOnLoginBtn, setIsClickedOnLoginBtn] = useState(false);

 const {state} = useLocation();

 console.log("state", state);

 useEffect(()=>{
if(state?.makeSignupStep1){
setIsLogin(false)
}
 }, [])


 const handleCreateAccountBtn = function(){
     setIsClickedOnCreateAccountBtn(true);
     setIsClickedOnLoginBtn(false);
 }

 const handleLoginBtn = function(){
  setIsClickedOnLoginBtn(true);
  setIsClickedOnCreateAccountBtn(false);
}
  
  return (
    <>
      
        
        {/* {isLogin ? <SignInForm /> : <SignupWrapper state={state}/>} */}


{
  ((isClickedOnCreateAccountBtn === false) && (isClickedOnLoginBtn === false))?

        <div className=' w-full h-[100vh]' style={{ background: "linear-gradient(180deg, #299585, #59ccb7)"}} >
          
        
<div className=' w-full h-[40vh] flex flex-row justify-center items-end'>
<img src={mainPage} width={200} />
</div>

<h1 className=' text-center font-semibold text-2xl text-white'>Let's get started</h1>

<p className=' text-white text-center my-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore consequuntur architecto voluptatibus laboriosam! Explicabo, culpa repellendus alias autem enim deserunt!</p>

<div className=' flex flex-col items-center justify-end w-full h-[30vh]'>
  <button className=" w-[260px] py-3 rounded-3xl font-semibold mb-3" style={{background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)"}} onClick={handleCreateAccountBtn}>Create Account</button>
  <button className='w-[260px] py-3 rounded-3xl font-semibold' style={{background: "linear-gradient(90deg, #FAFAFA, #EBEBEB)"}} onClick={handleLoginBtn}>Login</button>
</div>

</div>

:

<div>
{isClickedOnCreateAccountBtn && <SignupWrapper state={state} setIsClickedOnCreateAccountBtn={setIsClickedOnCreateAccountBtn} isClickedOnCreateAccountBtn={isClickedOnCreateAccountBtn} setIsClickedOnLoginBtn={setIsClickedOnLoginBtn} isClickedOnLoginBtn={isClickedOnLoginBtn} />}
{isClickedOnLoginBtn && <SignInForm setIsClickedOnCreateAccountBtn={setIsClickedOnCreateAccountBtn} isClickedOnCreateAccountBtn={isClickedOnCreateAccountBtn} setIsClickedOnLoginBtn={setIsClickedOnLoginBtn} isClickedOnLoginBtn={isClickedOnLoginBtn}/> }
</div>

}

    </>
  );
}


export default LandingPage;