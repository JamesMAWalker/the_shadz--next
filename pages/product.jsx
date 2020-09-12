import React, { useState, useEffect } from 'react';
import { withRouter, useRouter } from 'next/router';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

import { PRODUCT_DATA } from '../data/data-store';
import { prettyUrltoDBItem } from '../utils/product.utils';

import InstaIcon from '../assets/icons/insta-icon.svg';
import FBIcon from '../assets/icons/fb-icon.svg';
import PinterestIcon from '../assets/icons/pinterest-icon.svg';
import HeartIcon from '../assets/icons/wishlist-icon.svg';

function ProductSingle(props) {
  const [currProduct, setCurrProduct] = useState(PRODUCT_DATA[0])
  const [crumbs, setCrumbs] = useState(['', '', '']) 
  const [selectedColor, setSelectedColor] = useState('');
  
  useEffect(() => {
    let pageQuery = window.location.pathname.split('/').pop();
    let pathQuery = window.location.pathname.split('/');
    let currItem = PRODUCT_DATA.find(
      (e) => e.productName === pageQuery
    );
    setCurrProduct(currItem)
    setCrumbs(pathQuery)  

  }, [])

  const handleSelect = (e) => {
    setSelectedColor(e.currentTarget.id)
  }


  return (
    <div className='single-product'>
      <div className='bread-crumbs'>
        {crumbs.slice(0, 2).map((c) => (
          <span className='crumb'>&nbsp;<Link href={`/${c}`}><a>{c}</a></Link>&nbsp;//</span>
        ))}
        <span className='crumb--active'>&nbsp;{currProduct.productName}</span>
      </div>
      <div className='single-product__photos'>
        <img
          className='single-product__photo'
          src={currProduct.productphotos[0]}
          alt={currProduct.productName}
        />
        <div className='single-product__thumbnail-container'>
          <span className='thumbnail'></span>
          <span className='thumbnail'></span>
          <span className='thumbnail'></span>
          <span className='thumbnail'></span>
          <span className='thumbnail'></span>
        </div>
      </div>
      <div className='single-product__details'>
        <div className='single-product__header'>
          <h2 className='single-product__title'>
            {prettyUrltoDBItem(currProduct.productName)}
          </h2>
          <p className='single-product__price'>${currProduct.price}</p>
        </div>
        <div className='single-product__color-choices'>
          {currProduct.colors.map((c) => {
            let colorName = c.name;
            let colorBlock = c.color;

            let isActive = colorName === selectedColor ? 'color-container--active' : ''; 

            return (
              <div id={c.name} className={`color-container ${isActive}`} onClick={handleSelect} key={uuid()}>
                <span className='color-name'>{colorName}</span>
                <span
                  style={{ backgroundColor: `${colorBlock}` }}
                  className='color-block'
                ></span>
              </div>
            );
          })}
        </div>
        <div className='single-product__insta-container'>
          {currProduct.productphotos.map((p) => (
            <span
              style={{ backgroundImage: `url(${p})` }}
              alt=''
              className='insta-photo'
            />
          ))}
        </div>
        <div className='single-product__actions-container'>
          <div className='share'>
            <p className='share-text'>SHARE</p>
            <span className='icons-container'>
              <a href='#' className='icon'>
                <InstaIcon />
              </a>
              <a href='#' className='icon'>
                <FBIcon />
              </a>
              <a href='#' className='icon'>
                <PinterestIcon />
              </a>
            </span>
          </div>
          <div className='add-wishlist'>
            <p className='wishlist-text'>ADD TO WISHLIST</p>
            <a href='#' className='wishlist-icon'>
              <HeartIcon />
            </a>
          </div>
        </div>
        <div className='single-product__description-container'>
          <p className='description'>{currProduct.description}</p>
          <ul className='features-list'>
            {currProduct.features.map((f) => (
              <li className='feature'>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductSingle);