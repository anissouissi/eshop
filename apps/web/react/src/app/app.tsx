import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import { DarkModeProvider } from '@aso/shared-ui';

import Home from '../pages/home';
import Catalog from '../pages/catalog';
import Product from '../pages/product';
import Basket from '../pages/basket';
import Checkout from '../pages/checkout';
import Account from '../pages/account';
import Login from '../pages/login';
import PageNotFound from '../pages/page-not-found';

import AppLayout from '../ui/app-layout';
import ProtectedRoute from '../ui/protected-route';
import SignUp from '../pages/sign-up';
import { CatalogProvider } from '@aso/web-catalog-ui';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <CatalogProvider>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="account" element={<Account />} />
                <Route path="basket" element={<Basket />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="product/:productId" element={<Product />} />

                <Route path="login" element={<Login />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </CatalogProvider>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;
