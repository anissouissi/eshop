import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnCheckout = nextUrl.pathname.startsWith('/checkout');
      if (isOnCheckout) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }
      // else if (isLoggedIn) {
      //   console.log(nextUrl);
      //   return Response.redirect(new URL('/checkout', nextUrl));
      // }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
