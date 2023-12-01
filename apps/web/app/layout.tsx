import { Footer, Navbar } from '@aso/shared-ui';
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
    <html data-theme="light" lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
