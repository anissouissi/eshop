import { Avatar, Cart, Footer, Logo, Navbar } from '@aso/shared-ui';
import '../styles/global.css';
import Link from 'next/link';
import { getInitials } from '@aso/shared-util';
import { auth, signOut } from '../auth';

export const metadata = {
  title: 'Welcome to eShop',
  description: 'E-commerce web site',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log(session?.user);
  const productsCount = 0;
  const authenticated = session?.user !== undefined;
  let userInitials = '';
  if (authenticated && session?.user?.name) {
    userInitials = getInitials(session.user.name);
  }

  return (
    <html data-theme="light" lang="en">
      <body>
        <Navbar
          logo={
            <Link href="/">
              <Logo />
            </Link>
          }
          cart={
            <Link href="basket">
              <Cart productsCount={productsCount} />
            </Link>
          }
          avatar={
            <Avatar userInitials={userInitials}>
              <li>
                <Link href="account">My account</Link>
              </li>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <li>
                  <button>Logout</button>
                </li>
              </form>
            </Avatar>
          }
          signInButton={
            <Link href="login">
              <button className="btn btn-ghost">Sign in</button>
            </Link>
          }
          authenticated={authenticated}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
