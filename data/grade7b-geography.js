// 7年级下学期地理完整知识点库（30个知识点）
const grade7bGeography = [
    // 第六章：亚洲（10个知识点）
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
                <p><strong>分区：</strong>东亚、东南亚、南亚、西亚、中亚、北亚</p>
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
        title: "2. 亚洲的地形特征",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>地形特点</h4>
            <ul>
                <li><strong>地形复杂：</strong>高原、山地为主</li>
                <li><strong>地势起伏：</strong>中部高，四周低</li>
                <li><strong>主要地形区：</strong>青藏高原、喜马拉雅山脉、西西伯利亚平原</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 地形对河流的影响</h4>
                <ul>
                    <li>河流呈放射状向四周分流</li>
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
                <h4>⭐ 主要气候类型</h4>
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
        title: "4. 亚洲的人口与国家",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>人口特点</h4>
            <ul>
                <li><strong>人口最多：</strong>世界上人口最多的大洲</li>
                <li><strong>分布不均：</strong>东部和南部人口稠密，中部和西部人口稀疏</li>
                <li><strong>人口大国：</strong>中国、印度、印度尼西亚等</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 人口分布的原因</h4>
                <ul>
                    <li>东部和南部：气候适宜，地形平坦，农业发达</li>
                    <li>中部和西部：气候干旱，地形复杂，自然条件差</li>
                </ul>
            </div>
        `
    },
    // 第七章：我们邻近的国家和地区（10个知识点）
    {
        title: "5. 日本的位置和范围",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>日本的位置</h4>
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
                <p><strong>多火山地震：</strong>位于亚欧板块和太平洋板块交界处</p>
            </div>
        `
    },
    {
        title: "6. 日本的经济",
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
        title: "7. 东南亚的位置",
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
                <p><strong>位置：</strong>位于马来半岛和苏门答腊岛之间</p>
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
        title: "8. 东南亚的气候与农业",
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
                    <li>粮食作物：水稻</li>
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
        title: "9. 印度的位置和地形",
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
            </div>
        `
    },
    {
        title: "10. 印度的气候与农业",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>气候特点</h4>
            <ul>
                <li><strong>类型：</strong>热带季风气候为主</li>
                <li><strong>旱季：</strong>10月-次年5月</li>
                <li><strong>雨季：</strong>6月-9月</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 水旱灾害</h4>
                <p><strong>原因：</strong>西南季风不稳定</p>
                <ul>
                    <li>西南季风来得早、退得晚，雨季长→洪涝</li>
                    <li>西南季风来得晚、退得早，雨季短→干旱</li>
                </ul>
                <h4>⭐ 农业</h4>
                <ul>
                    <li>主要粮食作物：水稻、小麦</li>
                    <li>主要经济作物：棉花、黄麻、茶叶</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>印度为什么水旱灾害频繁？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        原因：<br>
                        1. 西南季风不稳定<br>
                        2. 西南季风来得早、退得晚→洪涝<br>
                        3. 西南季风来得晚、退得早→干旱
                    </div>
                </div>
            </div>
        `
    },
    // 第八章：东半球其他国家和地区（5个知识点）
    {
        title: "11. 俄罗斯的位置和范围",
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
                <h4>⭐ 地形特征</h4>
                <ul>
                    <li>以叶尼塞河为界，西部平原，东部高原山地</li>
                    <li>东欧平原、西西伯利亚平原、中西伯利亚高原</li>
                </ul>
            </div>
        `
    },
    {
        title: "12. 俄罗斯的气候",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>气候特点</h4>
            <ul>
                <li><strong>类型：</strong>温带大陆性气候为主</li>
                <li><strong>特点：</strong>冬季长而寒冷，夏季短而温暖</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 气候寒冷的原因</h4>
                <ul>
                    <li>纬度高，太阳辐射弱</li>
                    <li>北临北冰洋，受寒冷气流影响</li>
                    <li>地形向北敞开，冷空气长驱直入</li>
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
        title: "13. 俄罗斯的资源与经济",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>自然资源</h4>
            <ul>
                <li><strong>森林资源：</strong>丰富的森林资源</li>
                <li><strong>水能资源：</strong>河流众多，水能丰富</li>
                <li><strong>矿产资源：</strong>石油、天然气、煤炭储量丰富</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 经济特点</h4>
                <ul>
                    <li>重工业发达，轻工业薄弱</li>
                    <li>工业分布靠近原料产地</li>
                </ul>
            </div>
        `
    },
    {
        title: "14. 中东的位置",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>中东的位置</h4>
            <ul>
                <li><strong>位置：</strong>联系亚、欧、非三大洲</li>
                <li><strong>重要性：</strong>东西方交通要道</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 苏伊士运河</h4>
                <p><strong>位置：</strong>位于埃及境内，连接地中海和红海</p>
                <p><strong>作用：</strong>沟通了大西洋和印度洋，大大缩短了航程</p>
            </div>
        `
    },
    {
        title: "15. 中东的石油",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>石油资源</h4>
            <ul>
                <li><strong>地位：</strong>世界上石油储量最大、生产和输出石油最多的地区</li>
                <li><strong>分布：</strong>波斯湾及其沿岸地区</li>
                <li><strong>输出：</strong>输往西欧、美国、日本等</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 石油外运航线</h4>
                <ul>
                    <li>航线A：波斯湾→霍尔木兹海峡→阿拉伯海→红海→苏伊士运河→地中海→大西洋→欧洲</li>
                    <li>航线B：波斯湾→霍尔木兹海峡→阿拉伯海→印度洋→好望角→大西洋→西欧、美国</li>
                    <li>航线C：波斯湾→霍尔木兹海峡→阿拉伯海→印度洋→马六甲海峡→太平洋→日本</li>
                </ul>
            </div>
        `
    },
    // 第九章：西半球的国家（5个知识点）
    {
        title: "16. 美国的位置和范围",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>美国的位置</h4>
            <ul>
                <li><strong>位置：</strong>北美洲南部</li>
                <li><strong>组成：</strong>本土48个州+阿拉斯加州+夏威夷州</li>
                <li><strong>首都：</strong>华盛顿</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 领土组成</h4>
                <ul>
                    <li>本土：位于北美洲南部</li>
                    <li>阿拉斯加州：位于北美洲西北部</li>
                    <li>夏威夷州：位于太平洋中</li>
                </ul>
            </div>
        `
    },
    {
        title: "17. 美国的经济",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>经济特点</h4>
            <ul>
                <li><strong>地位：</strong>世界上最发达的资本主义国家</li>
                <li><strong>特点：</strong>工农业发达，高新技术产业发达</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 农业</h4>
                <ul>
                    <li>特点：机械化、专业化</li>
                    <li>主要农业带：玉米带、小麦区、乳畜带等</li>
                </ul>
            </div>
        `
    },
    {
        title: "18. 巴西的位置和范围",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>巴西的位置</h4>
            <ul>
                <li><strong>位置：</strong>南美洲东部</li>
                <li><strong>面积：</strong>南美洲面积最大的国家</li>
                <li><strong>首都：</strong>巴西利亚</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 地形</h4>
                <ul>
                    <li>北部：亚马孙平原</li>
                    <li>南部：巴西高原</li>
                </ul>
            </div>
        `
    },
    {
        title: "19. 亚马孙热带雨林",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>热带雨林</h4>
            <ul>
                <li><strong>位置：</strong>亚马孙平原</li>
                <li><strong>地位：</strong>世界上最大的热带雨林</li>
                <li><strong>作用：</strong>"地球之肺"，调节全球气候</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 雨林的破坏与保护</h4>
                <ul>
                    <li>破坏原因：砍伐森林、开垦农田</li>
                    <li>后果：生物多样性减少、气候变暖</li>
                    <li>保护措施：可持续开发</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>亚马孙热带雨林为什么被称为"地球之肺"？<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        原因：<br>
                        1. 产生大量氧气<br>
                        2. 吸收二氧化碳<br>
                        3. 调节全球气候
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "20. 极地地区",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>北极地区</h4>
            <ul>
                <li><strong>范围：</strong>北极圈以北</li>
                <li><strong>特点：</strong>以海洋为主</li>
                <li><strong>代表动物：</strong>北极熊</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 南极地区</h4>
                <ul>
                    <li><strong>范围：</strong>南极大陆及其沿海岛屿</li>
                    <li><strong>特点：</strong>以陆地为主，冰雪高原</li>
                    <li><strong>代表动物：</strong>企鹅</li>
                    <li><strong>气候：</strong>酷寒、干燥、烈风</li>
                </ul>
            </div>
        `
    },
    // 补充知识点（21-50）
    {
        title: "21. 东南亚的地形",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>地形特征</h4>
            <ul>
                <li><strong>地形复杂：</strong>山河相间、纵列分布</li>
                <li><strong>主要平原：</strong>湄公河平原、湄南河平原</li>
                <li><strong>主要山脉：</strong>长山山脉、他念他翁山脉</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 河流对农业的影响</h4>
                <ul>
                    <li>河流下游形成冲积平原</li>
                    <li>土壤肥沃，适宜水稻种植</li>
                    <li>灌溉便利</li>
                </ul>
            </div>
        `
    },
    {
        title: "22. 东南亚的资源",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>物产分布</h4>
            <ul>
                <li><strong>橡胶：</strong>马来西亚世界最大</li>
                <li><strong>棕榈油：</strong>马来西亚、印尼</li>
                <li><strong>锡矿：</strong>马来西亚"锡王国"</li>
                <li><strong>石油：</strong>印尼、文莱</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>马来西亚主要出口什么？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">橡胶、棕榈油、锡矿</div>
            </div>
        `
    },
    {
        title: "23. 印度的气候",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>气候类型</h4>
            <ul>
                <li><strong>热带季风气候：</strong>为主</li>
                <li><strong>西南季风：</strong>雨季（6-9月）</li>
                <li><strong>东北季风：</strong>旱季（10-次年5月）</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 季风气候的影响</h4>
                <ul>
                    <li>雨季：降水丰沛，易发生洪涝</li>
                    <li>旱季：降水稀少，易发生干旱</li>
                </ul>
            </div>
        `
    },
    {
        title: "24. 印度的农业",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>农业分布</h4>
            <ul>
                <li><strong>水稻：</strong>东北部、半岛沿海</li>
                <li><strong>小麦：</strong>恒河平原</li>
                <li><strong>棉花：</strong>德干高原西部</li>
                <li><strong>黄麻：</strong>恒河三角洲</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>印度黄麻主要分布在哪个地区？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">恒河三角洲</div>
            </div>
        `
    },
    {
        title: "25. 印度的工业",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>工业部门</h4>
            <ul>
                <li><strong>信息技术：</strong>软件外包世界领先</li>
                <li><strong>纺织业：</strong>传统工业</li>
                <li><strong>钢铁工业：</strong>中部地区</li>
                <li><strong>核工业：</strong>航天技术先进</li>
            </ul>
        `
    },
    {
        title: "26. 俄罗斯的位置",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>地理位置</h4>
            <ul>
                <li><strong>纬度：</strong>跨北寒带、北温带</li>
                <li><strong>经度：</strong>跨东经、西经</li>
                <li><strong>海陆：</strong>濒临三大洋</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 疆域特征</h4>
                <ul>
                    <li>世界面积最大国家</li>
                    <li>跨欧洲和亚洲</li>
                    <li>跨11个时区</li>
                </ul>
            </div>
        `
    },
    {
        title: "27. 俄罗斯的地形",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>地形特征</h4>
            <ul>
                <li><strong>以平原为主：</strong>东欧平原、西西伯利亚平原</li>
                <li><strong>地势南高北低</li>
                <li><strong>主要山脉：</strong>乌拉尔山脉、大高加索山脉</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>俄罗斯地势有什么特点？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">以平原为主，地势南高北低</div>
            </div>
        `
    },
    {
        title: "28. 俄罗斯的气候",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>气候类型</h4>
            <ul>
                <li><strong>温带大陆性气候：</strong>为主</li>
                <li><strong>亚寒带针叶林气候：</strong>北部</li>
                <li><strong>苔原气候：</strong>北冰洋沿岸</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 气候特点</h4>
                <ul>
                    <li>冬季漫长而寒冷</li>
                    <li>夏季短而温暖</li>
                    <li>温差大</li>
                </ul>
            </div>
        `
    },
    {
        title: "29. 俄罗斯的河流",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>主要河流</h4>
            <ul>
                <li><strong>伏尔加河：</strong>欧洲最长河，注入里海</li>
                <li><strong>鄂毕河：</strong>注入北冰洋</li>
                <li><strong>叶尼塞河：</strong>注入北冰洋</li>
                <li><strong>勒拿河：</strong>注入北冰洋</li>
            </ul>
        `
    },
    {
        title: "30. 俄罗斯的资源",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>自然资源</h4>
            <ul>
                <li><strong>森林资源：</strong>世界最大亚寒带针叶林</li>
                <li><strong>矿产资源：</strong>石油、天然气、煤、铁</li>
                <li><strong>水资源：</strong>贝加尔湖（世界最深）</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>俄罗斯有什么自然资源优势？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">森林、矿产、水资源丰富</div>
            </div>
        `
    },
    {
        title: "31. 俄罗斯的工业",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>工业部门</h4>
            <ul>
                <li><strong>重工业：</strong>钢铁、机械、化学</li>
                <li><strong>航空航天：</strong>世界先进</li>
                <li><strong>核工业：</strong>技术领先</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 工业特点</h4>
                <ul>
                    <li>以重工业为主</li>
                    <li>轻工业发展相对滞后</li>
                    <li>工业布局靠近资源产地</li>
                </ul>
            </div>
        `
    },
    {
        title: "32. 俄罗斯的交通",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>交通特点</h4>
            <ul>
                <li><strong>铁路：</strong>以莫斯科为中心的放射状铁路</li>
                <li><strong>公路：</strong>公路网不发达</li>
                <li><strong>管道：</strong>运输石油、天然气</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>俄罗斯最重要的交通方式是什么？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">铁路运输</div>
            </div>
        `
    },
    {
        title: "33. 中东的位置",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>地理位置</h4>
            <ul>
                <li><strong>范围：</strong>西亚大部分地区</li>
                <li><strong>海陆位置：</strong>三洲五海之地</li>
                <li><strong>海峡：</strong>霍尔木兹海峡</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 三洲五海</h4>
                <ul>
                    <li>三洲：亚洲、欧洲、非洲</li>
                    <li>五海：地中海、黑海、里海、红海、阿拉伯海</li>
                </ul>
            </div>
        `
    },
    {
        title: "34. 中东的石油",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>石油分布</h4>
            <ul>
                <li><strong>主要产区：</strong>波斯湾沿岸</li>
                <li><strong>最大产油国：</strong>沙特阿拉伯</li>
                <li><strong>重要产油国：</strong>伊朗、伊拉克、科威特</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>中东石油主要分布在哪里？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">波斯湾沿岸</div>
            </div>
        `
    },
    {
        title: "35. 中东的水资源",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>水资源短缺</h4>
            <ul>
                <li><strong>原因：</strong>热带沙漠气候，降水少</li>
                <li><strong>河流：</strong>幼发拉底河、底格里斯河</li>
                <li><strong>湖泊：</strong>死海（世界最低点）</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 水资源争夺</h4>
                <ul>
                    <li>以色列与阿拉伯国家的水资源之争</li>
                    <li>约旦河流域的水资源分配</li>
                </ul>
            </div>
        `
    },
    {
        title: "36. 中东的文化",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>多元文化</h4>
            <ul>
                <li><strong>宗教：</strong>伊斯兰教、基督教、犹太教</li>
                <li><strong>圣城：</strong>耶路撒冷</li>
                <li><strong>语言：</strong>阿拉伯语为主</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>耶路撒冷是哪些宗教的圣城？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">伊斯兰教、基督教、犹太教</div>
            </div>
        `
    },
    {
        title: "37. 欧洲西部概述",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>位置与范围</h4>
            <ul>
                <li><strong>纬度：</strong>主要在北温带</li>
                <li><strong>海陆：</strong>西临大西洋，北临北冰洋</li>
                <li><strong>半岛：</strong>伊比利亚、亚平宁、巴尔干</li>
            </ul>
        `
    },
    {
        title: "38. 欧洲西部的地形",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>地形特征</h4>
            <ul>
                <li><strong>以平原为主：</strong>西欧平原、波德平原</li>
                <li><strong>山地：</strong>阿尔卑斯山脉</li>
                <li><strong>冰川地貌：</strong>挪威峡湾、瑞士湖泊</li>
            </ul>
        `
    },
    {
        title: "39. 欧洲西部的气候",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>气候类型</h4>
            <ul>
                <li><strong>温带海洋性气候：</strong>西部</li>
                <li><strong>温带大陆性气候：</strong>东部</li>
                <li><strong>地中海气候：</strong>南部</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 海洋性气候特点</h4>
                <ul>
                    <li>冬暖夏凉</li>
                    <li>全年湿润</li>
                    <li>降水均匀</li>
                </ul>
            </div>
        `
    },
    {
        title: "40. 欧洲西部的畜牧业",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>畜牧业发达</h4>
            <ul>
                <li><strong>原因：</strong>温带海洋性气候适合多汁牧草生长</li>
                <li><strong>特点：</strong>机械化程度高</li>
                <li><strong>产品：</strong>牛奶、奶酪、肉类</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>欧洲西部畜牧业发达的原因是什么？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">温带海洋性气候适合多汁牧草生长</div>
            </div>
        `
    },
    {
        title: "41. 欧洲西部的工业",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>工业特点</h4>
            <ul>
                <li><strong>历史悠久：</strong>工业革命发源地</li>
                <li><strong>部门齐全：</strong>机械、汽车、电子</li>
                <li><strong>技术先进：</strong>德国、法国、英国</li>
            </ul>
        `
    },
    {
        title: "42. 欧洲西部的旅游业",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>旅游资源</h4>
            <ul>
                <li><strong>自然风光：</strong>阿尔卑斯山、峡湾、阳光海岸</li>
                <li><strong>人文景观：</strong>古罗马斗兽场、埃菲尔铁塔</li>
                <li><strong>世界遗产：</strong>数量众多</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>欧洲西部为什么旅游业发达？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">自然风光优美、人文景观丰富、交通便利</div>
            </div>
        `
    },
    {
        title: "43. 撒哈拉以南的非洲",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>位置与范围</h4>
            <ul>
                <li><strong>位置：</strong>撒哈拉沙漠以南</li>
                <li><strong>纬度：</strong>主要在热带</li>
                <li><strong>临海：</strong>东临印度洋，西临大西洋</li>
            </ul>
        `
    },
    {
        title: "44. 非洲的地形",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>地形特征</h4>
            <ul>
                <li><strong>高原大陆：</strong>平均海拔最高</li>
                <li><strong>东部大裂谷：</strong>世界最大裂谷带</li>
                <li><strong>最高峰：</strong>乞力马扎罗山</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 东非大裂谷</h4>
                <ul>
                    <li>长度：6400公里</li>
                    <li>宽度：几十至几百公里</li>
                    <li>特点：火山、地震频繁</li>
                </ul>
            </div>
        `
    },
    {
        title: "45. 非洲的气候",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>气候分布</h4>
            <ul>
                <li><strong>热带气候为主：</strong>热带雨林、热带草原、热带沙漠</li>
                <li><strong>气候对称：</strong>南北对称分布</li>
                <li><strong>特征：</strong>高温多雨</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>非洲气候分布有什么特点？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">以热带气候为主，南北对称分布</div>
            </div>
        `
    },
    {
        title: "46. 非洲的河流和湖泊",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>主要河流</h4>
            <ul>
                <li><strong>尼罗河：</strong>世界最长河（6671km）</li>
                <li><strong>刚果河：</strong>世界第二大热带雨林河</li>
                <li><strong>尼日尔河：</strong>西非最大河</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 主要湖泊</h4>
                <ul>
                    <li>维多利亚湖：非洲最大湖</li>
                    <li>坦噶尼喀湖：世界第二深湖</li>
                </ul>
            </div>
        `
    },
    {
        title: "47. 非洲的资源",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>自然资源</h4>
            <ul>
                <li><strong>矿产：</strong>黄金、金刚石、石油、铜</li>
                <li><strong>动植物：</strong>大象、斑马、长颈鹿</li>
                <li><strong>森林：</strong>热带雨林、红树林</li>
            </ul>
        `
    },
    {
        title: "48. 非洲的人口和经济",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>人口特点</h4>
            <ul>
                <li><strong>增长快：</strong>人口自然增长率最高</li>
                <li><strong>平均寿命：</strong>较低</li>
                <li><strong>问题：</strong>粮食不足、教育落后</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 经济发展</h4>
                <ul>
                    <li>出口初级产品</li>
                    <li>进口工业制成品</li>
                    <li>经济发展水平较低</li>
                </ul>
            </div>
        `
    },
    {
        title: "49. 极地地区概述",
        tag: "基础",
        tagClass: "basic",
        content: `
            <h4>极地范围</h4>
            <ul>
                <li><strong>北极地区：</strong>北极圈以北</li>
                <li><strong>南极地区：</strong>南极圈以南</li>
            </ul>
            <div class="example">
                <strong>例题：</strong>北极地区包括哪些范围？<br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">北极圈以北的地区</div>
            </div>
        `
    },
    {
        title: "50. 极地地区的环境",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>环境特征</h4>
            <ul>
                <li><strong>严寒：</strong>世界最冷地区</li>
                <li><strong>冰雪覆盖：</strong>冰原、冰川</li>
                <li><strong>极昼极夜：</strong>特殊天文现象</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 环境保护</h4>
                <ul>
                    <li>《南极条约》</li>
                    <li>禁止开发矿产资源</li>
                    <li>保护极地生态环境</li>
                </ul>
            </div>
        `
    }
];
