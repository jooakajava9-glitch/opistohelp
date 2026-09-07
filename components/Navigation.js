import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '🏠 Etusivu', href: '/' },
    { label: '🏢 Asuntolat', href: '/apartments' },
    { label: '🛠️ Tehtävät', href: '/tasks' },
    { label: '📢 Ilmoitukset', href: '/announcements' },
    { label: '📅 Tapahtumat', href: '/events' },
    { label: '👤 Profiili', href: '/profile' },
  ];

  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-green-500/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-400">📚</span>
              <span className="text-xl font-bold text-white">OpistoHelp</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-300 hover:text-green-400 hover:bg-gray-700 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;