import { FormRowVertical } from '@aso/shared-ui';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface ShippingFormProps {
  isLoading: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export function ShippingForm({
  isLoading,
  register,
  errors,
}: ShippingFormProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:gap-5">
        <FormRowVertical
          label="First name"
          error={errors.firstName?.message as string}
        >
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
        <FormRowVertical
          label="Last name"
          error={errors.lastName?.message as string}
        >
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
      </div>
      <FormRowVertical
        label="Address"
        error={errors.address1?.message as string}
      >
        <input
          {...register('address1')}
          type="text"
          id="address1"
          autoComplete="off"
          disabled={isLoading}
          className="input input-bordered w-full"
        />
      </FormRowVertical>
      <FormRowVertical
        label="Apartment, suite, etc."
        error={errors.address2?.message as string}
      >
        <input
          {...register('address2')}
          type="text"
          id="address2"
          autoComplete="off"
          disabled={isLoading}
          className="input input-bordered w-full"
        />
      </FormRowVertical>
      <div className="flex flex-col md:flex-row md:gap-5">
        <FormRowVertical label="City" error={errors.city?.message as string}>
          <input
            {...register('city')}
            type="text"
            id="city"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
        <FormRowVertical
          label="Country"
          error={errors.country?.message as string}
        >
          <input
            {...register('country')}
            type="text"
            id="country"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <FormRowVertical
          label="State / Province"
          error={errors.state?.message as string}
        >
          <input
            {...register('state')}
            type="text"
            id="state"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
        <FormRowVertical
          label="Postal code"
          error={errors.postalCode?.message as string}
        >
          <input
            {...register('postalCode')}
            type="text"
            id="postalCode"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
      </div>
      <FormRowVertical label="Phone" error={errors.phone?.message as string}>
        <input
          {...register('phone')}
          type="text"
          id="phone"
          autoComplete="off"
          disabled={isLoading}
          className="input input-bordered w-full"
        />
      </FormRowVertical>
    </div>
  );
}

export default ShippingForm;
