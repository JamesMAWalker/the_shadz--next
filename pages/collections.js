import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuid } from 'uuid';

import { PRODUCT_DATA } from '../data/data-store';

import ListItem from '../components/list-item.component';



function CollectionsPage(props) {
  const router = useRouter();
  let currCollection = router.asPath.split('/').pop();
  let currDisplay = PRODUCT_DATA.filter(p => p.productCategory.toLowerCase() === currCollection);

  console.log(currCollection);
  console.log(currDisplay);

  return (
    <div className='shop'>
      <h1 className='collection-name'>{currCollection}</h1>
      {
        currDisplay.map(p => (
          <ListItem
            key={uuid()}
            photos={p.productphotos}
            name={p.productName}
            price={p.price}
          />
        ))
      }
    </div>
  );
}

export default CollectionsPage;