// 7年级下学期语文完整知识点库（深圳教材版）
// 包含：基础、重点、必考、拓展四个层次

const grade7bChineseComplete = [
    // ==================== 第一单元：杰出人物 ====================
    
    // 1. 邓稼先（重点课文）
    {
        title: "1.1 邓稼先 - 人物形象",
        tag: "必考",
        tagClass: "important",
        unit: "第一单元",
        content: `
            <h4>🎯 核心要点</h4>
            <ul>
                <li><strong>爱国精神：</strong>放弃国外优越条件，毅然回国</li>
                <li><strong>奉献精神：</strong>28年隐姓埋名，投身核武器研究</li>
                <li><strong>严谨态度：</strong>对工作精益求精，一丝不苟</li>
                <li><strong>朴实品格：</strong>生活简朴，淡泊名利</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 写作手法分析</h4>
                <p><strong>1. 对比手法</strong></p>
                <ul>
                    <li>邓稼先与奥本海默的对比</li>
                    <li>突出邓稼先的朴实、谦逊</li>
                    <li>个人与国家：小我与大我的统一</li>
                </ul>
                <p><strong>2. 侧面描写</strong></p>
                <p>通过他人评价、环境描写烘托人物形象</p>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>文章为什么要写奥本海默？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    通过对比，突出邓稼先的品格特点：<br>
                    1. 奥本海默锋芒毕露，邓稼先朴实谦逊<br>
                    2. 奥本海默善于社交，邓稼先专注科研<br>
                    3. 两者都是杰出科学家，但性格迥异<br>
                    4. 对比使人物形象更鲜明
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>拓展思考：</strong></p>
                <ul>
                    <li>邓稼先精神在当代的意义？</li>
                    <li>科学家应该具备哪些品质？</li>
                    <li>个人理想与国家需要如何统一？</li>
                </ul>
            </div>
        `
    },
    {
        title: "1.2 邓稼先 - 叙事结构",
        tag: "重点",
        tagClass: "important",
        unit: "第一单元",
        content: `
            <h4>🎯 文章结构</h4>
            <ul>
                <li><strong>第一部分：</strong>引言，从历史背景切入</li>
                <li><strong>第二部分：</strong>介绍邓稼先的生平</li>
                <li><strong>第三部分：</strong>与奥本海默对比</li>
                <li><strong>第四部分：</strong>工作环境与态度</li>
                <li><strong>第五部分：</strong>最后的日子</li>
                <li><strong>第六部分：</strong>总结评价</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 结构特点</h4>
                <p><strong>1. 小标题的使用</strong></p>
                <ul>
                    <li>使文章层次清晰</li>
                    <li>便于把握内容</li>
                    <li>突出重点</li>
                </ul>
                <p><strong>2. 时间的跳跃</strong></p>
                <p>不是按时间顺序，而是按主题组织材料</p>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>分析文章使用小标题的作用。<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    1. 使文章结构清晰，层次分明<br>
                    2. 每个小标题概括一个主题<br>
                    3. 便于读者快速把握内容<br>
                    4. 突出人物不同方面的品质
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>写作练习：</strong></p>
                <p>用小标题的形式写一篇关于身边人的文章</p>
                <ul>
                    <li>要求：3-5个小标题</li>
                    <li>每个小标题下写一段话</li>
                    <li>突出人物的不同特点</li>
                </ul>
            </div>
        `
    },

    // 2. 说和做
    {
        title: "1.3 说和做 - 人物品格",
        tag: "必考",
        tagClass: "important",
        unit: "第一单元",
        content: `
            <h4>🎯 闻一多的品格</h4>
            <ul>
                <li><strong>言行一致：</strong>说了就做，做了再说</li>
                <li><strong>治学严谨：</strong>目不窥园，足不下楼</li>
                <li><strong>爱国热情：</strong>投身革命，不畏牺牲</li>
            </ul>

            <div class="advanced">
                <h4>⭐ "说"和"做"的关系</h4>
                <p><strong>作为学者：</strong></p>
                <ul>
                    <li>"做了再说，做了不说"</li>
                    <li>潜心学术，不张扬</li>
                </ul>
                <p><strong>作为革命家：</strong></p>
                <ul>
                    <li>"说了就做"</li>
                    <li>言行一致，敢于斗争</li>
                </ul>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>文章如何表现闻一多"言行一致"的品格？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    1. 学者时期：埋头钻研，不尚空谈<br>
                    2. 革命时期：说干就干，立即行动<br>
                    3. 对比手法：与空谈家对比<br>
                    4. 具体事例：起草通电、游行示威等
                </div>
            </div>
        `
    },
    {
        title: "1.4 说和做 - 叙事技巧",
        tag: "重点",
        tagClass: "important",
        unit: "第一单元",
        content: `
            <h4>🎯 叙事技巧</h4>
            <ul>
                <li><strong>过渡段：</strong>连接前后两部分</li>
                <li><strong>详略得当：</strong>重点突出</li>
                <li><strong>首尾呼应：</strong>结构完整</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 过渡段的作用</h4>
                <p><strong>结构作用：</strong></p>
                <ul>
                    <li>承上启下</li>
                    <li>连接前后两部分</li>
                    <li>使文章结构完整</li>
                </ul>
                <p><strong>内容作用：</strong></p>
                <ul>
                    <li>点明身份转变</li>
                    <li>突出人物品质</li>
                </ul>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>找出文中的过渡段，分析其作用。<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    过渡段："做了再说，做了不说，这仅是闻一多先生的一个方面——作为学者的方面。闻一多先生还有另外一个方面——作为革命家的方面。"<br><br>
                    作用：<br>
                    1. 承上启下，由学者过渡到革命家<br>
                    2. 概括上文，引出下文<br>
                    3. 使文章结构严谨<br>
                    4. 突出人物不同时期的贡献
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>写作练习：</strong></p>
                <p>写一段过渡段，连接"童年趣事"和"少年烦恼"</p>
            </div>
        `
    },

    // 3. 回忆鲁迅先生
    {
        title: "1.5 回忆鲁迅先生 - 细节描写",
        tag: "重点",
        tagClass: "important",
        unit: "第一单元",
        content: `
            <h4>🎯 细节描写的作用</h4>
            <ul>
                <li><strong>刻画人物：</strong>展现鲁迅的品格</li>
                <li><strong>增强真实感：</strong>使人物更立体</li>
                <li><strong>表达情感：</strong>作者的敬爱之情</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 细节描写的类型</h4>
                <p><strong>1. 动作细节</strong></p>
                <p>例：鲁迅先生走路很轻捷......</p>
                <p><strong>2. 语言细节</strong></p>
                <p>例：鲁迅先生的笑声是明朗的......</p>
                <p><strong>3. 神态细节</strong></p>
                <p>例：鲁迅先生感到自己的身体不好......</p>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>分析"笑声明朗"这个细节的作用。<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    作用：<br>
                    1. 表现鲁迅乐观、豁达的性格<br>
                    2. 打破人们对鲁迅"严肃"的刻板印象<br>
                    3. 展现鲁迅平易近人的一面<br>
                    4. 表达作者的亲切回忆
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>写作练习：</strong></p>
                <p>用3个细节描写你熟悉的人</p>
                <ul>
                    <li>一个动作细节</li>
                    <li>一个语言细节</li>
                    <li>一个神态细节</li>
                </ul>
            </div>
        `
    },

    // ==================== 第二单元：家国情怀 ====================
    
    {
        title: "2.1 黄河颂 - 诗歌意象",
        tag: "必考",
        tagClass: "important",
        unit: "第二单元",
        content: `
            <h4>🎯 黄河的象征意义</h4>
            <ul>
                <li><strong>中华民族的象征：</strong>发源地，母亲河</li>
                <li><strong>民族精神的象征：</strong>坚韧不拔、勇往直前</li>
                <li><strong>历史文化的象征：</strong>五千年文明</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 诗歌的表达方式</h4>
                <p><strong>1. 直接抒情</strong></p>
                <p>"啊！黄河！"——直接表达赞美之情</p>
                <p><strong>2. 借景抒情</strong></p>
                <p>通过描写黄河的雄伟壮观，抒发爱国之情</p>
                <p><strong>3. 反复咏叹</strong></p>
                <p>多次呼唤"啊！黄河！"增强感染力</p>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>分析"啊！黄河！"反复出现的作用。<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    1. 增强节奏感，形成回环往复的韵律美<br>
                    2. 强化情感，表达对黄河的热爱和赞美<br>
                    3. 每次呼唤的内容递进，层层深入<br>
                    4. 营造气势磅礴的艺术效果
                </div>
            </div>
        `
    },
    {
        title: "2.2 最后一课 - 主题思想",
        tag: "必考",
        tagClass: "important",
        unit: "第二单元",
        content: `
            <h4>🎯 主题思想</h4>
            <ul>
                <li><strong>爱国主题：</strong>表达对祖国的热爱</li>
                <li><strong>语言的重要性：</strong>语言是民族文化的载体</li>
                <li><strong>亡国之痛：</strong>失去祖国的痛苦和悲愤</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 叙事视角</h4>
                <p><strong>第一人称（小弗朗士）视角的作用：</strong></p>
                <ul>
                    <li>增强真实感和亲切感</li>
                    <li>便于心理描写</li>
                    <li>通过儿童视角展现变化</li>
                    <li>前后对比：心理变化</li>
                </ul>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>为什么要用小弗朗士的视角来叙述？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    1. 儿童视角更真实、单纯，增强感染力<br>
                    2. 通过心理变化展现主题<br>
                    3. 前后对比：从贪玩到热爱法语<br>
                    4. 以小见大：通过一个孩子的变化反映整个民族的觉醒
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>思考：</strong></p>
                <ul>
                    <li>为什么韩麦尔先生最后只写了"法兰西万岁"？</li>
                    <li>小弗朗士的心理变化说明了什么？</li>
                </ul>
            </div>
        `
    },

    // ==================== 第三单元：传统文化 ====================
    
    {
        title: "3.1 陋室铭 - 托物言志",
        tag: "必考",
        tagClass: "important",
        unit: "第三单元",
        content: `
            <h4>🎯 重点字词</h4>
            <ul>
                <li><strong>名：</strong>出名，有名</li>
                <li><strong>灵：</strong>灵验</li>
                <li><strong>斯：</strong>这</li>
                <li><strong>馨：</strong>香气，这里指品德高尚</li>
                <li><strong>鸿儒：</strong>大儒，博学的人</li>
                <li><strong>白丁：</strong>平民，这里指没有学问的人</li>
                <li><strong>案牍：</strong>官府公文</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 托物言志</h4>
                <p><strong>物：</strong>陋室</p>
                <p><strong>志：</strong>不慕荣利、安贫乐道的高尚情操</p>
                <p><strong>写作手法：</strong></p>
                <ul>
                    <li>对比：有仙则名vs山不在高</li>
                    <li>对偶：苔痕上阶绿，草色入帘青</li>
                    <li>引用：孔子云：何陋之有？</li>
                </ul>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>文章如何体现"惟吾德馨"？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    通过三个方面体现：<br>
                    1. 环境："苔痕上阶绿，草色入帘青"——清幽雅致<br>
                    2. 交往："谈笑有鸿儒，往来无白丁"——志趣高雅<br>
                    3. 生活："可以调素琴，阅金经"——精神富足<br>
                    "无丝竹之乱耳，无案牍之劳形"——远离世俗
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>拓展：</strong></p>
                <ul>
                    <li>陋室不陋的原因是什么？</li>
                    <li>刘禹锡的人生态度对你有什么启发？</li>
                    <li>用自己的话描述陋室的环境</li>
                </ul>
            </div>
        `
    },
    {
        title: "3.2 爱莲说 - 象征手法",
        tag: "必考",
        tagClass: "important",
        unit: "第三单元",
        content: `
            <h4>🎯 莲的象征意义</h4>
            <ul>
                <li><strong>出淤泥而不染：</strong>不与世俗同流合污</li>
                <li><strong>濯清涟而不妖：</strong>洁身自好，不媚俗</li>
                <li><strong>中通外直：</strong>正直通达</li>
                <li><strong>不蔓不枝：</strong>不攀附权贵</li>
                <li><strong>香远益清：</strong>美名远扬</li>
                <li><strong>亭亭净植：</strong>高洁独立</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 衬托手法</h4>
                <p><strong>正衬：</strong>菊——隐逸者</p>
                <p><strong>反衬：</strong>牡丹——富贵者</p>
                <div class="formula">
                    菊之爱 → 鲜有闻（隐逸）<br>
                    莲之爱 → 同予者何人（君子）<br>
                    牡丹之爱 → 宜乎众矣（富贵）
                </div>
            </div>

            <div class="example">
                <h5>📝 例题</h5>
                <strong>题目：</strong>文章为什么要写菊和牡丹？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：</strong><br>
                    1. 菊：正衬，隐逸之花，衬托莲的高洁<br>
                    2. 牡丹：反衬，富贵之花，批判追名逐利<br>
                    3. 三者对比，突出莲的君子品质<br>
                    4. 表达作者的价值观：鄙视富贵，崇尚高洁
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>思考：</strong></p>
                <ul>
                    <li>作者为什么要用"予独爱莲"？</li>
                    <li>"莲之爱，同予者何人"表达了什么情感？</li>
                    <li>现代人应该如何理解"出淤泥而不染"？</li>
                </ul>
            </div>
        `
    },

    // 继续添加更多知识点...
];

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = grade7bChineseComplete;
}
