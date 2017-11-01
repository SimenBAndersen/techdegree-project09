import React, { Component } from 'react';
import '../index.css';
import axios from 'axios';
import config from '../config.js';
import SearchForm from './SearchForm.js';
import Categories from './Categories.js';
import Results from './Results.js';

class Container extends Component {

  constructor() {
    super();
    this.state = {
      gallery: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.searchPhotos();
  }

  searchPhotos = (tag = 'sunsets') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=${config.key}&tags=${tag}&nojsoncallback=1`)
      .then(response => {
        this.setState({
          gallery: response.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('Error fetching photos', error);
      });
  }

  render() {
    return (
      <div className="container">
        {
          (this.state.isLoading) ? <p>Loading..</p> :
          <div>
            <SearchForm onSearch={this.searchPhotos}/>
            <Categories onClick={this.searchPhotos}/>
            <Results data={this.state.gallery}/>
          </div>
        }
      </div>
    );
  }
}

export default Container;
