import React from 'react';
import Image from './Image.js';
import NotFound from './NotFound.js'

const Results = (props) => {

  let images;

  if (typeof props.data.photos !== "undefined") {

    const result = props.data.photos.photo;

    if (result.length > 0) {
      images = result.map((image, i) =>
        <Image url={`https://farm${result[i].farm}.staticflickr.com/${result[i].server}/${result[i].id}_${result[i].secret}.jpg`} key={result[i].id}/>
      );
    } else {
      images = <NotFound />
    }

  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {images}
      </ul>
    </div>
  );
}

export default Results;
