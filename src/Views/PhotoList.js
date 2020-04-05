import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoList = (props) => { 
  
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