import { useLogin } from '@aso/web-auth-data-access';
import { FormRowVertical } from '@aso/shared-ui';
import { FormEvent, useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      }
    );
  }

  return (
    <form
      className="px-16 py-10 border border-solid rounded-md overflow-hidden text-2xl"
      onSubmit={handleSubmit}
    >
      <FormRowVertical label="Email address">
        <input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="input input-bordered w-full max-w-xs"
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          className="input input-bordered w-full max-w-xs"
        />
      </FormRowVertical>
      <FormRowVertical>
        <button className="btn" disabled={isLoading}>
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
//   const [errorMessage, dispatch] = useFormState(authenticate, undefined);

//   return (
//     <form action={dispatch} className="space-y-3">
//       <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
//         <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="email"
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 required
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//             </div>
//           </div>
//         </div>
//         <LoginButton />
//         <div
//           className="flex h-8 items-end space-x-1"
//           aria-live="polite"
//           aria-atomic="true"
//         >
//           {errorMessage && (
//             <p className="text-sm text-red-500">{errorMessage}</p>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button className="mt-4 w-full" aria-disabled={pending}>
//       Log in
//     </button>
//   );
// }
