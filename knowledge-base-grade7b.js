// 7年级下学期完整知识点库
const grade7bKnowledge = {
    chinese: [
        // 第一单元：杰出人物
        {
            title: "1. 邓稼先 - 人物形象分析",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>人物品质</h4>
                <ul>
                    <li><strong>爱国精神：</strong>放弃国外优越条件，毅然回国</li>
                    <li><strong>奉献精神：</strong>28年隐姓埋名，投身核武器研究</li>
                    <li><strong>严谨态度：</strong>对工作精益求精，一丝不苟</li>
                    <li><strong>朴实品格：</strong>生活简朴，淡泊名利</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 写作手法</h4>
                    <p><strong>1. 对比手法</strong></p>
                    <ul>
                        <li>邓稼先与奥本海默的对比：突出邓稼先的朴实、谦逊</li>
                        <li>个人与国家：小我与大我的统一</li>
                    </ul>
                    <p><strong>2. 侧面描写</strong></p>
                    <p>通过他人评价、环境描写烘托人物形象</p>
                    <div class="example">
                        <strong>例题：</strong>文章为什么要写奥本海默？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            通过对比，突出邓稼先的品格特点：<br>
                            1. 奥本海默锋芒毕露，邓稼先朴实谦逊<br>
                            2. 奥本海默善于社交，邓稼先专注科研<br>
                            3. 两者都是杰出科学家，但性格迥异<br>
                            4. 对比使人物形象更鲜明
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. 说和做 - 叙事顺序",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>文章结构</h4>
                <ul>
                    <li><strong>第一部分：</strong>写闻一多作为学者的"说"和"做"</li>
                    <li><strong>第二部分：</strong>写闻一多作为革命家的"说"和"做"</li>
                    <li><strong>过渡段：</strong>连接两部分，使文章结构严谨</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 过渡的作用</h4>
                    <p><strong>1. 结构作用</strong></p>
                    <ul>
                        <li>承上启下，连接前后两部分</li>
                        <li>使文章结构完整、紧凑</li>
                        <li>避免内容脱节</li>
                    </ul>
                    <p><strong>2. 内容作用</strong></p>
                    <ul>
                        <li>点明闻一多身份的转变</li>
                        <li>突出其言行一致的品质</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>找出文中的过渡段，分析其作用。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            过渡段："做了再说，做了不说，这仅是闻一多先生的一个方面，——作为学者的方面。闻一多先生还有另外一个方面，——作为革命家的方面。"<br><br>
                            作用：<br>
                            1. 承上启下，由"学者"过渡到"革命家"<br>
                            2. 概括上文，引出下文<br>
                            3. 使文章结构严谨，层次清晰<br>
                            4. 突出闻一多不同时期的贡献
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "3. 回忆鲁迅先生 - 细节描写",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>细节描写的作用</h4>
                <ul>
                    <li><strong>刻画人物：</strong>通过生活细节展现鲁迅的品格</li>
                    <li><strong>增强真实感：</strong>使人物形象更真实、立体</li>
                    <li><strong>表达情感：</strong>作者对鲁迅的敬爱之情</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 细节描写的类型</h4>
                    <p><strong>1. 动作细节</strong></p>
                    <p>例：鲁迅先生走路很轻捷......</p>
                    <p><strong>2. 语言细节</strong></p>
                    <p>例：鲁迅先生的笑声是明朗的......</p>
                    <p><strong>3. 神态细节</strong></p>
                    <p>例：鲁迅先生感到自己的身体不好......</p>
                    <div class="example">
                        <strong>例题：</strong>文中写鲁迅"笑声明朗"这个细节有什么作用？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            作用：<br>
                            1. 表现鲁迅乐观、豁达的性格<br>
                            2. 打破人们对鲁迅"严肃"的刻板印象<br>
                            3. 展现鲁迅平易近人的一面<br>
                            4. 表达作者对鲁迅的亲切回忆
                        </div>
                    </div>
                </div>
            `
        },
        // 第二单元：家国情怀
        {
            title: "4. 黄河颂 - 诗歌意象",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>黄河的象征意义</h4>
                <ul>
                    <li><strong>中华民族的象征：</strong>中华民族的发源地</li>
                    <li><strong>民族精神的象征：</strong>坚韧不拔、勇往直前</li>
                    <li><strong>历史文化的象征：</strong>承载着五千年文明</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 诗歌的表达方式</h4>
                    <p><strong>1. 直接抒情</strong></p>
                    <p>例："啊！黄河！"</p>
                    <p><strong>2. 借景抒情</strong></p>
                    <p>通过描写黄河的雄伟壮观，抒发爱国之情</p>
                    <p><strong>3. 反复咏叹</strong></p>
                    <p>多次呼唤"啊！黄河！"增强感染力</p>
                    <div class="example">
                        <strong>例题：</strong>分析"啊！黄河！"反复出现的作用。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            作用：<br>
                            1. 增强节奏感，形成回环往复的韵律美<br>
                            2. 强化情感，表达对黄河的热爱和赞美<br>
                            3. 每次呼唤的内容递进，层层深入<br>
                            4. 营造气势磅礴的艺术效果
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "5. 最后一课 - 主题思想",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>主题思想</h4>
                <ul>
                    <li><strong>爱国主题：</strong>表达对祖国的热爱</li>
                    <li><strong>语言的重要性：</strong>语言是民族文化的载体</li>
                    <li><strong>亡国之痛：</strong>失去祖国的痛苦和悲愤</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 小说的叙事视角</h4>
                    <p><strong>第一人称（小弗朗士）视角的作用：</strong></p>
                    <ul>
                        <li>增强真实感和亲切感</li>
                        <li>便于心理描写</li>
                        <li>通过儿童视角展现变化</li>
                        <li>形成对比：前后的心理变化</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>为什么要用小弗朗士的视角来叙述？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            作用：<br>
                            1. 儿童视角更真实、单纯，增强感染力<br>
                            2. 通过小弗朗士的心理变化展现主题<br>
                            3. 前后对比：从贪玩到热爱法语<br>
                            4. 以小见大：通过一个孩子的变化反映整个民族的觉醒
                        </div>
                    </div>
                </div>
            `
        },
        // 第三单元：传统文化
        {
            title: "6. 陋室铭 - 托物言志",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>重点字词</h4>
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
                    <div class="example">
                        <strong>例题：</strong>文章如何体现"惟吾德馨"？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            通过三个方面体现：<br>
                            1. 环境："苔痕上阶绿，草色入帘青"——清幽雅致<br>
                            2. 交往："谈笑有鸿儒，往来无白丁"——志趣高雅<br>
                            3. 生活："可以调素琴，阅金经"——精神富足<br>
                            "无丝竹之乱耳，无案牍之劳形"——远离世俗
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. 爱莲说 - 象征手法",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>莲的象征意义</h4>
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
                    <p><strong>正衬：</strong>菊——隐逸者（正面衬托）</p>
                    <p><strong>反衬：</strong>牡丹——富贵者（反面衬托）</p>
                    <div class="formula">
                        菊之爱 → 鲜有闻（隐逸）<br>
                        莲之爱 → 同予者何人（君子）<br>
                        牡丹之爱 → 宜乎众矣（富贵）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>文章为什么要写菊和牡丹？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            作用：<br>
                            1. 菊：正衬，隐逸之花，衬托莲的高洁<br>
                            2. 牡丹：反衬，富贵之花，批判追名逐利<br>
                            3. 三者对比，突出莲的君子品质<br>
                            4. 表达作者的价值观：鄙视富贵，崇尚高洁
                        </div>
                    </div>
                </div>
            `
        },
        // 第四单元：人生哲理
        {
            title: "8. 叶圣陶先生二三事 - 叙事角度",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>人物品质</h4>
                <ul>
                    <li><strong>严谨认真：</strong>对工作一丝不苟</li>
                    <li><strong>宽厚待人：</strong>对人宽容、和善</li>
                    <li><strong>以身作则：</strong>言行一致</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 以小见大</h4>
                    <p><strong>选材特点：</strong></p>
                    <ul>
                        <li>选择生活中的小事</li>
                        <li>通过细节展现人物品格</li>
                        <li>平凡中见伟大</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>文章为什么选择"二三事"来写？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 小事更能体现人物的真实品格<br>
                            2. 生活化、具体化，增强真实感<br>
                            3. 以小见大，平凡中见伟大<br>
                            4. 避免空洞说教，更生动感人
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "9. 驿路梨花 - 悬念设置",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>情节结构</h4>
                <ul>
                    <li><strong>设置悬念：</strong>小茅屋的主人是谁？</li>
                    <li><strong>层层推进：</strong>多次误会，不断寻找</li>
                    <li><strong>揭示谜底：</strong>梨花姑娘和她的姐妹们</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 悬念的作用</h4>
                    <ul>
                        <li>吸引读者，激发阅读兴趣</li>
                        <li>使情节波澜起伏</li>
                        <li>突出人物品质</li>
                        <li>深化主题</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>文章的悬念是如何设置的？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            悬念设置：<br>
                            1. 开头：小茅屋是谁建的？<br>
                            2. 第一次误会：以为是猎人<br>
                            3. 第二次误会：以为是瑶族老人<br>
                            4. 揭示：是梨花姑娘和她的姐妹们<br>
                            5. 深化：雷锋精神的传承
                        </div>
                    </div>
                </div>
            `
        },
        // 第五单元：自然奥秘
        {
            title: "10. 河中石兽 - 说明方法",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>文章内容</h4>
                <ul>
                    <li><strong>问题：</strong>石兽沉入河中，去哪里找？</li>
                    <li><strong>观点1：</strong>到下游找（僧人）</li>
                    <li><strong>观点2：</strong>原地深挖（讲学家）</li>
                    <li><strong>观点3：</strong>到上游找（老河兵）✓</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 科学道理</h4>
                    <p><strong>石兽逆流而上的原因：</strong></p>
                    <ul>
                        <li>水流冲击石兽，在石兽前方形成漩涡</li>
                        <li>漩涡冲刷沙石，形成坑穴</li>
                        <li>石兽失去平衡，向前翻倒</li>
                        <li>如此反复，石兽逐渐向上游移动</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>文章说明了什么道理？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            道理：<br>
                            1. 实践出真知<br>
                            2. 不能只凭主观臆断<br>
                            3. 要考虑事物的特殊性<br>
                            4. 理论要结合实际
                        </div>
                    </div>
                </div>
            `
        },
        // 第六单元：探险科幻
        {
            title: "11. 伟大的悲剧 - 叙事技巧",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>主要内容</h4>
                <ul>
                    <li><strong>事件：</strong>斯科特探险队到达南极点</li>
                    <li><strong>悲剧：</strong>发现挪威探险队已先到达</li>
                    <li><strong>结局：</strong>五人在返程中全部遇难</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ "伟大的悲剧"的含义</h4>
                    <p><strong>悲剧：</strong></p>
                    <ul>
                        <li>探险失败，没能第一个到达南极</li>
                        <li>五人全部遇难</li>
                    </ul>
                    <p><strong>伟大：</strong></p>
                    <ul>
                        <li>勇于探索的精神</li>
                        <li>面对死亡的坦然</li>
                        <li>为科学献身的品质</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>为什么说这是"伟大的悲剧"？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            "悲剧"：<br>
                            1. 探险失败，屈居第二<br>
                            2. 五人全部牺牲<br><br>
                            "伟大"：<br>
                            1. 勇于探索未知的精神<br>
                            2. 面对死亡的从容和尊严<br>
                            3. 为科学事业献身的品质<br>
                            4. 体现了人类征服自然的意志
                        </div>
                    </div>
                </div>
            `
        },
        // 古诗文部分
        {
            title: "12. 古诗《木兰诗》",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>诗歌内容</h4>
                <p style="font-style: italic; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                唧唧复唧唧，木兰当户织。不闻机杼声，唯闻女叹息。<br>
                问女何所思，问女何所忆。女亦无所思，女亦无所忆。昨夜见军帖，可汗大点兵，军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄，愿为市鞍马，从此替爷征。
                </p>
                <div class="advanced">
                    <h4>⭐ 人物形象</h4>
                    <p><strong>木兰的形象：</strong></p>
                    <ul>
                        <li>孝顺：替父从军</li>
                        <li>勇敢：战场杀敌</li>
                        <li>淳朴：不慕名利</li>
                        <li>勤劳：织布、做家务</li>
                    </ul>
                    <p><strong>写作手法：</strong></p>
                    <ul>
                        <li>详略得当：详写从军前后，略写战争</li>
                        <li>复沓：增强节奏感</li>
                        <li>对偶：对仗工整</li>
                    </ul>
                </div>
            `
        },
        {
            title: "13. 古诗《登幽州台歌》",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>诗歌原文</h4>
                <p style="font-style: italic; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                前不见古人，后不见来者。<br>
                念天地之悠悠，独怆然而涕下。
                </p>
                <div class="advanced">
                    <h4>⭐ 情感分析</h4>
                    <p><strong>作者情感：</strong></p>
                    <ul>
                        <li>怀才不遇的悲愤</li>
                        <li>人生短暂的感慨</li>
                        <li>孤独寂寞的心情</li>
                        <li>对历史的思考</li>
                    </ul>
                    <p><strong>写作手法：</strong></p>
                    <ul>
                        <li>直抒胸臆：直接表达情感</li>
                        <li>时空对比：古人vs来者，天地悠悠vs个人渺小</li>
                    </ul>
                </div>
            `
        },
        {
            title: "14. 古诗《望岳》",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>诗歌原文</h4>
                <p style="font-style: italic; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                岱宗夫如何？齐鲁青未了。<br>
                造化钟神秀，阴阳割昏晓。<br>
                荡胸生曾云，决眦入归鸟。<br>
                会当凌绝顶，一览众山小。
                </p>
                <div class="advanced">
                    <h4>⭐ 名句赏析</h4>
                    <p><strong>"会当凌绝顶，一览众山小"</strong></p>
                    <ul>
                        <li>字面意思：一定要登上泰山顶峰，看众山都变得渺小</li>
                        <li>深层含义：表达诗人远大的抱负和宽广的胸怀</li>
                        <li>哲理：站得高才能看得远</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>分析"会当凌绝顶，一览众山小"的表达效果。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            表达效果：<br>
                            1. 想象之词，表现诗人的雄心壮志<br>
                            2. 化用孔子"登泰山而小天下"的典故<br>
                            3. 以景喻理，站得高看得远<br>
                            4. 表现青年杜甫的远大抱负
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "15. 古诗《登飞来峰》",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>诗歌原文</h4>
                <p style="font-style: italic; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                飞来山上千寻塔，闻说鸡鸣见日升。<br>
                不畏浮云遮望眼，自缘身在最高层。
                </p>
                <div class="advanced">
                    <h4>⭐ 哲理分析</h4>
                    <p><strong>"不畏浮云遮望眼，自缘身在最高层"</strong></p>
                    <ul>
                        <li>字面意思：不怕浮云遮住视线，因为站在最高层</li>
                        <li>深层含义：站得高看得远，不会被眼前困难迷惑</li>
                        <li>哲理：人要有高远的立场和眼界</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>比较《望岳》和《登飞来峰》的异同。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            相同点：<br>
                            1. 都写登山，都表达远大抱负<br>
                            2. 都蕴含哲理：站得高看得远<br><br>
                            不同点：<br>
                            1. 《望岳》是想象，《登飞来峰》是实景<br>
                            2. 《望岳》重在写景，《登飞来峰》重在说理<br>
                            3. 杜甫雄浑，王安石简洁
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "16. 古诗《游山西村》",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>诗歌原文</h4>
                <p style="font-style: italic; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                莫笑农家腊酒浑，丰年留客足鸡豚。<br>
                山重水复疑无路，柳暗花明又一村。
                </p>
                <div class="advanced">
                    <h4>⭐ 名句赏析</h4>
                    <p><strong>"山重水复疑无路，柳暗花明又一村"</strong></p>
                    <ul>
                        <li>字面意思：山水重重，以为没有路了，忽然看到柳暗花明，又出现一个村庄</li>
                        <li>深层含义：困境中往往会有转机</li>
                        <li>哲理：困难时要坚持，希望就在前方</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>"山重水复疑无路，柳暗花明又一村"现在常用来比喻什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            比喻：<br>
                            1. 困境中遇到转机<br>
                            2. 绝处逢生<br>
                            3. 希望往往在绝望时出现<br>
                            4. 鼓励人们在困难时不要放弃
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "17. 古诗《己亥杂诗》",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>诗歌原文</h4>
                <p style="font-style: italic; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                浩荡离愁白日斜，吟鞭东指即天涯。<br>
                落红不是无情物，化作春泥更护花。
                </p>
                <div class="advanced">
                    <h4>⭐ 名句赏析</h4>
                    <p><strong>"落红不是无情物，化作春泥更护花"</strong></p>
                    <ul>
                        <li>字面意思：落花不是无情之物，化作春泥继续护花</li>
                        <li>深层含义：即使辞官，也要为国为民贡献力量</li>
                        <li>哲理：奉献精神，牺牲自己成就他人</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>分析"落红不是无情物，化作春泥更护花"的表达效果。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            表达效果：<br>
                            1. 托物言志，以落花自比<br>
                            2. 表现诗人虽辞官但仍关心国事的情怀<br>
                            3. 新颖的比喻，赋予落花新的意义<br>
                            4. 体现奉献精神和牺牲精神
                        </div>
                    </div>
                </div>
            `
        },
        // 写作技巧
        {
            title: "18. 写作：抓住细节",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>细节描写的要求</h4>
                <ul>
                    <li><strong>真实性：</strong>细节要符合生活实际</li>
                    <li><strong>典型性：</strong>选择有代表性的细节</li>
                    <li><strong>生动性：</strong>用具体形象的语言</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 细节描写的方法</h4>
                    <p><strong>1. 动作细节</strong></p>
                    <p>例：他紧握着拳头，指节发白。</p>
                    <p><strong>2. 语言细节</strong></p>
                    <p>例：他低声说："我一定要成功。"</p>
                    <p><strong>3. 神态细节</strong></p>
                    <p>例：她的眼眶湿润了。</p>
                    <p><strong>4. 心理细节</strong></p>
                    <p>例：我的心怦怦直跳，手心冒汗。</p>
                    <div class="example">
                        <strong>例题：</strong>如何写好细节？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            方法：<br>
                            1. 观察生活，积累素材<br>
                            2. 选择典型细节<br>
                            3. 运用修辞手法<br>
                            4. 调动多种感官<br>
                            5. 注意详略得当
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "19. 写作：条理清楚",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>文章结构</h4>
                <ul>
                    <li><strong>总分式：</strong>先总述，后分述</li>
                    <li><strong>并列式：</strong>几个方面并列展开</li>
                    <li><strong>递进式：</strong>层层深入</li>
                    <li><strong>对照式：</strong>正反对比</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 安排顺序的方法</h4>
                    <p><strong>1. 时间顺序</strong></p>
                    <p>按事情发展的先后顺序</p>
                    <p><strong>2. 空间顺序</strong></p>
                    <p>按地点的转移或方位</p>
                    <p><strong>3. 逻辑顺序</strong></p>
                    <p>按事物的内在联系</p>
                    <div class="example">
                        <strong>例题：</strong>如何使文章条理清楚？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            方法：<br>
                            1. 确定中心，明确主题<br>
                            2. 列提纲，规划结构<br>
                            3. 安排顺序：时间、空间、逻辑<br>
                            4. 使用过渡句<br>
                            5. 注意首尾呼应
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "20. 写作：发挥联想和想象",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>联想和想象</h4>
                <ul>
                    <li><strong>联想：</strong>由一事物想到另一事物</li>
                    <li><strong>想象：</strong>在头脑中创造新形象</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 联想的类型</h4>
                    <p><strong>1. 相似联想</strong></p>
                    <p>由事物的相似性引起的联想</p>
                    <p>例：看到白云想到棉花糖</p>
                    <p><strong>2. 相关联想</strong></p>
                    <p>由事物的相关性引起的联想</p>
                    <p>例：看到圆月想到中秋</p>
                    <p><strong>3. 相反联想</strong></p>
                    <p>由事物的相反性引起的联想</p>
                    <p>例：由冬天想到夏天</p>
                    <div class="example">
                        <strong>例题：</strong>如何培养联想和想象能力？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            方法：<br>
                            1. 多观察，积累生活经验<br>
                            2. 多阅读，丰富知识储备<br>
                            3. 多思考，训练思维能力<br>
                            4. 多练习，养成写作习惯<br>
                            5. 勇于创新，不拘泥于常规
                        </div>
                    </div>
                </div>
            `
        },
        // 继续添加更多知识点...
        {
            title: "21. 说明文：说明方法及作用",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>常见说明方法</h4>
                <ul>
                    <li><strong>举例子：</strong>通过具体事例说明</li>
                    <li><strong>列数字：</strong>用具体数据说明</li>
                    <li><strong>作比较：</strong>通过比较说明</li>
                    <li><strong>打比方：</strong>用比喻说明</li>
                    <li><strong>分类别：</strong>按类别说明</li>
                    <li><strong>下定义：</strong>对事物本质进行说明</li>
                    <li><strong>作诠释：</strong>对事物进行解释</li>
                    <li><strong>摹状貌：</strong>对事物进行描绘</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 说明方法的作用</h4>
                    <div class="formula">
                        答题格式：运用了××说明方法，+ 具体内容 + 作用
                    </div>
                    <div class="example">
                        <strong>例题：</strong>分析下列句子使用的说明方法及作用。<br>
                        "石拱桥的桥洞成弧形，就像虹。"<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            说明方法：打比方<br><br>
                            作用：把石拱桥的桥洞比作虹，生动形象地说明了石拱桥形状优美、形式优雅的特点，使说明更具体、更生动。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "22. 记叙文：记叙顺序",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>三种记叙顺序</h4>
                <ul>
                    <li><strong>顺叙：</strong>按时间先后顺序叙述</li>
                    <li><strong>倒叙：</strong>先写结果，再写起因和经过</li>
                    <li><strong>插叙：</strong>在叙述中插入一段回忆</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 各种顺序的作用</h4>
                    <p><strong>顺叙的作用：</strong></p>
                    <ul>
                        <li>叙事有头有尾，条理清晰</li>
                        <li>读起来脉络清楚</li>
                    </ul>
                    <p><strong>倒叙的作用：</strong></p>
                    <ul>
                        <li>设置悬念，吸引读者</li>
                        <li>突出中心，强调结果</li>
                        <li>避免平铺直叙</li>
                    </ul>
                    <p><strong>插叙的作用：</strong></p>
                    <ul>
                        <li>补充情节，使故事更完整</li>
                        <li>丰富人物形象</li>
                        <li>为下文做铺垫</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如何判断记叙顺序？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            判断方法：<br>
                            1. 找出时间词：早晨、中午、傍晚等<br>
                            2. 看时间是否连续<br>
                            3. 顺叙：时间连续<br>
                            4. 倒叙：先写结果，再回忆<br>
                            5. 插叙：中间插入回忆
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "23. 议论文：论证方法",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>常见论证方法</h4>
                <ul>
                    <li><strong>举例论证：</strong>用典型事例证明观点</li>
                    <li><strong>道理论证：</strong>用道理证明观点</li>
                    <li><strong>对比论证：</strong>通过对比证明观点</li>
                    <li><strong>比喻论证：</strong>用比喻证明观点</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 论证方法的作用</h4>
                    <div class="formula">
                        答题格式：运用了××论证方法，+ 具体内容 + 证明了××观点
                    </div>
                    <div class="example">
                        <strong>例题：</strong>分析论证方法的作用。<br>
                        "失败是成功之母。爱迪生失败了上千次，最终发明了电灯。"<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            论证方法：举例论证<br><br>
                            作用：通过爱迪生的事例，具体有力地证明了"失败是成功之母"的观点，增强了说服力。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "24. 修辞手法：比喻",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>比喻的类型</h4>
                <ul>
                    <li><strong>明喻：</strong>甲像乙（出现"像""如""似"等）</li>
                    <li><strong>暗喻：</strong>甲是乙（出现"是""成为"等）</li>
                    <li><strong>借喻：</strong>甲不出现，直接说乙</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 比喻的作用</h4>
                    <div class="formula">
                        答题格式：运用了比喻的修辞手法，把××比作××，生动形象地写出了××的特点，表达了××情感。
                    </div>
                    <div class="example">
                        <strong>例题：</strong>分析"月光如流水一般，静静地泻在这一片叶子和花上"的修辞效果。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            修辞手法：比喻（明喻）<br><br>
                            作用：把月光比作流水，生动形象地写出了月光的柔和、清澈、流动的特点，营造了宁静、优美的意境，表达了作者对月色的喜爱。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "25. 修辞手法：拟人",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>拟人的特点</h4>
                <ul>
                    <li>把物当作人来写</li>
                    <li>赋予物人的动作、情感、语言等</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 拟人的作用</h4>
                    <div class="formula">
                        答题格式：运用了拟人的修辞手法，赋予××以人的××，生动形象地写出了××的特点，表达了××情感。
                    </div>
                    <div class="example">
                        <strong>例题：</strong>分析"小草偷偷地从土里钻出来"的修辞效果。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            修辞手法：拟人<br><br>
                            作用：用"偷偷地""钻"赋予小草以人的动作，生动形象地写出了小草破土而出的情景，表现了春天小草的生机和活力，表达了作者对春天的喜爱。
                        </div>
                    </div>
                </div>
            `
        },
        // 继续添加更多知识点直到50个...
        {
            title: "26. 修辞手法：排比",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>排比的特点</h4>
                <ul>
                    <li>三个或三个以上结构相似、语气一致的句子或短语</li>
                    <li>增强语言的气势和节奏感</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 排比的作用</h4>
                    <div class="formula">
                        答题格式：运用了排比的修辞手法，增强了语言的气势，强调了××，表达了××情感。
                    </div>
                    <div class="example">
                        <strong>例题：</strong>分析"他们的品质是那样的纯洁和高尚，他们的意志是那样的坚韧和刚强，他们的气质是那样的淳朴和谦逊，他们的胸怀是那样的美丽和宽广"的修辞效果。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            修辞手法：排比<br><br>
                            作用：运用四个"他们的……是那样的……"的句式，增强了语言的气势，强烈地赞美了志愿军战士的高尚品质，表达了作者对战士们的崇敬之情。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "27. 修辞手法：夸张",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>夸张的类型</h4>
                <ul>
                    <li><strong>扩大夸张：</strong>故意把事物说得很大</li>
                    <li><strong>缩小夸张：</strong>故意把事物说得很小</li>
                    <li><strong>超前夸张：</strong>把后出现的事说成先出现</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 夸张的作用</h4>
                    <div class="formula">
                        答题格式：运用了夸张的修辞手法，突出了××的特点，给读者留下深刻印象，表达了××情感。
                    </div>
                    <div class="example">
                        <strong>例题：</strong>分析"飞流直下三千尺，疑是银河落九天"的修辞效果。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            修辞手法：夸张<br><br>
                            作用：用"三千尺"这一夸张的说法，突出了瀑布的高和急，气势磅礴，表达了诗人对大自然壮丽景色的惊叹和赞美。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "28. 标点符号：引号",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>引号的用法</h4>
                <ul>
                    <li><strong>直接引用：</strong>引用别人的话</li>
                    <li><strong>特殊含义：</strong>表示反语、讽刺</li>
                    <li><strong>特定称谓：</strong>表示专有名词</li>
                    <li><strong>着重指出：</strong>强调某部分内容</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 引号的作用</h4>
                    <div class="example">
                        <strong>例题：</strong>分析下列句子中引号的作用。<br>
                        1. 他说："我今天很开心。"<br>
                        2. 有几个"慈祥"的老板......<br>
                        3. "五四"运动......<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. 直接引用<br>
                            2. 反语，表示讽刺，老板并不慈祥<br>
                            3. 特定称谓，指五四运动
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "29. 标点符号：省略号",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>省略号的用法</h4>
                <ul>
                    <li><strong>表示内容的省略</strong></li>
                    <li><strong>表示列举的省略</strong></li>
                    <li><strong>表示说话断断续续</strong></li>
                    <li><strong>表示语意未尽</strong></li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 省略号的作用</h4>
                    <div class="example">
                        <strong>例题：</strong>分析下列句子中省略号的作用。<br>
                        1. 他低声说："我……我……不知道。"<br>
                        2. 花园里有牡丹、玫瑰、菊花……<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. 表示说话断断续续，表现他的紧张<br>
                            2. 表示列举的省略，还有很多花
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "30. 标点符号：破折号",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>破折号的用法</h4>
                <ul>
                    <li><strong>表示解释说明</strong></li>
                    <li><strong>表示话题转换</strong></li>
                    <li><strong>表示语意递进</strong></li>
                    <li><strong>表示声音延长</strong></li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 破折号的作用</h4>
                    <div class="example">
                        <strong>例题：</strong>分析下列句子中破折号的作用。<br>
                        1. 这就是中国最大的沙漠——塔克拉玛干沙漠。<br>
                        2. "呜——"火车开动了。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. 表示解释说明<br>
                            2. 表示声音延长
                        </div>
                    </div>
                </div>
            `
        }
    ],
    math: [
        // 第一章：相交线与平行线
        {
            title: "1. 相交线的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>基本概念</h4>
                <ul>
                    <li><strong>相交线：</strong>两条直线有一个公共点</li>
                    <li><strong>邻补角：</strong>有公共顶点和公共边，另一边互为反向延长线</li>
                    <li><strong>对顶角：</strong>有公共顶点，两边互为反向延长线</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        对顶角相等<br>
                        邻补角互补（和为180°）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，∠1和∠2是对顶角，∠1=50°，求∠2。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：∵∠1和∠2是对顶角<br>
                            ∴∠2=∠1=50°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. 垂线的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>垂线的定义</h4>
                <ul>
                    <li><strong>垂直：</strong>两条直线相交成直角</li>
                    <li><strong>垂线：</strong>互相垂直的两条直线</li>
                    <li><strong>垂足：</strong>垂直的交点</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 垂线的性质</h4>
                    <ul>
                        <li>过一点有且只有一条直线与已知直线垂直</li>
                        <li>垂线段最短</li>
                        <li>点到直线的距离：垂线段的长度</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>点P到直线l的距离是指（　）<br>
                        A. 点P到直线l的垂线段<br>
                        B. 点P到直线l的垂线段的长度<br>
                        C. 点P到直线l的垂线<br>
                        D. 点P到直线l的任意线段<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            答案：B<br>
                            解析：点到直线的距离是指点到直线的垂线段的长度，是数值，不是线段。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "3. 同位角、内错角、同旁内角",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>三线八角</h4>
                <ul>
                    <li><strong>同位角：</strong>在被截线同侧，截线同旁（F型）</li>
                    <li><strong>内错角：</strong>在被截线之间，截线两旁（Z型）</li>
                    <li><strong>同旁内角：</strong>在被截线之间，截线同旁（U型）</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 识别方法</h4>
                    <div class="formula">
                        同位角：形如"F"（或倒F）<br>
                        内错角：形如"Z"（或反Z）<br>
                        同旁内角：形如"U"（或倒U）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，直线a、b被直线c所截，∠1和∠2是同位角，∠2和∠3是内错角，∠3和∠4是同旁内角，判断对错。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            需要根据具体图形判断。关键：<br>
                            1. 找出截线和被截线<br>
                            2. 根据位置关系判断角的关系<br>
                            3. 同位角在对应位置，内错角在交错位置，同旁内角在同侧
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "4. 平行线的判定",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>判定方法</h4>
                <ul>
                    <li><strong>方法1：</strong>同位角相等，两直线平行</li>
                    <li><strong>方法2：</strong>内错角相等，两直线平行</li>
                    <li><strong>方法3：</strong>同旁内角互补，两直线平行</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 平行线的判定步骤</h4>
                    <div class="formula">
                        1. 找出截线和被截线<br>
                        2. 确定角的位置关系<br>
                        3. 根据角的关系判断平行
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，∠1=∠2，求证：a∥b。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            证明：∵∠1=∠2（已知）<br>
                            ∴a∥b（内错角相等，两直线平行）<br><br>
                            注意：需要确认∠1和∠2是内错角的位置关系
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "5. 平行线的性质",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>性质</h4>
                <ul>
                    <li><strong>性质1：</strong>两直线平行，同位角相等</li>
                    <li><strong>性质2：</strong>两直线平行，内错角相等</li>
                    <li><strong>性质3：</strong>两直线平行，同旁内角互补</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 判定与性质的区别</h4>
                    <div class="formula">
                        判定：由角的关系→直线平行<br>
                        性质：由直线平行→角的关系
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，a∥b，∠1=50°，求∠2。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：∵a∥b（已知）<br>
                            ∴∠2=∠1=50°（两直线平行，内错角相等）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "6. 平行线的综合应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>解题思路</h4>
                <ul>
                    <li><strong>判定+性质：</strong>先用判定证明平行，再用性质求角</li>
                    <li><strong>多次平行：</strong>平行于同一直线的两直线平行</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 综合应用</h4>
                    <div class="example">
                        <strong>例题：</strong>如图，∠1=∠2，∠3=70°，求∠4。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵∠1=∠2（已知）<br>
                            ∴a∥b（内错角相等，两直线平行）<br>
                            ∴∠4=∠3=70°（两直线平行，同位角相等）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. 命题与定理",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>基本概念</h4>
                <ul>
                    <li><strong>命题：</strong>判断一件事情的语句</li>
                    <li><strong>真命题：</strong>正确的命题</li>
                    <li><strong>假命题：</strong>错误的命题</li>
                    <li><strong>定理：</strong>经过推理证实得到的真命题</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 命题的结构</h4>
                    <div class="formula">
                        命题 = 题设（已知条件）+ 结论（求证结果）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>把"对顶角相等"改写成"如果……那么……"的形式。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            如果两个角是对顶角，那么这两个角相等。<br><br>
                            题设：两个角是对顶角<br>
                            结论：这两个角相等
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "8. 平移",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>平移的概念</h4>
                <ul>
                    <li><strong>定义：</strong>在平面内，将图形沿某个方向移动一定距离</li>
                    <li><strong>平移的要素：</strong>方向和距离</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 平移的性质</h4>
                    <ul>
                        <li>平移不改变图形的形状和大小</li>
                        <li>对应点连线平行且相等</li>
                        <li>对应线段平行且相等</li>
                        <li>对应角相等</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>三角形ABC平移后得到三角形A'B'C'，AB=5cm，∠A=60°，则A'B'=_____，∠A'=_____。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            A'B'=5cm，∠A'=60°<br><br>
                            解析：平移不改变图形的形状和大小，对应线段相等，对应角相等。
                        </div>
                    </div>
                </div>
            `
        },
        // 第二章：实数
        {
            title: "9. 平方根",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>平方根的概念</h4>
                <ul>
                    <li><strong>平方根：</strong>如果x²=a，那么x是a的平方根</li>
                    <li><strong>算术平方根：</strong>正数a的正的平方根，记作√a</li>
                    <li><strong>开平方：</strong>求平方根的运算</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        正数有两个平方根，它们互为相反数<br>
                        0的平方根是0<br>
                        负数没有平方根<br>
                        (√a)²=a, √(a²)=|a|
                    </div>
                    <div class="example">
                        <strong>例题：</strong>求下列各数的平方根和算术平方根：<br>
                        (1) 16　(2) 0.25　(3) 5<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) 16的平方根：±4，算术平方根：4<br>
                            (2) 0.25的平方根：±0.5，算术平方根：0.5<br>
                            (3) 5的平方根：±√5，算术平方根：√5
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "10. 立方根",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>立方根的概念</h4>
                <ul>
                    <li><strong>立方根：</strong>如果x³=a，那么x是a的立方根，记作³√a</li>
                    <li><strong>开立方：</strong>求立方根的运算</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        正数的立方根是正数<br>
                        0的立方根是0<br>
                        负数的立方根是负数<br>
                        (³√a)³=a, ³√(a³)=a
                    </div>
                    <div class="example">
                        <strong>例题：</strong>求下列各数的立方根：<br>
                        (1) 8　(2) -27　(3) 0.125<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) 8的立方根：2<br>
                            (2) -27的立方根：-3<br>
                            (3) 0.125的立方根：0.5
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "11. 实数",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>实数的分类</h4>
                <div class="formula">
                    实数 = 有理数 + 无理数<br>
                    有理数：整数、分数（有限小数、无限循环小数）<br>
                    无理数：无限不循环小数（如√2, π等）
                </div>
                <div class="advanced">
                    <h4>⭐ 实数的性质</h4>
                    <ul>
                        <li>实数与数轴上的点一一对应</li>
                        <li>实数可以进行加、减、乘、除（除数不为0）运算</li>
                        <li>实数可以比较大小</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>下列各数中，哪些是有理数？哪些是无理数？<br>
                        3.14, √2, 22/7, 0.1010010001..., π, √4<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            有理数：3.14, 22/7, √4<br>
                            无理数：√2, 0.1010010001..., π<br><br>
                            解析：<br>
                            - 3.14是有限小数，有理数<br>
                            - √2是无理数<br>
                            - 22/7是分数，有理数<br>
                            - 0.1010010001...不循环，无理数<br>
                            - π是无理数<br>
                            - √4=2是整数，有理数
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "12. 实数的运算",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>运算法则</h4>
                <ul>
                    <li><strong>加法：</strong>同号相加，异号相减</li>
                    <li><strong>乘法：</strong>同号得正，异号得负</li>
                    <li><strong>运算顺序：</strong>先乘方开方，再乘除，后加减</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 运算技巧</h4>
                    <div class="example">
                        <strong>例题：</strong>计算：√18 - √8 + √2<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：√18 - √8 + √2<br>
                            = √(9×2) - √(4×2) + √2<br>
                            = 3√2 - 2√2 + √2<br>
                            = (3-2+1)√2<br>
                            = 2√2
                        </div>
                    </div>
                </div>
            `
        },
        // 第三章：平面直角坐标系
        {
            title: "13. 平面直角坐标系",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>坐标系的概念</h4>
                <ul>
                    <li><strong>横轴(x轴)：</strong>水平方向的数轴</li>
                    <li><strong>纵轴(y轴)：</strong>竖直方向的数轴</li>
                    <li><strong>原点：</strong>两轴的交点</li>
                    <li><strong>坐标：</strong>有序数对(x,y)</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 各象限的符号</h4>
                    <div class="formula">
                        第一象限：(+,+)<br>
                        第二象限：(-,+)<br>
                        第三象限：(-,-)<br>
                        第四象限：(+,-)<br>
                        x轴上的点：(x,0)<br>
                        y轴上的点：(0,y)
                    </div>
                    <div class="example">
                        <strong>例题：</strong>点P(-3,2)在第几象限？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            点P(-3,2)在第二象限<br><br>
                            解析：x=-3<0, y=2>0，所以是第二象限
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "14. 坐标与图形变换",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>坐标变换</h4>
                <ul>
                    <li><strong>左右平移：</strong>横坐标加减，纵坐标不变</li>
                    <li><strong>上下平移：</strong>纵坐标加减，横坐标不变</li>
                    <li><strong>关于x轴对称：</strong>横坐标不变，纵坐标变号</li>
                    <li><strong>关于y轴对称：</strong>纵坐标不变，横坐标变号</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 变换规律</h4>
                    <div class="formula">
                        向右平移a：(x,y)→(x+a,y)<br>
                        向左平移a：(x,y)→(x-a,y)<br>
                        向上平移b：(x,y)→(x,y+b)<br>
                        向下平移b：(x,y)→(x,y-b)<br>
                        关于x轴对称：(x,y)→(x,-y)<br>
                        关于y轴对称：(x,y)→(-x,y)<br>
                        关于原点对称：(x,y)→(-x,-y)
                    </div>
                    <div class="example">
                        <strong>例题：</strong>点A(2,3)向右平移3个单位，再向下平移2个单位，得到点B，求B的坐标。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：向右平移3个单位：(2,3)→(2+3,3)=(5,3)<br>
                            向下平移2个单位：(5,3)→(5,3-2)=(5,1)<br><br>
                            所以B点坐标为(5,1)
                        </div>
                    </div>
                </div>
            `
        },
        // 第四章：二元一次方程组
        {
            title: "15. 二元一次方程组的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>基本概念</h4>
                <ul>
                    <li><strong>二元一次方程：</strong>含有两个未知数，次数都是1</li>
                    <li><strong>二元一次方程组：</strong>由两个二元一次方程组成</li>
                    <li><strong>方程组的解：</strong>使两个方程都成立的未知数的值</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 标准形式</h4>
                    <div class="formula">
                        ax+by=c<br>
                        dx+ey=f
                    </div>
                    <div class="example">
                        <strong>例题：</strong>判断下列是否是二元一次方程组：<br>
                        (1) x+y=3, x-y=1<br>
                        (2) x+y=3, xy=2<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) 是。两个方程都是二元一次方程。<br>
                            (2) 不是。xy=2是二次方程。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "16. 代入消元法",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>代入消元法步骤</h4>
                <ol>
                    <li>从一个方程中用一个未知数表示另一个未知数</li>
                    <li>代入另一个方程，消去一个未知数</li>
                    <li>解一元一次方程</li>
                    <li>回代求另一个未知数</li>
                </ol>
                <div class="advanced">
                    <h4>⭐ 例题讲解</h4>
                    <div class="example">
                        <strong>例题：</strong>解方程组：<br>
                        y=2x ①<br>
                        x+y=12 ②<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：将①代入②：<br>
                            x+2x=12<br>
                            3x=12<br>
                            x=4<br><br>
                            将x=4代入①：<br>
                            y=2×4=8<br><br>
                            答：x=4, y=8
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "17. 加减消元法",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>加减消元法步骤</h4>
                <ol>
                    <li>将两个方程中某一未知数的系数化为相等或相反数</li>
                    <li>将两个方程相加或相减，消去一个未知数</li>
                    <li>解一元一次方程</li>
                    <li>回代求另一个未知数</li>
                </ol>
                <div class="advanced">
                    <h4>⭐ 例题讲解</h4>
                    <div class="example">
                        <strong>例题：</strong>解方程组：<br>
                        x+y=5 ①<br>
                        x-y=1 ②<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：①+②得：<br>
                            2x=6<br>
                            x=3<br><br>
                            ①-②得：<br>
                            2y=4<br>
                            y=2<br><br>
                            答：x=3, y=2
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "18. 二元一次方程组的应用",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>应用题类型</h4>
                <ul>
                    <li><strong>行程问题：</strong>路程=速度×时间</li>
                    <li><strong>工程问题：</strong>工作总量=工作效率×时间</li>
                    <li><strong>配套问题：</strong>两种物品的数量关系</li>
                    <li><strong>数字问题：</strong>个位、十位数字</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 解题步骤</h4>
                    <div class="formula">
                        1. 设未知数<br>
                        2. 找等量关系<br>
                        3. 列方程组<br>
                        4. 解方程组<br>
                        5. 检验答案
                    </div>
                    <div class="example">
                        <strong>例题：</strong>鸡兔同笼，共有35个头，94只脚，求鸡兔各有多少？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：设鸡有x只，兔有y只<br>
                            根据题意列方程组：<br>
                            x+y=35 ①<br>
                            2x+4y=94 ②<br><br>
                            由①得：x=35-y ③<br>
                            将③代入②：2(35-y)+4y=94<br>
                            70-2y+4y=94<br>
                            2y=24<br>
                            y=12<br><br>
                            将y=12代入③：x=35-12=23<br><br>
                            答：鸡有23只，兔有12只。
                        </div>
                    </div>
                </div>
            `
        },
        // 第五章：不等式与不等式组
        {
            title: "19. 不等式的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>基本概念</h4>
                <ul>
                    <li><strong>不等式：</strong>用不等号表示大小关系的式子</li>
                    <li><strong>不等式的解：</strong>使不等式成立的未知数的值</li>
                    <li><strong>解集：</strong>所有解组成的集合</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 不等号</h4>
                    <div class="formula">
                        > 大于<br>
                        < 小于<br>
                        ≥ 大于或等于<br>
                        ≤ 小于或等于
                    </div>
                </div>
            `
        },
        {
            title: "20. 不等式的性质",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>三条性质</h4>
                <ul>
                    <li><strong>性质1：</strong>不等式两边加（或减）同一个数，不等号方向不变</li>
                    <li><strong>性质2：</strong>不等式两边乘（或除以）同一个正数，不等号方向不变</li>
                    <li><strong>性质3：</strong>不等式两边乘（或除以）同一个负数，不等号方向改变</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 性质应用</h4>
                    <div class="example">
                        <strong>例题：</strong>根据不等式性质填空：<br>
                        (1) 若a>b，则a+3_____b+3<br>
                        (2) 若a>b，则-2a_____-2b<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) >（两边加同一个数，不等号方向不变）<br>
                            (2) <（两边乘同一个负数，不等号方向改变）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "21. 一元一次不等式",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解一元一次不等式</h4>
                <ul>
                    <li><strong>步骤：</strong>去分母→去括号→移项→合并同类项→系数化为1</li>
                    <li><strong>注意：</strong>系数为负数时，不等号方向要改变</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 例题讲解</h4>
                    <div class="example">
                        <strong>例题：</strong>解不等式：2x-3<5<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：2x-3<5<br>
                            2x<5+3<br>
                            2x<8<br>
                            x<4
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "22. 一元一次不等式组",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解不等式组</h4>
                <ul>
                    <li><strong>步骤：</strong>分别解每个不等式→取公共部分</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 解集的确定</h4>
                    <div class="formula">
                        ① 同大取大：x>a, x>b ⟹ x>max(a,b)<br>
                        ② 同小取小：x<a, x<b ⟹ x<min(a,b)<br>
                        ③ 大小小大取中间：a<x<b<br>
                        ④ 大大小小无解：x>a, x<a ⟹ 无解
                    </div>
                    <div class="example">
                        <strong>例题：</strong>解不等式组：<br>
                        2x-1>x+1 ①<br>
                        x+8<4x-1 ②<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：由①得：x>2<br>
                            由②得：9<3x，即x>3<br><br>
                            ∴x>3（同大取大）
                        </div>
                    </div>
                </div>
            `
        },
        // 第六章：数据的收集、整理与描述
        {
            title: "23. 统计调查",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>调查方式</h4>
                <ul>
                    <li><strong>全面调查：</strong>对所有对象进行调查</li>
                    <li><strong>抽样调查：</strong>从总体中抽取样本进行调查</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 基本概念</h4>
                    <div class="formula">
                        总体：所要考察对象的全体<br>
                        个体：每一个考察对象<br>
                        样本：从总体中抽取的一部分个体<br>
                        样本容量：样本中个体的数目
                    </div>
                </div>
            `
        },
        {
            title: "24. 直方图",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>直方图的绘制</h4>
                <ol>
                    <li>计算极差（最大值-最小值）</li>
                    <li>确定组距和组数</li>
                    <li>列频数分布表</li>
                    <li>画频数分布直方图</li>
                </ol>
                <div class="advanced">
                    <h4>⭐ 注意事项</h4>
                    <ul>
                        <li>组距=极差÷组数</li>
                        <li>每个小长方形的面积表示频数</li>
                        <li>所有小长方形面积之和等于样本容量</li>
                    </ul>
                </div>
            `
        },
        // ===== 新增数学知识点 =====
        {
            title: "25. 平行线判定方法的综合应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>判定方法</h4>
                <ul>
                    <li><strong>同位角相等，两直线平行</strong></li>
                    <li><strong>内错角相等，两直线平行</strong></li>
                    <li><strong>同旁内角互补，两直线平行</strong></li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 综合应用技巧</h4>
                    <ul>
                        <li>先找"三条线"：截线、被截线1、被截线2</li>
                        <li>再看位置关系：同位、内错或同旁</li>
                        <li>最后判断角的数量关系</li>
                    </ul>
                </div>
            `
        },
        {
            title: "26. 平行线性质的综合应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>平行线性质</h4>
                <ul>
                    <li>两直线平行，同位角相等</li>
                    <li>两直线平行，内错角相等</li>
                    <li>两直线平行，同旁内角互补</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 解题步骤</h4>
                    <ol>
                        <li>先判定两直线平行</li>
                        <li>再利用平行线性质求角</li>
                        <li>注意角的转化和等量代换</li>
                    </ol>
                </div>
            `
        },
        {
            title: "27. 垂线的性质",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>垂线的性质</h4>
                <ul>
                    <li><strong>性质1：</strong>在同一平面内，过一点有且只有一条直线与已知直线垂直</li>
                    <li><strong>性质2：</strong>连接直线外一点与直线上各点的所有线段中，垂线段最短</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 垂线段最短</h4>
                    <p>直线外一点到直线的垂线段长度叫做点到直线的距离</p>
                </div>
            `
        },
        {
            title: "28. 点到直线的距离",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>定义</h4>
                <p>从直线外一点到这条直线的垂线段的长度，叫做点到直线的距离</p>
                <h4>注意</h4>
                <ul>
                    <li>距离是垂线段的长度，是一个数值</li>
                    <li>不能说是"垂线"或"垂线段"</li>
                </ul>
            `
        },
        {
            title: "29. 平行线间的距离",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>定义</h4>
                <p>两条平行线中，一条直线上任意一点到另一条直线的距离</p>
                <h4>性质</h4>
                <p><strong>两条平行线间的距离处处相等</strong></p>
            `
        },
        {
            title: "30. 命题的概念与组成",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>命题的定义</h4>
                <p>判断一件事情的语句叫做命题</p>
                <h4>命题的组成</h4>
                <ul>
                    <li><strong>题设：</strong>命题中的已知条件</li>
                    <li><strong>结论：</strong>命题中由条件推出的结果</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>指出"对顶角相等"的题设和结论<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        题设：两个角是对顶角<br>
                        结论：这两个角相等
                    </div>
                </div>
            `
        },
        {
            title: "31. 真命题与假命题",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>真命题</h4>
                <p>正确的命题叫做真命题</p>
                <h4>假命题</h4>
                <p>错误的命题叫做假命题</p>
                <div class="advanced">
                    <h4>⭐ 判断假命题</h4>
                    <p>只需举出一个反例即可</p>
                </div>
            `
        },
        {
            title: "32. 定理与证明",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>定理</h4>
                <p>经过推理证实的真命题叫做定理</p>
                <h4>证明</h4>
                <p>根据已知条件和已有定义、定理，经过推理证实结论的过程叫做证明</p>
            `
        },
        {
            title: "33. 平移的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>平移的定义</h4>
                <p>将一个图形沿某个方向移动一定的距离，这种图形变换叫做平移</p>
                <h4>平移的要素</h4>
                <ul>
                    <li><strong>方向：</strong>移动的方向</li>
                    <li><strong>距离：</strong>移动的长度</li>
                </ul>
            `
        },
        {
            title: "34. 平移的性质",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>平移的性质</h4>
                <ul>
                    <li>平移前后图形的形状和大小不变</li>
                    <li>对应点所连的线段平行且相等</li>
                    <li>对应角相等</li>
                </ul>
            `
        },
        {
            title: "35. 平移的坐标变换",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>平移规律</h4>
                <ul>
                    <li>向右平移a个单位：(x,y) → (x+a, y)</li>
                    <li>向左平移a个单位：(x,y) → (x-a, y)</li>
                    <li>向上平移b个单位：(x,y) → (x, y+b)</li>
                    <li>向下平移b个单位：(x,y) → (x, y-b)</li>
                </ul>
            `
        },
        {
            title: "36. 平方根的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>平方根的定义</h4>
                <p>如果x²=a，那么x叫做a的平方根，记作±√a</p>
                <h4>平方根的性质</h4>
                <ul>
                    <li>正数有两个平方根，互为相反数</li>
                    <li>0的平方根是0</li>
                    <li>负数没有平方根</li>
                </ul>
            `
        },
        {
            title: "37. 算术平方根",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>算术平方根的定义</h4>
                <p>正数a的正的平方根叫做a的算术平方根，记作√a</p>
                <h4>性质</h4>
                <ul>
                    <li>√a ≥ 0</li>
                    <li>(√a)² = a</li>
                    <li>√a² = |a|</li>
                </ul>
            `
        },
        {
            title: "38. 平方根的计算",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>计算方法</h4>
                <ul>
                    <li>直接开平方</li>
                    <li>计算器计算</li>
                    <li>估算</li>
                </ul>
            `
        },
        {
            title: "39. 立方根的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>立方根的定义</h4>
                <p>如果x³=a，那么x叫做a的立方根，记作∛a</p>
                <h4>性质</h4>
                <ul>
                    <li>正数有一个正的立方根</li>
                    <li>负数有一个负的立方根</li>
                    <li>0的立方根是0</li>
                </ul>
            `
        },
        {
            title: "40. 立方根的计算",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>立方根的性质</h4>
                <p>∛-a = -∛a</p>
            `
        },
        {
            title: "41. 实数的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>实数的定义</h4>
                <p>有理数和无理数统称为实数</p>
                <h4>分类</h4>
                <ul>
                    <li>有理数：整数和分数</li>
                    <li>无理数：无限不循环小数</li>
                </ul>
            `
        },
        {
            title: "42. 无理数的识别",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>常见无理数</h4>
                <ul>
                    <li>开不尽方的数：√2, √3</li>
                    <li>含π的数</li>
                    <li>无限不循环小数</li>
                </ul>
            `
        },
        {
            title: "43. 实数的运算",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>运算律</h4>
                <ul>
                    <li>加法交换律：a+b=b+a</li>
                    <li>加法结合律：(a+b)+c=a+(b+c)</li>
                    <li>乘法分配律：a(b+c)=ab+ac</li>
                </ul>
            `
        },
        {
            title: "44. 实数的大小比较",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>比较方法</h4>
                <ul>
                    <li>平方法</li>
                    <li>作差法</li>
                    <li>数轴法</li>
                </ul>
            `
        },
        {
            title: "45. 实数与数轴",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>对应关系</h4>
                <p>实数与数轴上的点一一对应</p>
            `
        },
        {
            title: "46. 平面直角坐标系",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>组成</h4>
                <ul>
                    <li>x轴（横轴）：水平向右为正</li>
                    <li>y轴（纵轴）：竖直向上为正</li>
                    <li>原点：O(0,0)</li>
                </ul>
            `
        },
        {
            title: "47. 点的坐标",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>表示方法</h4>
                <p>点P(a,b)：a是横坐标，b是纵坐标</p>
                <h4>坐标轴上的点</h4>
                <ul>
                    <li>x轴上：纵坐标为0</li>
                    <li>y轴上：横坐标为0</li>
                </ul>
            `
        },
        {
            title: "48. 象限坐标特征",
            tag: "重点",
            tagClass: "important",
            content: `
                <ul>
                    <li>第一象限：a>0, b>0</li>
                    <li>第二象限：a<0, b>0</li>
                    <li>第三象限：a<0, b<0</li>
                    <li>第四象限：a>0, b<0</li>
                </ul>
            `
        },
        {
            title: "49. 坐标与距离",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>点(a,b)到坐标轴距离</h4>
                <ul>
                    <li>到x轴：|b|</li>
                    <li>到y轴：|a|</li>
                    <li>到原点：√(a²+b²)</li>
                </ul>
            `
        },
        {
            title: "50. 点坐标的对称",
            tag: "重点",
            tagClass: "important",
            content: `
                <ul>
                    <li>关于x轴对称：(a,b)→(a,-b)</li>
                    <li>关于y轴对称：(a,b)→(-a,b)</li>
                    <li>关于原点对称：(a,b)→(-a,-b)</li>
                </ul>
            `
        },
        {
            title: "51. 平移与坐标",
            tag: "重点",
            tagClass: "important",
            content: `
                <ul>
                    <li>右移a：横坐标+a</li>
                    <li>左移a：横坐标-a</li>
                    <li>上移b：纵坐标+b</li>
                    <li>下移b：纵坐标-b</li>
                </ul>
            `
        },
        {
            title: "52. 坐标与面积",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>三角形面积公式</h4>
                <p>S = |x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|/2</p>
            `
        },
        {
            title: "53. 二元一次方程组",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>定义</h4>
                <p>两个二元一次方程组成的方程组</p>
            `
        },
        {
            title: "54. 方程组的解",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>定义</h4>
                <p>使方程组各方程均成立的未知数的值</p>
            `
        },
        {
            title: "55. 代入消元法",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>步骤</h4>
                <ol>
                    <li>变形：用一未知数表示另一未知数</li>
                    <li>代入另一方程</li>
                    <li>求解</li>
                    <li>回代</li>
                </ol>
            `
        },
        {
            title: "56. 加减消元法",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>步骤</h4>
                <ol>
                    <li>使同一未知数系数相同或相反</li>
                    <li>相加或相减消元</li>
                    <li>求解</li>
                    <li>回代</li>
                </ol>
            `
        },
        {
            title: "57. 消元方法选择",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>代入法适用</h4>
                <p>系数为1或-1时</p>
                <h4>加减法适用</h4>
                <p>系数相等或成倍数时</p>
            `
        },
        {
            title: "58. 方程组应用题",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>步骤</h4>
                <ol>
                    <li>审题找等量关系</li>
                    <li>设两个未知数</li>
                    <li>列方程组</li>
                    <li>求解检验</li>
                </ol>
            `
        },
        {
            title: "59. 行程问题",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>基本关系</h4>
                <ul>
                    <li>路程=速度×时间</li>
                    <li>相遇：路程和=总路程</li>
                    <li>追及：路程差=初始距离</li>
                </ul>
            `
        },
        {
            title: "60. 工程问题",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>基本关系</h4>
                <p>工作总量=效率×时间</p>
            `
        },
        {
            title: "61. 利润问题",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>基本关系</h4>
                <ul>
                    <li>利润=售价-进价</li>
                    <li>利润率=利润÷进价×100%</li>
                </ul>
            `
        },
        {
            title: "62. 不等式概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>定义</h4>
                <p>用>、<、≥、≤表示不等关系的式子</p>
            `
        },
        {
            title: "63. 不等式性质",
            tag: "重点",
            tagClass: "important",
            content: `
                <ul>
                    <li>a>b ⇒ a±c>b±c</li>
                    <li>a>b, c>0 ⇒ ac>bc</li>
                    <li>a>b, c<0 ⇒ ac<bc</li>
                </ul>
                <p><strong>乘负数要变号！</strong></p>
            `
        },
        {
            title: "64. 一元一次不等式",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>解法步骤</h4>
                <ol>
                    <li>去分母</li>
                    <li>去括号</li>
                    <li>移项</li>
                    <li>合并同类项</li>
                    <li>系数化为1</li>
                </ol>
            `
        },
        {
            title: "65. 不等式组解集",
            tag: "重点",
            tagClass: "important",
            content: `
                <ul>
                    <li>同大取大</li>
                    <li>同小取小</li>
                    <li>大小交叉取中间</li>
                    <li>矛盾无解</li>
                </ul>
            `
        },
        {
            title: "66. 不等式与方程综合",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>类型</h4>
                <ul>
                    <li>方程解满足不等式</li>
                    <li>整数解问题</li>
                    <li>参数范围</li>
                </ul>
            `
        },
        {
            title: "67. 全面调查与抽样调查",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>全面调查：调查全体</h4>
                <h4>抽样调查：抽取部分</h4>
            `
        },
        {
            title: "68. 总体个体样本",
            tag: "基础",
            tagClass: "basic",
            content: `
                <ul>
                    <li>总体：全体对象</li>
                    <li>个体：每一个对象</li>
                    <li>样本：抽取的部分</li>
                    <li>样本容量：样本数目（无单位）</li>
                </ul>
            `
        },
        {
            title: "69. 频数与频率",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>频数：出现次数</h4>
                <h4>频率=频数÷总次数</h4>
                <p>各频率之和=1</p>
            `
        },
        {
            title: "70. 直方图",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>步骤</h4>
                <ol>
                    <li>算极差</li>
                    <li>定组距和组数</li>
                    <li>列频数表</li>
                    <li>画直方图</li>
                </ol>
            `
        },
        {
            title: "71. 扇形统计图",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>圆心角</h4>
                <p>=360°×百分比</p>
            `
        },
        {
            title: "72. 统计图选择",
            tag: "基础",
            tagClass: "basic",
            content: `
                <ul>
                    <li>条形图：看数量</li>
                    <li>折线图：看趋势</li>
                    <li>扇形图：看百分比</li>
                    <li>直方图：看分布</li>
                </ul>
            `
        }
        // 数学知识点结束
    ],
    english: [
        {
            title: "1. Can you play the guitar?",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>情态动词can的用法</h4>
                <div class="formula">
                    肯定句：主语 + can + 动词原形<br>
                    否定句：主语 + can't + 动词原形<br>
                    疑问句：Can + 主语 + 动词原形?
                </div>
                <div class="advanced">
                    <h4>⭐ 用法</h4>
                    <p><strong>1. 表示能力</strong></p>
                    <p>I can swim.（我会游泳。）</p>
                    <p><strong>2. 表示许可</strong></p>
                    <p>You can go now.（你可以走了。）</p>
                    <div class="example">
                        <strong>例题：</strong>用can/can't填空<br>
                        1. She _____ play the piano.<br>
                        2. _____ you help me?<br>
                        3. I _____ speak French.<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. can（她会弹钢琴）<br>
                            2. Can（你能帮我吗？）<br>
                            3. can't（我不会说法语）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. What time do you go to school?",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>时间的表达</h4>
                <div class="formula">
                    整点：数字 + o'clock<br>
                    几点几分：小时 + 分钟<br>
                    半点：half past + 小时<br>
                    一刻：a quarter past + 小时<br>
                    差一刻：a quarter to + 小时
                </div>
                <div class="advanced">
                    <h4>⭐ 频度副词</h4>
                    <div class="formula">
                        always > usually > often > sometimes > never<br>
                        （总是 > 通常 > 经常 > 有时 > 从不）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>翻译句子<br>
                        1. 我通常6点起床。<br>
                        2. 他从不迟到。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. I usually get up at 6 o'clock.<br>
                            2. He is never late.
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "3. How do you get to school?",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>交通方式的表达</h4>
                <div class="formula">
                    by + 交通工具：by bus, by bike, by car<br>
                    take + 交通工具：take the bus, take a taxi<br>
                    on foot：步行
                </div>
                <div class="advanced">
                    <h4>⭐ 对距离和时间的提问</h4>
                    <div class="formula">
                        How far...? 多远（询问距离）<br>
                        How long...? 多久（询问时间）<br>
                        How many...? 多少（询问数量）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>翻译句子<br>
                        1. 你怎么去学校？<br>
                        2. 从你家到学校有多远？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. How do you get to school?<br>
                            2. How far is it from your home to school?
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "4. Don't eat in class.",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>祈使句</h4>
                <div class="formula">
                    肯定句：动词原形开头<br>
                    否定句：Don't + 动词原形
                </div>
                <div class="advanced">
                    <h4>⭐ 规则的表达</h4>
                    <div class="formula">
                        You can... 你可以...<br>
                        You can't... 你不能...<br>
                        Don't... 不要...<br>
                        No + 动词ing：No smoking. 禁止吸烟。
                    </div>
                    <div class="example">
                        <strong>例题：</strong>改为否定句<br>
                        1. Open the door.<br>
                        2. Be late.<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. Don't open the door.<br>
                            2. Don't be late.
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "5. Why do you like pandas?",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>原因状语从句</h4>
                <div class="formula">
                    Why...? Because...
                </div>
                <div class="advanced">
                    <h4>⭐ 形容词描述动物</h4>
                    <ul>
                        <li>cute 可爱的</li>
                        <li>smart 聪明的</li>
                        <li>friendly 友好的</li>
                        <li>beautiful 美丽的</li>
                        <li>scary 可怕的</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>完成对话<br>
                        A: _____ do you like pandas?<br>
                        B: _____ they are cute.<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            A: Why do you like pandas?<br>
                            B: Because they are cute.
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "6. I'm watching TV.",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>现在进行时</h4>
                <div class="formula">
                    肯定句：主语 + am/is/are + 动词ing<br>
                    否定句：主语 + am/is/are + not + 动词ing<br>
                    疑问句：Am/Is/Are + 主语 + 动词ing?
                </div>
                <div class="advanced">
                    <h4>⭐ 动词ing的变化规则</h4>
                    <ul>
                        <li>一般加-ing：work→working</li>
                        <li>以不发音e结尾，去e加-ing：make→making</li>
                        <li>重读闭音节，双写末尾字母加-ing：run→running</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>用所给词的适当形式填空<br>
                        1. Look! She _____ (read) a book.<br>
                        2. They _____ (not watch) TV now.<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. is reading<br>
                            2. aren't watching
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. It's raining!",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>天气的表达</h4>
                <div class="formula">
                    How's the weather? = What's the weather like?<br>
                    It's + 形容词：sunny, cloudy, rainy, windy, snowy
                </div>
                <div class="advanced">
                    <h4>⭐ 天气相关词汇</h4>
                    <ul>
                        <li>sunny 晴朗的</li>
                        <li>cloudy 多云的</li>
                        <li>rainy 下雨的</li>
                        <li>windy 有风的</li>
                        <li>snowy 下雪的</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>翻译句子<br>
                        1. 北京的天气怎么样？<br>
                        2. 正在下雨。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. How's the weather in Beijing?<br>
                               = What's the weather like in Beijing?<br>
                            2. It's raining.
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "8. Is there a post office near here?",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>There be句型</h4>
                <div class="formula">
                    There is + 单数名词/不可数名词<br>
                    There are + 复数名词<br>
                    一般疑问句：Is/Are there...?
                </div>
                <div class="advanced">
                    <h4>⭐ 方位词</h4>
                    <ul>
                        <li>next to 在...旁边</li>
                        <li>across from 在...对面</li>
                        <li>between...and... 在...和...之间</li>
                        <li>in front of 在...前面</li>
                        <li>behind 在...后面</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>用is/are填空<br>
                        1. There _____ a book on the desk.<br>
                        2. There _____ some water in the bottle.<br>
                        3. There _____ many students in the classroom.<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. is（单数）<br>
                            2. is（不可数名词）<br>
                            3. are（复数）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "9. What does he look like?",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>描述外貌</h4>
                <div class="formula">
                    What does he/she look like?<br>
                    He/She is + 形容词：tall, short, thin, heavy<br>
                    He/She has + 名词：long hair, big eyes
                </div>
                <div class="advanced">
                    <h4>⭐ 描述外貌的词汇</h4>
                    <p><strong>身高：</strong>tall, short, medium height</p>
                    <p><strong>体型：</strong>thin, heavy, medium build</p>
                    <p><strong>头发：</strong>long/short/curly/straight hair</p>
                    <div class="example">
                        <strong>例题：</strong>翻译句子<br>
                        1. 他长什么样？<br>
                        2. 她很高，留着长发。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. What does he look like?<br>
                            2. She is tall and has long hair.
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "10. I'd like some noodles.",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>would like的用法</h4>
                <div class="formula">
                    would like + 名词：想要某物<br>
                    would like to + 动词原形：想要做某事<br>
                    Would you like...? 你想要...吗？
                </div>
                <div class="advanced">
                    <h4>⭐ some和any</h4>
                    <ul>
                        <li>some用于肯定句</li>
                        <li>any用于否定句和疑问句</li>
                        <li>表示邀请、建议的疑问句用some</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>用some/any填空<br>
                        1. I'd like _____ noodles.<br>
                        2. Would you like _____ tea?<br>
                        3. There isn't _____ milk.<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. some（肯定句）<br>
                            2. some（表示邀请）<br>
                            3. any（否定句）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "11. How was your school trip?",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>一般过去时</h4>
                <div class="formula">
                    主语 + 动词过去式<br>
                    be动词：was/were<br>
                    规则动词：加-ed
                </div>
                <div class="advanced">
                    <h4>⭐ 动词过去式的变化规则</h4>
                    <ul>
                        <li>一般加-ed：work→worked</li>
                        <li>以e结尾加-d：live→lived</li>
                        <li>辅音字母+y结尾，变y为i加-ed：study→studied</li>
                        <li>重读闭音节，双写末尾字母加-ed：stop→stopped</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>写出下列动词的过去式<br>
                        1. go _____ 2. have _____ 3. see _____<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. went（不规则变化）<br>
                            2. had（不规则变化）<br>
                            3. saw（不规则变化）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "12. What did you do last weekend?",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>一般过去时的疑问句</h4>
                <div class="formula">
                    Did + 主语 + 动词原形?<br>
                    Yes, 主语 + did.<br>
                    No, 主语 + didn't.
                </div>
                <div class="advanced">
                    <h4>⭐ 时间状语</h4>
                    <ul>
                        <li>yesterday 昨天</li>
                        <li>last week 上周</li>
                        <li>two days ago 两天前</li>
                        <li>in 2020 在2020年</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>改为一般疑问句<br>
                        I played basketball yesterday.<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            Did you play basketball yesterday?<br>
                            Yes, I did. / No, I didn't.
                        </div>
                    </div>
                </div>
            `
        },
        // ===== 新增英语知识点 =====
        {
            title: "13. There be 句型",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>There be 句型</h4>
                <div class="formula">
                    肯定句：There is/are + 名词 + 地点<br>
                    否定句：There is/are + not + 名词 + 地点<br>
                    疑问句：Is/Are there + 名词 + 地点?
                </div>
                <h4>be动词选择</h4>
                <ul>
                    <li>be动词取决于后面的名词（就近原则）</li>
                    <li>可数名词单数或不可数名词用is</li>
                    <li>可数名词复数用are</li>
                </ul>
            `
        },
        {
            title: "14.方位介词",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>方位介词</h4>
                <ul>
                    <li><strong>in</strong> 在...里面（in the room）</li>
                    <li><strong>on</strong> 在...上面（on the wall）</li>
                    <li><strong>at</strong> 在...（at the bus stop）</li>
                    <li><strong>in front of</strong> 在...前面</li>
                    <li><strong>behind</strong> 在...后面</li>
                    <li><strong>next to</strong> 紧邻</li>
                    <li><strong>between</strong> 在...之间</li>
                    <li><strong>among</strong> 在...当中</li>
                </ul>
            `
        },
        {
            title: "15. 一般过去时",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>定义</h4>
                <p>表示过去某一时间发生的动作或存在的状态</p>
                <h4>动词变化规则</h4>
                <ul>
                    <li>一般加-ed：play-played</li>
                    <li>以e结尾加-d：like-liked</li>
                    <li>辅音+y结尾：y→i加-ed：study-studied</li>
                    <li>重读闭音节结尾：双写加-ed：stop-stopped</li>
                    <li>不规则变化：go-went, eat-ate, is-was, are-were</li>
                </ul>
            `
        },
        {
            title: "16. 频率副词",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>常见频率副词</h4>
                <ul>
                    <li><strong>always</strong> 总是（100%）</li>
                    <li><strong>usually</strong> 通常（80%）</li>
                    <li><strong>often</strong> 经常（60%）</li>
                    <li><strong>sometimes</strong> 有时（40%）</li>
                    <li><strong>hardly ever</strong> 几乎不（10%）</li>
                    <li><strong>never</strong> 从不（0%）</li>
                </ul>
                <h4>位置</h4>
                <p>be动词之后，行为动词之前</p>
            `
        },
        {
            title: "17. 可数名词与不可数名词",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>可数名词</h4>
                <p>有单复数变化，可用a/an修饰</p>
                <ul>
                    <li>单数变复数：加-s/-es</li>
                    <li>以s/x/z/ch/sh结尾：加-es</li>
                    <li>辅音+y结尾：y→i加-es</li>
                </ul>
                <h4>不可数名词</h4>
                <p>无复数形式，不能用a/an</p>
                <ul>
                    <li>物质名词：水water，面包bread</li>
                    <li>抽象名词：信息information，建议advice</li>
                </ul>
            `
        },
        {
            title: "18. 数量表达",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>可数名词数量</h4>
                <ul>
                    <li>a/an + 可数名词单数</li>
                    <li>数词 + 可数名词复数</li>
                    <li>a lot of/lots of + 可数名词复数</li>
                </ul>
                <h4>不可数名词数量</h4>
                <ul>
                    <li>a piece of + 不可数名词</li>
                    <li>a cup of + 不可数名词</li>
                    <li>some/any + 不可数名词</li>
                    <li>a lot of/lots of + 不可数名词</li>
                </ul>
            `
        },
        {
            title: "19. 形容词比较级",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>规则变化</h4>
                <ul>
                    <li>一般加-er：tall-taller</li>
                    <li>以e结尾加-r：nice-nicer</li>
                    <li>辅音+y结尾：y→i加-er：happy-happier</li>
                    <li>重读闭音节结尾：双写加-er：big-bigger</li>
                    <li>多音节词：加more：beautiful-more beautiful</li>
                </ul>
                <h4>不规则变化</h4>
                <ul>
                    <li>good-better</li>
                    <li>bad-worse</li>
                    <li>many/much-more</li>
                    <li>little-less</li>
                    <li>far-farther/further</li>
                </ul>
            `
        },
        {
            title: "20. 形容词最高级",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>规则变化</h4>
                <ul>
                    <li>一般加-est：tall-tallest</li>
                    <li>以e结尾加-st：nice-nicest</li>
                    <li>辅音+y结尾：y→i加-est：happy-happiest</li>
                    <li>重读闭音节结尾：双写加-est：big-biggest</li>
                    <li>多音节词：加most：beautiful-most beautiful</li>
                </ul>
                <h4>用法</h4>
                <p>the + 最高级 + in/of</p>
            `
        },
        {
            title: "21. 情态动词can/could",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>can 的用法</h4>
                <ul>
                    <li><strong>能力：</strong>会，能（体力或脑力）</li>
                    <li><strong>可能性：</strong>可能</li>
                    <li><strong>许可：</strong>可以</li>
                </ul>
                <h4>could 的用法</h4>
                <ul>
                    <li>can的过去式（表过去能力）</li>
                    <li>could比can更委婉礼貌</li>
                </ul>
            `
        },
        {
            title: "22. 情态动词may/might",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>may 的用法</h4>
                <ul>
                    <li><strong>可能性：</strong>可能，也许</li>
                    <li><strong>许可：</strong>可以（表许可）</li>
                </ul>
                <h4>might 的用法</h4>
                <ul>
                    <li>may的过去式</li>
                    <li>比may更委婉（可能性更小）</li>
                </ul>
                <h4>回答may问题</h4>
                <ul>
                    <li>肯定：Yes, you may. / Yes, please.</li>
                    <li>否定：No, you can't. / No, you mustn't.</li>
                </ul>
            `
        },
        {
            title: "23. 情态动词must/have to",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>must 的用法</h4>
                <ul>
                    <li><strong>必须：</strong>主观必须</li>
                    <li><strong>禁止：</strong>mustn't（表示禁止）</li>
                </ul>
                <h4>have to 的用法</h4>
                <ul>
                    <li>必须：客观需要</li>
                    <li>第三人称单数：has to</li>
                    <li>过去式：had to</li>
                </ul>
                <h4>mustn't vs don't have to</h4>
                <ul>
                    <li>mustn't：禁止（不允许）</li>
                    <li>don't have to：不必（没有必要）</li>
                </ul>
            `
        },
        {
            title: "24. 用how提问",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>How is/are...?</h4>
                <ul>
                    <li>How is the weather? = What's the weather like?</li>
                    <li>How are you? 你好吗？</li>
                </ul>
                <h4>How + 形容词/副词?</h4>
                <ul>
                    <li>How old? 多大（年龄）</li>
                    <li>How tall? 多高（身高）</li>
                    <li>How long? 多长（长度）</li>
                    <li>How far? 多远（距离）</li>
                    <li>How heavy? 多重（重量）</li>
                </ul>
            `
        },
        {
            title: "25. 选择疑问句",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>结构</h4>
                <p>一般疑问句 + or + 选择项?</p>
                <h4>例句</h4>
                <ul>
                    <li>Is this your book or his book?</li>
                    <li>Do you like tea or coffee?</li>
                    <li>Will you go there by bus or by train?</li>
                </ul>
                <h4>注意</h4>
                <p>or前后结构要对称</p>
            `
        },
        {
            title: "26. 祈使句",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>定义</h4>
                <p>表示请求、命令、建议的句子</p>
                <h4>肯定形式</h4>
                <p>动词原形开头：Please sit down.</p>
                <h4>否定形式</h4>
                <p>Don't + 动词原形：Don't talk in class.</p>
                <h4>Let’s 句型</h4>
                <p>Let's + 动词原形：Let's go!</p>
            `
        },
        {
            title: "27. 名词所有格",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>'s 所有格</h4>
                <ul>
                    <li>一般加's：Tom's book</li>
                    <li>以s结尾只加'：the teachers' office</li>
                    <li>不以s结尾加's：children's day</li>
                </ul>
                <h4>of 所有格</h4>
                <p>用于无生命名词：the window of the room</p>
                <h4>双重所有格</h4>
                <p>a friend of my father's</p>
            `
        },
        {
            title: "28. 感叹句",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>What 引导的感叹句</h4>
                <ul>
                    <li>What + a/an + 形容词 + 可数名词单数!</li>
                    <li>What + 形容词 + 可数名词复数/不可数名词!</li>
                </ul>
                <h4>How 引导的感叹句</h4>
                <ul>
                    <li>How + 形容词 + 主语 + 谓语!</li>
                    <li>How + 副词 + 主语 + 谓语!</li>
                </ul>
                <h4>例句</h4>
                <ul>
                    <li>What a beautiful girl she is!</li>
                    <li>How fast he runs!</li>
                </ul>
            `
        },
        {
            title: "29. 时间表达",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>几点钟</h4>
                <p>基数词 + o'clock / 直接读数字</p>
                <h4>几点几分</h4>
                <ul>
                    <li>30分以内：分钟 + past + 小时</li>
                    <li>30分以外：60 - 分钟 + to + (小时+1)</li>
                    <li>15分：a quarter</li>
                    <li>30分：half</li>
                </ul>
                <h4>例句</h4>
                <ul>
                    <li>7:15 - a quarter past seven / seven fifteen</li>
                    <li>8:30 - half past eight / eight thirty</li>
                    <li>9:45 - a quarter to ten / nine forty-five</li>
                </ul>
            `
        },
        {
            title: "30. 日期表达",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>月份</h4>
                <p>January, February, March, April, May, June, July, August, September, October, November, December</p>
                <h4>日期序数词</h4>
                <ul>
                    <li>1st first, 2nd second, 3rd third</li>
                    <li>其余加th：4th fourth</li>
                    <li>特殊：5th fifth, 8th eighth, 9th ninth, 12th twelfth</li>
                </ul>
                <h4>表达方式</h4>
                <p>月份 + 日期，年份<br>
                March 17th, 2026 / March 17, 2026</p>
            `
        }
        // 英语知识点结束
    ],
    history: [
        {
            title: "1. 隋朝的统一与灭亡",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>隋朝的建立与统一</h4>
                <ul>
                    <li><strong>建立：</strong>581年，杨坚建立隋朝，定都长安</li>
                    <li><strong>统一：</strong>589年，隋灭陈，统一全国</li>
                    <li><strong>意义：</strong>结束了西晋以来长期的分裂局面</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 隋朝的繁荣</h4>
                    <p><strong>1. 开皇之治</strong></p>
                    <ul>
                        <li>改革制度：三省六部制</li>
                        <li>发展经济：均田制、租庸调制</li>
                        <li>开凿大运河</li>
                    </ul>
                    <p><strong>2. 大运河的开凿</strong></p>
                    <ul>
                        <li>目的：加强南北交通，巩固统治</li>
                        <li>概况：以洛阳为中心，北达涿郡，南至余杭</li>
                        <li>作用：加强了南北交流，促进了经济发展</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>隋朝大运河的作用是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            作用：<br>
                            1. 加强了南北交通<br>
                            2. 促进了南北经济文化交流<br>
                            3. 巩固了国家统一<br>
                            4. 但过度役使民力，加速了隋朝灭亡
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. 唐朝的建立与贞观之治",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>唐朝的建立</h4>
                <ul>
                    <li><strong>建立：</strong>618年，李渊建立唐朝，定都长安</li>
                    <li><strong>唐太宗：</strong>李世民，年号贞观</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 贞观之治</h4>
                    <p><strong>治国措施：</strong></p>
                    <ul>
                        <li>政治：完善三省六部制</li>
                        <li>用人：虚心纳谏，知人善任（魏征、房玄龄、杜如晦）</li>
                        <li>经济：减轻农民负担，鼓励发展农业生产</li>
                        <li>文化：发展科举制</li>
                    </ul>
                    <p><strong>贞观之治的表现：</strong></p>
                    <ul>
                        <li>政治清明</li>
                        <li>经济发展</li>
                        <li>国力强盛</li>
                        <li>民族团结</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>唐太宗为什么能开创贞观之治？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 吸取隋亡教训，勤于政事<br>
                            2. 虚心纳谏，从善如流<br>
                            3. 知人善任，选拔人才<br>
                            4. 完善制度，发展经济<br>
                            5. 民族政策开明
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "3. 开元盛世",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>武则天</h4>
                <ul>
                    <li><strong>地位：</strong>中国历史上唯一的女皇帝</li>
                    <li><strong>统治：</strong>发展科举，重用人才</li>
                    <li><strong>评价：</strong>政启开元，治宏贞观</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 开元盛世</h4>
                    <p><strong>唐玄宗的改革：</strong></p>
                    <ul>
                        <li>政治：整顿吏治，裁减冗官</li>
                        <li>经济：发展经济，改革税制</li>
                        <li>文化：注重文教，编修经籍</li>
                    </ul>
                    <p><strong>盛世的表现：</strong></p>
                    <ul>
                        <li>政治清明</li>
                        <li>经济繁荣</li>
                        <li>人口增长</li>
                        <li>社会安定</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>唐朝盛世局面出现的原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 统治者励精图治<br>
                            2. 吸取前朝教训<br>
                            3. 制度完善（三省六部制、科举制）<br>
                            4. 重视农业，发展经济<br>
                            5. 社会安定，民族团结
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "4. 唐朝的中外文化交流",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>遣唐使</h4>
                <ul>
                    <li><strong>定义：</strong>日本派遣到唐朝的使者</li>
                    <li><strong>目的：</strong>学习中国的先进文化</li>
                    <li><strong>影响：</strong>促进了中日文化交流</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 鉴真东渡</h4>
                    <ul>
                        <li>鉴真：唐朝高僧</li>
                        <li>经过：六次东渡，终于到达日本</li>
                        <li>贡献：传播佛教、医药、建筑等</li>
                    </ul>
                    <h4>⭐ 玄奘西行</h4>
                    <ul>
                        <li>玄奘：唐朝高僧</li>
                        <li>经过：西行取经，历经艰险</li>
                        <li>贡献：翻译佛经，著有《大唐西域记》</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>比较鉴真东渡和玄奘西行。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            相同点：<br>
                            1. 都是僧人<br>
                            2. 都促进了文化交流<br>
                            3. 都不畏艰险，坚持不懈<br><br>
                            不同点：<br>
                            1. 方向：鉴真东渡日本，玄奘西行天竺<br>
                            2. 内容：鉴真传播文化，玄奘学习佛经<br>
                            3. 著作：玄奘有《大唐西域记》
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "5. 安史之乱与唐朝衰亡",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>安史之乱</h4>
                <ul>
                    <li><strong>时间：</strong>755-763年</li>
                    <li><strong>人物：</strong>安禄山、史思明</li>
                    <li><strong>原因：</strong>节度使权力过大，中央集权削弱</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 安史之乱的影响</h4>
                    <ul>
                        <li>经济：社会经济遭到极大破坏</li>
                        <li>政治：中央集权大大削弱</li>
                        <li>人口：人口大量减少</li>
                        <li>由盛转衰：唐朝由盛转衰的转折点</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>安史之乱爆发的原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 唐玄宗后期怠于政事，宠信杨贵妃<br>
                            2. 节度使权力过大，形成外重内轻<br>
                            3. 安禄山担任三镇节度使，实力强大<br>
                            4. 中央集权削弱
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "6. 北宋的政治",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>北宋的建立</h4>
                <ul>
                    <li><strong>建立：</strong>960年，赵匡胤陈桥兵变，建立宋朝</li>
                    <li><strong>都城：</strong>开封（东京）</li>
                    <li><strong>事件：</strong>杯酒释兵权</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 加强中央集权的措施</h4>
                    <p><strong>1. 军事上：</strong></p>
                    <ul>
                        <li>解除禁军将领的兵权</li>
                        <li>控制军队调动</li>
                        <li>定期换防</li>
                    </ul>
                    <p><strong>2. 政治上：</strong></p>
                    <ul>
                        <li>分化事权，削弱相权</li>
                        <li>派文臣担任地方官</li>
                    </ul>
                    <p><strong>3. 财政上：</strong></p>
                    <ul>
                        <li>地方财政收入大部分收归中央</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>北宋加强中央集权的特点是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            特点：<br>
                            1. 重文轻武<br>
                            2. 强干弱枝<br>
                            3. 分化事权<br><br>
                            影响：<br>
                            积极：加强了中央集权，维护了统一<br>
                            消极：导致政府效率低下，军队战斗力弱
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. 宋代经济的发展",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>农业的发展</h4>
                <ul>
                    <li><strong>工具：</strong>秧马</li>
                    <li><strong>技术：</strong>推广占城稻</li>
                    <li><strong>区域：</strong>江南成为粮仓</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 手工业的发展</h4>
                    <p><strong>1. 纺织业：</strong></p>
                    <ul>
                        <li>丝织业发达</li>
                        <li>棉纺织业兴起</li>
                    </ul>
                    <p><strong>2. 制瓷业：</strong></p>
                    <ul>
                        <li>五大名窑：汝、官、哥、钧、定</li>
                        <li>景德镇成为瓷都</li>
                    </ul>
                    <p><strong>3. 造船业：</strong></p>
                    <ul>
                        <li>技术世界领先</li>
                        <li>指南针应用于航海</li>
                    </ul>
                    <h4>⭐ 商业的繁荣</h4>
                    <ul>
                        <li>城市繁荣：开封、杭州</li>
                        <li>纸币出现：交子（世界最早的纸币）</li>
                        <li>海外贸易：设立市舶司</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>宋代经济发展的原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 社会相对安定<br>
                            2. 统治者重视经济<br>
                            3. 农业技术进步<br>
                            4. 南方开发<br>
                            5. 海外贸易发展
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "8. 蒙古族的兴起与元朝的建立",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>成吉思汗统一蒙古</h4>
                <ul>
                    <li><strong>时间：</strong>1206年</li>
                    <li><strong>人物：</strong>铁木真</li>
                    <li><strong>成就：</strong>建立蒙古政权，被尊为成吉思汗</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 元朝的建立与统一</h4>
                    <p><strong>1. 建立：</strong></p>
                    <ul>
                        <li>1271年，忽必烈建立元朝</li>
                        <li>定都大都（今北京）</li>
                    </ul>
                    <p><strong>2. 统一：</strong></p>
                    <ul>
                        <li>1276年，元灭南宋</li>
                        <li>统一全国</li>
                    </ul>
                    <p><strong>3. 统治措施：</strong></p>
                    <ul>
                        <li>行省制度</li>
                        <li>驿站制度</li>
                        <li>民族政策：四等人制</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>元朝的行省制度有什么作用？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            作用：<br>
                            1. 加强了中央对地方的控制<br>
                            2. 巩固了国家统一<br>
                            3. 对后世影响深远（今天省级行政区的雏形）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "9. 宋元时期的都市和文化",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>繁华的都市</h4>
                <ul>
                    <li><strong>北宋：</strong>开封（东京）</li>
                    <li><strong>南宋：</strong>杭州（临安）</li>
                    <li><strong>元朝：</strong>大都</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 市民文化生活</h4>
                    <p><strong>1. 瓦子：</strong></p>
                    <ul>
                        <li>娱乐兼营商业的场所</li>
                        <li>有勾栏（表演区域）</li>
                    </ul>
                    <p><strong>2. 宋词：</strong></p>
                    <ul>
                        <li>代表人物：苏轼、李清照、辛弃疾</li>
                        <li>特点：豪放派、婉约派</li>
                    </ul>
                    <p><strong>3. 元曲：</strong></p>
                    <ul>
                        <li>包括散曲和杂剧</li>
                        <li>代表人物：关汉卿《窦娥冤》</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>宋代市民文化生活丰富的原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 商品经济发展<br>
                            2. 城市繁荣<br>
                            3. 市民阶层壮大<br>
                            4. 社会相对安定
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "10. 宋元时期的科技与中外交通",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>四大发明</h4>
                <ul>
                    <li><strong>造纸术：</strong>西汉发明，东汉蔡伦改进</li>
                    <li><strong>印刷术：</strong>隋唐雕版印刷，北宋毕昇活字印刷</li>
                    <li><strong>指南针：</strong>战国司南，宋代应用于航海</li>
                    <li><strong>火药：</strong>唐末开始应用于军事</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 四大发明的传播与影响</h4>
                    <p><strong>传播：</strong></p>
                    <ul>
                        <li>造纸术：经阿拉伯传到欧洲</li>
                        <li>印刷术：经丝绸之路传播</li>
                        <li>指南针：经阿拉伯传到欧洲</li>
                        <li>火药：经阿拉伯传到欧洲</li>
                    </ul>
                    <p><strong>影响：</strong></p>
                    <ul>
                        <li>推动了世界文明的发展</li>
                        <li>促进了欧洲社会的转型</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>四大发明对世界有什么影响？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            影响：<br>
                            1. 造纸术和印刷术：促进了文化的传播和发展<br>
                            2. 指南针：促进了航海事业的发展，为新航路开辟创造了条件<br>
                            3. 火药：改变了战争方式，加速了欧洲封建制度的衰落
                        </div>
                    </div>
                </div>
            `
        }
        // 继续添加更多历史知识点...
    ],
    geography: [
        {
            title: "1. 亚洲的位置和范围",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>亚洲的位置</h4>
                <ul>
                    <li><strong>半球位置：</strong>主要在东半球、北半球</li>
                    <li><strong>纬度位置：</strong>地跨寒、温、热三带</li>
                    <li><strong>海陆位置：</strong>东临太平洋，南临印度洋，北临北冰洋</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 亚洲的范围</h4>
                    <p><strong>分界线：</strong></p>
                    <ul>
                        <li>与欧洲：乌拉尔山脉、乌拉尔河、里海、大高加索山脉、黑海、土耳其海峡</li>
                        <li>与非洲：苏伊士运河</li>
                        <li>与北美洲：白令海峡</li>
                    </ul>
                    <p><strong>分区：</strong></p>
                    <ul>
                        <li>东亚、东南亚、南亚、西亚、中亚、北亚</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>亚洲与欧洲的分界线是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            分界线：<br>
                            乌拉尔山脉→乌拉尔河→里海→大高加索山脉→黑海→土耳其海峡
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. 亚洲的自然环境",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>地形特征</h4>
                <ul>
                    <li><strong>地形复杂：</strong>高原、山地为主</li>
                    <li><strong>地势起伏：</strong>中部高，四周低</li>
                    <li><strong>主要地形区：</strong>青藏高原、喜马拉雅山脉、西西伯利亚平原</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 河流特征</h4>
                    <p><strong>河流分布：</strong></p>
                    <ul>
                        <li>呈放射状向四周分流</li>
                        <li>向东流入太平洋：长江、黄河</li>
                        <li>向南流入印度洋：恒河、印度河</li>
                        <li>向北流入北冰洋：鄂毕河、叶尼塞河</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>亚洲地势特征对河流有什么影响？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            影响：<br>
                            1. 地势中部高、四周低，使河流呈放射状向四周分流<br>
                            2. 河流发源于中部高原、山地<br>
                            3. 形成许多外流河，注入周围海洋
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "3. 亚洲的气候",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>气候特点</h4>
                <ul>
                    <li><strong>气候复杂多样：</strong>除温带海洋性气候外，其他气候类型都有</li>
                    <li><strong>季风气候显著：</strong>典型的季风气候区</li>
                    <li><strong>大陆性气候强：</strong>冬冷夏热，降水集中夏季</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 气候分布</h4>
                    <p><strong>主要气候类型：</strong></p>
                    <ul>
                        <li>热带雨林气候：马来群岛</li>
                        <li>热带季风气候：印度半岛、中南半岛</li>
                        <li>亚热带季风气候：中国东南部</li>
                        <li>温带季风气候：中国华北、东北</li>
                        <li>温带大陆性气候：亚洲中部</li>
                        <li>极地气候：北冰洋沿岸</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>亚洲气候复杂多样的原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 纬度跨度大，地跨寒、温、热三带<br>
                            2. 东西距离长，距海远近不同<br>
                            3. 地形复杂，地势高低悬殊<br>
                            4. 面积辽阔，各地受不同因素影响
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "4. 日本",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>日本的位置和范围</h4>
                <ul>
                    <li><strong>位置：</strong>亚洲东部，太平洋西北部</li>
                    <li><strong>组成：</strong>北海道、本州、四国、九州四大岛及附近岛屿</li>
                    <li><strong>首都：</strong>东京</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 日本的自然环境</h4>
                    <p><strong>地形：</strong></p>
                    <ul>
                        <li>山地、丘陵为主</li>
                        <li>平原狭小，关东平原最大</li>
                        <li>海岸线曲折，多优良港湾</li>
                    </ul>
                    <p><strong>气候：</strong></p>
                    <ul>
                        <li>温带季风气候、亚热带季风气候</li>
                        <li>海洋性显著</li>
                    </ul>
                    <p><strong>资源：</strong></p>
                    <ul>
                        <li>森林、水能资源丰富</li>
                        <li>矿产资源贫乏</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>日本为什么多火山地震？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            日本位于亚欧板块和太平洋板块交界处，地壳活跃，多火山地震。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "5. 日本的经济",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>经济特点</h4>
                <ul>
                    <li><strong>类型：</strong>加工贸易型经济</li>
                    <li><strong>特点：</strong>进口原料，出口工业制成品</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 经济发展的条件</h4>
                    <p><strong>有利条件：</strong></p>
                    <ul>
                        <li>海岸线曲折，多优良港湾</li>
                        <li>劳动力素质高</li>
                        <li>科技发达</li>
                    </ul>
                    <p><strong>不利条件：</strong></p>
                    <ul>
                        <li>矿产资源贫乏</li>
                        <li>国内市场狭小</li>
                    </ul>
                    <p><strong>工业分布：</strong></p>
                    <ul>
                        <li>太平洋沿岸和濑户内海沿岸</li>
                        <li>原因：多优良港湾，便于原料进口和产品出口</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>日本工业为什么集中在太平洋沿岸？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 多优良港湾，海运便利<br>
                            2. 便于进口原料<br>
                            3. 便于出口工业制成品<br>
                            4. 城市集中，消费市场大
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "6. 东南亚",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>东南亚的位置</h4>
                <ul>
                    <li><strong>位置：</strong>亚洲东南部</li>
                    <li><strong>范围：</strong>中南半岛、马来群岛</li>
                    <li><strong>重要性：</strong>位于太平洋和印度洋之间，是交通要道</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 马六甲海峡</h4>
                    <p><strong>位置：</strong></p>
                    <ul>
                        <li>位于马来半岛和苏门答腊岛之间</li>
                    </ul>
                    <p><strong>重要性：</strong></p>
                    <ul>
                        <li>连接太平洋和印度洋的重要通道</li>
                        <li>世界最繁忙的海峡之一</li>
                        <li>被称为"海上生命线"</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>马六甲海峡为什么重要？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            重要性：<br>
                            1. 连接太平洋和印度洋的重要通道<br>
                            2. 是欧洲、非洲到东南亚、东亚的最短航线必经之地<br>
                            3. 是世界石油运输的重要通道
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. 东南亚的气候与农业",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>气候类型</h4>
                <ul>
                    <li><strong>热带季风气候：</strong>中南半岛、菲律宾群岛北部</li>
                    <li><strong>热带雨林气候：</strong>马来群岛、马来半岛南部</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 农业生产</h4>
                    <p><strong>主要作物：</strong></p>
                    <ul>
                        <li>粮食作物：水稻（主要粮食）</li>
                        <li>经济作物：天然橡胶、油棕、椰子、蕉麻</li>
                    </ul>
                    <p><strong>作物分布：</strong></p>
                    <ul>
                        <li>泰国：天然橡胶、水稻</li>
                        <li>马来西亚：油棕</li>
                        <li>印度尼西亚：椰子</li>
                        <li>菲律宾：蕉麻、椰子</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>东南亚为什么适合种植水稻？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 气候湿热，雨热同期<br>
                            2. 河流冲积平原，土壤肥沃<br>
                            3. 水源充足<br>
                            4. 人口稠密，劳动力充足
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "8. 印度",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>印度的位置</h4>
                <ul>
                    <li><strong>位置：</strong>南亚次大陆</li>
                    <li><strong>邻国：</strong>中国、巴基斯坦、尼泊尔等</li>
                    <li><strong>首都：</strong>新德里</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 地形特征</h4>
                    <p><strong>三大地形区：</strong></p>
                    <ul>
                        <li>北部：喜马拉雅山脉</li>
                        <li>中部：恒河平原</li>
                        <li>南部：德干高原</li>
                    </ul>
                    <p><strong>气候：</strong></p>
                    <ul>
                        <li>热带季风气候为主</li>
                        <li>旱季：10月-次年5月</li>
                        <li>雨季：6月-9月</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>印度为什么水旱灾害频繁？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 西南季风不稳定<br>
                            2. 西南季风来得早、退得晚，雨季长→洪涝<br>
                            3. 西南季风来得晚、退得早，雨季短→干旱
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "9. 俄罗斯",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>俄罗斯的位置</h4>
                <ul>
                    <li><strong>位置：</strong>欧亚大陆北部</li>
                    <li><strong>面积：</strong>世界上面积最大的国家</li>
                    <li><strong>首都：</strong>莫斯科</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 自然环境</h4>
                    <p><strong>地形：</strong></p>
                    <ul>
                        <li>以叶尼塞河为界，西部平原，东部高原山地</li>
                        <li>东欧平原、西西伯利亚平原、中西伯利亚高原</li>
                    </ul>
                    <p><strong>气候：</strong></p>
                    <ul>
                        <li>温带大陆性气候为主</li>
                        <li>冬季长而寒冷，夏季短而温暖</li>
                    </ul>
                    <p><strong>资源：</strong></p>
                    <ul>
                        <li>森林、水能、矿产资源丰富</li>
                        <li>石油、天然气、煤炭储量丰富</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>俄罗斯气候寒冷的原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 纬度高，太阳辐射弱<br>
                            2. 北临北冰洋，受寒冷气流影响<br>
                            3. 地形向北敞开，冷空气长驱直入
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "10. 俄罗斯的经济",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>经济特点</h4>
                <ul>
                    <li><strong>工业：</strong>重工业发达，轻工业薄弱</li>
                    <li><strong>农业：</strong>不稳定，粮食需要进口</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 工业分布</h4>
                    <p><strong>主要工业区：</strong></p>
                    <ul>
                        <li>莫斯科工业区：钢铁、汽车、飞机</li>
                        <li>圣彼得堡工业区：石油化工、造船</li>
                        <li>乌拉尔工业区：钢铁、机械</li>
                        <li>新西伯利亚工业区：煤炭、石油</li>
                    </ul>
                    <p><strong>特点：</strong></p>
                    <ul>
                        <li>工业分布靠近原料产地</li>
                        <li>欧洲部分密集，亚洲部分稀疏</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>俄罗斯工业为什么靠近原料产地？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 矿产资源丰富<br>
                            2. 运输原料成本高<br>
                            3. 减少运输成本
                        </div>
                    </div>
                </div>
            `
        }
        // 继续添加更多地理知识点...
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = grade7bKnowledge;
}
