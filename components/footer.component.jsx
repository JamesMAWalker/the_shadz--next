import React from 'react';
import NavItem from './nav-item.component';


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
      <div className="footer__icon-container">
          <span className="footer__icon">PN</span>
          <span className="footer__icon">IG</span>
          <span className="footer__icon">FB</span>
      </div>
    </footer>
  );
}

export default Footer;