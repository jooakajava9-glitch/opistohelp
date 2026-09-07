import Link from 'next/link';
import { Calendar, MapPin, Users } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: '🏐 Lentopalloa illalla',
      location: 'Urheiluhalli',
      date: 'Tänään',
      time: '19:00',
      participants: 12,
    },
    {
      id: 2,
      title: '🔥 Nuotioilta',
      location: 'Rantasauna',
      date: 'Perjantaina',
      time: '20:00',
      participants: 8,
    },
    {
      id: 3,
      title: '🎮 Pelailta',
      location: 'Oleskelutila',
      date: 'Lauantaina',
      time: '18:00',
      participants: 15,
    },
    {
      id: 4,
      title: '🎬 Elokuvailta',
      location: 'Aula',
      date: 'Sunnuntaina',
      time: '19:30',
      participants: 20,
    },
  ];

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">📅 Tulevat tapahtumat</h2>
        <Link href="/events" className="text-green-400 hover:text-green-300 text-sm">
          Näytä kaikki →
        </Link>
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors"
          >
            <h3 className="font-semibold text-white mb-3">{event.title}</h3>
            <div className="space-y-2 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {event.date} • {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {event.location}
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                {event.participants} osallistujaa
              </div>
            </div>
            <button className="btn-small w-full">Osallistun</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;