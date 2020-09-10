import Link from 'next/link';

import Logo from '../assets/provisional-logo.svg';
import BagIcon from '../assets/icons/cart-indicator--HC.svg';
import HeartIcon from '../assets/icons/wishlist-icon.svg';
import SearchIcon from '../assets/icons/search-icon.svg';
import Divider from '../assets/icons/nav-divider.svg';

function TopNav(props) {
  return (
    <div className='top-nav'>
      <Link href='/' >
        <Logo className='site-logo' />
      </Link>
      <span className='top-nav__items'>
        <SearchIcon />
        <Divider />
        <HeartIcon />
        <Divider />
        <Link href='/account'>
          <a className='nav-item'>ACCOUNT</a>
        </Link>
        <Divider />
        <BagIcon />
      </span>
    </div>
  );
}

export default TopNav;