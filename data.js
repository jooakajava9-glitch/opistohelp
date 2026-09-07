// Demo Data for OpistoHelp

const demoData = {
    users: [
        { id: 1, name: 'Mikko Virtanen', email: 'mikko@reisjärvi.fi', password: 'demo123', role: 'student', balance: 45.50, avatar: '👨', rating: 4.8, completedTasks: 12, earnedMoney: 45.50 },
        { id: 2, name: 'Anna Kowalski', email: 'anna@reisjärvi.fi', password: 'demo123', role: 'student', balance: 72.00, avatar: '👩', rating: 4.9, completedTasks: 18, earnedMoney: 72.00 },
        { id: 3, name: 'Jukka Mäkinen', email: 'jukka@reisjärvi.fi', password: 'demo123', role: 'student', balance: 28.75, avatar: '👨', rating: 4.5, completedTasks: 9, earnedMoney: 28.75 },
        { id: 4, name: 'Liisa Aaltonen', email: 'liisa@reisjärvi.fi', password: 'demo123', role: 'student', balance: 55.25, avatar: '👩', rating: 4.7, completedTasks: 15, earnedMoney: 55.25 },
        { id: 5, name: 'Petri Laine', email: 'petri@reisjärvi.fi', password: 'demo123', role: 'student', balance: 12.50, avatar: '👨', rating: 4.3, completedTasks: 5, earnedMoney: 12.50 },
        { id: 6, name: 'Sanna Niemelä', email: 'sanna@reisjärvi.fi', password: 'demo123', role: 'student', balance: 89.00, avatar: '👩', rating: 5.0, completedTasks: 22, earnedMoney: 89.00 },
        { id: 7, name: 'Matti Heikkinen', email: 'matti@reisjärvi.fi', password: 'demo123', role: 'student', balance: 34.80, avatar: '👨', rating: 4.4, completedTasks: 10, earnedMoney: 34.80 },
        { id: 8, name: 'Katja Laaksonen', email: 'katja@reisjärvi.fi', password: 'demo123', role: 'student', balance: 61.30, avatar: '👩', rating: 4.6, completedTasks: 14, earnedMoney: 61.30 },
        { id: 9, name: 'Pasi Nevala', email: 'pasi@reisjärvi.fi', password: 'demo123', role: 'student', balance: 23.40, avatar: '👨', rating: 4.2, completedTasks: 7, earnedMoney: 23.40 },
        { id: 10, name: 'Henna Karvonen', email: 'henna@reisjärvi.fi', password: 'demo123', role: 'student', balance: 76.50, avatar: '👩', rating: 4.8, completedTasks: 19, earnedMoney: 76.50 },
        { id: 99, name: 'Admin Ylläpitäjä', email: 'admin@reisjärvi.fi', password: 'admin123', role: 'admin', balance: 0, avatar: '⚙️', rating: 5.0, completedTasks: 0, earnedMoney: 0 }
    ],
    dorms: [
        { id: 1, name: 'Asuntola 1', icon: '🏢', rooms: 20, occupancy: 18, address: 'Reisjärventie 1', tasks: 5 },
        { id: 2, name: 'Asuntola 2', icon: '🏢', rooms: 20, occupancy: 19, address: 'Reisjärventie 2', tasks: 3 },
        { id: 3, name: 'Asuntola 3', icon: '🏢', rooms: 15, occupancy: 14, address: 'Reisjärventie 3', tasks: 4 },
        { id: 4, name: 'Asuntola 4', icon: '🏢', rooms: 18, occupancy: 16, address: 'Reisjärventie 4', tasks: 2 }
    ],
    rooms: [
        { id: 1, number: '101', dormId: 1, capacity: 2, occupants: 2 },
        { id: 2, number: '102', dormId: 1, capacity: 2, occupants: 2 },
        { id: 3, number: '103', dormId: 1, capacity: 2, occupants: 1 },
        { id: 4, number: '104', dormId: 1, capacity: 2, occupants: 2 },
        { id: 5, number: '105', dormId: 1, capacity: 2, occupants: 2 },
        { id: 6, number: '201', dormId: 2, capacity: 2, occupants: 2 },
        { id: 7, number: '202', dormId: 2, capacity: 2, occupants: 2 },
        { id: 8, number: '203', dormId: 2, capacity: 2, occupants: 1 },
        { id: 9, number: '204', dormId: 2, capacity: 2, occupants: 2 },
        { id: 10, number: '205', dormId: 2, capacity: 2, occupants: 2 },
        { id: 11, number: '301', dormId: 3, capacity: 2, occupants: 2 },
        { id: 12, number: '302', dormId: 3, capacity: 2, occupants: 2 },
        { id: 13, number: '303', dormId: 3, capacity: 2, occupants: 1 },
        { id: 14, number: '304', dormId: 3, capacity: 2, occupants: 2 },
        { id: 15, number: '401', dormId: 4, capacity: 2, occupants: 2 },
        { id: 16, number: '402', dormId: 4, capacity: 2, occupants: 2 }
    ],
    tasks: [
        { id: 1, title: '🧹 Huoneen siivous', description: 'Siivoa huone täysin', dormId: 1, room: '101', price: 2.50, deadline: '2026-09-08T18:00', status: 'available', createdBy: 1, bookedBy: null, category: 'cleaning' },
        { id: 2, title: '🍽️ Tiskit', description: 'Pese kaikki astiat', dormId: 1, room: '102', price: 3.00, deadline: '2026-09-07T20:00', status: 'booked', createdBy: 2, bookedBy: 3, category: 'dishes' },
        { id: 3, title: '🗑️ Roskien vienti', description: 'Vie roskakori alas', dormId: 1, room: '103', price: 1.00, deadline: '2026-09-07T19:00', status: 'available', createdBy: 3, bookedBy: null, category: 'trash' },
        { id: 4, title: '👕 Pyykkien vienti', description: 'Vie pyykit pyykkitupaan', dormId: 1, room: '104', price: 2.00, deadline: '2026-09-08T12:00', status: 'completed', createdBy: 4, bookedBy: 5, category: 'laundry' },
        { id: 5, title: '🪟 Ikkunoiden pesu', description: 'Pese kaikki ikkunat', dormId: 1, room: '105', price: 4.00, deadline: '2026-09-10T18:00', status: 'available', createdBy: 5, bookedBy: null, category: 'cleaning' },
        { id: 6, title: '🧹 Yhteisten tilojen siivous', description: 'Siivoa käytävä ja oleskelutila', dormId: 2, room: '201', price: 5.00, deadline: '2026-09-09T15:00', status: 'booked', createdBy: 6, bookedBy: 7, category: 'cleaning' },
        { id: 7, title: '🍽️ Keittiön siivous', description: 'Puhdista keittiö kokonaisuudessaan', dormId: 2, room: '202', price: 4.50, deadline: '2026-09-08T20:00', status: 'available', createdBy: 7, bookedBy: null, category: 'cleaning' },
        { id: 8, title: '🪴 Kasvien kastelu', description: 'Kasvata kasvit oleskelutilassa', dormId: 2, room: '203', price: 1.50, deadline: '2026-09-07T18:00', status: 'available', createdBy: 8, bookedBy: null, category: 'other' },
        { id: 9, title: '🛏️ Liinavaatteiden vaihto', description: 'Vaihda vuodevaatteet', dormId: 2, room: '204', price: 2.00, deadline: '2026-09-08T14:00', status: 'booked', createdBy: 1, bookedBy: 9, category: 'laundry' },
        { id: 10, title: '🧹 Huoneen siivous', description: 'Siivoa huone perusteellisesti', dormId: 3, room: '301', price: 3.00, deadline: '2026-09-09T18:00', status: 'available', createdBy: 2, bookedBy: null, category: 'cleaning' },
        { id: 11, title: '🗑️ Taideliitto roskille', description: 'Vie roskakori ja pienroskakori alas', dormId: 3, room: '302', price: 1.50, deadline: '2026-09-07T20:00', status: 'available', createdBy: 3, bookedBy: null, category: 'trash' },
        { id: 12, title: '🧼 Kylpyhuoneen siivous', description: 'Siivoa kylpyhuone ja WC', dormId: 3, room: '303', price: 2.50, deadline: '2026-09-09T17:00', status: 'booked', createdBy: 4, bookedBy: 10, category: 'cleaning' },
        { id: 13, title: '🧹 Tuuletushuoneen siivous', description: 'Siivoa tuuletushuone', dormId: 4, room: '401', price: 2.00, deadline: '2026-09-08T16:00', status: 'available', createdBy: 5, bookedBy: null, category: 'cleaning' },
        { id: 14, title: '🍽️ Keittiön tiskit', description: 'Pese aamu-, lounas- ja iltapuolin syntyneet astiat', dormId: 4, room: '402', price: 3.50, deadline: '2026-09-08T21:00', status: 'available', createdBy: 6, bookedBy: null, category: 'dishes' },
        { id: 15, title: '🛒 Markkinoilla käynti', description: 'Käy ostamassa kahvia ja maitoa', dormId: 1, room: '101', price: 6.00, deadline: '2026-09-08T12:00', status: 'available', createdBy: 7, bookedBy: null, category: 'shopping' },
        { id: 16, title: '📦 Pakettien hakeminen', description: 'Hae paketteja vastaanottokeskuksesta', dormId: 2, room: '201', price: 5.00, deadline: '2026-09-09T16:00', status: 'available', createdBy: 8, bookedBy: null, category: 'delivery' }
    ],
    events: [
        { id: 1, title: '🏐 Lentopalloa illalla', description: 'Tultava urheiluhallille pelaamaan lentopalloa', location: 'Urheiluhalli', datetime: '2026-09-07T19:00', organizer: 1, participants: [2, 3, 4], capacity: 12 },
        { id: 2, title: '🔥 Nuotioilta', description: 'Nautitaan makkaraa ja laulua nuotiolla', location: 'Rantasauna', datetime: '2026-09-09T20:00', organizer: 2, participants: [1, 5, 6], capacity: 30 },
        { id: 3, title: '🎮 Pelailta', description: 'Pelataan konsolipelejä ja kilpaillaan', location: 'Oleskelutila', datetime: '2026-09-08T18:00', organizer: 3, participants: [1, 4, 7], capacity: 8 },
        { id: 4, title: '🎬 Elokuvailtaperjantai', description: 'Katsotaan yhdessä uusi elokuva', location: 'Sali', datetime: '2026-09-10T20:00', organizer: 4, participants: [2, 5], capacity: 20 },
        { id: 5, title: '🍕 Pizza-ilta', description: 'Tehdään pizzoja yhdessä ja syödään', location: 'Keittiö', datetime: '2026-09-11T18:30', organizer: 5, participants: [1, 3, 6], capacity: 15 }
    ],
    announcements: [
        { id: 1, title: '📢 Huomenna ruokalan aukiolo muuttuu', content: 'Ruokala sulkeutuu huomenna klo 18. Keskiviikkona normaali aukiolo.', date: '2026-09-07', publisher: 'Opiston johtaja', important: false },
        { id: 2, title: '🔴 Pyykkitupa pois käytöstä', content: 'Pyykkitupa on huollossa keskiviikkona ja torstaina. Pyyykit voi pestä omissa huoneissa.', date: '2026-09-07', publisher: 'Opiston johtaja', important: true },
        { id: 3, title: '💧 Vesihuolto keskeyttyy', content: 'Veden painekokeilu järjestetään maanantaina klo 8-12. Käytä vettä säästävästi.', date: '2026-09-06', publisher: 'Kiinteistöpäällikkö', important: true },
        { id: 4, title: '🎉 Opiston synttärit!', content: 'Opisto täyttää 20 vuotta! Festivaalit järjestetään lauantaina klo 14-22. Kaikki tervetulleita!', date: '2026-09-05', publisher: 'Opiston johtaja', important: false },
        { id: 5, title: '🚌 Bussimatka Helsinkiin', content: 'Bussimatka Helsinkiin 15.9. Ilmoittautuminen rehtorin toimistoon. Paikkoja rajoitetusti!', date: '2026-09-04', publisher: 'Opintohallinnon päällikkö', important: false }
    ]
};

// Initialize LocalStorage with demo data if empty
function initializeDemoData() {
    if (!localStorage.getItem('opistohelp_users')) {
        localStorage.setItem('opistohelp_users', JSON.stringify(demoData.users));
    }
    if (!localStorage.getItem('opistohelp_dorms')) {
        localStorage.setItem('opistohelp_dorms', JSON.stringify(demoData.dorms));
    }
    if (!localStorage.getItem('opistohelp_rooms')) {
        localStorage.setItem('opistohelp_rooms', JSON.stringify(demoData.rooms));
    }
    if (!localStorage.getItem('opistohelp_tasks')) {
        localStorage.setItem('opistohelp_tasks', JSON.stringify(demoData.tasks));
    }
    if (!localStorage.getItem('opistohelp_events')) {
        localStorage.setItem('opistohelp_events', JSON.stringify(demoData.events));
    }
    if (!localStorage.getItem('opistohelp_announcements')) {
        localStorage.setItem('opistohelp_announcements', JSON.stringify(demoData.announcements));
    }
}

// Get all data functions
function getAllUsers() {
    return JSON.parse(localStorage.getItem('opistohelp_users') || '[]');
}

function getAllDorms() {
    return JSON.parse(localStorage.getItem('opistohelp_dorms') || '[]');
}

function getAllRooms() {
    return JSON.parse(localStorage.getItem('opistohelp_rooms') || '[]');
}

function getAllTasks() {
    return JSON.parse(localStorage.getItem('opistohelp_tasks') || '[]');
}

function getAllEvents() {
    return JSON.parse(localStorage.getItem('opistohelp_events') || '[]');
}

function getAllAnnouncements() {
    return JSON.parse(localStorage.getItem('opistohelp_announcements') || '[]');
}

// Save functions
function saveUsers(users) {
    localStorage.setItem('opistohelp_users', JSON.stringify(users));
}

function saveTasks(tasks) {
    localStorage.setItem('opistohelp_tasks', JSON.stringify(tasks));
}

function saveEvents(events) {
    localStorage.setItem('opistohelp_events', JSON.stringify(events));
}

function saveAnnouncements(announcements) {
    localStorage.setItem('opistohelp_announcements', JSON.stringify(announcements));
}

// Helper functions
function findUserById(id) {
    return getAllUsers().find(u => u.id === id);
}

function findUserByEmail(email) {
    return getAllUsers().find(u => u.email === email);
}

function findDormById(id) {
    return getAllDorms().find(d => d.id === id);
}

function findTaskById(id) {
    return getAllTasks().find(t => t.id === id);
}

function findEventById(id) {
    return getAllEvents().find(e => e.id === id);
}

function getRoomsByDormId(dormId) {
    return getAllRooms().filter(r => r.dormId === dormId);
}

function getTasksByDormId(dormId) {
    return getAllTasks().filter(t => t.dormId === dormId);
}

function getTasksByUserId(userId) {
    return getAllTasks().filter(t => t.createdBy === userId || t.bookedBy === userId);
}

function getEventsByUserId(userId) {
    return getAllEvents().filter(e => e.participants.includes(userId));
}

function generateId(array) {
    return Math.max(...array.map(item => item.id), 0) + 1;
}
