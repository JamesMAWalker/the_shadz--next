import { useEffect, useState } from 'react';

import NavItem from './nav-item.component';

const SideNav = () => {
  const [currPage, setCurrPage] = useState('shop');

  useEffect(() => {
    setCurrPage(window.location.pathname.split('/')[1]);

    console.log(currPage);
  });

  const pages = [
    { route: 'shop', name: 'shop' },
    { route: 'collections', name: 'collections' },
    { route: 'shopInsta', name: 'shop insta' },
    { route: 'blog', name: 'blog' },
    { route: 'contact', name: 'contact' },
    { route: '', name: 'home' },
  ];

  return (
    <div className='side-nav'>
      {pages.map((p) => {
        let active = p.route === currPage ? '--active' : ''

        return (
          <NavItem route={`/${p.route}`} navPos={`side-nav__item${active}`} >{p.name}</NavItem>
        )
      })}
    </div>
  );
};

export default SideNav;
