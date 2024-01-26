import { StartShoppingButton } from '@aso/shared-ui';
import { NavLink } from 'react-router-dom';

export function BasketEmpty() {
  return (
    <div className="card w-96 h-min bg-base-100">
      <div className="card-body">
        <h2 className="card-title mb-5">Cart empty!</h2>
        <p>Your cart is still empty.</p>
        <p>Start adding some products.</p>
        <div className="card-actions justify-end mt-5">
          <NavLink to="/catalog" className="cursor-pointer">
            <StartShoppingButton />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default BasketEmpty;
