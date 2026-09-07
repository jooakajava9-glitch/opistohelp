import Layout from '../components/Layout';
import Link from 'next/link';
import { useState } from 'react';
import { Clock, MapPin, Euro, Search, Filter } from 'lucide-react';

const Tasks = () => {
  const [filterPrice, setFilterPrice] = useState('all');
  const [filterApartment, setFilterApartment] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allTasks = [
    { id: 1, title: '🧹 Huoneen siivous', desc: 'Huoneen siivoaminen', apt: 'Asuntola 1', room: '104', price: 2, deadline: 'Tänään klo 18', status: 'available' },
    { id: 2, title: '🍽️ Tiskit', desc: 'Astikoiden pesu', apt: 'Asuntola 2', room: '201', price: 3, deadline: 'Tänään klo 20', status: 'available' },
    { id: 3, title: '🗑️ Roskien vienti', desc: 'Roskien kuljetus', apt: 'Asuntola 1', room: '102', price: 1, deadline: 'Tänään klo 20', status: 'reserved' },
    { id: 4, title: '👕 Pyykkien vienti', desc: 'Pyykkien kuljetus pyykkitupaan', apt: 'Asuntola 3', room: '301', price: 2, deadline: 'Huomenna klo 15', status: 'available' },
    { id: 5, title: '🧹 Kylpyhuoneen siivous', desc: 'Kylpyhuoneen puhdistus', apt: 'Asuntola 2', room: '202', price: 3, deadline: 'Huomenna klo 12', status: 'available' },
    { id: 6, title: '🛁 Saunan siivous', desc: 'Saunan pesu ja puhdistus', apt: 'Asuntola 1', room: 'Sauna', price: 4, deadline: 'Perjantaina', status: 'available' },
    { id: 7, title: '📚 Kirjastokierroksesta kerääminen', desc: 'Kirjastosta tarpeelliset asiat', apt: 'Asuntola 4', room: '405', price: 2, deadline: 'Tänään', status: 'reserved' },
    { id: 8, title: '🧺 Liinavaatteiden pesu', desc: 'Lakanoidenjalitinnan', apt: 'Asuntola 3', room: '302', price: 5, deadline: 'Viikonloppuna', status: 'available' },
    { id: 9, title: '🌳 Pihan puhdistus', desc: 'Näkyvien roskat pois', apt: 'Asuntola 2', room: 'Piha', price: 2, deadline: 'Perjantaina', status: 'available' },
    { id: 10, title: '🪟 Ikkunoiden pesu', desc: 'Huoneen ikkunoiden pesu', apt: 'Asuntola 1', room: '103', price: 3, deadline: 'Huomenna', status: 'available' },
    { id: 11, title: '🧹 Käytävän siivous', desc: 'Käytävän imurointi ja pesu', apt: 'Asuntola 4', room: 'Käytävä', price: 2, deadline: 'Tänään', status: 'available' },
    { id: 12, title: '🍕 Ruokarasvien poistaminen', desc: 'Liesienpuhdistus', apt: 'Asuntola 3', room: 'Keittiö', price: 3, deadline: 'Tänään klo 19', status: 'available' },
    { id: 13, title: '🚪 Ovien puhdistus', desc: 'Kaikkien huoneen ovien puhdistus', apt: 'Asuntola 1', room: '105', price: 1, deadline: 'Huomenna', status: 'available' },
    { id: 14, title: '🧼 Sähköpostossa ilmoitukset', desc: 'Sähköpostissa mainostetun tehtävän suoritus', apt: 'Asuntola 2', room: '205', price: 4, deadline: 'Tänään', status: 'reserved' },
    { id: 15, title: '🌡️ Radiatorien puhdistus', desc: 'Radiatorien pölyjen poistaminen', apt: 'Asuntola 4', room: '504', price: 2, deadline: 'Viikonloppuna', status: 'available' },
  ];

  let filteredTasks = allTasks.filter(task => {
    let match = true;
    if (filterPrice !== 'all') {
      const taskPrice = task.price;
      if (filterPrice === '1-2' && (taskPrice < 1 || taskPrice > 2)) match = false;
      if (filterPrice === '3-4' && (taskPrice < 3 || taskPrice > 4)) match = false;
      if (filterPrice === '5+' && taskPrice < 5) match = false;
    }
    if (filterApartment !== 'all' && !task.apt.includes(filterApartment.split(' ')[1])) match = false;
    if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) match = false;
    return match;
  });

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">🛠️ Tehtävämarkkina</h1>
        <p className="text-gray-400">Selaa ja varaa tehtäviä, ansaitse rahaa</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Etsi tehtäviä..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card">
          <label className="text-white font-semibold mb-3 block">💰 Hinta</label>
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500"
          >
            <option value="all">Kaikki hinnat</option>
            <option value="1-2">€1-2</option>
            <option value="3-4">€3-4</option>
            <option value="5+">€5+</option>
          </select>
        </div>
        <div className="card">
          <label className="text-white font-semibold mb-3 block">🏢 Asuntola</label>
          <select
            value={filterApartment}
            onChange={(e) => setFilterApartment(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500"
          >
            <option value="all">Kaikki asuntolat</option>
            <option value="Asuntola 1">Asuntola 1</option>
            <option value="Asuntola 2">Asuntola 2</option>
            <option value="Asuntola 3">Asuntola 3</option>
            <option value="Asuntola 4">Asuntola 4</option>
          </select>
        </div>
        <div className="card">
          <label className="text-white font-semibold mb-3 block">📊 Tila</label>
          <select className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-green-500">
            <option>Kaikki tilat</option>
            <option>Vapaat</option>
            <option>Varatut</option>
          </select>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task.id} className="card">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-2">{task.title}</h3>
                  <p className="text-gray-400 text-sm">{task.desc}</p>
                </div>
                <div className="text-gray-400 text-sm">
                  <p>📍 {task.apt}</p>
                  <p>🚪 Huone {task.room}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Määräaika</p>
                  <p className="text-white font-semibold">{task.deadline}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-center">
                    <p className="text-green-400 font-bold text-2xl">+€{task.price}</p>
                  </div>
                  {task.status === 'available' ? (
                    <button className="btn-small">Varaa</button>
                  ) : (
                    <button className="btn-secondary" disabled>
                      Varattu
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Tehtäviä ei löytynyt suodattimillasi</p>
          </div>
        )}
      </div>

      {/* Create Task Button */}
      <div className="mt-12 text-center">
        <Link href="/create-task">
          <button className="btn-primary text-lg px-8 py-4">
            ➕ Luo uusi tehtävä
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Tasks;