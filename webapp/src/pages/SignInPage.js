import React from 'react';
import { Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import './SignInPage.css';
import { FancySecondaryButton } from "../Buttons";
import EmailIcon from '@mui/icons-material/Email';
import { FacebookSVG, InstagramSVG } from '../Icons';

function SignInPage({ logoSymbol }) {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/connect-bank");
  }
  const handleSkip = (e) => {
    history.push("/home");
  }

  return <>
      <div className="page-signin vw-100 vh-100 d-flex flex-column p-4 align-items-stretch">
        <img src={logoSymbol} className="my-5" />
        <Typography variant="h1" className="mb-4 text-center">Continue to your account</Typography>
        <FancySecondaryButton variant="contained" className="mb-2" onClick={handleClick}>
          <img src={FacebookSVG} className="manualButtonIcon" />
          Continue with Facebook
        </FancySecondaryButton>
        <FancySecondaryButton variant="contained" className="mb-4" onClick={handleClick}>
          <img src={InstagramSVG} className="manualButtonIcon" />
          Continue with Instagram
        </FancySecondaryButton>
        <FancySecondaryButton variant="contained" startIcon={<EmailIcon />} className="mb-2" onClick={handleClick}>Continue with email</FancySecondaryButton>
        <Typography variant="body2" className="mt-2 text-center"><a href="#" onClick={handleSkip} className="secondary-link">Skip this step</a></Typography>
      </div>
    </>;
}

export default SignInPage;
