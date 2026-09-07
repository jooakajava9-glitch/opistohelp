import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    maxParticipants: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tapahtuma luotu! ' + JSON.stringify(formData));
    setFormData({
      title: '',
      description: '',
      location: '',
      date: '',
      time: '',
      maxParticipants: '',
      category: '',
    });
  };

  return (
    <Layout>
      <Link href="/events" className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-8">
        <ArrowLeft size={20} />
        Takaisin tapahtumiin
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">➕ Luo uusi tapahtuma</h1>
        <p className="text-gray-400 mb-8">Jaa yhteiset hetkesi muiden opiskelijoiden kanssa</p>

        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Title */}
          <div>
            <label className="block text-white font-semibold mb-2">Tapahtuman nimi *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="esim. Lentopalloa illalla"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-white font-semibold mb-2">Kategoria</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
            >
              <option value="">Valitse kategoria</option>
              <option value="urheilu">🏆 Urheilu</option>
              <option value="peli">🎮 Pelit</option>
              <option value="sosiaalinen">🎉 Sosiaalinen</option>
              <option value="opintoja">📚 Opintoja</option>
              <option value="kulttuu">🎤 Kulttuuri</option>
              <option value="muu">Muu</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white font-semibold mb-2">Kuvaus</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Kerro mitä tapahtuu ja miksi kannattaa osallistua..."
              rows="4"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-white font-semibold mb-2">Paikka *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="esim. Urheiluhalli"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-white font-semibold mb-2">Päivämäärä *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-white font-semibold mb-2">Kellonaika *</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Max Participants */}
          <div>
            <label className="block text-white font-semibold mb-2">Maksimi osallistujia</label>
            <input
              type="number"
              name="maxParticipants"
              value={formData.maxParticipants}
              onChange={handleChange}
              placeholder="Ilman rajoitusta, jos jätät tyhjäksi"
              min="1"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button type="submit" className="btn-primary flex-1">
              ✅ Luo tapahtuma
            </button>
            <Link href="/events" className="flex-1">
              <button type="button" className="btn-secondary w-full">
                Peruuta
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateEvent;