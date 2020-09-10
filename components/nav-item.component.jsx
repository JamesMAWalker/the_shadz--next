import React from 'react';
import Link from 'next/link';

function NavItem({ children, route, navPos }) {
  return (
    <Link href={route}>
      <a className={navPos}>{children}</a>
    </Link>
  );
}

export default NavItem;