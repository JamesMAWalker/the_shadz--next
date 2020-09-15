import { useEffect, useState } from 'react';

import NavItem from './nav-item.component';
import ShopCollectionsMenu from './shop-collections.component';

import DownChevron from '../assets/icons/down-chevron.svg';

const SideNav = () => {
  const [currPage, setCurrPage] = useState('shop');

  useEffect(() => {
    setCurrPage(window.location.pathname.split('/')[1]);
  });

  const pages = [
    // { route: 'shop', name: 'shop' },
    { route: 'collections', name: 'collections' },
    { route: 'shopInsta', name: 'shop insta' },
    { route: 'blog', name: 'blog' },
    { route: 'contact', name: 'contact' },
    { route: '', name: 'home' },
  ];

  let shopActive = currPage === 'shop' ? '--active' : '';

  return (
    <div className='side-nav'>
      <NavItem route='/shop' navPos={`shop-nav side-nav__item${shopActive}`}>
        SHOP <DownChevron className='shop-arrow' /> 
        <ShopCollectionsMenu />
      </NavItem>
      {pages.map((p) => {
        let active = p.route === currPage ? '--active' : ''

        return (
          <NavItem route={`/${p.route}`} navPos={`side-nav__item${active}`}>
            {p.name}
          </NavItem>
        );
      })}
    </div>
  );
};

export default SideNav;
