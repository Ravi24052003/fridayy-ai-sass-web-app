import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Box, Container } from "@mui/material";
function GoogleSignIn() {
  return (
    <>

     <div className=" flex justify-center">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
</div>

      
    </>
  );
}

export default GoogleSignIn;
