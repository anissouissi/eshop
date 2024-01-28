import { FormRowVertical } from '@aso/shared-ui';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface PaymentFormProps {
  isLoading: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export function PaymentForm({ isLoading, register, errors }: PaymentFormProps) {
  return (
    <div className="flex flex-col">
      <FormRowVertical
        label="Card number"
        error={errors.cardNumber?.message as string}
      >
        <input
          {...register('cardNumber')}
          type="text"
          id="cardNumber"
          autoComplete="off"
          disabled={isLoading}
          className="input input-bordered w-full"
        />
      </FormRowVertical>
      <FormRowVertical
        label="Name on card"
        error={errors.nameOnCard?.message as string}
      >
        <input
          {...register('nameOnCard')}
          type="text"
          id="nameOnCard"
          autoComplete="off"
          disabled={isLoading}
          className="input input-bordered w-full"
        />
      </FormRowVertical>
      <div className="flex flex-col md:flex-row md:gap-5">
        <FormRowVertical
          label="Expiration date (MM/YY)"
          error={errors.expirationDate?.message as string}
        >
          <input
            {...register('expirationDate')}
            type="text"
            id="expirationDate"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
        <FormRowVertical label="CVC" error={errors.cvc?.message as string}>
          <input
            {...register('cvc')}
            type="text"
            id="cvc"
            autoComplete="off"
            disabled={isLoading}
            className="input input-bordered w-full"
          />
        </FormRowVertical>
      </div>
    </div>
  );
}

export default PaymentForm;
