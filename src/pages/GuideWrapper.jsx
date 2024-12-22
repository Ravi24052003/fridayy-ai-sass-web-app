import React, { useState } from 'react'
import Guide24 from "../components/guide-wrapper/Guide24";
import Guide25 from '../components/guide-wrapper/Guide25';
import Guide26 from '../components/guide-wrapper/Guide26';
import Guide27 from '../components/guide-wrapper/Guide27';

const GuideWrapper = () => {
    const [guideStep, setGuideStep] = useState(1);

  return (
    <>
    {
        (guideStep === 1) && <Guide24 setGuideStep={setGuideStep} />
    }

    {
        (guideStep === 2) && <Guide25 setGuideStep={setGuideStep} />
    }

    {
      (guideStep === 3) && <Guide26 setGuideStep={setGuideStep} />
    }

    {
    (guideStep === 4) && <Guide27 setGuideStep={setGuideStep} />
    }
    
    </>
  )
}

export default GuideWrapper
