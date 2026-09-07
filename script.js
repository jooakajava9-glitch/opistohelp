// OpistoHelp Main Application Script

// Initialize app
let currentUser = null;
let currentPage = 'login';

document.addEventListener('DOMContentLoaded', function() {
    initializeDemoData();
    loadCurrentUser();
    updateNavigation();
    
    if (currentUser) {
        showPage('home');
        updateHome();
    } else {
        showPage('login');
    }
});

// ==================== Authentication ====================

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = findUserByEmail(email);
    if (user && user.password === password) {
        localStorage.setItem('opistohelp_current_user', JSON.stringify(user));
        currentUser = user;
        updateNavigation();
        showPage('home');
        updateHome();
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
    } else {
        alert('❌ Väärä sähköposti tai salasana!');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const passwordConfirm = document.getElementById('register-password-confirm').value;

    if (password !== passwordConfirm) {
        alert('❌ Salasanat eivät täsmää!');
        return;
    }

    if (findUserByEmail(email)) {
        alert('❌ Sähköposti on jo käytössä!');
        return;
    }

    const users = getAllUsers();
    const newUser = {
        id: generateId(users),
        name: name,
        email: email,
        password: password,
        role: 'student',
        balance: 0,
        avatar: '👤',
        rating: 5.0,
        completedTasks: 0,
        earnedMoney: 0
    };

    users.push(newUser);
    saveUsers(users);
    
    localStorage.setItem('opistohelp_current_user', JSON.stringify(newUser));
    currentUser = newUser;
    updateNavigation();
    showPage('home');
    updateHome();
    
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-password-confirm').value = '';
    
    alert('✅ Rekisteröityminen onnistui!');
}

function demoLogin(role) {
    let user;
    if (role === 'admin') {
        user = findUserByEmail('admin@reisjärvi.fi');
    } else {
        user = findUserByEmail('mikko@reisjärvi.fi');
    }
    
    if (user) {
        localStorage.setItem('opistohelp_current_user', JSON.stringify(user));
        currentUser = user;
        updateNavigation();
        showPage('home');
        updateHome();
    }
}

function logout() {
    if (confirm('Oletko varma että haluat kirjautua ulos?')) {
        localStorage.removeItem('opistohelp_current_user');
        currentUser = null;
        updateNavigation();
        showPage('login');
    }
}

function loadCurrentUser() {
    const stored = localStorage.getItem('opistohelp_current_user');
    if (stored) {
        currentUser = JSON.parse(stored);
    }
}

function toggleAuthMode() {
    const loginForm = document.getElementById('login-form-content');
    const registerForm = document.getElementById('register-form-content');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// ==================== Navigation ====================

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const page = document.getElementById(pageName + '-page');
    if (page) {
        page.classList.add('active');
        currentPage = pageName;
        
        // Load page-specific content
        switch(pageName) {
            case 'home':
                updateHome();
                break;
            case 'dorms':
                updateDorms();
                break;
            case 'tasks':
                updateTasks();
                break;
            case 'notifications':
                updateNotifications();
                break;
            case 'events':
                updateEvents();
                break;
            case 'profile':
                updateProfile();
                break;
        }
    }
    
    // Update nav active state
    updateNavActive();
}

function updateNavigation() {
    const navbar = document.querySelector('.navbar-content');
    if (currentUser) {
        navbar.style.display = 'flex';
        if (currentUser.role !== 'admin') {
            document.querySelector('.admin-link').style.display = 'none';
        }
    }
}

function updateNavActive() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    const currentLink = document.querySelector(`a[onclick="showPage('${currentPage}')"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }
}

// ==================== Home Page ====================

function updateHome() {
    if (!currentUser) return;

    document.getElementById('user-greeting').textContent = `Tervetuloa takaisin, ${currentUser.name}! 👋`;
    document.getElementById('user-balance').textContent = currentUser.balance.toFixed(2) + ' €';
    
    // Stats
    const userTasks = getTasksByUserId(currentUser.id);
    const bookedTasks = userTasks.filter(t => t.bookedBy === currentUser.id && t.status !== 'completed').length;
    const completedTasks = userTasks.filter(t => t.status === 'completed').length;
    
    document.getElementById('booked-tasks-count').textContent = bookedTasks;
    document.getElementById('completed-tasks-count').textContent = completedTasks;
    document.getElementById('user-rating').textContent = currentUser.rating + ' / 5';
    
    const userEvents = getEventsByUserId(currentUser.id);
    document.getElementById('upcoming-events-count').textContent = userEvents.length;
    
    // Latest announcements
    const announcements = getAllAnnouncements().slice(0, 3);
    const announcementsHtml = announcements.map(a => `
        <div class="announcement-card ${a.important ? 'important' : ''}">
            <h4 class="announcement-title">${a.title}</h4>
            <p class="announcement-meta">${a.date} - ${a.publisher}</p>
            <p class="announcement-text">${a.content}</p>
        </div>
    `).join('');
    document.getElementById('latest-announcements').innerHTML = announcementsHtml || '<p class="empty-state">Ei ilmoituksia</p>';
    
    // Latest tasks
    const tasks = getAllTasks().filter(t => t.status === 'available').slice(0, 3);
    const tasksHtml = tasks.map(t => renderTaskCard(t)).join('');
    document.getElementById('latest-tasks').innerHTML = tasksHtml || '<p class="empty-state">Ei vapaita tehtäviä</p>';
    
    // Upcoming events
    const events = getAllEvents().slice(0, 3);
    const eventsHtml = events.map(e => renderEventCard(e)).join('');
    document.getElementById('upcoming-events').innerHTML = eventsHtml || '<p class="empty-state">Ei tapahtumia</p>';
    
    // Dorms map
    updateDormsMap();
}

function updateDormsMap() {
    const dorms = getAllDorms();
    const mapHtml = dorms.map(d => `
        <div class="map-building" onclick="openDormDetail(${d.id})">
            <div class="map-building-icon">${d.icon}</div>
            <div class="map-building-name">${d.name}</div>
            <p style="font-size: 0.8rem; color: #b0b0b0;">${d.rooms} huonetta</p>
        </div>
    `).join('');
    document.getElementById('dorms-map').innerHTML = mapHtml;
}

// ==================== Tasks ====================

function updateTasks() {
    if (!currentUser) return;

    const dorms = getAllDorms();
    const dormSelect = document.getElementById('task-filter-dorm');
    dormSelect.innerHTML = '<option value="">Kaikki asuntolat</option>' + 
        dorms.map(d => `<option value="${d.id}">${d.name}</option>`).join('');

    filterTasks();
}

function filterTasks() {
    const status = document.getElementById('task-filter-status').value;
    const dormId = document.getElementById('task-filter-dorm').value;
    const priceRange = document.getElementById('task-filter-price').value;
    const searchTerm = document.getElementById('task-search').value.toLowerCase();

    let tasks = getAllTasks();

    if (status) {
        tasks = tasks.filter(t => t.status === status);
    }

    if (dormId) {
        tasks = tasks.filter(t => t.dormId === parseInt(dormId));
    }

    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        tasks = tasks.filter(t => t.price >= min && t.price <= max);
    }

    if (searchTerm) {
        tasks = tasks.filter(t => 
            t.title.toLowerCase().includes(searchTerm) || 
            t.description.toLowerCase().includes(searchTerm)
        );
    }

    const tasksHtml = tasks.map(t => renderTaskCard(t)).join('');
    document.getElementById('tasks-container').innerHTML = tasksHtml || '<p class="empty-state">Ei tehtäviä</p>';
}

function renderTaskCard(task) {
    const dorm = findDormById(task.dormId);
    const bookedUser = task.bookedBy ? findUserById(task.bookedBy) : null;
    const createdUser = findUserById(task.createdBy);
    const deadline = new Date(task.deadline);
    const timeLeft = deadline.toLocaleDateString('fi-FI') + ' ' + deadline.toLocaleTimeString('fi-FI', {hour: '2-digit', minute: '2-digit'});

    let statusClass = task.status;
    let statusText = task.status === 'available' ? '✅ Vapaa' : task.status === 'booked' ? '🔒 Varattu' : '✔️ Valmis';

    return `
        <div class="task-card ${statusClass}">
            <div class="task-info">
                <h3 class="task-title">${task.title}</h3>
                <p style="color: #b0b0b0; margin-bottom: 0.5rem;">${task.description}</p>
                <div class="task-meta">
                    <span>📍 ${dorm.name} - Huone ${task.room}</span>
                    <span>⏰ ${timeLeft}</span>
                    ${bookedUser ? `<span>👤 Varannut: ${bookedUser.name}</span>` : ''}
                </div>
                <p style="font-size: 0.85rem; color: #00ff41;">${statusText}</p>
            </div>
            <div class="task-actions">
                <div class="task-price">${task.price.toFixed(2)} €</div>
                ${task.status === 'available' && currentUser.id !== task.createdBy ? `
                    <button class="btn btn-primary" onclick="bookTask(${task.id})">Varaa</button>
                ` : ''}
                ${task.status === 'booked' && currentUser.id === task.bookedBy ? `
                    <button class="btn btn-secondary" onclick="completeTask(${task.id})">Merkitse valmiiksi</button>
                ` : ''}
                ${(currentUser.id === task.createdBy || currentUser.role === 'admin') && task.status !== 'completed' ? `
                    <button class="btn btn-danger" onclick="deleteTask(${task.id})">Poista</button>
                ` : ''}
            </div>
        </div>
    `;
}

function bookTask(taskId) {
    const tasks = getAllTasks();
    const task = tasks.find(t => t.id === taskId);
    
    if (task && task.status === 'available') {
        task.bookedBy = currentUser.id;
        task.status = 'booked';
        saveTasks(tasks);
        filterTasks();
        alert(`✅ Olet varannut tehtävän "${task.title}"!`);
    }
}

function completeTask(taskId) {
    const tasks = getAllTasks();
    const task = tasks.find(t => t.id === taskId);
    
    if (task && task.bookedBy === currentUser.id) {
        task.status = 'completed';
        
        // Add money to user
        const users = getAllUsers();
        const user = users.find(u => u.id === currentUser.id);
        user.balance += task.price;
        currentUser.balance += task.price;
        currentUser.completedTasks = (currentUser.completedTasks || 0) + 1;
        currentUser.earnedMoney = (currentUser.earnedMoney || 0) + task.price;
        
        saveUsers(users);
        saveTasks(tasks);
        localStorage.setItem('opistohelp_current_user', JSON.stringify(currentUser));
        
        filterTasks();
        alert(`✅ Tehtävä merkitty valmiiksi! +${task.price.toFixed(2)} € tilillesi!`);
    }
}

function deleteTask(taskId) {
    if (confirm('Oletko varma että haluat poistaa tämän tehtävän?')) {
        let tasks = getAllTasks();
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks(tasks);
        filterTasks();
        alert('✅ Tehtävä poistettu!');
    }
}

function showTaskForm() {
    document.getElementById('task-form').classList.add('active');
    
    const dorms = getAllDorms();
    const dormSelect = document.getElementById('task-dorm');
    dormSelect.innerHTML = dorms.map(d => `<option value="${d.id}">${d.name}</option>`).join('');
}

function closeTaskForm() {
    document.getElementById('task-form').classList.remove('active');
}

function createTask(event) {
    event.preventDefault();
    
    const tasks = getAllTasks();
    const newTask = {
        id: generateId(tasks),
        title: document.getElementById('task-name').value,
        description: document.getElementById('task-description').value,
        dormId: parseInt(document.getElementById('task-dorm').value),
        room: document.getElementById('task-room').value,
        price: parseFloat(document.getElementById('task-price').value),
        deadline: document.getElementById('task-deadline').value,
        status: 'available',
        createdBy: currentUser.id,
        bookedBy: null,
        category: 'other'
    };
    
    tasks.push(newTask);
    saveTasks(tasks);
    
    document.getElementById('task-name').value = '';
    document.getElementById('task-description').value = '';
    document.getElementById('task-room').value = '';
    document.getElementById('task-price').value = '';
    document.getElementById('task-deadline').value = '';
    
    closeTaskForm();
    filterTasks();
    alert('✅ Tehtävä luotu!');
}

// ==================== Dorms ====================

function updateDorms() {
    const dorms = getAllDorms();
    const dormHtml = dorms.map(d => `
        <div class="dorm-card" onclick="openDormDetail(${d.id})">
            <div class="dorm-image">${d.icon}</div>
            <div class="dorm-info">
                <h3 class="dorm-name">${d.name}</h3>
                <p style="color: #b0b0b0; font-size: 0.9rem;">${d.address}</p>
                <div class="dorm-stats">
                    <div class="dorm-stat-item">
                        <p class="dorm-stat-value">${d.rooms}</p>
                        <p style="font-size: 0.8rem;">Huoneita</p>
                    </div>
                    <div class="dorm-stat-item">
                        <p class="dorm-stat-value">${d.occupancy}/${d.rooms}</p>
                        <p style="font-size: 0.8rem;">Asukkaita</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('dorms-container').innerHTML = dormHtml;
}

function openDormDetail(dormId) {
    const dorm = findDormById(dormId);
    const rooms = getRoomsByDormId(dormId);
    const tasks = getTasksByDormId(dormId);
    
    const roomsHtml = rooms.map(r => `
        <div class="card" style="margin-bottom: 1rem; cursor: pointer;" onclick="alert('Huone ${r.number}\\nKapasiteetti: ${r.capacity}\\nAsukkaat: ${r.occupants}')">
            <h4>Huone ${r.number}</h4>
            <p>👥 ${r.occupants}/${r.capacity} asukasta</p>
        </div>
    `).join('');
    
    const tasksHtml = tasks.filter(t => t.status !== 'completed').map(t => `
        <div class="card" style="margin-bottom: 1rem;">
            <h4>${t.title}</h4>
            <p>${t.price.toFixed(2)} €</p>
            <button class="btn btn-primary" onclick="bookTask(${t.id}); closeDormDetail()">Varaa</button>
        </div>
    `).join('');
    
    const content = `
        <h2>${dorm.name}</h2>
        <p style="color: #b0b0b0; margin-bottom: 1rem;">📍 ${dorm.address}</p>
        
        <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Huoneet</h3>
        ${roomsHtml}
        
        <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Avoimet tehtävät</h3>
        ${tasksHtml || '<p class="empty-state">Ei avoimia tehtäviä</p>'}
    `;
    
    document.getElementById('dorm-detail-content').innerHTML = content;
    document.getElementById('dorm-detail').classList.add('active');
}

function closeDormDetail() {
    document.getElementById('dorm-detail').classList.remove('active');
}

// ==================== Notifications ====================

function updateNotifications() {
    const announcements = getAllAnnouncements();
    const announcementsHtml = announcements.map(a => `
        <div class="announcement-card ${a.important ? 'important' : ''}">
            <h3 class="announcement-title">${a.title}</h3>
            <p class="announcement-meta">📅 ${a.date} | 📝 ${a.publisher}</p>
            <p class="announcement-text">${a.content}</p>
        </div>
    `).join('');
    
    document.getElementById('notifications-container').innerHTML = announcementsHtml || '<p class="empty-state">Ei ilmoituksia</p>';
}

// ==================== Events ====================

function updateEvents() {
    const events = getAllEvents();
    const eventsHtml = events.map(e => renderEventCard(e)).join('');
    document.getElementById('events-container').innerHTML = eventsHtml || '<p class="empty-state">Ei tapahtumia</p>';
}

function renderEventCard(event) {
    const organizer = findUserById(event.organizer);
    const isParticipant = currentUser && event.participants.includes(currentUser.id);
    const date = new Date(event.datetime);
    const day = date.getDate();
    const month = date.toLocaleDateString('fi-FI', {month: 'short'});
    const time = date.toLocaleTimeString('fi-FI', {hour: '2-digit', minute: '2-digit'});

    return `
        <div class="event-card">
            <div class="event-time">
                <div class="event-day">${day}</div>
                <div class="event-month">${month}</div>
                <div class="event-time-details">${time}</div>
            </div>
            <div class="event-info">
                <h3 class="event-title">${event.title}</h3>
                <p class="event-description">${event.description}</p>
                <p class="event-location">📍 ${event.location}</p>
                <div class="event-participants">
                    👥 ${event.participants.length}/${event.capacity} osallistujaa
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${isParticipant ? `
                    <button class="btn btn-secondary" onclick="removeEventParticipant(${event.id})">Peruuta osallistuminen</button>
                ` : `
                    <button class="btn btn-primary" onclick="joinEvent(${event.id})">Osallistun</button>
                `}
            </div>
        </div>
    `;
}

function joinEvent(eventId) {
    const events = getAllEvents();
    const event = events.find(e => e.id === eventId);
    
    if (event && !event.participants.includes(currentUser.id) && event.participants.length < event.capacity) {
        event.participants.push(currentUser.id);
        saveEvents(events);
        updateEvents();
        alert(`✅ Olet ilmoittautunut tapahtumaan "${event.title}"!`);
    } else if (event.participants.length >= event.capacity) {
        alert('❌ Tapahtumassa ei ole enää paikkoja!');
    }
}

function removeEventParticipant(eventId) {
    const events = getAllEvents();
    const event = events.find(e => e.id === eventId);
    
    if (event && event.participants.includes(currentUser.id)) {
        event.participants = event.participants.filter(p => p !== currentUser.id);
        saveEvents(events);
        updateEvents();
        alert('✅ Osallistuminen peruutettu!');
    }
}

function showEventForm() {
    document.getElementById('event-form').classList.add('active');
}

function closeEventForm() {
    document.getElementById('event-form').classList.remove('active');
}

function createEvent(event) {
    event.preventDefault();
    
    const events = getAllEvents();
    const newEvent = {
        id: generateId(events),
        title: document.getElementById('event-name').value,
        description: document.getElementById('event-description').value,
        location: document.getElementById('event-location').value,
        datetime: document.getElementById('event-datetime').value,
        organizer: currentUser.id,
        participants: [currentUser.id],
        capacity: 30
    };
    
    events.push(newEvent);
    saveEvents(events);
    
    document.getElementById('event-name').value = '';
    document.getElementById('event-description').value = '';
    document.getElementById('event-location').value = '';
    document.getElementById('event-datetime').value = '';
    
    closeEventForm();
    updateEvents();
    alert('✅ Tapahtuma luotu!');
}

// ==================== Profile ====================

function updateProfile() {
    document.getElementById('profile-name').textContent = currentUser.name;
    document.getElementById('profile-email').textContent = currentUser.email;
    document.getElementById('profile-avatar').textContent = currentUser.avatar;
    document.getElementById('profile-rating').textContent = `⭐ ${currentUser.rating} / 5`;
    document.getElementById('profile-balance').textContent = `💰 ${currentUser.balance.toFixed(2)} €`;
    
    document.getElementById('profile-completed').textContent = currentUser.completedTasks || 0;
    document.getElementById('profile-earned').textContent = `${(currentUser.earnedMoney || 0).toFixed(2)} €`;
    
    const userTasks = getTasksByUserId(currentUser.id);
    const bookedTasks = userTasks.filter(t => t.bookedBy === currentUser.id && t.status !== 'completed').length;
    document.getElementById('profile-booked').textContent = bookedTasks;
    
    const userEvents = getEventsByUserId(currentUser.id);
    document.getElementById('profile-events').textContent = userEvents.length;
}

function editProfile() {
    alert('✏️ Profiilin muokkaus tulossa pian!');
}

// ==================== Admin Panel ====================

function adminPanel() {
    if (!currentUser || currentUser.role !== 'admin') {
        alert('❌ Vain ylläpitäjät voivat käyttää admin-paneelia!');
        return;
    }
    showPage('admin');
    updateAdminPanel();
}

function updateAdminPanel() {
    switchAdminTab('users');
}

function switchAdminTab(tab) {
    const adminContents = document.querySelectorAll('.admin-content');
    adminContents.forEach(content => content.classList.remove('active'));
    
    const adminTabs = document.querySelectorAll('.admin-tab');
    adminTabs.forEach(tabBtn => tabBtn.classList.remove('active'));
    
    const tabId = 'admin-' + tab;
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.classList.add('active');
    }
    
    const activeTab = document.querySelector(`button[onclick="switchAdminTab('${tab}')"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Load tab content
    switch(tab) {
        case 'users':
            updateAdminUsers();
            break;
        case 'dorms-admin':
            updateAdminDorms();
            break;
        case 'tasks-admin':
            updateAdminTasks();
            break;
        case 'announcements-admin':
            updateAdminAnnouncements();
            break;
        case 'statistics':
            updateAdminStatistics();
            break;
    }
}

function updateAdminUsers() {
    const users = getAllUsers();
    const usersHtml = users.map(u => `
        <div class="card" style="margin-bottom: 1rem; padding: 1rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4>${u.name}</h4>
                    <p style="color: #b0b0b0; font-size: 0.9rem;">${u.email} | ${u.role === 'admin' ? '⚙️ Admin' : '👤 Opiskelija'}</p>
                    <p style="color: #00ff41;">💰 ${u.balance.toFixed(2)} € | ⭐ ${u.rating}/5</p>
                </div>
                <button class="btn btn-danger" onclick="deleteUser(${u.id})">Poista</button>
            </div>
        </div>
    `).join('');
    
    document.getElementById('users-list-admin').innerHTML = usersHtml;
}

function deleteUser(userId) {
    if (confirm('Oletko varma että haluat poistaa tämän käyttäjän?')) {
        let users = getAllUsers();
        users = users.filter(u => u.id !== userId);
        saveUsers(users);
        updateAdminUsers();
        alert('✅ Käyttäjä poistettu!');
    }
}

function updateAdminDorms() {
    const dorms = getAllDorms();
    const dormsHtml = dorms.map(d => `
        <div class="card" style="margin-bottom: 1rem; padding: 1rem;">
            <h4>${d.name}</h4>
            <p>${d.rooms} huonetta, ${d.occupancy} asukasta</p>
            <button class="btn btn-danger" onclick="deleteDorm(${d.id})">Poista</button>
        </div>
    `).join('');
    
    document.getElementById('dorms-list-admin').innerHTML = dormsHtml;
}

function showAddDormForm() {
    const name = prompt('Asuntolan nimi:');
    if (name) {
        const dorms = getAllDorms();
        const newDorm = {
            id: generateId(dorms),
            name: name,
            icon: '🏢',
            rooms: 20,
            occupancy: 0,
            address: 'Reisjärventie',
            tasks: 0
        };
        dorms.push(newDorm);
        localStorage.setItem('opistohelp_dorms', JSON.stringify(dorms));
        updateAdminDorms();
        alert('✅ Asuntola lisätty!');
    }
}

function deleteDorm(dormId) {
    if (confirm('Oletko varma että haluat poistaa tämän asuntolan?')) {
        let dorms = JSON.parse(localStorage.getItem('opistohelp_dorms') || '[]');
        dorms = dorms.filter(d => d.id !== dormId);
        localStorage.setItem('opistohelp_dorms', JSON.stringify(dorms));
        updateAdminDorms();
        alert('✅ Asuntola poistettu!');
    }
}

function updateAdminTasks() {
    const tasks = getAllTasks();
    const tasksHtml = tasks.map(t => {
        const dorm = findDormById(t.dormId);
        return `
            <div class="card" style="margin-bottom: 1rem; padding: 1rem;">
                <h4>${t.title}</h4>
                <p style="color: #b0b0b0;">${dorm.name} - Huone ${t.room} | ${t.price.toFixed(2)} €</p>
                <p style="color: #00ff41;">${t.status === 'available' ? '✅ Vapaa' : t.status === 'booked' ? '🔒 Varattu' : '✔️ Valmis'}</p>
                ${t.status !== 'completed' ? `<button class="btn btn-danger" onclick="deleteTask(${t.id})">Poista</button>` : ''}
            </div>
        `;
    }).join('');
    
    document.getElementById('tasks-list-admin').innerHTML = tasksHtml;
}

function updateAdminAnnouncements() {
    const announcements = getAllAnnouncements();
    const announcementsHtml = announcements.map(a => `
        <div class="card" style="margin-bottom: 1rem; padding: 1rem;">
            <h4>${a.title}</h4>
            <p style="color: #b0b0b0;">${a.date}</p>
            <p>${a.content}</p>
            <button class="btn btn-danger" onclick="deleteAnnouncement(${a.id})">Poista</button>
        </div>
    `).join('');
    
    document.getElementById('announcements-list-admin').innerHTML = announcementsHtml;
}

function showAddAnnouncementForm() {
    const title = prompt('Ilmoituksen otsikko:');
    if (title) {
        const content = prompt('Ilmoituksen sisältö:');
        if (content) {
            const announcements = getAllAnnouncements();
            const newAnnouncement = {
                id: generateId(announcements),
                title: title,
                content: content,
                date: new Date().toLocaleDateString('fi-FI'),
                publisher: 'Opiston johtaja',
                important: false
            };
            announcements.push(newAnnouncement);
            saveAnnouncements(announcements);
            updateAdminAnnouncements();
            alert('✅ Ilmoitus lisätty!');
        }
    }
}

function deleteAnnouncement(announcementId) {
    if (confirm('Oletko varma että haluat poistaa tämän ilmoituksen?')) {
        let announcements = getAllAnnouncements();
        announcements = announcements.filter(a => a.id !== announcementId);
        saveAnnouncements(announcements);
        updateAdminAnnouncements();
        alert('✅ Ilmoitus poistettu!');
    }
}

function updateAdminStatistics() {
    const users = getAllUsers();
    const tasks = getAllTasks();
    const events = getAllEvents();
    const announcements = getAllAnnouncements();
    
    const totalUsers = users.length;
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'completed').length;
    const totalEvents = events.length;
    const totalAnnouncements = announcements.length;
    const totalMoneyInSystem = users.reduce((sum, u) => sum + u.balance, 0);
    
    const statsHtml = `
        <div class="stats-grid">
            <div class="stat-box">
                <span class="stat-icon">👥</span>
                <h4>Käyttäjät</h4>
                <p>${totalUsers}</p>
            </div>
            <div class="stat-box">
                <span class="stat-icon">🛠️</span>
                <h4>Tehtävät</h4>
                <p>${totalTasks}</p>
            </div>
            <div class="stat-box">
                <span class="stat-icon">✅</span>
                <h4>Tehdyt tehtävät</h4>
                <p>${completedTasks}</p>
            </div>
            <div class="stat-box">
                <span class="stat-icon">📅</span>
                <h4>Tapahtumat</h4>
                <p>${totalEvents}</p>
            </div>
            <div class="stat-box">
                <span class="stat-icon">📢</span>
                <h4>Ilmoitukset</h4>
                <p>${totalAnnouncements}</p>
            </div>
            <div class="stat-box">
                <span class="stat-icon">💰</span>
                <h4>Rahaa järjestelmässä</h4>
                <p>${totalMoneyInSystem.toFixed(2)} €</p>
            </div>
        </div>
    `;
    
    document.getElementById('statistics-container').innerHTML = statsHtml;
}

// ==================== Modal Management ====================

document.addEventListener('click', function(event) {
    if (event.target.id === 'task-form' || event.target.id === 'event-form' || event.target.id === 'dorm-detail') {
        event.target.classList.remove('active');
    }
});
