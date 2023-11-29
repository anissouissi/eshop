import { Navbar } from '@aso/shared-ui';
import '../styles/global.css';

export const metadata = {
  title: 'Welcome to eShop',
  description: 'E-commerce web site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="eshop" lang="en">
      <body className="p-2">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
