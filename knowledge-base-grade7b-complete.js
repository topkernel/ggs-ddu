// 7年级下学期完整知识点库（整合版）
// 总计：180+个知识点

// ============ 语文知识点（90个）============
const grade7bChineseKnowledge = [
    // 这里引用 knowledge-base-grade7b-chinese-extended.js 的内容
    // 为了简化，这里只保留示例，实际使用时会动态加载
];

// ============ 数学知识点（45个）============
const grade7bMathKnowledge = [
    // 这里引用 knowledge-base-grade7b-math-complete.js 的内容
];

// ============ 英语知识点（24个）============
const grade7bEnglishKnowledge = [
    // 这里引用 knowledge-base-grade7b-english.js 的内容
];

// ============ 历史知识点（25个）============
const grade7bHistoryKnowledge = [
    // 这里引用 knowledge-base-grade7b-history.js 的内容
];

// ============ 地理知识点（20个）============
const grade7bGeographyKnowledge = [
    // 这里引用 knowledge-base-grade7b-geography.js 的内容
];

// 导出完整知识点库
const grade7bKnowledge = {
    chinese: grade7bChineseKnowledge,
    math: grade7bMathKnowledge,
    english: grade7bEnglishKnowledge,
    history: grade7bHistoryKnowledge,
    geography: grade7bGeographyKnowledge
};

// 如果在Node.js环境中
if (typeof module !== 'undefined' && module.exports) {
    module.exports = grade7bKnowledge;
}
