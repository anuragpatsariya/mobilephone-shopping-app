import Head from 'next/head';
import AdminPage from '../components/AdminPage';

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Mobile Phone Store</title>
      </Head>
      <main style={{ padding: '2rem' }}>
        <AdminPage />
      </main>
    </>
  );
} 