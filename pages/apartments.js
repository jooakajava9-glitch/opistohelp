import Layout from '../components/Layout';
import { MapPin, Home, Users } from 'lucide-react';
import Link from 'next/link';

const Apartments = () => {
  const apartments = [
    {
      id: 1,
      name: 'Asuntola 1',
      residents: 45,
      rooms: 15,
      image: '🏠',
      description: 'Moderni asuntola keskellä opistoa',
      x: 30,
      y: 40,
    },
    {
      id: 2,
      name: 'Asuntola 2',
      residents: 38,
      rooms: 13,
      image: '🏢',
      description: 'Hiljainen asuntola lähellä kirjastoa',
      x: 70,
      y: 35,
    },
    {
      id: 3,
      name: 'Asuntola 3',
      residents: 52,
      rooms: 18,
      image: '🏘️',
      description: 'Suurin asuntola kampuksella',
      x: 50,
      y: 70,
    },
    {
      id: 4,
      name: 'Asuntola 4',
      residents: 28,
      rooms: 10,
      image: '🏗️',
      description: 'Uusimmat tilat ja laitteet',
      x: 20,
      y: 65,
    },
  ];

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">🏢 Asuntolat</h1>
        <p className="text-gray-400">Selaa opiston asuntolaa ja niiden huoneita</p>
      </div>

      {/* Map Section */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">📍 Opiston kartta</h2>
        <div className="relative w-full bg-gray-800 rounded-lg overflow-hidden aspect-video border border-gray-700">
          {/* SVG Map Background */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background */}
            <rect width="100" height="100" fill="#1a2332" />
            
            {/* Grid */}
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#334155" strokeWidth="0.1" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Buildings */}
            {apartments.map((apt) => (
              <g key={apt.id}>
                <rect
                  x={apt.x - 8}
                  y={apt.y - 6}
                  width="16"
                  height="12"
                  fill="#00ff88"
                  opacity="0.7"
                  className="hover:opacity-100 cursor-pointer transition-opacity"
                />
                <text
                  x={apt.x}
                  y={apt.y}
                  textAnchor="middle"
                  dy="0.3em"
                  fill="#000"
                  fontSize="2"
                  fontWeight="bold"
                  className="cursor-pointer"
                >
                  {apt.image}
                </text>
              </g>
            ))}

            {/* Other Buildings */}
            <rect x="40" y="10" width="20" height="12" fill="#3b82f6" opacity="0.5" />
            <text x="50" y="16" textAnchor="middle" dy="0.3em" fill="white" fontSize="2">
              🎓
            </text>
            <text x="50" y="25" textAnchor="middle" fill="white" fontSize="1.5">
              Päärakennus
            </text>

            <rect x="60" y="50" width="15" height="20" fill="#f59e0b" opacity="0.5" />
            <text x="67.5" y="60" textAnchor="middle" dy="0.3em" fill="white" fontSize="2">
              🏋️
            </text>
            <text x="67.5" y="72" textAnchor="middle" fill="white" fontSize="1.5">
              Urheiluhalli
            </text>
          </svg>
        </div>
      </div>

      {/* Apartments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {apartments.map((apt) => (
          <Link key={apt.id} href={`/apartment/${apt.id}`}>
            <div className="card-hover">
              <div className="text-4xl mb-4 text-center">{apt.image}</div>
              <h3 className="text-xl font-bold text-white mb-2">{apt.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{apt.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Users size={16} />
                  {apt.residents} asukasta
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Home size={16} />
                  {apt.rooms} huonetta
                </div>
              </div>
              <button className="btn-small w-full">Avaa asuntola</button>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Apartments;