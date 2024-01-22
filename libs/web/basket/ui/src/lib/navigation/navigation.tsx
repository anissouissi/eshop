import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <>
      <NavLink to="/catalog" className="link cursor-pointer">
        Continue shopping
      </NavLink>
      <NavLink to="/checkout">
        <button className="btn btn-primary">Checkout</button>
      </NavLink>
    </>
  );
}

export default Navigation;
