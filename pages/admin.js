import Layout from '../components/Layout';
import { useState } from 'react';
import { BarChart, Users, Lock, Trash2, Plus, Edit } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [apartments, setApartments] = useState([
    { id: 1, name: 'Asuntola 1', residents: 45, rooms: 15 },
    { id: 2, name: 'Asuntola 2', residents: 38, rooms: 13 },
    { id: 3, name: 'Asuntola 3', residents: 52, rooms: 18 },
    { id: 4, name: 'Asuntola 4', residents: 28, rooms: 10 },
  ]);

  const stats = {
    totalUsers: 163,
    totalTasks: 47,
    completedTasks: 35,
    totalEarnings: 2150.50,
    activeUsers: 142,
  };

  const users = [
    { id: 1, name: 'Mikko Virtanen', email: 'mikko@opisto.fi', tasks: 12, balance: 45.50, status: 'active' },
    { id: 2, name: 'Anna Koskinen', email: 'anna@opisto.fi', tasks: 8, balance: 32.00, status: 'active' },
    { id: 3, name: 'Jukka Nieminen', email: 'jukka@opisto.fi', tasks: 5, balance: 15.50, status: 'inactive' },
    { id: 4, name: 'Liisa Ahonen', email: 'liisa@opisto.fi', tasks: 20, balance: 78.00, status: 'active' },
    { id: 5, name: 'Petri Mäkinen', email: 'petri@opisto.fi', tasks: 3, balance: 8.00, status: 'active' },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">🛡️ Admin-paneeli</h1>
        <p className="text-gray-400">Hallitse OpistoHelp-palvelua</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-700">
        {[
          { id: 'dashboard', label: '📊 Kojelauta', icon: '📊' },
          { id: 'apartments', label: '🏢 Asuntolat', icon: '🏢' },
          { id: 'users', label: '👥 Käyttäjät', icon: '👥' },
          { id: 'content', label: '📝 Sisältö', icon: '📝' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-semibold transition-colors ${
              activeTab === tab.id
                ? 'text-green-400 border-b-2 border-green-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="card">
              <p className="text-gray-400 text-sm mb-2">Käyttäjät yhteensä</p>
              <p className="text-3xl font-bold text-white">{stats.totalUsers}</p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-sm mb-2">Aktiivia käyttäjiä</p>
              <p className="text-3xl font-bold text-green-400">{stats.activeUsers}</p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-sm mb-2">Tehtäviä yhteensä</p>
              <p className="text-3xl font-bold text-blue-400">{stats.totalTasks}</p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-sm mb-2">Valmiita tehtäviä</p>
              <p className="text-3xl font-bold text-purple-400">{stats.completedTasks}</p>
            </div>
            <div className="card">
              <p className="text-gray-400 text-sm mb-2">Rahaliikenne</p>
              <p className="text-3xl font-bold text-orange-400">€{stats.totalEarnings.toFixed(2)}</p>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6">📈 Viimeaikainen toiminta</h2>
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <p className="text-white font-semibold">Mikko Virtanen suoritti tehtävän "Huoneen siivous"</p>
                <p className="text-gray-400 text-sm">+€2.00 • 5 minuuttia sitten</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <p className="text-white font-semibold">Anna Koskinen varannut tehtävän "Tiskit"</p>
                <p className="text-gray-400 text-sm">€3.00 • 12 minuuttia sitten</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <p className="text-white font-semibold">Uusi tapahtuma luotu: "Lentopalloa"</p>
                <p className="text-gray-400 text-sm">18 osallistujaa • 25 minuuttia sitten</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Apartments Tab */}
      {activeTab === 'apartments' && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button className="btn-primary flex items-center gap-2">
              <Plus size={20} />
              Lisää asuntola
            </button>
          </div>
          <div className="space-y-4">
            {apartments.map(apt => (
              <div key={apt.id} className="card">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white">{apt.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">👥 {apt.residents} asukasta • 🚪 {apt.rooms} huonetta</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-small flex items-center gap-2">
                      <Edit size={16} />
                      Muokkaa
                    </button>
                    <button className="px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors flex items-center gap-2">
                      <Trash2 size={16} />
                      Poista
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-white font-semibold">Nimi</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Sähköposti</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Tehtävät</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Saldo</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Tila</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Toiminnot</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-800">
                    <td className="py-3 px-4 text-white">{user.name}</td>
                    <td className="py-3 px-4 text-gray-400">{user.email}</td>
                    <td className="py-3 px-4 text-white">{user.tasks}</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">€{user.balance.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded text-sm ${
                        user.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {user.status === 'active' ? '🟢 Aktiivinen' : '⚪ Passiivinen'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-red-400 hover:text-red-300 text-sm">
                        <Lock size={16} className="inline mr-1" />
                        Estä
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Content Tab */}
      {activeTab === 'content' && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6">📢 Ilmoitukset</h2>
            <div className="flex justify-end mb-4">
              <button className="btn-primary flex items-center gap-2">
                <Plus size={20} />
                Luo ilmoitus
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-white">⚠️ Pyykkitupa pois käytöstä</h3>
                  <p className="text-gray-400 text-sm mt-1">Julkaisija: Opiston henkilökunta</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-sm text-green-400 hover:text-green-300">Muokkaa</button>
                  <button className="text-sm text-red-400 hover:text-red-300">Poista</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-white mb-6">🎉 Tapahtumat</h2>
            <div className="flex justify-end mb-4">
              <button className="btn-primary flex items-center gap-2">
                <Plus size={20} />
                Luo tapahtuma
              </button>
            </div>
            <div className="text-gray-400">Tapahtumia voidaan hallita normaalissa tapahtuma-osiossa</div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Admin;