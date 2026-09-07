import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="bg-dark min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-900 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-green-400 font-bold mb-4">OpistoHelp</h3>
              <p className="text-gray-400 text-sm">Siistimpi arkea – yhdessä.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Pika-linkit</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><a href="/" className="hover:text-green-400">Etusivu</a></li>
                <li><a href="/tasks" className="hover:text-green-400">Tehtävät</a></li>
                <li><a href="/apartments" className="hover:text-green-400">Asuntolat</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Yhteystiedot</h4>
              <p className="text-gray-400 text-sm">Reisjärven opisto</p>
              <p className="text-gray-400 text-sm">opistohelp@reisjarviopisto.fi</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 OpistoHelp. Kaikki oikeudet pidätetään.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;