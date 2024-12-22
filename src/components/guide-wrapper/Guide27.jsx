import React, { useState } from 'react';
import Joyride from 'react-joyride';
import { Box, Typography } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

const Guide27 = (props) => {
  const [run, setRun] = useState(true);

  const steps = [
    {
      target: '.onboarding-comp',
      content: "The last section will be containing your contact information as well as the company's address.",
    }
  ];


  const handleGuideStep = function(){
    // props.setGuideStep(5)
  }

  return (
    <>
      <div className='bg-gradient-to-b from-[#299585] to-[#59ccb7] md:pb-[100px]'>
       
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


           {/* four dots starts here */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%', // Ensure full width
            mt: "20px", // Top margin
          }}
        >
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#c3f6ed',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#c3f6ed',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />
          <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#c3f6ed',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />

            <Box
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: '#11342e',
              borderRadius: '50%',
              mx: 1, // Margin between dots
            }}
          />

        </Box>
        {/* four dots ends here  */}


          <Typography sx={{ color: 'white', textAlign: 'center', my: '28px' }}>
            Catalog preview before preparation.
          </Typography>

          {/* Onboarding component start here */}
          <div className='w-[90%] mx-auto md:w-[380px] my-[150px] md:my-[25px]'>

            <div className='py-3 h-[25vh] md:h-[47vh] bg-white flex flex-col items-center px-4 justify-around onboarding-comp'>
                <Typography
                  className='company-name'
                  sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 600 }}
                >
                  Contact Information
                </Typography>
               
               <div>
               <p className=' text-center text-lg' >Whatsapp Number</p>
               <p className=' text-center text-lg' >Contact Number</p>
               <p className=' text-center text-lg' >Social ID</p>
               </div>
               

               <Typography  sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 600 }} >Company Address</Typography>
             
            </div>

          </div>
          {/* Onboarding component ends here */}

          {/* Round right arrow button div starts here */}
          <div className='flex justify-center w-[90%] mx-auto md:w-[380px]'>
            <Box
            onClick={handleGuideStep}
             

              sx={{
                zIndex: 5,
                cursor: 'pointer',
                background: "linear-gradient(90deg, #F8E5A6, #FFF4CD)",
                color: '#00000',
                width: '280px',
                py: "10px",
                fontSize: '25px',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: '50px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Proceed
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

export default Guide27;
