import { AlertCircle, Bell } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: '📢 Huomenna ruokalan aukiolo muuttuu',
      description: 'Ruokala sulkeutuu huomenna klo 18.',
      date: '2024-01-15',
      isImportant: false,
      image: '🍽️',
    },
    {
      id: 2,
      title: '⚠️ Pyykkitupa pois käytöstä',
      description: 'Pyykkitupa on huollossa keskiviikkona. Palvelu palautuu normaaliksi torstaina.',
      date: '2024-01-14',
      isImportant: true,
      image: '🔧',
    },
    {
      id: 3,
      title: '📚 Kirjasto sulkeutuu aikaisemmin',
      description: 'Kirjasto sulkeutuu klo 17 perjantaina johtuen henkilöstöpalaverista.',
      date: '2024-01-13',
      isImportant: false,
      image: '📖',
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-6">
        <h2 className="text-2xl font-bold text-white">📢 Ilmoitukset</h2>
        <Bell size={24} className="text-green-400" />
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className={`rounded-lg p-4 border ${
              announcement.isImportant
                ? 'bg-red-500/10 border-red-500/30'
                : 'bg-gray-800 border-gray-700'
            } hover:border-green-500 transition-colors`}
          >
            <div className="flex items-start gap-4">
              <span className="text-2xl">{announcement.image}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white">{announcement.title}</h3>
                  {announcement.isImportant && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded">
                      Tärkeä
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-2">{announcement.description}</p>
                <p className="text-gray-500 text-xs">{announcement.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;