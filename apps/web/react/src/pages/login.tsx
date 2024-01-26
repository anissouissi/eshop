import { LoginForm } from '@aso/web-auth-ui';
import { NavLink, useLocation } from 'react-router-dom';

function Login() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-full items-center justify-center gap-4 w-full">
      <div className="border border-solid rounded-md px-2 py-10 ">
        <h1 className="text-2xl font-extrabold text-center">
          Log in to your account
        </h1>
        <LoginForm />
        <div className="divider">OR</div>
        <NavLink
          to={{ pathname: '/sign-up', search: location.search }}
          className="link"
        >
          <p className="text-center">Create account</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Login;
