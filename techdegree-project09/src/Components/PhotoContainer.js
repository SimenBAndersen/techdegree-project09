import React, {Component} from 'react';
import config from '../config.js';
import axios from 'axios';

// Components
import Photo from './Photo.js';
import NoResults from './NoResults.js';

  class PhotoContainer extends Component {

    constructor() {
      super();
      this.state = {
        photosArr: [],
        isLoading: true
      };
    }

    // On mount: Search for provided title if it is given, else search for "sunsets"
    componentDidMount() {
      this.searchPhotos(this.props.title || "sunsets");
    }

    // When Component receives a new prop that is different than the last
    componentWillReceiveProps(nextProps) {
      if (nextProps.title !== this.props.title) {
        this.searchPhotos(nextProps.title);
      }
    }

    // - Uses the axios module to access Flickr photos
    // - Uses the flickr.photos.search method and provides it with a key and tag
    // - Defualt value: sunsets
    searchPhotos = (tag) => {
      this.setState({
        isLoading: true
      });
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=${config.key}&tags=${tag}&nojsoncallback=1`)
        .then(response => {

          let photos;

          // If photos are fetched
          if (typeof response.data.photos !== "undefined") {

            // Stores the photo array
            const result = response.data.photos.photo;

            // If there are any photos show
            if (result.length > 0) {
              photos = result.map((photo, i) => <Photo url={`https://farm${result[i].farm}.staticflickr.com/${result[i].server}/${result[i].id}_${result[i].secret}.jpg`} key={result[i].id} />);
            } else {
              // If there are no photos to show
              photos = <NoResults />
            }
          }

          // Update state with the new photos and loading = done
          this.setState({
              photosArr: photos,
              isLoading: false
          });

        })
        .catch(error => {
          console.log('Error fetching photos', error);
        });
    }

  render() {
    return(
      <div className="photo-container">
        {
          (this.state.isLoading)
           ? <p>Loading...</p>
           : <div><h2>{this.props.title || "sunsets"}</h2><ul>{this.state.photosArr}</ul></div>
        }
      </div>
    );
  }
}

export default PhotoContainer;
