// 完整知识点库框架（1-9年级）
// 总计约2000+知识点

const completeKnowledgeBase = {
    // ==================== 小学部分 ====================
    grade1: {
        chinese: [], // 约100个知识点
        math: [],    // 约80个知识点
        english: []  // 约60个知识点
    },
    grade2: {
        chinese: [], // 约120个知识点
        math: [],    // 约100个知识点
        english: []  // 约80个知识点
    },
    grade3: {
        chinese: [], // 约140个知识点
        math: [],    // 约120个知识点
        english: []  // 约100个知识点
    },
    grade4: {
        chinese: [], // 约160个知识点
        math: [],    // 约140个知识点
        english: []  // 约120个知识点
    },
    grade5: {
        chinese: [], // 约180个知识点
        math: [],    // 约160个知识点
        english: []  // 约140个知识点
    },
    grade6: {
        chinese: [], // 约200个知识点
        math: [],    // 约180个知识点
        english: []  // 约160个知识点
    },
    
    // ==================== 初中部分（重点）====================
    grade7a: {
        chinese: [],      // 约100个知识点
        math: [],         // 约120个知识点
        english: [],      // 约100个知识点
        biology: [],      // 约80个知识点
        history: [],      // 约80个知识点
        geography: [],    // 约80个知识点
        politics: []      // 约60个知识点
    },
    grade7b: {
        chinese: [],      // 约120个知识点
        math: [],         // 约140个知识点
        english: [],      // 约120个知识点
        biology: [],      // 约100个知识点
        history: [],      // 约100个知识点
        geography: [],    // 约100个知识点
        politics: []      // 约80个知识点
    },
    grade8a: {
        chinese: [],      // 约100个知识点
        math: [],         // 约120个知识点
        english: [],      // 约100个知识点
        physics: [],      // 约150个知识点（新增物理）
        biology: [],      // 约80个知识点
        history: [],      // 约80个知识点
        geography: [],    // 约80个知识点
        politics: []      // 约60个知识点
    },
    grade8b: {
        chinese: [],      // 约120个知识点
        math: [],         // 约140个知识点
        english: [],      // 约120个知识点
        physics: [],      // 约180个知识点
        biology: [],      // 约100个知识点
        history: [],      // 约100个知识点
        geography: [],    // 约100个知识点
        politics: []      // 约80个知识点
    },
    grade9a: {
        chinese: [],      // 约100个知识点
        math: [],         // 约120个知识点
        english: [],      // 约100个知识点
        physics: [],      // 约150个知识点
        chemistry: [],    // 约150个知识点（新增化学）
        history: [],      // 约80个知识点
        politics: []      // 约60个知识点
    },
    grade9b: {
        chinese: [],      // 约120个知识点
        math: [],         // 约140个知识点
        english: [],      // 约120个知识点
        physics: [],      // 约180个知识点
        chemistry: [],    // 约180个知识点
        history: [],      // 约100个知识点
        politics: []      // 约80个知识点
    }
};

// 知识点模板
const knowledgeTemplate = {
    title: "知识点标题",
    tag: "必考|重点|基础|拓展",
    tagClass: "important|important|basic|important",
    unit: "所属单元",
    content: `
        <h4>🎯 核心要点</h4>
        <ul>
            <li>要点1</li>
            <li>要点2</li>
        </ul>

        <div class="advanced">
            <h4>⭐ 深入理解</h4>
            <p>拓展内容</p>
        </div>

        <div class="example">
            <h5>📝 例题</h5>
            <strong>题目：</strong>问题<br>
            <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
            <div class="answer">
                <strong>答案：</strong><br>
                答案内容
            </div>
        </div>

        <div class="example">
            <h5>🔄 举一反三</h5>
            <p><strong>思考：</strong></p>
            <ul>
                <li>拓展问题1</li>
                <li>拓展问题2</li>
            </ul>
        </div>
    `
};

// 标签系统
const tagSystem = {
    "必考": {
        class: "important",
        description: "考试必考，必须熟练掌握",
        color: "#e74c3c"
    },
    "重点": {
        class: "important", 
        description: "考试常考，需要重点掌握",
        color: "#f39c12"
    },
    "基础": {
        class: "basic",
        description: "基础知识，需要了解",
        color: "#27ae60"
    },
    "拓展": {
        class: "important",
        description: "拓展内容，培养思维",
        color: "#9b59b6"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { completeKnowledgeBase, knowledgeTemplate, tagSystem };
}
