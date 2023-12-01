import Avatar from '../avatar/avatar';
import Cart from '../cart/cart';
import DarkSwitch from '../dark-switch/dark-switch';
import Logo from '../logo/logo';

export interface NavbarProps {
  user?: { initials: string };
  productCount?: number;
}

export function Navbar({ user, productCount }: NavbarProps) {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Logo />
      </div>
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
