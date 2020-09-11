import React from 'react';
import NavItem from './nav-item.component';

import InstaIcon from '../assets/icons/insta-icon.svg';
import FBIcon from '../assets/icons/fb-icon.svg';
import PinterestIcon from '../assets/icons/pinterest-icon.svg';


const footerItems = [
  { name: 'newsletter', route: '/news-signup'},
  { name: 'shipping', route: '/info'},
  { name: 'returns', route: '/info'},
  { name: 'contact', route: '/contact'},
  { name: 'faq', route: '/info'},
]

function Footer(props) {
  return (
    <footer className='footer'>
      <div className='footer__links-container'>
        {footerItems.map((i) => (
          <NavItem route={i.route} navPos={'footer__link'}>
            {i.name}
          </NavItem>
        ))}
      </div>
      <div className='footer__icon-container'>
        <a
          href='https://www.instagram.com/shadzsunglasses/'
          className='footer__icon'
        >
          <InstaIcon />
        </a>
        <a
          href='https://www.pinterest.com/pin/create/button/'
          className='footer__icon'
        >
          <PinterestIcon />
        </a>
        <a
          href='https://www.facebook.com/shadzsunglasses/'
          className='footer__icon'
        >
          <FBIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
