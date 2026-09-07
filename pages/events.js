import Layout from '../components/Layout';
import Link from 'next/link';
import { Calendar, MapPin, Users, Check } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
  const [attending, setAttending] = useState({});

  const events = [
    {
      id: 1,
      title: '🏐 Lentopalloa illalla',
      description: 'Tulee mielenkiintoinen lentopalloilta! Kaikille avoin peli.',
      location: 'Urheiluhalli',
      date: 'Tänään',
      time: '19:00',
      participants: 12,
      organizer: 'Mikko',
      image: '🏐',
    },
    {
      id: 2,
      title: '🔥 Nuotioilta',
      description: 'Viikon pääatto vietetään nuotiolla. Hyviä välipaloja ja hyvää seuraa!',
      location: 'Rantasauna',
      date: 'Perjantaina',
      time: '20:00',
      participants: 8,
      organizer: 'Anna',
      image: '🔥',
    },
    {
      id: 3,
      title: '🎮 Pelailta',
      description: 'Pelikonsolissa ja tietokoneilla. FIFA, Fortnite ja muuta hauskaa.',
      location: 'Oleskelutila',
      date: 'Lauantaina',
      time: '18:00',
      participants: 15,
      organizer: 'Jukka',
      image: '🎮',
    },
    {
      id: 4,
      title: '🎬 Elokuvailta',
      description: 'Kotimaisen elokuvan katselu yhdessä. Popcorni ja juoma tarjolla!',
      location: 'Aula',
      date: 'Sunnuntaina',
      time: '19:30',
      participants: 20,
      organizer: 'Liisa',
      image: '🎬',
    },
    {
      id: 5,
      title: '🍕 Pizza-ilta',
      description: 'Yhteinen pizza-juhlat. Kaikille omansa valinneet.',
      location: 'Ruokasali',
      date: 'Maanantaina',
      time: '18:00',
      participants: 35,
      organizer: 'Petri',
      image: '🍕',
    },
    {
      id: 6,
      title: '🎤 Lauluilta',
      description: 'Karaoken ääressä. Älä häpeä, kaikki osallistuvat!',
      location: 'Baarila',
      date: 'Keskiviikkona',
      time: '20:00',
      participants: 18,
      organizer: 'Maria',
      image: '🎤',
    },
    {
      id: 7,
      title: '🚴 Pyöräretki',
      description: 'Maalaistielle pyöränä. Mukaan pullot ja snäksiä.',
      location: 'Pääportaali',
      date: 'Perjantai-iltapäivä',
      time: '15:00',
      participants: 10,
      organizer: 'Sami',
      image: '🚴',
    },
    {
      id: 8,
      title: '⚽ Futis-ottelu',
      description: 'Asuntola 1 vs Asuntola 2. Ottelun jälkeen juhlat.',
      location: 'Urheilukenttä',
      date: 'Sunnuntai-iltapäivä',
      time: '14:00',
      participants: 22,
      organizer: 'Tero',
      image: '⚽',
    },
  ];

  const handleAttending = (eventId) => {
    setAttending(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">📅 Tapahtumat</h1>
        <p className="text-gray-400">Osallistuu yhteisiin tapahtumiin ja tutustuu muihin opiskelijoihin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div className="text-5xl mb-4 text-center">{event.image}</div>
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{event.description}</p>
            
            <div className="space-y-2 mb-6 text-gray-400 text-sm border-t border-gray-700 pt-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{event.date} • {event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{event.participants} osallistujaa</span>
              </div>
            </div>

            {attending[event.id] ? (
              <button
                onClick={() => handleAttending(event.id)}
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                <Check size={20} />
                Osallistut
              </button>
            ) : (
              <button
                onClick={() => handleAttending(event.id)}
                className="btn-primary w-full"
              >
                Osallistun
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Create Event Button */}
      <div className="mt-12 text-center">
        <Link href="/create-event">
          <button className="btn-primary text-lg px-8 py-4">
            ➕ Luo uusi tapahtuma
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Events;