import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';

// Components
import PhotoContainer from './Components/PhotoContainer.js';
import NavMenu from './Components/NavMenu.js';
import Search from './Components/Search.js';
import NotFound from './Components/NotFound.js';

class App extends Component {

  render() {
    return(
      <div>
        <BrowserRouter>
          <div className="container">
            <div className="main-nav">
              <NavMenu />
              <Switch>
                <Route exact path="/" render={ () => <PhotoContainer /> } />
                <Route exact path="/search" render={ () => <Search /> } />
                <Route exact path="/cats" render={ () => <PhotoContainer title="cats" /> } />
                <Route exact path="/dogs" render={ () => <PhotoContainer title="dogs" /> } />
                <Route exact path="/coffee" render={ () => <PhotoContainer title="coffee" /> } />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
