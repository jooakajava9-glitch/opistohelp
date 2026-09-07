import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, Euro, Star } from 'lucide-react';

const RoomDetail = () => {
  const router = useRouter();
  const { id, room } = router.query;

  const roomTasks = [
    {
      id: 1,
      title: '🧹 Huoneen siivous',
      description: 'Huoneen perussiivoaminen ja imurointi',
      price: 2,
      deadline: 'Tänään klo 18',
      status: 'available',
      reservedBy: null,
    },
    {
      id: 2,
      title: '🍽️ Tiskit',
      description: 'Kaikkien astikoiden pesu',
      price: 3,
      deadline: 'Tänään klo 20',
      status: 'reserved',
      reservedBy: 'Mikko',
    },
    {
      id: 3,
      title: '👕 Pyykkien vienti',
      description: 'Pyykkien kuljetus pyykkitupaan',
      price: 2,
      deadline: 'Huomenna klo 15',
      status: 'available',
      reservedBy: null,
    },
  ];

  return (
    <Layout>
      <Link href={`/apartment/${id}`} className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-8">
        <ArrowLeft size={20} />
        Takaisin asuntolahintaan
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">🚪 Asuntola {id} – Huone {room}</h1>
        <p className="text-gray-400">Huoneen tehtävät ja tiedot</p>
      </div>

      {/* Room Info Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <p className="text-gray-400 text-sm mb-1">Huonenumero</p>
          <p className="text-3xl font-bold text-green-400">{room}</p>
        </div>
        <div className="card">
          <p className="text-gray-400 text-sm mb-1">Kerros</p>
          <p className="text-3xl font-bold text-blue-400">{Math.floor(room / 100)}</p>
        </div>
        <div className="card">
          <p className="text-gray-400 text-sm mb-1">Asukkaat</p>
          <p className="text-3xl font-bold text-purple-400">2-3</p>
        </div>
      </div>

      {/* Floor Plan */}
      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">📐 Huoneen pohjapiirros</h2>
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 flex justify-center items-center aspect-video">
          <svg className="w-full max-w-md" viewBox="0 0 400 300">
            {/* Room background */}
            <rect x="50" y="50" width="300" height="200" fill="#1a2332" stroke="#00ff88" strokeWidth="3" />
            
            {/* Door */}
            <rect x="330" y="80" width="20" height="60" fill="#8b4513" stroke="#00ff88" strokeWidth="2" />
            <circle cx="345" cy="110" r="8" fill="#ffd700" />
            
            {/* Window */}
            <rect x="60" y="50" width="80" height="15" fill="#87ceeb" stroke="#00ff88" strokeWidth="2" />
            <line x1="100" y1="50" x2="100" y2="65" stroke="#00ff88" strokeWidth="1" />
            <line x1="85" y1="57.5" x2="115" y2="57.5" stroke="#00ff88" strokeWidth="1" />
            
            {/* Bed */}
            <rect x="80" y="80" width="80" height="120" fill="#ff6b6b" opacity="0.7" stroke="#00ff88" strokeWidth="2" />
            <text x="120" y="150" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">🛏️</text>
            
            {/* Desk */}
            <rect x="200" y="90" width="70" height="50" fill="#a0522d" opacity="0.7" stroke="#00ff88" strokeWidth="2" />
            <text x="235" y="120" textAnchor="middle" fill="white" fontSize="14">📚</text>
            
            {/* Wardrobe */}
            <rect x="290" y="130" width="40" height="100" fill="#654321" opacity="0.7" stroke="#00ff88" strokeWidth="2" />
            <text x="310" y="185" textAnchor="middle" fill="white" fontSize="14">👕</text>
          </svg>
        </div>
      </div>

      {/* Tasks for this room */}
      <div className="card">
        <h2 className="text-2xl font-bold text-white mb-6">🛠️ Huoneen tehtävät</h2>
        <div className="space-y-4">
          {roomTasks.map((task) => (
            <div
              key={task.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-white text-lg">{task.title}</h3>
                <span className="text-green-400 font-bold text-xl">+€{task.price}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{task.description}</p>
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {task.deadline}
                </div>
              </div>
              {task.status === 'available' ? (
                <button className="btn-small w-full">Varaa tehtävä</button>
              ) : (
                <div className="bg-gray-700 rounded p-3 text-sm">
                  <p className="text-gray-400">✓ Varannut: <span className="text-white font-semibold">{task.reservedBy}</span></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default RoomDetail;