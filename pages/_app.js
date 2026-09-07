import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize demo data if needed
    if (!localStorage.getItem('opistohelp-initialized')) {
      localStorage.setItem('opistohelp-initialized', 'true');
      localStorage.setItem('opistohelp-demodata', JSON.stringify({
        initialized: true,
      }));
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;