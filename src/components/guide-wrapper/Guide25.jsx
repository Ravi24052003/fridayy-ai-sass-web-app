import React, { useState } from 'react';
import Joyride from 'react-joyride';
import { Box, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

const Guide25 = (props) => {
  const [run, setRun] = useState(true);

  const steps = [
    { target: '.product-name', content: 'Here will be the product name of your company.' },
    { target: '.image', content: 'Here will be the image of your product' },
    { target: '.description', content: 'Here will be a brief description about your product' },
    { target: '.product-cost', content: 'Here will be the price of your product.' },
  ];

  const handleGuideStep = function(){
    props.setGuideStep(3)
  }

  return (
    <>
      <div className='bg-gradient-to-b from-[#299585] to-[#59ccb7] md:pb-[100px] overflow-x-hidden'>
        <Joyride
          steps={steps}
          continuous
          run={run}
          showProgress
          showSkipButton
          styles={{
            options: {
              arrowColor: '#299585',
              backgroundColor: '#dcf2ef',
              overlayColor: 'rgba(79, 26, 0, 0.4)',
              primaryColor: '#299585',
              textColor: '#00000',
              width: 900,
              zIndex: 1000,
            },
          }}
        />

        <Box style={{ width: '100%', minHeight: '100vh' }}>
          {/* Header Box starts here */}
          <Box
            sx={{
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              bgcolor: '#299585',
            }}
          >
            <Box
              sx={{
                zIndex: 5,
                cursor: 'pointer',
                background: 'white',
                color: '#299585',
                width: '40px',
                height: '40px',
                fontSize: '25px',
                fontWeight: 'bold',
                textTransform: 'none',
                my: '10px',
                ml: '20px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              &larr;
            </Box>
            <Typography
              sx={{
                fontSize: '24px',
                color: 'white',
                position: 'absolute',
                right: '50%',
                transform: 'translate(50%, 0%)',
                width: '100%',
                textAlign: 'center',
              }}
            >
              Catalog Workflow
            </Typography>
          </Box>
          {/* Header box ends here */}

          <Typography sx={{ color: 'white', textAlign: 'center', my: '28px' }}>
            Catalog preview before preparation. Guide 25
          </Typography>

          {/* Onboarding component start here */}
          <div className='flex justify-between items-center overflow-x-hidden md:w-[80vw] md:mx-auto my-[100px]'>
            {/* left div starts here  */}
            <div className='w-[180px] md:w-[20%] bg-white py-2 overflow-x-hidden'>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Product Name</Typography>
              <Box
                sx={{
                  backgroundColor: '#c1ded9',
                  borderRadius: '50%',
                  border: '2px solid black',
                  width: '50px',
                  height: '50px',
                  margin: '10px auto',
                }}
              />
              <Typography sx={{ textAlign: "center", my: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Product Cost</Typography>
            </div>
            {/* left div ends here  */}

            {/* center div starts here  */}
            <div className='w-[50%] md:w-[25%] mx-5 bg-white py-2'>
              <Typography className='product-name' sx={{ textAlign: 'center', fontWeight: 'bold' }}>Product Name</Typography>
              <Box
                className="image"
                sx={{
                  backgroundColor: '#c1ded9',
                  borderRadius: '50%',
                  border: '2px solid black',
                  width: '70px',
                  height: '70px',
                  margin: '10px auto',
                }}
              />
              <Typography className=' description' sx={{ textAlign: "center", my: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra hendrerit.
              </Typography>
              <Typography className=' product-cost' sx={{ textAlign: 'center', fontWeight: 'bold' }}>Product Cost</Typography>
            </div>
            {/* center div ends here  */}

            {/* right div starts here  */}
            <div className='w-[180px] md:w-[20%] bg-white py-2 overflow-x-hidden'>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Product Name</Typography>
              <Box
                sx={{
                  backgroundColor: '#c1ded9',
                  borderRadius: '50%',
                  border: '2px solid black',
                  width: '50px',
                  height: '50px',
                  margin: '10px auto',
                }}
              />
              <Typography sx={{ textAlign: "center", my: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }}>Product Cost</Typography>
            </div>
            {/* right div ends here  */}

          </div>
          {/* Onboarding component ends here */}

          {/* Round right arrow button div starts here */}
          <div className='flex justify-end w-[90%] mx-auto md:w-[80vw]'>
            <Box
            onClick={handleGuideStep}
              sx={{
                zIndex: 5,
                cursor: 'pointer',
                background: 'white',
                color: '#299585',
                width: '40px',
                height: '40px',
                fontSize: '25px',
                fontWeight: 'bold',
                textTransform: 'none',
                my: '10px',
                ml: '20px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              &rarr;
            </Box>
          </div>
          {/* Round right arrow button div ends here */}

          {/* Footer box starts here */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%',
              pb: '30px',
              pt: '10px',
              boxShadow: '0 -4px 6px rgba(32, 126, 105, 0.5)',
              position: 'fixed',
              bottom: 0,
              zIndex: 1000,
              backgroundColor: '#207E69',
            }}
          >
            <HomeIcon sx={{ fontSize: '35px', color: 'white' }} />
            <AccountCircle
              sx={{
                fontSize: '35px',
                color: '#207E69',
                background: 'white',
                borderRadius: '50%',
              }}
            />
            <MenuBookIcon sx={{ fontSize: '35px', color: 'white' }} />
            <SettingsIcon sx={{ fontSize: '35px', color: 'white' }} />
          </Box>
          {/* Footer box ends here */}
        </Box>
      </div>
    </>
  );
};

export default Guide25;
