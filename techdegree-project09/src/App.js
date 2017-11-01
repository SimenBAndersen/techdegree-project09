import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Container from './Components/Container.js';
import NotFound from './Components/NotFound.js';

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Container} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
