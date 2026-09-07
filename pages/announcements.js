import Layout from '../components/Layout';
import { AlertCircle, Bell, Pin } from 'lucide-react';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: '⚠️ Pyykkitupa pois käytöstä',
      description: 'Pyykkitupa on huollossa keskiviikkona ja torstaina. Palvelu palautuu perjantaina normaaliksi.',
      date: '2024-01-15',
      publisher: 'Opiston henkilökunna',
      isImportant: true,
      isPinned: true,
      image: '🔧',
    },
    {
      id: 2,
      title: '🍽️ Ruokalan aukiolo muuttuu',
      description: 'Ruokala sulkeutuu tämän viikon perjantaina klo 18 henkilöstöpäivän takia.',
      date: '2024-01-14',
      publisher: 'Opiston keittiö',
      isImportant: false,
      isPinned: true,
      image: '🍽️',
    },
    {
      id: 3,
      title: '📚 Kirjasto sulkeutuu aikaisemmin',
      description: 'Kirjasto sulkeutuu klo 17 perjantaina johtuen henkil östöpalaverita.',
      date: '2024-01-13',
      publisher: 'Opiston kirjasto',
      isImportant: false,
      isPinned: false,
      image: '📚',
    },
    {
      id: 4,
      title: '🌡️ Lämmitys vikaantui',
      description: 'Asuntola 3:n lämmitys on huollossa. Lämmitys palautuu parhaimmillaan illalla.',
      date: '2024-01-12',
      publisher: 'Kiinteistöhoito',
      isImportant: true,
      isPinned: false,
      image: '🌡️',
    },
    {
      id: 5,
      title: '🎓 Opinto-ohjaaja tapaamiseen',
      description: 'Muista varata aika opinto-ohjaajaasi kanssa neuvotteluun. Aika menee nopeasti!',
      date: '2024-01-11',
      publisher: 'Opinto-ohjaus',
      isImportant: false,
      isPinned: false,
      image: '🎓',
    },
    {
      id: 6,
      title: '💉 Rokotuskampanja',
      description: 'Terveyshoitaja on paikalla maanantaina ja tiistaina rokotukselle ilmoittautumisesta.',
      date: '2024-01-10',
      publisher: 'Terveydenhoito',
      isImportant: false,
      isPinned: false,
      image: '💉',
    },
  ];

  const pinnedAnnouncements = announcements.filter(a => a.isPinned);
  const otherAnnouncements = announcements.filter(a => !a.isPinned);

  return (
    <Layout>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">📢 Ilmoitukset</h1>
        <p className="text-gray-400">Tärkeät ilmoitukset opiston toiminnasta</p>
      </div>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Pin size={24} className="text-green-400" />
            Kiinnitetyt ilmoitukset
          </h2>
          <div className="space-y-4">
            {pinnedAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/10 rounded-lg p-6 border-2 border-yellow-500/50 hover:border-green-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{announcement.image}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{announcement.title}</h3>
                      {announcement.isImportant && (
                        <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                          TÄRKEÄ
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-3">{announcement.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Julkaisija: {announcement.publisher}</span>
                      <span>{announcement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Other Announcements */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Kaikki ilmoitukset</h2>
        <div className="space-y-4">
          {otherAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{announcement.image}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-white">{announcement.title}</h3>
                    {announcement.isImportant && (
                      <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                        TÄRKEÄ
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-3 text-sm">{announcement.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>Julkaisija: {announcement.publisher}</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Announcements;