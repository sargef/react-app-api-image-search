import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = (props) => { 
  
  // Render api search results function if search word(s) match images available from fickr api. If none found, render 'Not found' page display
  const results = props.photos;
  let photos;
  if (results.length) {
    photos = results.map(photo => 
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} key={photo.id} alt={props.title} /> );
  } else {
    photos = <NoPhotos />
  }

  return (
    <ul>
      {photos}
    </ul>
    );
  }

export default PhotoList;
