import DarkSwitch from '../dark-switch/dark-switch';

export interface NavbarProps {
  authenticated: boolean;
  logo: React.ReactNode;
  cart: React.ReactNode;
  avatar: React.ReactNode;
  signInButton: React.ReactNode;
}

export function Navbar({
  authenticated,
  logo,
  cart,
  avatar,
  signInButton,
}: NavbarProps) {
  return (
    <div className="navbar bg-base-100 sticky top-0 shadow-md z-50">
      <div className="flex-1">{logo}</div>
      <div className="flex-none">
        <DarkSwitch />
        {cart}
        {authenticated ? avatar : signInButton}
      </div>
    </div>
  );
}

export default Navbar;
