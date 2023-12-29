import { useSignUp } from '@aso/web-auth-data-access';
import { FormRowVertical } from '@aso/shared-ui';

import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

export function SignUpForm() {
  const { signUp, isLoading } = useSignUp();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleSignUp(values: FieldValues) {
    signUp(
      { name: values.name, email: values.email, password: values.password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form
      autoComplete="off"
      className="px-16 py-10 overflow-hidden"
      onSubmit={handleSubmit((d) => handleSignUp(d))}
    >
      <FormRowVertical label="Name" error={errors.name?.message as string}>
        <input
          {...register('name')}
          type="text"
          id="name"
          autoComplete="off"
          disabled={isLoading}
          className="input input-bordered w-full max-w-xs"
        />
      </FormRowVertical>

      <FormRowVertical
        label="Email address"
        error={errors.email?.message as string}
      >
        <input
          {...register('email')}
          type="email"
          id="email"
          autoComplete="off"
          disabled={isLoading}
          className="input input-bordered w-full max-w-xs"
        />
      </FormRowVertical>

      <FormRowVertical
        label="Password"
        error={errors.password?.message as string}
      >
        <input
          {...register('password')}
          type="password"
          id="password"
          autoComplete="new-password"
          disabled={isLoading}
          className="input input-bordered w-full max-w-xs"
        />
      </FormRowVertical>
      <FormRowVertical>
        <button className="btn" disabled={isLoading} type="submit">
          {!isLoading ? (
            'Create account'
          ) : (
            <>
              <span className="loading loading-spinner"></span>loading
            </>
          )}
        </button>
      </FormRowVertical>
    </form>
  );
}
