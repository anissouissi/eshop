import Avatar from '../avatar/avatar';
import Cart from '../cart/cart';
import Logo from '../logo/logo';

export interface NavbarProps {
  user?: { initials: string };
  productCount?: number;
}

export function Navbar({ user, productCount }: NavbarProps) {
  return (
    <div className="navbar bg-neutral text-neutral-content rounded-box">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-none">
        <Cart productsCount={productCount} />
        {user ? (
          <Avatar userInitials={user.initials} />
        ) : (
          <button className="btn btn-ghost text-primary">Sign in</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
