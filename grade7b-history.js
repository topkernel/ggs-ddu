// 7年级下学期历史完整知识点库
// 第一单元：隋唐时期（13个知识点）
// 第二单元：辽宋夏金元（12个知识点）
// 第三单元：宋元时期（25个知识点，补充）
const grade7bHistory = {
    // 第一单元：隋唐时期
    unit1: [
        {
            title: "1. 隋朝的统一与灭亡",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>隋朝的建立</h4>
                <ul>
                    <li><strong>时间：</strong>581年</li>
                    <li><strong>建立者：</strong>杨坚（隋文帝）</li>
                    <li><strong>都城：</strong>长安</li>
                    <li><strong>统一：</strong>589年灭陈，统一全国</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 隋朝的繁荣</h4>
                    <p><strong>开皇之治：</strong></p>
                    <ul>
                        <li>改革制度：三省六部制</li>
                        <li>发展经济：均田制、租庸调制</li>
                        <li>开凿大运河</li>
                    </ul>
                    <h4>⭐ 大运河</h4>
                    <ul>
                        <li><strong>目的：</strong>加强南北交通，巩固统治</li>
                        <li><strong>概况：</strong>以洛阳为中心，北达涿郡，南至余杭</li>
                        <li><strong>作用：</strong>加强南北交流，促进经济发展</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>隋朝大运河的历史意义是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            1. 加强了南北交通<br>
                            2. 促进了经济文化交流<br>
                            3. 巩固了国家统一<br>
                            4. 但过度役使民力，加速了隋朝灭亡
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. 隋朝的灭亡",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>灭亡原因</h4>
                <ul>
                    <li><strong>暴政：</strong>隋炀帝暴政，赋税沉重</li>
                    <li><strong>徭役：</strong>大兴土木，开凿大运河</li>
                    <li><strong>战争：</strong>三次征伐高丽</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 隋朝灭亡的教训</h4>
                    <ul>
                        <li>统治者要勤政爱民</li>
                        <li>不能过度役使民力</li>
                        <li>要重视民生</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>隋朝灭亡的主要原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            主要原因：<br>
                            1. 隋炀帝的暴政<br>
                            2. 赋税沉重<br>
                            3. 大兴土木，徭役繁重<br>
                            4. 三次征伐高丽，耗费国力
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "3. 唐朝的建立",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>唐朝的建立</h4>
                <ul>
                    <li><strong>时间：</strong>618年</li>
                    <li><strong>建立者：</strong>李渊（唐高祖）</li>
                    <li><strong>都城：</strong>长安</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 唐朝的历史地位</h4>
                    <ul>
                        <li>中国历史上最强盛的朝代之一</li>
                        <li>政治清明，经济繁荣，文化昌盛</li>
                        <li>对世界影响深远</li>
                    </ul>
                </div>
            `
        },
        {
            title: "4. 贞观之治",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>唐太宗的治国措施</h4>
                <ul>
                    <li><strong>政治：</strong>完善三省六部制</li>
                    <li><strong>用人：</strong>虚心纳谏，知人善任（魏征、房玄龄、杜如晦）</li>
                    <li><strong>经济：</strong>减轻农民负担，发展农业</li>
                    <li><strong>文化：</strong>发展科举制</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 贞观之治的表现</h4>
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
                            4. 完善制度，发展经济
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "5. 武则天",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>武则天的统治</h4>
                <ul>
                    <li><strong>地位：</strong>中国历史上唯一的女皇帝</li>
                    <li><strong>措施：</strong>发展科举，重用人才</li>
                    <li><strong>评价：</strong>政启开元，治宏贞观</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 武则天的贡献</h4>
                    <ul>
                        <li>继续发展科举制</li>
                        <li>重用贤才（狄仁杰等）</li>
                        <li>为开元盛世奠定基础</li>
                    </ul>
                </div>
            `
        },
        {
            title: "6. 开元盛世",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>唐玄宗的改革</h4>
                <ul>
                    <li><strong>政治：</strong>整顿吏治，裁减冗官</li>
                    <li><strong>经济：</strong>发展经济，改革税制</li>
                    <li><strong>文化：</strong>注重文教，编修经籍</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 盛世的表现</h4>
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
                            3. 制度完善<br>
                            4. 重视农业<br>
                            5. 社会安定
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. 唐朝的经济发展",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>农业的发展</h4>
                <ul>
                    <li><strong>工具：</strong>曲辕犁、筒车</li>
                    <li><strong>技术：</strong>改进耕作技术</li>
                    <li><strong>水利：</strong>兴修水利工程</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 手工业的发展</h4>
                    <ul>
                        <li>丝织业发达</li>
                        <li>陶瓷业：唐三彩</li>
                    </ul>
                    <h4>⭐ 商业的繁荣</h4>
                    <ul>
                        <li>长安是国际大都市</li>
                        <li>对外贸易发达</li>
                    </ul>
                </div>
            `
        },
        {
            title: "8. 唐朝的民族关系",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>民族政策</h4>
                <ul>
                    <li><strong>开明的民族政策</strong></li>
                    <li><strong>和亲政策：</strong>文成公主入藏</li>
                    <li><strong>册封制度</strong></li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 文成公主入藏</h4>
                    <ul>
                        <li>唐太宗时期</li>
                        <li>嫁给吐蕃赞普松赞干布</li>
                        <li>促进了汉藏两族的友好关系</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>文成公主入藏的意义是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            意义：<br>
                            1. 促进了汉藏两族的友好关系<br>
                            2. 传播了中原文化<br>
                            3. 促进了西藏地区的发展
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "9. 唐朝的中外文化交流 - 遣唐使",
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
                    <h4>⭐ 遣唐使的贡献</h4>
                    <ul>
                        <li>学习唐朝的政治制度</li>
                        <li>学习唐朝的文化艺术</li>
                        <li>学习唐朝的生产技术</li>
                        <li>推动日本大化改新</li>
                    </ul>
                </div>
            `
        },
        {
            title: "10. 鉴真东渡",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>鉴真东渡</h4>
                <ul>
                    <li><strong>鉴真：</strong>唐朝高僧</li>
                    <li><strong>经过：</strong>六次东渡，终于到达日本</li>
                    <li><strong>贡献：</strong>传播佛教、医药、建筑等</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 鉴真的贡献</h4>
                    <ul>
                        <li>传播佛教文化</li>
                        <li>传授医药知识</li>
                        <li>传授建筑技术</li>
                        <li>促进了中日文化交流</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>鉴真东渡的艰辛说明了什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            说明：<br>
                            1. 传播文化的艰辛<br>
                            2. 鉴真的坚定信念<br>
                            3. 不畏艰险、坚持不懈的精神
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "11. 玄奘西行",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>玄奘西行</h4>
                <ul>
                    <li><strong>玄奘：</strong>唐朝高僧</li>
                    <li><strong>经过：</strong>西行取经，历经艰险</li>
                    <li><strong>贡献：</strong>翻译佛经，著有《大唐西域记》</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 玄奘的贡献</h4>
                    <ul>
                        <li>翻译大量佛经</li>
                        <li>《大唐西域记》是研究西域的重要资料</li>
                        <li>促进了中印文化交流</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>比较鉴真东渡和玄奘西行的异同。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            相同点：<br>
                            1. 都是僧人<br>
                            2. 都促进了文化交流<br>
                            3. 都不畏艰险<br><br>
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
            title: "12. 安史之乱",
            tag: "必考",
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
                        <li>经济遭到极大破坏</li>
                        <li>中央集权大大削弱</li>
                        <li>人口大量减少</li>
                        <li>唐朝由盛转衰的转折点</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>安史之乱爆发的原因是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            原因：<br>
                            1. 唐玄宗后期怠于政事<br>
                            2. 节度使权力过大<br>
                            3. 中央集权削弱<br>
                            4. 安禄山实力强大
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "13. 唐朝的灭亡",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>唐朝的衰落与灭亡</h4>
                <ul>
                    <li><strong>安史之乱后：</strong>藩镇割据</li>
                    <li><strong>黄巢起义：</strong>沉重打击了唐朝统治</li>
                    <li><strong>灭亡：</strong>907年，朱温建立后梁，唐朝灭亡</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 唐朝灭亡的原因</h4>
                    <ul>
                        <li>安史之乱使唐朝由盛转衰</li>
                        <li>藩镇割据，中央集权削弱</li>
                        <li>宦官专权</li>
                        <li>农民起义</li>
                    </ul>
                </div>
            `
        }
    ],

    // 第二单元：辽宋夏金元
    unit2: [
        {
            title: "14. 北宋的建立",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>北宋的建立</h4>
                <ul>
                    <li><strong>时间：</strong>960年</li>
                    <li><strong>建立者：</strong>赵匡胤（宋太祖）</li>
                    <li><strong>事件：</strong>陈桥兵变，黄袍加身</li>
                    <li><strong>都城：</strong>开封（东京）</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 杯酒释兵权</h4>
                    <ul>
                        <li>解除禁军将领的兵权</li>
                        <li>加强中央集权</li>
                        <li>重文轻武</li>
                    </ul>
                </div>
            `
        },
        {
            title: "15. 北宋加强中央集权",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>加强中央集权的措施</h4>
                <ul>
                    <li><strong>军事上：</strong>解除禁军将领兵权，控制军队调动</li>
                    <li><strong>政治上：</strong>分化事权，削弱相权</li>
                    <li><strong>财政上：</strong>地方财政收入大部分收归中央</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 特点与影响</h4>
                    <p><strong>特点：</strong>重文轻武，强干弱枝，分化事权</p>
                    <p><strong>影响：</strong></p>
                    <ul>
                        <li>积极：加强了中央集权</li>
                        <li>消极：政府效率低下，军队战斗力弱</li>
                    </ul>
                </div>
            `
        },
        {
            title: "16. 宋代经济的发展",
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
                    <ul>
                        <li>丝织业发达</li>
                        <li>五大名窑：汝、官、哥、钧、定</li>
                        <li>景德镇成为瓷都</li>
                        <li>造船技术世界领先</li>
                    </ul>
                    <h4>⭐ 商业的繁荣</h4>
                    <ul>
                        <li>城市繁荣</li>
                        <li>交子——世界最早的纸币</li>
                        <li>海外贸易发达</li>
                    </ul>
                </div>
            `
        },
        {
            title: "17. 蒙古的兴起",
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
                    <h4>⭐ 成吉思汗的贡献</h4>
                    <ul>
                        <li>统一蒙古各部</li>
                        <li>建立蒙古政权</li>
                        <li>创制蒙古文字</li>
                        <li>对外扩张</li>
                    </ul>
                </div>
            `
        },
        {
            title: "18. 元朝的建立与统一",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>元朝的建立</h4>
                <ul>
                    <li><strong>时间：</strong>1271年</li>
                    <li><strong>建立者：</strong>忽必烈（元世祖）</li>
                    <li><strong>都城：</strong>大都（今北京）</li>
                    <li><strong>统一：</strong>1276年灭南宋，统一全国</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 元朝的历史意义</h4>
                    <ul>
                        <li>结束了长期分裂局面</li>
                        <li>建立了统一的多民族国家</li>
                        <li>版图是中国历史上最大的</li>
                    </ul>
                </div>
            `
        },
        {
            title: "19. 元朝的统治",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>元朝的统治措施</h4>
                <ul>
                    <li><strong>行省制度：</strong>在地方设行中书省</li>
                    <li><strong>驿站制度：</strong>加强交通和通讯</li>
                    <li><strong>民族政策：</strong>四等人制</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 行省制度的影响</h4>
                    <ul>
                        <li>加强了中央对地方的控制</li>
                        <li>巩固了国家统一</li>
                        <li>对后世影响深远</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>元朝行省制度的作用是什么？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            作用：<br>
                            1. 加强了中央对地方的控制<br>
                            2. 巩固了国家统一<br>
                            3. 今天省级行政区的雏形
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "20. 宋元时期的都市和文化",
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
                    <p><strong>瓦子：</strong>娱乐兼营商业的场所</p>
                    <p><strong>宋词：</strong>苏轼、李清照、辛弃疾</p>
                    <p><strong>元曲：</strong>关汉卿《窦娥冤》</p>
                </div>
            `
        },
        {
            title: "21. 宋元时期的科技",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>四大发明的完成</h4>
                <ul>
                    <li><strong>造纸术：</strong>西汉发明，东汉蔡伦改进</li>
                    <li><strong>印刷术：</strong>隋唐雕版印刷，北宋毕昇活字印刷</li>
                    <li><strong>指南针：</strong>战国司南，宋代应用于航海</li>
                    <li><strong>火药：</strong>唐末开始应用于军事</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 四大发明的传播与影响</h4>
                    <ul>
                        <li>经阿拉伯传到欧洲</li>
                        <li>推动了世界文明的发展</li>
                        <li>促进了欧洲社会的转型</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>四大发明对世界有什么影响？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            影响：<br>
                            1. 造纸术和印刷术：促进了文化发展<br>
                            2. 指南针：促进了航海事业，为新航路开辟创造条件<br>
                            3. 火药：改变了战争方式，加速了欧洲封建制度的衰落
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "22. 司马光和《资治通鉴》",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>司马光与《资治通鉴》</h4>
                <ul>
                    <li><strong>作者：</strong>司马光（北宋）</li>
                    <li><strong>体裁：</strong>编年体通史</li>
                    <li><strong>内容：</strong>记述了从战国到五代的历史</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 《资治通鉴》的价值</h4>
                    <ul>
                        <li>为统治者提供历史借鉴</li>
                        <li>是中国古代重要的史学著作</li>
                        <li>与《史记》并称"史学双璧"</li>
                    </ul>
                </div>
            `
        },
        {
            title: "23. 宋词",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>宋词的发展</h4>
                <ul>
                    <li><strong>豪放派：</strong>苏轼、辛弃疾</li>
                    <li><strong>婉约派：</strong>李清照、柳永</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 代表人物及作品</h4>
                    <p><strong>苏轼：</strong>《念奴娇·赤壁怀古》</p>
                    <p><strong>辛弃疾：</strong>《破阵子·为陈同甫赋壮词以寄之》</p>
                    <p><strong>李清照：</strong>《如梦令》《声声慢》</p>
                </div>
            `
        },
        {
            title: "24. 元曲",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>元曲的组成</h4>
                <ul>
                    <li><strong>散曲：</strong>一种诗歌形式</li>
                    <li><strong>杂剧：</strong>一种戏剧形式</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 代表人物</h4>
                    <p><strong>关汉卿：</strong>《窦娥冤》</p>
                    <p><strong>王实甫：</strong>《西厢记》</p>
                    <p><strong>马致远：</strong>《天净沙·秋思》</p>
                </div>
            `
        },
        {
            title: "25. 宋元时期的对外交流",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>对外交流的繁荣</h4>
                <ul>
                    <li><strong>海上丝绸之路：</strong>海外贸易发达</li>
                    <li><strong>马可·波罗：</strong>意大利旅行家，著有《马可·波罗行纪》</li>
                    <li><strong>影响：</strong>促进了中外文化交流</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 马可·波罗的贡献</h4>
                    <ul>
                        <li>在中国生活了17年</li>
                        <li>《马可·波罗行纪》介绍中国</li>
                        <li>激发了欧洲人对东方的向往</li>
                    </ul>
                </div>
            `
        }
    ],

    // 第三单元：宋元时期（补充25个知识点）
    unit3: [
        {
            title: "26. 北宋的建立与统治",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>北宋的建立</h4>
                <ul>
                    <li><strong>建立：</strong>960年，赵匡胤陈桥兵变</li>
                    <li><strong>都城：</strong>开封（东京）</li>
                    <li><strong>事件：</strong>杯酒释兵权</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 中央集权措施</h4>
                    <ul>
                        <li>收精兵：解除节度使兵权</li>
                        <li>制钱谷：财政收归中央</li>
                        <li>削实权：削弱地方权力</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>北宋建立者是谁？都城在哪里？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">赵匡胤，开封</div>
                    </div>
                </div>
            `
        },
        {
            title: "27. 宋代经济发展",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>农业发展</h4>
                <ul>
                    <li><strong>作物：</strong>水稻产量跃居首位</li>
                    <li><strong>工具：</strong>出现翻车、筒车</li>
                    <li><strong>推广：</strong>占城稻传入</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 手工业发展</h4>
                    <ul>
                        <li>纺织业：蜀锦、江浙丝绸</li>
                        <li>制瓷业：五大名窑（汝、官、哥、钧、定）</li>
                        <li>造纸业：印刷术普及</li>
                    </ul>
                </div>
            `
        },
        {
            title: "28. 商业繁荣",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>商业发展</h4>
                <ul>
                    <li><strong>城市：</strong>开封、杭州成为大都市</li>
                    <li><strong>市舶司：</strong>管理海外贸易</li>
                    <li><strong>纸币：</strong>出现"交子"——世界上最早的纸币</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>世界上最早的纸币是什么？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">宋代的"交子"</div>
                </div>
            `
        },
        {
            title: "29. 蒙古族的兴起",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>蒙古统一</h4>
                <ul>
                    <li><strong>首领：</strong>铁木真（成吉思汗）</li>
                    <li><strong>统一：</strong>1206年统一蒙古各部</li>
                    <li><strong>建立：</strong>蒙古国</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 成吉思汗的贡献</h4>
                    <ul>
                        <li>统一蒙古草原</li>
                        <li>建立蒙古政权</li>
                        <li>创制蒙古文字</li>
                    </ul>
                </div>
            `
        },
        {
            title: "30. 元朝的建立与统一",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>元朝建立</h4>
                <ul>
                    <li><strong>建立者：</strong>忽必烈</li>
                    <li><strong>时间：</strong>1271年</li>
                    <li><strong>都城：</strong>大都（北京）</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 元朝统一</h4>
                    <ul>
                        <li>1279年灭南宋</li>
                        <li>结束了长期分裂局面</li>
                        <li>建立空前统一的多民族国家</li>
                    </ul>
                </div>
            `
        },
        {
            title: "31. 元朝的行省制度",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>行省制度</h4>
                <ul>
                    <li><strong>目的：</strong>加强对全国的统治</li>
                    <li><strong>内容：</strong>设行中书省（行省）</li>
                    <li><strong>影响：</strong>是中国省制的开端</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>元朝行省制度的影响是什么？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">加强了对全国的统治，是我国省制的开端</div>
                </div>
            `
        },
        {
            title: "32. 元朝的民族关系",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>民族融合</h4>
                <ul>
                    <li><strong>原因：</strong>统一局面和交通发达</li>
                    <li><strong>表现：</strong>波斯人、阿拉伯人来华</li>
                    <li><strong>结果：</strong>形成新的民族——回族</li>
                </ul>
            `
        },
        {
            title: "33. 宋元都市生活",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>宋元都市</h4>
                <ul>
                    <li><strong>北宋东京：</strong>人口超百万</li>
                    <li><strong>元代大都：</strong>国际大都会</li>
                    <li><strong>瓦子：</strong>娱乐场所</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 节日习俗</h4>
                    <ul>
                        <li>春节（元日）</li>
                        <li>元宵节</li>
                        <li>中秋节</li>
                    </ul>
                </div>
            `
        },
        {
            title: "34. 宋元文学成就",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>宋词</h4>
                <ul>
                    <li><strong>苏轼：</strong>豪放派代表</li>
                    <li><strong>李清照：</strong>婉约派代表</li>
                    <li><strong>辛弃疾：</strong>豪放派词人</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 元曲</h4>
                    <ul>
                        <li>关汉卿：《窦娥冤》</li>
                        <li>马致远：《天净沙·秋思》</li>
                    </ul>
                </div>
            `
        },
        {
            title: "35. 宋元四大发明",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>四大发明</h4>
                <ul>
                    <li><strong>造纸术：</strong>东汉蔡伦改进</li>
                    <li><strong>指南针：</strong>战国司南，宋代用于航海</li>
                    <li><strong>火药：</strong>唐宋用于军事</li>
                    <li><strong>印刷术：</strong>毕昇发明活字印刷</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>活字印刷术的发明者是谁？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">毕昇</div>
                </div>
            `
        },
        {
            title: "36. 宋元对外交流",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>对外交流</h4>
                <ul>
                    <li><strong>海上丝绸之路：</strong>连接东西方贸易</li>
                    <li><strong>使节往来：</strong>与高丽、日本交往密切</li>
                    <li><strong>科技传播：</strong>四大发明西传</li>
                </ul>
            `
        },
        {
            title: "37. 岳飞抗金",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>抗金斗争</h4>
                <ul>
                    <li><strong>背景：</strong>金朝南侵</li>
                    <li><strong>将领：</strong>岳飞率领岳家军</li>
                    <li><strong>结果：</strong>取得郾城大捷</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 岳飞的精神</h4>
                    <ul>
                        <li>精忠报国</li>
                        <li>保家卫国</li>
                        <li>不畏强敌</li>
                    </ul>
                </div>
            `
        },
        {
            title: "38. 文天祥抗元",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>抗元斗争</h4>
                <ul>
                    <li><strong>背景：</strong>元朝南侵</li>
                    <li><strong>将领：</strong>文天祥</li>
                    <li><strong>精神：</strong>"人生自古谁无死，留取丹心照汗青"</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>文天祥的著名诗句是什么？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">人生自古谁无死，留取丹心照汗青</div>
                </div>
            `
        },
        {
            title: "39. 宋代纸币与金融",
            tag: "拓展",
            tagClass: "basic",
            content: `
                <h4>交子的出现</h4>
                <ul>
                    <li><strong>起源：</strong>四川商人发行</li>
                    <li><strong>发展：</strong>政府接管后发行</li>
                    <li><strong>意义：</strong>世界上最早的纸币</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 纸币的意义</h4>
                    <p>促进商品流通，推动经济发展</p>
                </div>
            `
        },
        {
            title: "40. 宋元科学技术",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>科技成就</h4>
                <ul>
                    <li><strong>天文：</strong>黄道婆改进纺织术</li>
                    <li><strong>医学：</strong>《洗冤录》——世界最早的法医学著作</li>
                    <li><strong>建筑：</strong>应县木塔（世界最高木塔）</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>《洗冤录》的作者是谁？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">宋慈</div>
                </div>
            `
        },
        {
            title: "41. 元朝疆域与民族",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>元朝疆域</h4>
                <ul>
                    <li><strong>范围：</strong>东起东海，西至新疆</li>
                    <li><strong>北至：</strong>北海（贝加尔湖以北）</li>
                    <li><strong>南到：</strong>南海诸岛</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 民族分类</h4>
                    <ul>
                        <li>蒙古人</li>
                        <li>色目人（西北、中亚人）</li>
                        <li>汉人（原金朝统治区）</li>
                        <li>南人（原南宋统治区）</li>
                    </ul>
                </div>
            `
        },
        {
            title: "42. 宋元文化名人",
            tag: "拓展",
            tagClass: "basic",
            content: `
                <h4>宋代名人</h4>
                <ul>
                    <li><strong>司马光：</strong>《资治通鉴》</li>
                    <li><strong>沈括：</strong>《梦溪笔谈》</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 元代名人</h4>
                    <ul>
                        <li>郭守敬：编制《授时历》</li>
                        <li>赵孟頫：书画成就</li>
                    </ul>
                </div>
            `
        },
        {
            title: "43. 宋代科举制度",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>科举发展</h4>
                <ul>
                    <li><strong>完善：</strong>宋代科举制度更加完善</li>
                    <li><strong>录取：</strong>实行殿试</li>
                    <li><strong>影响：</strong>扩大了统治基础</li>
                </ul>
            `
        },
        {
            title: "44. 宋元海上贸易",
            tag: "拓展",
            tagClass: "basic",
            content: `
                <h4>海上丝绸之路</h4>
                <ul>
                    <li><strong>路线：</strong>从刘家港出发到波斯湾</li>
                    <li><strong>商品：</strong>丝绸、瓷器、茶叶</li>
                    <li><strong>港口：</strong>广州、泉州、明州</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>宋元时期最大的港口是哪个？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">泉州</div>
                </div>
            `
        },
        {
            title: "45. 元朝驿站制度",
            tag: "拓展",
            tagClass: "basic",
            content: `
                <h4>驿站制度</h4>
                <ul>
                    <li><strong>目的：</strong>加强中央与地方联系</li>
                    <li><strong>设施：</strong>驿道、驿站</li>
                    <li><strong>作用：</strong>促进信息传递和人员流动</li>
                </ul>
            `
        },
        {
            title: "46. 宋代城市发展",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>城市特点</h4>
                <ul>
                    <li><strong>打破坊市界限：</strong>商业区与居住区混合</li>
                    <li><strong>夜市出现：</strong>打破了时间限制</li>
                    <li><strong>人口增加：</strong>开封、杭州超百万</li>
                </ul>
            `
        },
        {
            title: "47. 宋元宗教",
            tag: "拓展",
            tagClass: "basic",
            content: `
                <h4>宗教发展</h4>
                <ul>
                    <li><strong>佛教：</strong>继续发展</li>
                    <li><strong>道教：</strong>受到推崇</li>
                    <li><strong>伊斯兰教：</strong>传入中国</li>
                </ul>
            `
        },
        {
            title: "48. 宋元饮食与服饰",
            tag: "拓展",
            tagClass: "basic",
            content: `
                <h4>饮食变化</h4>
                <ul>
                    <li><strong>主食：</strong>水稻、小麦为主</li>
                    <li><strong>副食：</strong>肉类、蔬菜丰富</li>
                    <li><strong>饮料：</strong>茶文化兴盛</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 服饰特点</h4>
                    <ul>
                        <li>宋代：简洁朴素</li>
                        <li>元代：民族融合，多样化</li>
                    </ul>
                </div>
            `
        },
        {
            title: "49. 宋元战争与和平",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>重要战争</h4>
                <ul>
                    <li><strong>宋金战争：</strong>靖康之变、南宋抗金</li>
                    <li><strong>宋元战争：</strong>襄阳之战、崖山之战</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 和平交往</h4>
                    <ul>
                        <li>榷场贸易</li>
                        <li>使节往来</li>
                        <li>文化交流</li>
                    </ul>
                </div>
            `
        },
        {
            title: "50. 宋元历史总结",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>单元总结</h4>
                <ul>
                    <li><strong>政治：</strong>从北宋统一到元朝统一</li>
                    <li><strong>经济：</strong>商品经济繁荣</li>
                    <li><strong>文化：</strong>科技文学成就突出</li>
                    <li><strong>民族：</strong>民族融合加强</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>宋元时期的特点是什么？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">经济繁荣、文化昌盛、民族融合、科技进步</div>
                </div>
            `
        }
    ]
};
