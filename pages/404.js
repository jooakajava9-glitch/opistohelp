// pages/404.js
import Layout from '../components/Layout';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="text-7xl mb-8">😅</div>
        <h1 className="text-5xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-gray-400 mb-8">Sivua ei löytynyt</p>
        <p className="text-gray-400 mb-8 max-w-md">
          Valitettavasti pyytämäsi sivu ei ole olemassa. Palaa etusivulle ja jatka selailua!
        </p>
        <Link href="/">
          <button className="btn-primary text-lg px-8 py-4">
            🏠 Takaisin etusivulle
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;