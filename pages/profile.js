import Layout from '../components/Layout';
import Link from 'next/link';
import { Star, Wallet, CheckCircle, Calendar, TrendingUp, Mail } from 'lucide-react';

const Profile = () => {
  const user = {
    name: 'Mikko Virtanen',
    avatar: '👤',
    balance: 45.50,
    rating: 4.8,
    completedTasks: 12,
    earnedMoney: 86,
    currentTasks: 3,
    totalEvents: 8,
    bio: 'Opiskelijapoikien silta ja tehtävien taituri! 💪',
  };

  const userTasks = [
    { id: 1, title: '🧹 Huoneen siivous', apartment: 'Asuntola 1', status: 'completed', date: '2024-01-15', amount: 2 },
    { id: 2, title: '🍽️ Tiskit', apartment: 'Asuntola 2', status: 'in-progress', date: 'Tänään', amount: 3 },
    { id: 3, title: '🗑️ Roskien vienti', apartment: 'Asuntola 1', status: 'reserved', date: '2024-01-16', amount: 1 },
  ];

  const eventHistory = [
    { title: '🏐 Lentopalloa illalla', date: 'Tänään', status: 'attending' },
    { title: '🔥 Nuotioilta', date: 'Perjantaina', status: 'attending' },
    { title: '⚽ Futis-ottelu', date: 'Sunnuntaina', status: 'attending' },
  ];

  return (
    <Layout>
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-8 mb-12 border border-green-500/20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-6xl">{user.avatar}</div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{user.name}</h1>
            <p className="text-gray-400 mb-4">{user.bio}</p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <div>
                <p className="text-gray-400 text-sm">Arvosana</p>
                <p className="text-2xl font-bold text-yellow-400">⭐ {user.rating}/5</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Saldo</p>
                <p className="text-2xl font-bold text-green-400">€{user.balance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="card text-center">
          <CheckCircle className="text-blue-400 mx-auto mb-2" size={32} />
          <p className="text-gray-400 text-sm">Tehdyt tehtävät</p>
          <p className="text-3xl font-bold text-white">{user.completedTasks}</p>
        </div>
        <div className="card text-center">
          <Wallet className="text-green-400 mx-auto mb-2" size={32} />
          <p className="text-gray-400 text-sm">Ansaittu</p>
          <p className="text-3xl font-bold text-green-400">€{user.earnedMoney}</p>
        </div>
        <div className="card text-center">
          <Calendar className="text-purple-400 mx-auto mb-2" size={32} />
          <p className="text-gray-400 text-sm">Tulevat tehtävät</p>
          <p className="text-3xl font-bold text-white">{user.currentTasks}</p>
        </div>
        <div className="card text-center">
          <TrendingUp className="text-orange-400 mx-auto mb-2" size={32} />
          <p className="text-gray-400 text-sm">Osallistumiset</p>
          <p className="text-3xl font-bold text-white">{user.totalEvents}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Tasks */}
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-6">🛠️ Omat tehtävät</h2>
          <div className="space-y-4">
            {userTasks.map((task) => (
              <div key={task.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{task.title}</h3>
                    <p className="text-gray-400 text-sm">{task.apartment}</p>
                  </div>
                  <span className="text-green-400 font-bold">+€{task.amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{task.date}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    task.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {task.status === 'completed' ? '✓ Valmis' :
                     task.status === 'in-progress' ? '⏳ Meneillään' :
                     '🔒 Varattu'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-6">📅 Tulevat tapahtumat</h2>
          <div className="space-y-4">
            {eventHistory.map((event, idx) => (
              <div key={idx} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <h3 className="font-semibold text-white mb-1">{event.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{event.date}</span>
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                    ✓ Osallistuu
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="card mt-8">
        <h2 className="text-2xl font-bold text-white mb-6">⚙️ Tilin asetukset</h2>
        <div className="space-y-4">
          <button className="w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white">
            <Mail size={18} className="inline mr-3" />
            Muuta sähköpostia
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white">
            🔐 Muuta salasanaa
          </button>
          <button className="w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-white">
            🔔 Ilmoitusten asetukset
          </button>
          <button className="w-full text-left px-4 py-3 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-colors text-red-400">
            ❌ Poista tili
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;