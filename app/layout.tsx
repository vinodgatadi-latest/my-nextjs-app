import { cookies } from 'next/headers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = await cookies();

  const token = cookieStore.get('accessToken');

  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">

        <Header isLoggedIn={!!token} />

        <main className="flex-grow-1 container-fluid py-4">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}