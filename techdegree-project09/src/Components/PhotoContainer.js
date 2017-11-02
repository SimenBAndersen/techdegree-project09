import React from 'react';
import Photo from './Photo.js';
import NoResults from './NoResults.js';

  const PhotoContainer = props => {

    let photos;

    if (typeof props.data.photos !== "undefined") {

      const result = props.data.photos.photo;

      if (result.length > 0) {
        photos = result.map((photo, i) => <Photo url={`https://farm${result[i].farm}.staticflickr.com/${result[i].server}/${result[i].id}_${result[i].secret}.jpg`} key={result[i].id} />);
      } else {
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
