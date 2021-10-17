import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './SplashPage.css';

function SplashPage({ logo }) {

  // Redirect to another page after timeout
  const history = useHistory();
  useEffect(() => {
    let interval = setInterval(() => {
      history.push("/sign-in");
    }, 2000);
    return () => interval ? clearInterval(interval) : null;
  }, [history]);

  return <>
      <div className="page-splash vw-100 vh-100 d-flex justify-content-center">
        <img src={logo} />
      </div>
    </>;
}

export default SplashPage;
