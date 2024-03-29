import { useLogin } from '@aso/web-auth-data-access';
import { FormRowVertical } from '@aso/shared-ui';

import { FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email'),
  password: z.string().min(1, 'Password is required'),
});

export function LoginForm() {
  const { login, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  function handleLogin(values: FieldValues) {
    login(
      { email: values.email, password: values.password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form
      className="px-16 py-10 overflow-hidden"
      onSubmit={handleSubmit((d) => handleLogin(d))}
    >
      <FormRowVertical
        label="Email address"
        error={errors.email?.message as string}
      >
        <input
          {...register('email')}
          type="email"
          id="email"
          autoComplete="username"
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
          autoComplete="current-password"
          disabled={isLoading}
          className="input input-bordered w-full max-w-xs"
        />
      </FormRowVertical>
      <FormRowVertical>
        <button className="btn" disabled={isLoading} type="submit">
          {!isLoading ? (
            'Log in'
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
