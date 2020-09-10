import React, { useState } from 'react';
import Link from 'next/link'; 

const instaPhotos = [
  '/1-action.jpeg',
  '/2-action.jpg',
  '/3-action.jpg',
  '/4-action.jpg',
  '/5-action.jpg',
  '/6-action.jpg',
  '/7-action.jpg',
  '/8-action.jpg',
  '/9-action.jpg',
  '/10-action.jpg',
  '/11-action.jpg',
  '/12-action.jpg',
  '/15-action.jpg',
]

function shopInsta(props) {
  const [photos, setPhotos] = useState(instaPhotos)

  return (
    <div className='shop-insta'>
      <h1 className='insta-header'>shop insta</h1>
      <div className='insta-grid'>
        {photos.map((p) => (
          <span className="insta-photo" style={{ backgroundImage: `url(${p})` }} ></span>
        ))}
      </div>
    </div>
  );
}

export default shopInsta;