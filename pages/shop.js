import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { PRODUCT_DATA } from '../data/data-store';

import ListItem from '../components/list-item.component';

export function getStaticProps(context) {

  return {
    props: { ...PRODUCT_DATA },
  };
}

const ShopPage = (props) => {

  const products = Object.values(PRODUCT_DATA).slice(0, 6); 

  return (
    <div className='shop'>
      {products.map((p) => (
        <ListItem
          key={uuid()}
          photos={p.productphotos}
          name={p.productName}
          price={p.price}
        />
      ))}
    </div>
  );
};

export default ShopPage;