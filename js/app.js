/**
 * 主应用模块
 */

(function() {
    'use strict';

    // 状态
    let currentGrade = 'grade7b';
    let currentSubject = 'chinese';
    let currentIndex = 0;
    let settingsVisible = false;

    // App 模块
    const App = {
        // 初始化
        init() {
            // 初始化数据
            DataManager.init({});
            
            // 初始化UI
            UIManager.initElements();
            
            // 设置回调
            const callbacks = {
                navigate: (dir) => this.navigate(dir),
                jumpToFirst: () => this.jumpToFirst(),
                jumpToEnd: () => this.jumpToEnd(),
                jumpToPage: () => this.jumpToPage(),
                exportMarkdown: () => this.doExportMarkdown(),
                toggleSettings: () => this.toggleSettings(),
                changeGrade: () => this.changeGrade(),
                changeSubject: () => this.changeSubject()
            };
            
            UIManager.initEvents(callbacks);
            
            // 初始化显示
            this.update();
            this.updateSubjectOptions();
            
            // 绑定键盘事件
            document.addEventListener('keydown', (e) => {
                handleKeyboardNav(e, 
                    (dir) => this.navigate(dir),
                    () => this.jumpToFirst(),
                    () => this.jumpToEnd(),
                    settingsVisible,
                    () => this.toggleSettings()
                );
            });
            
            // 输出统计
            logStats(DataManager.gradeData, gradeNames, subjectNames);
        },

        // 更新显示
        update() {
            const data = DataManager.getData(currentGrade, currentSubject);
            const item = data[currentIndex];
            UIManager.updateSlide(item, currentIndex, data.length, currentGrade, currentSubject);
        },

        // 更新科目选项
        updateSubjectOptions() {
            UIManager.updateSubjectOptions(DataManager.gradeData, currentGrade, currentSubject);
        },

        // 导航
        navigate(direction) {
            const data = DataManager.getData(currentGrade, currentSubject);
            if (!data || data.length === 0) return;
            
            const newIndex = currentIndex + direction;
            
            if (newIndex >= 0 && newIndex < data.length) {
                UIManager.addAnimation(direction);
                
                setTimeout(() => {
                    currentIndex = newIndex;
                    this.update();
                    UIManager.scrollToTop();
                    
                    // 保存进度
                    Storage.saveProgress(currentGrade, currentSubject, currentIndex);
                }, 150);
            }
        },

        // 跳转到第一页
        jumpToFirst() {
            currentIndex = 0;
            this.update();
            UIManager.scrollToTop();
            Storage.saveProgress(currentGrade, currentSubject, currentIndex);
        },

        // 跳转到最后一页
        jumpToEnd() {
            const data = DataManager.getData(currentGrade, currentSubject);
            if (!data || data.length === 0) return;
            currentIndex = data.length - 1;
            this.update();
            UIManager.scrollToTop();
            Storage.saveProgress(currentGrade, currentSubject, currentIndex);
        },

        // 跳转到指定页
        jumpToPage() {
            const pageNum = parseInt(UIManager.elements.jumpInput.value);
            const data = DataManager.getData(currentGrade, currentSubject);
            
            if (data && pageNum >= 1 && pageNum <= data.length) {
                currentIndex = pageNum - 1;
                this.update();
                UIManager.scrollToTop();
                Storage.saveProgress(currentGrade, currentSubject, currentIndex);
            }
            
            UIManager.clearJumpInput();
        },

        // 导出Markdown
        doExportMarkdown() {
            const data = DataManager.getData(currentGrade, currentSubject);
            exportMarkdown(data, currentIndex, currentGrade, currentSubject);
        },

        // 切换设置面板
        toggleSettings() {
            settingsVisible = !settingsVisible;
            UIManager.toggleSettingsPanel(settingsVisible);
        },

        // 改变年级
        changeGrade() {
            currentGrade = UIManager.elements.gradeSelect.value;
            currentSubject = 'chinese';
            currentIndex = Storage.getProgress(currentGrade, currentSubject);
            this.updateSubjectOptions();
            this.update();
            if (settingsVisible) this.toggleSettings();
            UIManager.scrollToTop();
        },

        // 改变科目
        changeSubject() {
            currentSubject = UIManager.elements.subjectSelect.value;
            currentIndex = Storage.getProgress(currentGrade, currentSubject);
            this.update();
            if (settingsVisible) this.toggleSettings();
            UIManager.scrollToTop();
        }
    };

    // 页面加载完成后初始化
    document.addEventListener('DOMContentLoaded', () => {
        App.init();
    });

    // 导出到全局
    window.App = App;

})();
