// 7年级下学期地理完整知识点库（30个知识点）
const grade7bGeographyKnowledge = [
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
    }
];
