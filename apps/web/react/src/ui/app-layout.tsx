import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Avatar, Cart, Footer, Logo, Navbar } from '@aso/shared-ui';
import { useLogout, useUser } from '@aso/web-auth-data-access';
import { getInitials } from '@aso/shared-util';

function AppLayout() {
  const { isLoading, isAuthenticated, user } = useUser();
  const { logout, isLoading: isLoggingOut } = useLogout();

  return (
    <div className="h-screen flex flex-col">
      <Navbar
        logo={
          <NavLink to="/">
            <Logo />
          </NavLink>
        }
        cart={
          <NavLink to="basket">
            <Cart productsCount={0} />
          </NavLink>
        }
        avatar={
          !isLoading &&
          user?.name && (
            <Avatar userInitials={getInitials(user?.name)}>
              <li>
                <NavLink to="account">My account</NavLink>
              </li>
              <li>
                <button disabled={isLoggingOut} onClick={() => logout()}>
                  Logout
                </button>
              </li>
            </Avatar>
          )
        }
        signInButton={
          <NavLink to="login">
            <button className="btn btn-ghost">Sign in</button>
          </NavLink>
        }
        authenticated={isAuthenticated}
      />
      <main className="flex flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
