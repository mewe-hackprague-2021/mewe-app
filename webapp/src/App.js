import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='container-fluid vh-100 d-flex flex-column'>
        <section>
          <h1>App Logo</h1>
        </section>
        <Switch>
          <Route path='/b'>
            Page B
          </Route>
          <Route>
            Page A
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
