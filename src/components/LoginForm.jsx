import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Stack, Button } from '@mui/material';
import axios from 'axios';
import conf from '../../conf/conf';
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    console.log(email, password);
    // event.preventDefault();
    try{
      
      const res = await axios.post(`${conf.backendBaseUrl}/auth/login/`, { email, password });
      console.log(res);

    }
    catch(err){
      console.log(err);
    }
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data); // Handle API response
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
  };

  return (
    <Stack
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%'
      }}
      noValidate
      justifyItems={'center'}
      autoComplete="off"
    >
      <TextField
        sx={{ width: '50%' }}
        required
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        sx={{ width: '50%' }}
        required
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button size='large' variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Stack>
  );
}
