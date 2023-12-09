import { PropsWithChildren } from 'react';
import Avatar from '../avatar/avatar';
import Cart from '../cart/cart';
import DarkSwitch from '../dark-switch/dark-switch';

export interface NavbarProps {
  user?: { initials: string };
  productCount?: number;
}

export function Navbar({
  user,
  productCount,
  children: logo,
}: PropsWithChildren<NavbarProps>) {
  return (
    <div className="navbar bg-base-100 sticky top-0 shadow-md z-50">
      <div className="flex-1">{logo}</div>
      <div className="flex-none">
        <DarkSwitch />
        <Cart productsCount={productCount} />
        {user ? (
          <Avatar userInitials={user.initials} />
        ) : (
          <button className="btn btn-ghost">Sign in</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
