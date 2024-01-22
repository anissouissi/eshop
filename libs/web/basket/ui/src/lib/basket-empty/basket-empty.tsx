import { NavLink } from 'react-router-dom';

export function BasketEmpty() {
  return (
    <div className="px-4 py-3">
      <NavLink to="/catalog" className="link cursor-pointer">
        Start shopping
      </NavLink>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some products.
      </p>
    </div>
  );
}

export default BasketEmpty;
