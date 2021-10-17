import React from 'react';
import { Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import { FancyButton } from '../Buttons';
import PaymentIcon from '@mui/icons-material/Payment';

function HomePage({ logoFullbg, connectorArrows }) {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/home");
  }

  return <>
      <div className="page-home vw-100 vh-100 d-flex flex-column p-4 align-items-stretch">
        <div className="flex-grow-1">
          <Typography variant="h1" className="mb-4">Home page</Typography>
        </div>
      </div>
    </>;
}

export default HomePage;
