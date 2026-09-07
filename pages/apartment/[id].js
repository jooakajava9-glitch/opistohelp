import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeft, Users, Home } from 'lucide-react';

const ApartmentDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const apartments = {
    1: {
      name: 'Asuntola 1',
      residents: 45,
      rooms: 15,
      description: 'Moderni asuntola keskellä opistoa',
      roomList: [
        { number: 101, floor: 1, residents: 2 },
        { number: 102, floor: 1, residents: 2 },
        { number: 103, floor: 1, residents: 3 },
        { number: 104, floor: 1, residents: 2 },
        { number: 105, floor: 1, residents: 2 },
        { number: 201, floor: 2, residents: 2 },
        { number: 202, floor: 2, residents: 2 },
        { number: 203, floor: 2, residents: 2 },
        { number: 204, floor: 2, residents: 3 },
        { number: 205, floor: 2, residents: 2 },
        { number: 301, floor: 3, residents: 2 },
        { number: 302, floor: 3, residents: 2 },
        { number: 303, floor: 3, residents: 2 },
        { number: 304, floor: 3, residents: 2 },
        { number: 305, floor: 3, residents: 3 },
      ],
      tasks: [
        { title: '🧹 Huoneen siivous', price: 2 },
        { title: '🍽️ Tiskit', price: 3 },
        { title: '🗑️ Roskien vienti', price: 1 },
        { title: '👕 Pyykkien vienti', price: 2 },
      ],
    },
    2: {
      name: 'Asuntola 2',
      residents: 38,
      rooms: 13,
      description: 'Hiljainen asuntola lähellä kirjastoa',
      roomList: [
        { number: 201, floor: 2, residents: 2 },
        { number: 202, floor: 2, residents: 2 },
        { number: 203, floor: 2, residents: 3 },
        { number: 204, floor: 2, residents: 2 },
        { number: 205, floor: 2, residents: 2 },
        { number: 301, floor: 3, residents: 2 },
        { number: 302, floor: 3, residents: 2 },
        { number: 303, floor: 3, residents: 2 },
        { number: 304, floor: 3, residents: 2 },
        { number: 305, floor: 3, residents: 2 },
        { number: 401, floor: 4, residents: 2 },
        { number: 402, floor: 4, residents: 3 },
        { number: 403, floor: 4, residents: 2 },
      ],
      tasks: [
        { title: '🧹 Huoneen siivous', price: 2 },
        { title: '🍽️ Tiskit', price: 3 },
        { title: '🗑️ Roskien vienti', price: 1 },
      ],
    },
    3: {
      name: 'Asuntola 3',
      residents: 52,
      rooms: 18,
      description: 'Suurin asuntola kampuksella',
      roomList: Array.from({ length: 18 }, (_, i) => ({
        number: 101 + i,
        floor: Math.floor(i / 6) + 1,
        residents: Math.random() > 0.5 ? 2 : 3,
      })),
      tasks: [
        { title: '🧹 Huoneen siivous', price: 2 },
        { title: '🍽️ Tiskit', price: 3 },
        { title: '🗑️ Roskien vienti', price: 1 },
        { title: '👕 Pyykkien vienti', price: 2 },
        { title: '🧼 Saunan siivous', price: 4 },
      ],
    },
    4: {
      name: 'Asuntola 4',
      residents: 28,
      rooms: 10,
      description: 'Uusimmat tilat ja laitteet',
      roomList: [
        { number: 401, floor: 4, residents: 2 },
        { number: 402, floor: 4, residents: 2 },
        { number: 403, floor: 4, residents: 3 },
        { number: 404, floor: 4, residents: 2 },
        { number: 405, floor: 4, residents: 2 },
        { number: 501, floor: 5, residents: 2 },
        { number: 502, floor: 5, residents: 2 },
        { number: 503, floor: 5, residents: 2 },
        { number: 504, floor: 5, residents: 2 },
        { number: 505, floor: 5, residents: 3 },
      ],
      tasks: [
        { title: '🧹 Huoneen siivous', price: 2 },
        { title: '🍽️ Tiskit', price: 3 },
        { title: '🗑️ Roskien vienti', price: 1 },
        { title: '👕 Pyykkien vienti', price: 2 },
      ],
    },
  };

  const apartment = apartments[id];

  if (!apartment) {
    return (
      <Layout>
        <div className="text-center py-12">
          <p className="text-gray-400">Asuntolaa ei löydy</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Link href="/apartments" className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-8">
        <ArrowLeft size={20} />
        Takaisin asuntolahintaan
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">🏢 {apartment.name}</h1>
        <p className="text-gray-400 mb-4">{apartment.description}</p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-gray-300">
            <Users size={20} />
            <span>{apartment.residents} asukasta</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Home size={20} />
            <span>{apartment.rooms} huonetta</span>
          </div>
        </div>
      </div>

      {/* Floor Plan Visualization */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">📐 Pohjapiirros</h2>
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apartment.roomList.map((room) => (
              <Link key={room.number} href={`/room/${id}/${room.number}`}>
                <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-lg p-4 border-2 border-green-500/30 hover:border-green-500 transition-colors cursor-pointer">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">🚪</p>
                    <p className="text-white font-semibold text-lg mt-2">Huone {room.number}</p>
                    <p className="text-gray-400 text-sm">Kerros {room.floor}</p>
                    <p className="text-gray-500 text-xs mt-2">{room.residents} asukasta</p>
                    <button className="btn-small mt-3 w-full text-xs py-1">Avaa</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Common Tasks */}
      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-6">🛠️ Asuntolan yleiset tehtävät</h2>
        <div className="space-y-3">
          {apartment.tasks.map((task, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex justify-between items-center">
              <span className="text-white font-semibold">{task.title}</span>
              <span className="text-green-400 font-bold">+€{task.price}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ApartmentDetail;