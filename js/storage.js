const Storage = {
    KEY: 'ai_security_roadmap_v1',

    save: function (data) {
        try {
            localStorage.setItem(this.KEY, JSON.stringify(data));
            console.log('[SYSTEM] Data saved successfully.');
            // Dispatch event for other listeners if needed
        } catch (e) {
            console.error('[ERROR] Failed to save data:', e);
        }
    },

    load: function () {
        const data = localStorage.getItem(this.KEY);
        return data ? JSON.parse(data) : null;
    },

    clear: function () {
        localStorage.removeItem(this.KEY);
    },

    // Helper to merge default data with saved data (simple version)
    // In a real app, this would be more robust to schema changes
    init: function (defaultData) {
        const saved = this.load();
        if (saved) {
            console.log('[SYSTEM] Restoring session...');
            return saved;
        }
        console.log('[SYSTEM] Initializing new session...');
        return defaultData;
    }
};
