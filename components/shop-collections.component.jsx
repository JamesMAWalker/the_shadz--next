import React from 'react';

import NavItem from './nav-item.component';

const collections = [
  { route: 'collections/round', name: 'round' },
  { route: 'collections/square', name: 'square' },
  { route: 'collections/cateye', name: 'cateye' },
  { route: 'collections/aviator', name: 'aviator' },
  { route: 'collections/shield', name: 'shield' },
];

function ShopCollectionsMenu(props) {
  return (
    <div className='shop-menu'>
      {
        collections.map(c => (
          <NavItem route={c.route} >{c.name}</NavItem>
        ))
      }
    </div>
  );
}

export default ShopCollectionsMenu;