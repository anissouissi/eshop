import { SignUpForm } from '@aso/web-auth-ui';

function SignUp() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4 w-full">
      <div className="border border-solid rounded-md px-2 py-10 ">
        <h1 className="text-2xl font-extrabold text-center">
          Create your account
        </h1>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
