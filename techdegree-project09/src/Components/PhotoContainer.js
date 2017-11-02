import React from 'react';
import Photo from './Photo.js';
import NoResults from './NoResults.js';

  const PhotoContainer = props => {

    let photos;

    // If photos are fetched
    if (typeof props.data.photos !== "undefined") {

      // Stores the photo array
      const result = props.data.photos.photo;

      // If there are any photos show
      if (result.length > 0) {
        photos = result.map((photo, i) => <Photo url={`https://farm${result[i].farm}.staticflickr.com/${result[i].server}/${result[i].id}_${result[i].secret}.jpg`} key={result[i].id} />);
      } else {
        // If there are no photos to show
        photos = <NoResults />
      }
    }

  return(
    <div className="photo-container">
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoContainer;
