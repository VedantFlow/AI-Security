const UI = {
    elements: {
        weekTree: document.getElementById('week-nav-tree'),
        hourBlocksList: document.getElementById('hour-blocks-list'),
        stats: {
            completed: document.getElementById('stat-completed'),
            total: document.getElementById('stat-total'),
            percentage: document.getElementById('stat-percentage'),
            hours: document.getElementById('stat-hours'),
            streak: document.getElementById('stat-streak'),
            currentWeek: document.getElementById('stat-current-week'),
            currentDay: document.getElementById('stat-current-day')
        },
        globalProgress: {
            fill: document.getElementById('global-progress-fill'),
            text: document.getElementById('global-progress-text')
        },
        scheduleList: document.getElementById('schedule-list'),
        milestonesGrid: document.getElementById('milestones-grid'),
        resourcesList: document.getElementById('resources-list'),
        breadcrumbs: document.getElementById('breadcrumbs'),
        title: document.getElementById('current-view-title'),
        clock: document.getElementById('clock-display'),
        deadline: {
            date: document.getElementById('display-date'),
            day: document.getElementById('display-day'),
            time: document.getElementById('display-time'),
            countdown: document.getElementById('countdown-days')
        }
    },

    init: function () {
        this.startClock();
        this.updateDeadline();
    },

    startClock: function () {
        setInterval(() => {
            const now = new Date();
            this.elements.clock.textContent = now.toLocaleTimeString('en-US', { hour12: false });
            this.updateDeadline(); // Keep date/day fresh
        }, 1000);
    },

    updateDeadline: function () {
        const now = new Date();
        const options = { month: 'short', day: '2-digit', year: 'numeric' };

        if (this.elements.deadline.date) {
            this.elements.deadline.date.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
            this.elements.deadline.day.textContent = now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
            this.elements.deadline.time.textContent = now.toLocaleTimeString('en-US', { hour12: false });

            // Assume 8-week target
            this.elements.deadline.countdown.textContent = "56";
        }
    },

    renderWeekTree: function (modules, activeWeekId, activeDayId) {
        this.elements.weekTree.innerHTML = modules.map(module => {
            const isExpanded = module.id === activeWeekId || module.expanded;
            const expandedClass = isExpanded ? 'expanded' : '';
            const activeClass = module.id === activeWeekId ? 'active' : '';
            const arrow = isExpanded ? '▾' : '▸';

            // Build days list
            const daysHtml = module.days.map(day => {
                const dayActive = day.id === activeDayId ? 'active' : '';
                const icon = day.status === 'completed' ? '✓' : (day.status === 'current' ? '○' : '□');
                return `<div class="day-item ${dayActive}" onclick="App.loadDay('${module.id}', '${day.id}')">
                            ${icon} ${day.title}
                        </div>`;
            }).join('');

            return `
                <div class="week-item">
                    <div class="week-header ${activeClass}" onclick="UI.toggleWeek('${module.id}')">
                        ${arrow} ${module.title}
                    </div>
                    <div class="day-list ${expandedClass}" id="days-${module.id}">
                        ${daysHtml}
                    </div>
                </div>
            `;
        }).join('');
    },

    toggleWeek: function (moduleId) {
        const list = document.getElementById(`days-${moduleId}`);
        if (list) {
            const isExpanding = !list.classList.contains('expanded');
            list.classList.toggle('expanded');

            // Update arrow icon in header
            const header = list.previousElementSibling;
            if (header) {
                const text = header.textContent.trim();
                const title = text.startsWith('▾') || text.startsWith('▸') ? text.substring(1).trim() : text;
                header.innerHTML = `${isExpanding ? '▾' : '▸'} ${title}`;
            }
        }
    },

    renderDayContent: function (dayData, weekTitle) {
        // Update Header
        this.elements.breadcrumbs.textContent = `>> ${weekTitle} / ${dayData.title}`;
        this.elements.title.textContent = dayData.status === 'current' ? 'IN PROGRESS' : dayData.status.toUpperCase();

        if (!dayData.sessions) {
            this.elements.hourBlocksList.innerHTML = `<div class="hour-block"><div class="hour-content">Content pending for ${dayData.title}...</div></div>`;
            return;
        }

        this.elements.hourBlocksList.innerHTML = dayData.sessions.map((session, sIndex) => {
            return `
                <div class="hour-block">
                    <div class="hour-header" onclick="UI.toggleHourBlock(this)">
                        <span>┌─ ${session.title}</span>
                        <span>[-]</span>
                    </div>
                    <div class="hour-content">
                        ${session.tasks.map(task => `
                            <div class="task-item ${task.completed ? 'task-completed' : ''}">
                                <div class="custom-checkbox ${task.completed ? 'checked' : ''}" 
                                     onclick="App.toggleTask('${dayData.id}', ${sIndex}, '${task.id}')"></div>
                                <div class="task-label">${task.text}</div>
                            </div>
                        `).join('')}
                        
                        <div class="task-meta">
                           <button class="btn-mini">[+] Add Note</button>
                           <button class="btn-mini">📎 Resources</button>
                           <button class="btn-mini">⏱ Start Timer</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    toggleHourBlock: function (headerEl) {
        const container = headerEl.parentElement;
        container.classList.toggle('collapsed');

        // Update the [+] / [-] text
        const indicator = headerEl.querySelector('span:last-child');
        if (indicator) {
            indicator.textContent = container.classList.contains('collapsed') ? '[+]' : '[-]';
        }
    },

    renderStats: function (stats) {
        // Just mocking the logic here, App.js should calculate
        this.elements.stats.completed.textContent = stats.completedTasks;
        this.elements.stats.total.textContent = stats.totalTasks;
        this.elements.stats.percentage.textContent = stats.percentage + '%';
        this.elements.stats.hours.textContent = stats.totalHours;
        this.elements.stats.streak.textContent = stats.streak;

        this.elements.globalProgress.fill.style.width = stats.percentage + '%';
        this.elements.globalProgress.text.textContent = stats.percentage + '%';
    },

    renderSchedule: function (schedule) {
        this.elements.scheduleList.innerHTML = schedule.map(item => `
            <div class="schedule-item ${item.status === 'active' ? 'active' : ''} ${item.status === 'completed' ? 'schedule-completed' : ''}">
                <div class="schedule-time">${item.time}</div>
                <div class="schedule-desc">${item.status === 'active' ? '● ' : '○ '}${item.task}</div>
                <div>${item.status === 'active' ? '[ACTIVE]' : ''}</div>
            </div>
        `).join('');
    },

    renderMilestones: function (milestones) {
        this.elements.milestonesGrid.innerHTML = milestones.map(ms => `
            <div class="milestone-card" style="border:1px solid var(--border-color); padding: 10px; margin: 5px;">
                <div style="font-weight:bold; color:var(--accent-secondary)">${ms.title}</div>
                <div style="font-size:0.8rem">${ms.desc}</div>
                <div style="margin-top:5px; height:4px; background:var(--bg-tertiary); width:100%">
                    <div style="height:100%; width:${ms.progress}%; background:var(--accent-primary)"></div>
                </div>
                <div style="font-size:0.75rem; text-align:right">${ms.progress}%</div>
            </div>
        `).join('');
    },

    renderResources: function (resources) {
        this.elements.resourcesList.innerHTML = resources.map(cat => `
            <div class="resource-category">
                <div class="resource-header">▸ ${cat.category}</div>
                ${cat.items.map(item => `
                    <a href="${item.link || '#'}" class="resource-item" target="_blank">└─ ${item.title}</a>
                `).join('')}
            </div>
        `).join('');
    },

    showSettings: function () {
        const modal = document.getElementById('settings-modal');
        modal.classList.add('active');
        modal.removeAttribute('hidden');
    },

    hideSettings: function () {
        const modal = document.getElementById('settings-modal');
        modal.classList.remove('active');
        modal.setAttribute('hidden', '');
    }
};
