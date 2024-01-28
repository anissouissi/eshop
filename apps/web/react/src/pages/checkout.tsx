import { NavLink } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { PaymentForm, ShippingForm } from '@aso/web-checkout-ui';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address1: z.string().min(1, 'Address is required'),
  address2: z.string(),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  state: z.string(),
  postalCode: z.string().min(1, 'Postal code is required'),
  phone: z.string().min(1, 'Phone code is required'),
  cardNumber: z.string().min(1, 'Card number is required'),
  nameOnCard: z.string().min(1, 'Name on card is required'),
  expirationDate: z.string().min(1, 'Expiration date is required'),
  cvc: z.string().min(1, 'CVC is required'),
});

function Checkout() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handlePlaceOrder(values: FieldValues) {
    console.log(values);
  }

  return (
    <form
      autoComplete="off"
      className="flex justify-center w-full m-auto"
      onSubmit={handleSubmit((d) => handlePlaceOrder(d))}
    >
      <div className="card bg-base-100 shadow-xl h-min w-full m-5 md:w-5/6 inline-block">
        <div className="card-body p-6">
          <h2 className="card-title">Your order</h2>
          <div className="flex flex-col md:flex-row items-start w-full">
            <div className="flex flex-col w-full">
              <span className="font-bold my-4">Shipping</span>
              <ShippingForm
                register={register}
                errors={errors}
                isLoading={false}
              />
            </div>
            <div className="divider md:divider-horizontal"></div>
            <div className="flex flex-col w-full">
              <span className="font-bold my-4">Payment</span>
              <PaymentForm
                register={register}
                errors={errors}
                isLoading={false}
              />
            </div>
          </div>
          <div className="card-actions justify-end items-center mt-6">
            <NavLink to="/basket" className="link cursor-pointer">
              Update your basket
            </NavLink>
            <button className="btn btn-primary">Place order</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
