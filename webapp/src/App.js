import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ConnectBankPage from './pages/ConnectBankPage';
import ConnectSocialPage from './pages/ConnectSocialPage';
import ConnectPrefsPage from './pages/ConnectPrefs';
import SplashPage from './pages/SplashPage';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import connectorArrows from './connector-arrows.svg';
import logo from './logo.svg';
import logoFullbg from './logo-fullbg.svg';
import logoSymbol from './logo-symbol.svg';

const App = () => {
  return (
    <Router>
      <div className='vh-100 d-flex flex-column'>
      <Switch>
        <Route path='/connect-prefs/'>
          <ConnectPrefsPage connectorArrows={connectorArrows} logoFullbg={logoFullbg} />
        </Route>
        <Route path='/connect-social/'>
          <ConnectSocialPage connectorArrows={connectorArrows} logoFullbg={logoFullbg} />
        </Route>
        <Route path='/connect-bank/'>
          <ConnectBankPage connectorArrows={connectorArrows} logoFullbg={logoFullbg} />
        </Route>
        <Route path='/sign-in/'>
          <SignInPage logoSymbol={logoSymbol} />
        </Route>
        <Route path='/home/'>
          <HomePage />
        </Route>
        <Route>
          <SplashPage logo={logo} />
        </Route>
      </Switch>
      </div>
    </Router>
  );
};

export default App;
