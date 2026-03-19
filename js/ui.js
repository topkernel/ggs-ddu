/**
 * 界面渲染模块
 */

const UIManager = {
    // 元素缓存
    elements: {},

    // 初始化元素引用
    initElements() {
        this.elements = {
            slideContent: document.getElementById('slideContent'),
            statsText: document.getElementById('statsText'),
            pageInfo: document.getElementById('pageInfo'),
            jumpInput: document.getElementById('jumpInput'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            settingsPanel: document.getElementById('settingsPanel'),
            gradeSelect: document.getElementById('gradeSelect'),
            subjectSelect: document.getElementById('subjectSelect'),
            mainContent: document.getElementById('mainContent')
        };
    },

    // 初始化事件
    initEvents(callbacks) {
        const { navigate, jumpToFirst, jumpToEnd, jumpToPage, exportMarkdown, toggleSettings, changeGrade, changeSubject } = callbacks;

        // 点击页面其他地方关闭设置面板
        document.addEventListener('click', (e) => {
            if (this.elements.settingsPanel.classList.contains('show') && 
                !e.target.closest('.settings-panel') && 
                !e.target.closest('.settings-btn')) {
                toggleSettings();
            }
        });

        // Touch events for swipe (mobile)
        let touchStartX = 0;
        let touchEndX = 0;

        this.elements.mainContent.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: false});

        this.elements.mainContent.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    navigate(1);
                } else {
                    navigate(-1);
                }
            }
        }, {passive: false});

        // Mouse wheel for desktop
        this.elements.mainContent.addEventListener('wheel', function(e) {
            if (this.scrollHeight <= this.clientHeight) {
                e.preventDefault();
                if (e.deltaY > 0 || e.deltaX > 0) {
                    navigate(1);
                } else if (e.deltaY < 0 || e.deltaX < 0) {
                    navigate(-1);
                }
            }
        }, {passive: false});

        // 绑定设置面板事件
        this.elements.gradeSelect.addEventListener('change', changeGrade);
        this.elements.subjectSelect.addEventListener('change', changeSubject);
    },

    // 更新幻灯片显示
    updateSlide(item, currentIndex, dataLength, currentGrade, currentSubject) {
        if (!item) {
            this.elements.slideContent.innerHTML = `
                <h3>暂无内容 <span class="tag basic">提示</span></h3>
                <p>该年级科目的知识点正在补充中...</p>
            `;
            this.elements.statsText.textContent = `${gradeNames[currentGrade]} | ${subjectNames[currentSubject]} | 0/0`;
            this.elements.pageInfo.textContent = '0/0';
            return;
        }

        // 清理内容并更新
        const cleanHtml = cleanContent(item.content);
        this.elements.slideContent.innerHTML = `
            <h3>${item.title} <span class="tag ${item.tagClass}">${item.tag}</span></h3>
            ${cleanHtml}
        `;

        // 更新统计信息
        this.elements.statsText.textContent =
            `${gradeNames[currentGrade]} | ${subjectNames[currentSubject]} | ${currentIndex + 1}/${dataLength}`;

        this.elements.pageInfo.textContent = `${currentIndex + 1}/${dataLength}`;
        this.elements.jumpInput.placeholder = currentIndex + 1;

        // 更新按钮状态
        this.elements.prevBtn.disabled = currentIndex === 0;
        this.elements.nextBtn.disabled = currentIndex >= dataLength - 1;
    },

    // 更新科目选项
    updateSubjectOptions(gradeData, currentGrade, currentSubject) {
        const data = gradeData[currentGrade];
        if (!data) return;
        
        this.elements.subjectSelect.innerHTML = '';
        
        const subjects = [
            { key: 'chinese', icon: '📖', name: '语文' },
            { key: 'math', icon: '🔢', name: '数学' },
            { key: 'english', icon: '🇬🇧', name: '英语' },
            { key: 'history', icon: '📜', name: '历史' },
            { key: 'geography', icon: '🌍', name: '地理' }
        ];
        
        subjects.forEach(s => {
            const count = data[s.key] ? data[s.key].length : 0;
            const option = document.createElement('option');
            option.value = s.key;
            option.textContent = `${s.icon} ${s.name} (${count})`;
            if (count === 0) option.disabled = true;
            this.elements.subjectSelect.appendChild(option);
        });
        
        this.elements.subjectSelect.value = currentSubject;
    },

    // 设置面板显示/隐藏
    toggleSettingsPanel(show) {
        this.elements.settingsPanel.classList.toggle('show', show);
    },

    // 添加动画效果
    addAnimation(direction) {
        const card = this.elements.slideContent;
        card.classList.add(direction > 0 ? 'animate-left' : 'animate-right');
        
        setTimeout(() => {
            card.classList.remove('animate-left', 'animate-right');
        }, 150);
    },

    // 滚动到顶部
    scrollToTop() {
        this.elements.mainContent.scrollTop = 0;
    },

    // 清空跳转输入
    clearJumpInput() {
        this.elements.jumpInput.value = '';
    }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UIManager;
}
