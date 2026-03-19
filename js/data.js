/**
 * 数据处理模块
 */

// 科目名称映射
const subjectNames = {
    chinese: '语文',
    math: '数学',
    english: '英语',
    history: '历史',
    geography: '地理'
};

// 年级名称映射
const gradeNames = {
    grade2: '2下',
    grade7a: '7上',
    grade7b: '7下',
    grade8a: '8上',
    grade8b: '8下'
};

// 数据模块
const DataManager = {
    // 各年级知识点数据
    gradeData: null,

    // 初始化数据
    init(knowledgeModules) {
        this.gradeData = {
            grade2: {
                chinese: [
                    {
                        title: "1. 认识常用汉字",
                        tag: "基础",
                        tagClass: "basic",
                        content: `
                            <h4>多音字</h4>
                            <ul>
                                <li><strong>乐：</strong>lè（快乐）、yuè（音乐）</li>
                                <li><strong>长：</strong>cháng（长短）、zhǎng（成长）</li>
                                <li><strong>种：</strong>zhǒng（种子）、zhòng（种树）</li>
                            </ul>
                            <h4>形近字</h4>
                            <ul>
                                <li>已（已经）/ 己（自己）</li>
                                <li>峰（山峰）/ 锋（锋利）</li>
                            </ul>
                        `
                    },
                    {
                        title: "2. 词语积累",
                        tag: "基础",
                        tagClass: "basic",
                        content: `
                            <h4>AABB式词语</h4>
                            <ul>
                                <li>高高兴兴、平平安安、快快乐乐</li>
                                <li>明明白白、红红火火、干干干净净</li>
                            </ul>
                            <h4>ABAB式词语</h4>
                            <ul>
                                <li>雪白雪白、火红火红、碧绿碧绿</li>
                            </ul>
                        `
                    },
                    {
                        title: "3. 句子训练",
                        tag: "重点",
                        tagClass: "important",
                        content: `
                            <h4>标点符号</h4>
                            <ul>
                                <li><strong>句号（。）：</strong>陈述句末尾</li>
                                <li><strong>问号（？）：</strong>疑问句末尾</li>
                                <li><strong>感叹号（！）：</strong>感叹句末尾</li>
                            </ul>
                            <div class="example">
                                <strong>例题：</strong>给句子加标点<br>
                                1. 春天来了__<br>
                                2. 你去哪里__<br>
                                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                                <div class="answer">
                                    1. 春天来了。<br>
                                    2. 你去哪里？
                                </div>
                            </div>
                        `
                    }
                ],
                math: [
                    {
                        title: "1. 万以内数的认识",
                        tag: "基础",
                        tagClass: "basic",
                        content: `
                            <h4>数位顺序</h4>
                            <ul>
                                <li>个位、十位、百位、千位、万位</li>
                            </ul>
                            <h4>数的组成</h4>
                            <p>3254 = 3000 + 200 + 50 + 4</p>
                            <p>= 3个千 + 2个百 + 5个十 + 4个一</p>
                        `
                    }
                ],
                english: [
                    {
                        title: "1. Numbers 1-20",
                        tag: "基础",
                        tagClass: "basic",
                        content: `
                            <h4>数字1-20</h4>
                            <p>one, two, three, four, five, six, seven, eight, nine, ten</p>
                            <p>eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty</p>
                        `
                    }
                ],
                history: [],
                geography: []
            },
            grade7a: {
                chinese: [
                    {
                        title: "1. 古诗文《世说新语》",
                        tag: "必考",
                        tagClass: "important",
                        content: `
                            <h4>《咏雪》</h4>
                            <p>谢太傅寒雪日内集，与儿女讲论文义。俄而雪骤，公欣然曰："白雪纷纷何所似？"兄子胡儿曰："撒盐空中差可拟。"兄女曰："未若柳絮因风起。"公大笑乐。</p>
                            <h4>重点字词</h4>
                            <ul>
                                <li>内集：把家里人聚集在一起</li>
                                <li>儿女：子侄辈</li>
                                <li>俄而：不久，一会儿</li>
                            </ul>
                        `
                    }
                ],
                math: [],
                english: [],
                history: [],
                geography: []
            },
            grade7b: null, // 动态加载
            grade8a: {
                chinese: [],
                math: [],
                english: [],
                history: [],
                geography: []
            },
            grade8b: {
                chinese: [],
                math: [],
                english: [],
                history: [],
                geography: []
            }
        };

        // 处理动态加载的数据
        this._processLoadedData(knowledgeModules);
    },

    // 处理动态加载的知识库数据
    _processLoadedData(modules) {
        const modulesMap = modules || {};
        
        // 7年级下学期数据处理
        this.gradeData.grade7b = {
            chinese: typeof grade7bChinese !== 'undefined' ? flattenKnowledge(grade7bChinese) : [],
            math: (typeof grade7bMath !== 'undefined' ? flattenKnowledge(grade7bMath) : []).map(kp => convertKnowledgePoint(kp, 'math')),
            english: (typeof grade7bEnglish !== 'undefined' ? flattenKnowledge(grade7bEnglish) : []).map(kp => convertKnowledgePoint(kp, 'english')),
            history: typeof grade7bHistory !== 'undefined' ? flattenKnowledge(grade7bHistory) : [],
            geography: typeof grade7bGeography !== 'undefined' ? grade7bGeography : []
        };

        // 8年级下学期数据
        if (typeof grade8bMath !== 'undefined') {
            this.gradeData.grade8b.math = flattenKnowledge(grade8bMath);
        }
        if (typeof grade8bPhysics !== 'undefined') {
            this.gradeData.grade8b.physics = flattenKnowledge(grade8bPhysics);
        }

        // 9年级数据
        if (typeof grade9Chemistry !== 'undefined') {
            this.gradeData.grade9 = {
                chinese: [],
                math: [],
                english: [],
                history: [],
                geography: [],
                chemistry: flattenKnowledge(grade9Chemistry)
            };
        }
    },

    // 获取当前数据
    getData(grade, subject) {
        if (!this.gradeData) return [];
        const data = this.gradeData[grade];
        if (!data) return [];
        return data[subject] || [];
    },

    // 获取数据总数
    getTotalCount(grade, subject) {
        return this.getData(grade, subject).length;
    },

    // 获取所有科目
    getSubjects(grade) {
        const data = this.gradeData[grade];
        if (!data) return [];
        
        return Object.keys(data).filter(key => {
            return data[key] && data[key].length > 0;
        });
    },

    // 搜索知识点
    search(query, grade, subject) {
        const data = this.getData(grade, subject);
        if (!query || !data) return [];
        
        const lowerQuery = query.toLowerCase();
        return data.filter(item => {
            return item.title.toLowerCase().includes(lowerQuery) ||
                   (item.content && item.content.toLowerCase().includes(lowerQuery));
        });
    }
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DataManager, subjectNames, gradeNames };
}
