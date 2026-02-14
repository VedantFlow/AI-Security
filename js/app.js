const App = {
    state: {
        activeWeek: 'week-1',
        activeDay: 'd1', // Starts at Day 1
        data: null
    },

    init: function () {
        // Load data
        const savedData = Storage.init(roadmapData);
        this.state.data = savedData;

        // Initialize UI
        UI.init();
        this.renderAll();

        // Setup notes toggle
        document.getElementById('notes-toggle').addEventListener('click', () => {
            document.getElementById('notes-section').classList.toggle('collapsed');
        });

        // Navigation Tabs
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.target.dataset.tab || e.target.innerText.replace(/[\[\]]/g, '').toLowerCase();

                // Add active class
                document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                if (tab === 'settings') {
                    UI.showSettings();
                } else if (tab === 'roadmap') {
                    document.querySelector('.main-content-area').scrollTo({ top: 0, behavior: 'smooth' });
                } else if (tab === 'resources') {
                    document.getElementById('sidebar-right').scrollIntoView({ behavior: 'smooth' });
                } else if (tab === 'stats') {
                    document.querySelector('.stats-dashboard').scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Settings Modal Actions
        document.querySelector('.close-modal').addEventListener('click', () => UI.hideSettings());

        document.getElementById('btn-reset').addEventListener('click', () => {
            if (confirm('⚠️ SYSTEM WARNING: This will permanently delete all progress. Proceed?')) {
                Storage.clear();
                window.location.reload();
            }
        });

        document.getElementById('btn-export').addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state.data));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", `roadmap_export_${new Date().toISOString().split('T')[0]}.json`);
            document.body.appendChild(dlAnchor);
            dlAnchor.click();
            dlAnchor.remove();
            console.log('[SYSTEM] Data exported.');
        });

        document.getElementById('btn-import').addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = e => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsText(file, 'UTF-8');
                reader.onload = readerEvent => {
                    try {
                        const content = JSON.parse(readerEvent.target.result);
                        Storage.save(content);
                        window.location.reload();
                    } catch (err) {
                        alert('[ERROR] Invalid JSON file.');
                    }
                }
            }
            input.click();
        });

        // Search Functionality
        document.getElementById('global-search').addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        console.log('[SYSTEM] App Initialized');
    },

    renderAll: function () {
        const modules = this.state.data.modules;

        // Find active day object
        let activeWeekObj = modules.find(m => m.id === this.state.activeWeek);
        if (!activeWeekObj) activeWeekObj = modules[0];

        let activeDayObj = activeWeekObj.days.find(d => d.id === this.state.activeDay);
        if (!activeDayObj) activeDayObj = activeWeekObj.days[0];

        // Render Tree
        UI.renderWeekTree(modules, this.state.activeWeek, this.state.activeDay);

        // Render Main Content
        UI.renderDayContent(activeDayObj, activeWeekObj.title);

        // Render Sidebars
        UI.renderResources(resourcesData);
        UI.renderSchedule(scheduleData);
        UI.renderMilestones(milestonesData);

        // Calculate and Render Stats
        this.updateStats();
    },

    loadDay: function (weekId, dayId) {
        this.state.activeWeek = weekId;
        this.state.activeDay = dayId;
        this.renderAll();
    },

    toggleTask: function (dayId, sessionIndex, taskId) {
        // Find task in data
        // Note: In a real app we would flatten data or have better lookup
        // Here we just search
        let found = false;

        this.state.data.modules.forEach(m => {
            m.days.forEach(d => {
                if (d.id === dayId && d.sessions) {
                    const session = d.sessions[sessionIndex];
                    if (session) {
                        const task = session.tasks.find(t => t.id === taskId);
                        if (task) {
                            task.completed = !task.completed;
                            found = true;
                        }
                    }
                }
            });
        });

        if (found) {
            Storage.save(this.state.data);
            this.renderAll(); // Re-render to show checkmark and update stats
        }
    },

    updateStats: function () {
        let totalTasks = 0;
        let completedTasks = 0;

        this.state.data.modules.forEach(m => {
            m.days.forEach(d => {
                if (d.sessions) {
                    d.sessions.forEach(s => {
                        s.tasks.forEach(t => {
                            totalTasks++;
                            if (t.completed) completedTasks++;
                        });
                    });
                }
            });
        });

        const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

        const stats = {
            totalTasks,
            completedTasks,
            percentage,
            totalHours: 120.5,
            streak: 15
        };

        UI.renderStats(stats);
    },

    handleSearch: function (query) {
        if (!query || query.length < 2) {
            this.renderAll();
            return;
        }

        const q = query.toLowerCase();
        // Simple filter for the tree view
        const filteredModules = JSON.parse(JSON.stringify(this.state.data.modules));
        filteredModules.forEach(m => {
            m.days = m.days.filter(d => d.title.toLowerCase().includes(q));
            if (m.days.length > 0) m.expanded = true;
        });

        UI.renderWeekTree(filteredModules.filter(m => m.days.length > 0 || m.title.toLowerCase().includes(q)), this.state.activeWeek, this.state.activeDay);
    }
};

// Start the application
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Expose to window for onclick handlers
window.App = App;
window.UI = UI;
