import React from 'react';
import Link from 'next/link';

import { prettyUrltoDBItem } from '../utils/product.utils';

function ListItem(props) {

  return (
    <Link href={`/product?productid=${props.name}`} as={`/shop/${props.name}`}>
      <div className='list-item'>
        <img
          src={props.photos[1]}
          alt={props.name}
          className='list-item__bg-img'
        />
        <img src={props.photos[0]} alt={props.name} className='product-photo' />
        <div className='item-details'>
          <Link
            href={`/product?productid=${props.name}`}
            as={`/shop/${props.name}`}
          >
            <h2 className='product-name'>{prettyUrltoDBItem(props.name)}</h2>
          </Link>
          <span className='price'>{props.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;