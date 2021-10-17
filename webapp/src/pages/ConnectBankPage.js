import React from 'react';
import { Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import { FancyButton } from '../Buttons';
import PaymentIcon from '@mui/icons-material/Payment';

function ConnectSocialPage({ logoFullbg, connectorArrows }) {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/connect-social");
  }
  const handleSkip = (e) => {
    history.push("/home");
  }

  return <>
      <div className="page-connectbank vw-100 vh-100 d-flex flex-column p-4 align-items-stretch">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-center align-items-center my-5">
            <img src={logoFullbg} />
            <img src={connectorArrows} className="connector-arrows" />
            <PaymentIcon className="connector-arrows-icon" />
          </div>
          <Typography variant="h1" className="mb-4">Connect your bank account for better results</Typography>
          <div className="d-flex">
            <LockIcon className="me-3" />
            <div>
              <p className="small pe-1">
                <strong>MeWe will only be able to read your data. </strong>
                MeWe won't have access to your credentials or be able to perform any action from your account.
                This will help us know your habits better to match you with the perfect flatmate.
              </p>
              <a href="#" className="small secondary-link">How MeWe protects your account</a>
            </div>
          </div>
        </div>
        <div class="text-center">
          <FancyButton variant="contained" onClick={handleClick} className="w-100">Connect</FancyButton>
          <Typography variant="body2" className="mt-3 mb-2"><a href="#" onClick={handleSkip} className="secondary-link">Skip this step</a></Typography>
          <Typography variant="body2">You can connect to your bank later in the settings.</Typography>
        </div>
      </div>
    </>;
}

export default ConnectSocialPage;
