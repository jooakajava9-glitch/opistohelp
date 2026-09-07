import Layout from '../components/Layout';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    apartment: '',
    room: '',
    price: '',
    deadline: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Tehtävä luotu! ' + JSON.stringify(formData));
    setFormData({
      title: '',
      description: '',
      apartment: '',
      room: '',
      price: '',
      deadline: '',
      category: '',
    });
  };

  return (
    <Layout>
      <Link href="/tasks" className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-8">
        <ArrowLeft size={20} />
        Takaisin tehtävähintaan
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">➕ Luo uusi tehtävä</h1>
        <p className="text-gray-400 mb-8">Kirjoita tehtävän tiedot ja aseta hinta</p>

        <form onSubmit={handleSubmit} className="card space-y-6">
          {/* Title */}
          <div>
            <label className="block text-white font-semibold mb-2">Tehtävän nimi *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="esim. Huoneen siivous"
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
              <option value="siivous">🧹 Siivous</option>
              <option value="pesu">👕 Pesu</option>
              <option value="askarit">🛠️ Askarit</option>
              <option value="muukuljetus">🚲 Kuljetus</option>
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
              placeholder="Kerro tarkemmin mitä pitää tehdä..."
              rows="4"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 resize-none"
            />
          </div>

          {/* Apartment */}
          <div>
            <label className="block text-white font-semibold mb-2">Asuntola *</label>
            <select
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
            >
              <option value="">Valitse asuntola</option>
              <option value="Asuntola 1">Asuntola 1</option>
              <option value="Asuntola 2">Asuntola 2</option>
              <option value="Asuntola 3">Asuntola 3</option>
              <option value="Asuntola 4">Asuntola 4</option>
            </select>
          </div>

          {/* Room */}
          <div>
            <label className="block text-white font-semibold mb-2">Huone</label>
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
              placeholder="esim. 104 tai Sauna"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-white font-semibold mb-2">Hinta (€) *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="esim. 2.50"
              step="0.50"
              min="0.50"
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-white font-semibold mb-2">Määräaika *</label>
            <input
              type="datetime-local"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button type="submit" className="btn-primary flex-1">
              ✅ Luo tehtävä
            </button>
            <Link href="/tasks" className="flex-1">
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

export default CreateTask;