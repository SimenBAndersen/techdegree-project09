// Modules, config and styles
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../index.css';
import config from '../config.js';
import axios from 'axios';

// Components
import PhotoContainer from './PhotoContainer.js';
import NavMenu from './NavMenu.js';
import Search from './Search.js';
import SearchTag from './SearchTag.js';
import NotFound from './NotFound.js';

class Container extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      isLoading: true
    };
  }

  // When component first mounts: search for photos
  componentDidMount() {
    this.searchPhotos();
  }

  // - Uses the axios module to access Flickr photos
  // - Uses the flickr.photos.search method and provides it with a key and tag
  // - Defualt value: sunsets
  searchPhotos = (tag = "sunsets") => {
    this.setState({
      isLoading: true
    });
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=${config.key}&tags=${tag}&nojsoncallback=1`)
      .then(response => {

        // Updates state with the list of photos
        this.setState({
          photos: response.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching photos', error);
      });
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <div className="container">
            <div className="main-nav">
              <Switch>
                <Route exact path="/" render={ () => <h2>Welcome to the Gallery App using Flickr and React</h2>} />
                <Route exact path="/search" render={ () => <Search onSearch={this.searchPhotos}/> } />
                <Route exact path="/cats" render={ () => <SearchTag title="cats" onClick={this.searchPhotos}/> } />
                <Route exact path="/dogs" render={ () => <SearchTag title="dogs" onClick={this.searchPhotos}/> } />
                <Route exact path="/coffee" render={ () => <SearchTag title="coffee" onClick={this.searchPhotos}/> } />
                <Route component={NotFound} />
              </Switch>
              <NavMenu />
              {
                (this.state.isLoading)
                 ? <p>Loading...</p>
                 : <PhotoContainer data={this.state.photos} />
              }
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Container;
