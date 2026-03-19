/**
 * 工具函数模块
 */

// 清理内容中的图片引用
function cleanContent(html) {
    return html.replace(/如图[，,。、]/g, '')
               .replace(/\(如图\)/g, '')
               .replace(/（如图）/g, '')
               .replace(/如图所示[，,。、]/g, '');
}

// 数据展平函数
function flattenKnowledge(data) {
    if (!data) return [];
    if (Array.isArray(data)) return data;
    
    if (data.units) {
        let result = [];
        for (let unit of data.units) {
            if (unit.knowledgePoints) result = result.concat(unit.knowledgePoints);
        }
        return result;
    }
    
    if (data.chapters) {
        let result = [];
        for (let chapter of data.chapters) {
            if (chapter.knowledgePoints) result = result.concat(chapter.knowledgePoints);
        }
        return result;
    }
    
    // 处理unit1, unit2, unit3格式
    let result = [];
    for (let i = 1; i <= 10; i++) {
        let unit = data['unit' + i];
        if (unit && Array.isArray(unit)) {
            result = result.concat(unit);
        }
    }
    return result;
}

// 知识点格式转换
function convertKnowledgePoint(kp, subject) {
    let content = '';
    let tag = '基础';
    let tagClass = 'basic';
    let title = '';

    if (subject === 'chinese') {
        return kp;
    } else if (subject === 'math') {
        title = kp.name || kp.id || '知识点';
        tag = (kp.tags && kp.tags.includes('必考')) ? '重点' : '基础';
        tagClass = (kp.tags && kp.tags.includes('必考')) ? 'important' : 'basic';

        if (kp.definition) {
            content += `<h4>定义</h4><p>${kp.definition}</p>`;
        }
        if (kp.formula) {
            content += `<div class="formula">${kp.formula}</div>`;
        }
        if (kp.example) {
            content += `<div class="example">`;
            content += `<strong>例题：</strong>${kp.example.question}<br/>`;
            content += `<button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>`;
            content += `<div class="answer">${kp.example.answer}</div>`;
            content += `</div>`;
        }
        if (kp.commonErrors) {
            content += `<div class="advanced"><h4>⚠️ 易错点</h4><p>${kp.commonErrors}</p></div>`;
        }
    } else if (subject === 'english') {
        title = kp.title || kp.id || '知识点';
        tag = (kp.tag === '必考') ? '重点' : '基础';
        tagClass = (kp.tag === '必考') ? 'important' : 'basic';

        if (kp.grammar) {
            content += `<h4>语法</h4><p>${kp.grammar}</p>`;
        }
        if (kp.vocabulary) {
            content += `<h4>词汇</h4><p>${kp.vocabulary}</p>`;
        }
        if (kp.examples && kp.examples.length > 0) {
            content += `<h4>📝 例句</h4><ul>`;
            kp.examples.forEach(ex => {
                content += `<li><strong>${ex.en}</strong> - ${ex.cn}`;
                if (ex.note) content += ` (${ex.note})`;
                content += `</li>`;
            });
            content += `</ul>`;
        }
        if (kp.commonMistakes) {
            content += `<div class="advanced"><h4>⚠️ 易错</h4><p>${kp.commonMistakes}</p></div>`;
        }
    }

    return { title, tag, tagClass, content };
}

// 切换答案显示
function toggleAnswer(btn) {
    const answer = btn.nextElementSibling;
    answer.classList.toggle('show');
    btn.textContent = answer.classList.contains('show') ? '隐藏答案' : '查看答案';
}

// 导出Markdown
function exportMarkdown(data, currentIndex, currentGrade, currentSubject) {
    if (!data || data.length === 0) return;

    let content = '# 中小学知识点备忘\n\n';
    content += `> 年级：${gradeNames[currentGrade]}\n`;
    content += `> 科目：${subjectNames[currentSubject]}\n`;
    content += `> 导出时间：${new Date().toLocaleString('zh-CN')}\n\n`;
    content += '---\n\n';

    const item = data[currentIndex];
    content += `## ${item.title}\n\n`;
    
    const temp = document.createElement('div');
    temp.innerHTML = cleanContent(item.content);
    content += temp.textContent + '\n\n';

    const blob = new Blob([content], {type: 'text/markdown;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `知识点-${gradeNames[currentGrade]}-${subjectNames[currentSubject]}-${currentIndex + 1}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

// 键盘导航处理
function handleKeyboardNav(e, navigate, jumpToFirst, jumpToEnd, settingsVisible, toggleSettings) {
    if (e.target.tagName === 'INPUT') return;

    switch(e.key) {
        case 'ArrowLeft':
            navigate(-1);
            break;
        case 'ArrowRight':
            navigate(1);
            break;
        case 'Home':
            jumpToFirst();
            break;
        case 'End':
            jumpToEnd();
            break;
        case 'Escape':
            if (settingsVisible) toggleSettings();
            break;
    }
}

// 输出统计信息到控制台
function logStats(gradeData, gradeNames, subjectNames) {
    console.log('=== 知识点统计 ===');
    for (let grade in gradeData) {
        console.log(`\n${gradeNames[grade]}:`);
        for (let subject in gradeData[grade]) {
            const count = gradeData[grade][subject].length;
            if (count > 0) {
                console.log(`  ${subjectNames[subject]}: ${count}个`);
            }
        }
    }
}

// 工具函数导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cleanContent,
        flattenKnowledge,
        convertKnowledgePoint,
        toggleAnswer,
        exportMarkdown,
        handleKeyboardNav,
        logStats
    };
}
