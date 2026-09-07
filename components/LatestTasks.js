import Link from 'next/link';
import { Clock, MapPin, Euro } from 'lucide-react';

const LatestTasks = () => {
  const tasks = [
    {
      id: 1,
      title: '🧹 Huoneen siivous',
      apartment: 'Asuntola 1',
      room: '104',
      price: 2,
      deadline: 'Tänään klo 18',
      status: 'available',
    },
    {
      id: 2,
      title: '🍽️ Tiskit',
      apartment: 'Asuntola 2',
      room: '201',
      price: 3,
      deadline: 'Huomenna klo 12',
      status: 'available',
    },
    {
      id: 3,
      title: '🗑️ Roskien vienti',
      apartment: 'Asuntola 1',
      room: '102',
      price: 1,
      deadline: 'Tänään klo 20',
      status: 'reserved',
      reservedBy: 'Mika',
    },
    {
      id: 4,
      title: '👕 Pyykkien vienti',
      apartment: 'Asuntola 3',
      room: '301',
      price: 2,
      deadline: 'Huomenna klo 15',
      status: 'available',
    },
  ];

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">🛠️ Uusimmat tehtävät</h2>
        <Link href="/tasks" className="text-green-400 hover:text-green-300 text-sm">
          Näytä kaikki →
        </Link>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-white">{task.title}</h3>
              <span className="text-green-400 font-bold text-lg">+€{task.price}</span>
            </div>
            <div className="space-y-2 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {task.apartment} • Huone {task.room}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {task.deadline}
              </div>
            </div>
            {task.status === 'available' ? (
              <button className="btn-small w-full">Varaa tehtävä</button>
            ) : (
              <div className="bg-gray-700 rounded p-2 text-sm text-gray-300">
                Varannut: {task.reservedBy}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestTasks;