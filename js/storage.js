/**
 * LocalStorage 存储模块
 */

const Storage = {
    // 存储键名
    KEYS: {
        PROGRESS: 'ggs_progress',
        FAVORITES: 'ggs_favorites',
        SETTINGS: 'ggs_settings',
        NOTES: 'ggs_notes'
    },

    // 保存学习进度
    saveProgress(grade, subject, index) {
        const key = `${this.KEYS.PROGRESS}_${grade}_${subject}`;
        localStorage.setItem(key, index.toString());
    },

    // 获取学习进度
    getProgress(grade, subject) {
        const key = `${this.KEYS.PROGRESS}_${grade}_${subject}`;
        const value = localStorage.getItem(key);
        return value ? parseInt(value) : 0;
    },

    // 保存收藏
    saveFavorite(grade, subject, index) {
        const key = this.KEYS.FAVORITES;
        let favorites = this.getFavorites();
        
        const id = `${grade}_${subject}_${index}`;
        if (!favorites.includes(id)) {
            favorites.push(id);
            localStorage.setItem(key, JSON.stringify(favorites));
        }
    },

    // 移除收藏
    removeFavorite(grade, subject, index) {
        const key = this.KEYS.FAVORITES;
        let favorites = this.getFavorites();
        
        const id = `${grade}_${subject}_${index}`;
        favorites = favorites.filter(f => f !== id);
        localStorage.setItem(key, JSON.stringify(favorites));
    },

    // 获取所有收藏
    getFavorites() {
        const value = localStorage.getItem(this.KEYS.FAVORITES);
        return value ? JSON.parse(value) : [];
    },

    // 检查是否已收藏
    isFavorite(grade, subject, index) {
        const id = `${grade}_${subject}_${index}`;
        return this.getFavorites().includes(id);
    },

    // 保存设置
    saveSettings(settings) {
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
    },

    // 获取设置
    getSettings() {
        const value = localStorage.getItem(this.KEYS.SETTINGS);
        return value ? JSON.parse(value) : {};
    },

    // 保存笔记
    saveNote(grade, subject, index, note) {
        const key = this.KEYS.NOTES;
        let notes = this.getNotes();
        
        const id = `${grade}_${subject}_${index}`;
        notes[id] = note;
        localStorage.setItem(key, JSON.stringify(notes));
    },

    // 获取笔记
    getNotes() {
        const value = localStorage.getItem(this.KEYS.NOTES);
        return value ? JSON.parse(value) : {};
    },

    // 获取单条笔记
    getNote(grade, subject, index) {
        const id = `${grade}_${subject}_${index}`;
        const notes = this.getNotes();
        return notes[id] || '';
    },

    // 获取学习进度百分比
    getProgressPercent(grade, subject, total) {
        const current = this.getProgress(grade, subject);
        return total > 0 ? Math.round((current / total) * 100) : 0;
    },

    // 清除所有数据
    clearAll() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
}
