import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Avatar, Cart, Footer, Logo, Navbar } from '@aso/shared-ui';

function AppLayout() {
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
          <Avatar userInitials={'AS'}>
            <li>
              <NavLink to="account">My account</NavLink>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </Avatar>
        }
        signInButton={
          <NavLink to="login">
            <button className="btn btn-ghost">Sign in</button>
          </NavLink>
        }
        authenticated={false}
      />
      <main className="flex flex-1 overflow-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
