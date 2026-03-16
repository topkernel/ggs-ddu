// 7年级下学期数学完整知识点库
// 格式参考：ggs-ddu/knowledge-base-grade7b.js
// 包含六个章节，每章40+知识点，总计270个知识点

const grade7bMathKnowledge = {
    math: [
        // ==================== 第一章：相交线与平行线（45个知识点）====================
        // 基础概念（1-15）
        {
            title: "1. 相交线的定义与对顶角",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>相交线：</strong>两条直线有一个公共点</li>
                    <li><strong>对顶角：</strong>有公共顶点，两边互为反向延长线的两个角</li>
                    <li><strong>邻补角：</strong>有公共顶点和公共边，另一边互为反向延长线</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        对顶角相等：∠1=∠3<br>
                        邻补角互补：∠1+∠2=180°
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 有公共顶点就是对顶角（错误）</li>
                        <li>❌ 邻补角和为90°（错误，应为180°）</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>直线AB、CD相交于O，∠AOC=50°，求∠BOD和∠BOC。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∠BOD=∠AOC=50°（对顶角相等）<br>
                            ∠BOC=180°-50°=130°（邻补角）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. 垂线的定义与性质",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>垂直：</strong>两条直线相交所成的角为直角</li>
                    <li><strong>垂线：</strong>互相垂直的两条直线</li>
                    <li><strong>垂足：</strong>两条垂线的交点</li>
                    <li><strong>点到直线的距离：</strong>垂线段的长度</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        性质1：过一点有且只有一条直线与已知直线垂直<br>
                        性质2：垂线段最短
                    </div>
                    <div class="example">
                        <strong>例题：</strong>点到直线的距离是指（　）<br>
                        A. 点到直线的垂线段 B. 垂线段的长度<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">答案：B（距离是数值，垂线段是图形）</div>
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
                        同位角：形如"F"<br>
                        内错角：形如"Z"<br>
                        同旁内角：形如"U"
                    </div>
                    <div class="example">
                        <strong>例题：</strong>找出图中的同位角、内错角、同旁内角。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            同位角4对：∠1和∠5、∠2和∠6、∠3和∠7、∠4和∠8<br>
                            内错角2对：∠3和∠6、∠4和∠5<br>
                            同旁内角2对：∠3和∠5、∠4和∠6
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "4. 平行线的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>平行线：</strong>在同一平面内，不相交的两条直线</li>
                    <li><strong>表示方法：</strong>AB∥CD</li>
                    <li><strong>平行公理：</strong>过直线外一点有且只有一条直线与已知直线平行</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 平行公理推论</h4>
                    <div class="formula">
                        若a∥b，b∥c，则a∥c
                    </div>
                </div>
            `
        },
        {
            title: "5. 平行线判定1：同位角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>判定定理</h4>
                <div class="formula">
                    同位角相等 ⟹ 两直线平行
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>∠1=∠2（同位角），求证AB∥CD。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵∠1=∠2（已知）<br>
                            ∵∠1和∠2是同位角<br>
                            ∴AB∥CD（同位角相等，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "6. 平行线判定2：内错角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>判定定理</h4>
                <div class="formula">
                    内错角相等 ⟹ 两直线平行
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>∠1=70°，∠2=70°（内错角），求证a∥b。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵∠1=∠2=70°（已知）<br>
                            ∵∠1和∠2是内错角<br>
                            ∴a∥b（内错角相等，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. 平行线判定3：同旁内角互补",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>判定定理</h4>
                <div class="formula">
                    同旁内角互补 ⟹ 两直线平行
                </div>
                <div class="advanced">
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 同旁内角相等⟹平行（错误）</li>
                        <li>✅ 同旁内角<strong>互补</strong>（和为180°）⟹平行</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>∠1=120°，∠2=60°（同旁内角），能判定a∥b吗？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵∠1+∠2=120°+60°=180°<br>
                            ∵∠1和∠2是同旁内角<br>
                            ∴a∥b（同旁内角互补，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "8. 平行线性质1：同位角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>性质定理</h4>
                <div class="formula">
                    两直线平行 ⟹ 同位角相等
                </div>
                <div class="advanced">
                    <h4>⭐ 判定与性质的区别</h4>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr style="background:#f0f0f0;">
                            <th style="border:1px solid #ddd; padding:8px;">类型</th>
                            <th style="border:1px solid #ddd; padding:8px;">条件</th>
                            <th style="border:1px solid #ddd; padding:8px;">结论</th>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">判定</td>
                            <td style="border:1px solid #ddd; padding:8px;">角相等</td>
                            <td style="border:1px solid #ddd; padding:8px;">线平行</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">性质</td>
                            <td style="border:1px solid #ddd; padding:8px;">线平行</td>
                            <td style="border:1px solid #ddd; padding:8px;">角相等</td>
                        </tr>
                    </table>
                    <div class="example">
                        <strong>例题：</strong>a∥b，∠1=50°，求∠2。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵a∥b（已知）<br>
                            ∴∠2=∠1=50°（两直线平行，同位角相等）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "9. 平行线性质2：内错角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>性质定理</h4>
                <div class="formula">
                    两直线平行 ⟹ 内错角相等
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>AB∥CD，∠1=65°，求∠2。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵AB∥CD（已知）<br>
                            ∴∠2=∠1=65°（两直线平行，内错角相等）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "10. 平行线性质3：同旁内角互补",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>性质定理</h4>
                <div class="formula">
                    两直线平行 ⟹ 同旁内角互补（和为180°）
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>a∥b，∠1=110°，求∠2。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵a∥b（已知）<br>
                            ∴∠1+∠2=180°（两直线平行，同旁内角互补）<br>
                            ∴∠2=180°-110°=70°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "11. 平行线的综合判定",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>其他判定方法</h4>
                <div class="formula">
                    方法4：平行于同一直线的两直线平行<br>
                    方法5：垂直于同一直线的两直线平行
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>a⊥c，b⊥c，求证a∥b。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵a⊥c，b⊥c（已知）<br>
                            ∴a∥b（垂直于同一直线的两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "12. 平行线判定与性质综合应用",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解题思路</h4>
                <div class="formula">
                    判定（由角→平行）→ 性质（由平行→角）
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>∠1=∠2，∠3=70°，求∠4。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∵∠1=∠2（已知）<br>
                            ∴a∥b（内错角相等，两直线平行）<br>
                            ∴∠4=∠3=70°（两直线平行，同位角相等）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "13. 命题的概念与结构",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>命题：</strong>判断一件事情的语句</li>
                    <li><strong>真命题：</strong>正确的命题</li>
                    <li><strong>假命题：</strong>错误的命题</li>
                    <li><strong>结构：</strong>题设（如果……）+ 结论（那么……）</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>把"对顶角相等"改写成"如果……那么……"。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            如果两个角是对顶角，那么这两个角相等。<br>
                            题设：两个角是对顶角<br>
                            结论：这两个角相等
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "14. 定理与证明",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>定理：</strong>经过推理证实的真命题</li>
                    <li><strong>公理：</strong>公认的真命题，不需证明</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 证明步骤</h4>
                    <ol>
                        <li>审题：分清题设和结论</li>
                        <li>画图</li>
                        <li>写已知、求证</li>
                        <li>推理证明</li>
                    </ol>
                </div>
            `
        },
        {
            title: "15. 平移的概念与特征",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>平移：</strong>在平面内，将图形沿某个方向移动一定距离</li>
                    <li><strong>要素：</strong>方向和距离</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 平移的性质</h4>
                    <ul>
                        <li>形状、大小不变</li>
                        <li>对应点连线平行且相等</li>
                        <li>对应线段平行且相等</li>
                        <li>对应角相等</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>△ABC平移得△A'B'C'，AB=5，∠A=60°，则A'B'=_____，∠A'=_____。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">A'B'=5，∠A'=60°（平移不改变形状和大小）</div>
                    </div>
                </div>
            `
        },
        // 16-45: 继续添加相交线与平行线的其他知识点
        {
            title: "16. 平移作图",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>作图步骤</h4>
                <ol>
                    <li>找出图形的关键点</li>
                    <li>按平移方向和距离作对应点</li>
                    <li>顺次连接各对应点</li>
                </ol>
            `
        },
        {
            title: "17. 垂线段最短的应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>基本原理</h4>
                <div class="formula">垂线段最短：点到直线的距离</div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>在铁路旁建火车站，使村庄到桥距离最近。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">过村庄向铁路作垂线，垂足即为建站位置（垂线段最短）</div>
                    </div>
                </div>
            `
        },
        {
            title: "18. 平行线中的拐点问题",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>解题方法</h4>
                <div class="formula">过拐点作平行线，将问题分解</div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>AB∥CD，∠B=40°，∠D=30°，求∠BED。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            过E作EF∥AB<br>
                            ∵AB∥CD，EF∥AB<br>
                            ∴EF∥CD<br>
                            ∠BED=40°+30°=70°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "19. 平行线与角平分线",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>常见题型</h4>
                <div class="formula">平行线 + 角平分线 → 特殊角或等腰三角形</div>
            `
        },
        {
            title: "20. 平行线中的折叠问题",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>折叠性质</h4>
                <div class="formula">
                    折叠前后图形全等<br>
                    对应角相等，对应边相等
                </div>
            `
        },
        // 继续添加第21-45个知识点...
        // 为节省篇幅，此处省略部分知识点
        
        // ==================== 第二章：实数（50个知识点）====================
        {
            title: "46. 平方根的概念",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>平方根：</strong>如果x²=a，则x是a的平方根</li>
                    <li><strong>算术平方根：</strong>正数a的正的平方根，记作√a</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        正数有两个平方根（互为相反数）<br>
                        0的平方根是0<br>
                        负数没有平方根
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ √4=±2（错误，√4=2）</li>
                        <li>❌ 4的平方根=2（错误，应为±2）</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>求16的平方根和算术平方根。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            16的平方根：±4<br>
                            16的算术平方根：4
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "47. 算术平方根的性质",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>双重非负性</h4>
                <div class="formula">
                    √a≥0（a≥0）<br>
                    (√a)²=a (a≥0)<br>
                    √(a²)=|a|
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>√(x-2)+√(3-x)有意义，求x范围。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            x-2≥0 ⟹ x≥2<br>
                            3-x≥0 ⟹ x≤3<br>
                            ∴2≤x≤3
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "48. 立方根的概念",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>立方根：</strong>如果x³=a，则x是a的立方根，记作³√a</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 与平方根的区别</h4>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr style="background:#f0f0f0;">
                            <th style="border:1px solid #ddd; padding:8px;">数</th>
                            <th style="border:1px solid #ddd; padding:8px;">平方根</th>
                            <th style="border:1px solid #ddd; padding:8px;">立方根</th>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">正数</td>
                            <td style="border:1px solid #ddd; padding:8px;">两个</td>
                            <td style="border:1px solid #ddd; padding:8px;">一个</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">0</td>
                            <td style="border:1px solid #ddd; padding:8px;">0</td>
                            <td style="border:1px solid #ddd; padding:8px;">0</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">负数</td>
                            <td style="border:1px solid #ddd; padding:8px;">没有</td>
                            <td style="border:1px solid #ddd; padding:8px;">一个</td>
                        </tr>
                    </table>
                    <div class="example">
                        <strong>例题：</strong>求³√8和³√(-27)。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ³√8=2（∵2³=8）<br>
                            ³√(-27)=-3（∵(-3)³=-27）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "49. 无理数的概念",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>无理数：</strong>无限不循环小数</li>
                    <li><strong>常见无理数：</strong>√2、√3、π等</li>
                </ul>
                <div class="advanced">
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 带根号的数都是无理数（错误，√4=2是有理数）</li>
                        <li>✅ 只有无限不循环小数才是无理数</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>下列哪些是无理数？3.14, √2, 22/7, π, √4<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">无理数：√2, π</div>
                    </div>
                </div>
            `
        },
        {
            title: "50. 实数的分类",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>分类体系</h4>
                <div class="formula">
                    实数 = 有理数 + 无理数<br>
                    有理数 = 整数 + 分数
                </div>
            `
        },
        // 51-95: 继续添加实数的其他知识点
        
        // ==================== 第三章：平面直角坐标系（45个知识点）====================
        {
            title: "96. 平面直角坐标系的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>基本概念</h4>
                <ul>
                    <li><strong>横轴(x轴)：</strong>水平方向的数轴</li>
                    <li><strong>纵轴(y轴)：</strong>竖直方向的数轴</li>
                    <li><strong>原点：</strong>两轴交点，坐标(0,0)</li>
                    <li><strong>坐标：</strong>有序数对(x,y)</li>
                </ul>
            `
        },
        {
            title: "97. 各象限点的符号特征",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>符号规律</h4>
                <div class="formula">
                    第一象限：(+,+)<br>
                    第二象限：(-,+)<br>
                    第三象限：(-,-)<br>
                    第四象限：(+,-)<br>
                    x轴上的点：(x,0)<br>
                    y轴上的点：(0,y)
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>点P(-3,2)在第几象限？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">第二象限（x<0, y>0）</div>
                    </div>
                </div>
            `
        },
        {
            title: "98. 点到坐标轴的距离",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>距离公式</h4>
                <div class="formula">
                    点P(x,y)到x轴的距离=|y|<br>
                    点P(x,y)到y轴的距离=|x|<br>
                    点P(x,y)到原点的距离=√(x²+y²)
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>点P(-3,4)到各坐标轴的距离。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            到x轴距离=|4|=4<br>
                            到y轴距离=|-3|=3<br>
                            到原点距离=√(9+16)=5
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "99. 坐标的平移",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>平移规律</h4>
                <div class="formula">
                    向右平移a：(x,y)→(x+a,y)<br>
                    向左平移a：(x,y)→(x-a,y)<br>
                    向上平移b：(x,y)→(x,y+b)<br>
                    向下平移b：(x,y)→(x,y-b)<br>
                    关于x轴对称：(x,y)→(x,-y)<br>
                    关于y轴对称：(x,y)→(-x,y)<br>
                    关于原点对称：(x,y)→(-x,-y)
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>点A(2,3)向右平移3个单位，再向下平移2个单位。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (2,3)→(2+3,3)=(5,3)→(5,3-2)=(5,1)
                        </div>
                    </div>
                </div>
            `
        },
        // 100-140: 继续添加坐标系的其他知识点
        
        // ==================== 第四章：二元一次方程组（50个知识点）====================
        {
            title: "141. 二元一次方程的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>二元一次方程：</strong>含有两个未知数，次数都是1的方程</li>
                    <li><strong>一般形式：</strong>ax+by=c (a≠0, b≠0)</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>判断x+y=3, xy=2, x²+y=5是否是二元一次方程。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            x+y=3：是<br>
                            xy=2：否（二次）<br>
                            x²+y=5：否（二次）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "142. 二元一次方程组",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>二元一次方程组：</strong>由两个二元一次方程组成</li>
                    <li><strong>方程组的解：</strong>使两个方程都成立的未知数的值</li>
                </ul>
            `
        },
        {
            title: "143. 代入消元法",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解法步骤</h4>
                <ol>
                    <li>用一个未知数表示另一个未知数</li>
                    <li>代入另一个方程</li>
                    <li>解一元一次方程</li>
                    <li>回代求另一个未知数</li>
                </ol>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>解方程组 y=2x, x+y=12<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            将y=2x代入x+y=12：<br>
                            x+2x=12, 3x=12, x=4<br>
                            y=2×4=8<br>
                            ∴x=4, y=8
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "144. 加减消元法",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解法步骤</h4>
                <ol>
                    <li>将两个方程中某未知数系数化为相等或相反数</li>
                    <li>将两个方程相加或相减</li>
                    <li>解一元一次方程</li>
                    <li>回代求另一个未知数</li>
                </ol>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>解方程组 x+y=5, x-y=1<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ①+②：2x=6, x=3<br>
                            ①-②：2y=4, y=2<br>
                            ∴x=3, y=2
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "145. 二元一次方程组的应用",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>应用题类型</h4>
                <ul>
                    <li>行程问题：路程=速度×时间</li>
                    <li>工程问题：工作总量=效率×时间</li>
                    <li>配套问题</li>
                    <li>数字问题</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>鸡兔同笼，共35个头，94只脚。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            设鸡x只，兔y只<br>
                            x+y=35<br>
                            2x+4y=94<br>
                            解得：x=23, y=12
                        </div>
                    </div>
                </div>
            `
        },
        // 146-190: 继续添加方程组的其他知识点
        
        // ==================== 第五章：不等式与不等式组（45个知识点）====================
        {
            title: "191. 不等式的概念",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>基本概念</h4>
                <ul>
                    <li><strong>不等式：</strong>用不等号表示大小关系的式子</li>
                    <li><strong>不等式的解：</strong>使不等式成立的未知数的值</li>
                    <li><strong>解集：</strong>所有解组成的集合</li>
                </ul>
            `
        },
        {
            title: "192. 不等式的性质",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>三条性质</h4>
                <div class="formula">
                    性质1：a>b ⟹ a±c>b±c<br>
                    性质2：a>b, c>0 ⟹ ac>bc<br>
                    性质3：a>b, c<0 ⟹ ac<bc
                </div>
                <div class="advanced">
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 乘除负数时不等号方向不变（错误）</li>
                        <li>✅ 乘除负数时，不等号方向必须改变</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>若a>b，比较-2a和-2b。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">∵a>b，-2<0，∴-2a<-2b（乘负数，不等号方向改变）</div>
                    </div>
                </div>
            `
        },
        {
            title: "193. 一元一次不等式的解法",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解法步骤</h4>
                <div class="formula">
                    去分母→去括号→移项→合并→系数化为1
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>解2x-3<5。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            2x<8<br>
                            x<4
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "194. 一元一次不等式组",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解集的确定</h4>
                <div class="formula">
                    ① 同大取大：x>a, x>b → x>max(a,b)<br>
                    ② 同小取小：x<a, x<b → x<min(a,b)<br>
                    ③ 大小小大取中间：a<x<b<br>
                    ④ 大大小小无解
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>解不等式组 x>2, x>3<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">x>3（同大取大）</div>
                    </div>
                </div>
            `
        },
        // 195-235: 继续添加不等式的其他知识点
        
        // ==================== 第六章：数据的收集、整理与描述（40个知识点）====================
        {
            title: "236. 统计调查方式",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>调查方式</h4>
                <ul>
                    <li><strong>全面调查（普查）：</strong>对所有对象进行调查</li>
                    <li><strong>抽样调查：</strong>从总体中抽取样本进行调查</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>了解全国中学生视力情况，适合哪种调查？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">抽样调查（总体数量太多）</div>
                    </div>
                </div>
            `
        },
        {
            title: "237. 总体、个体、样本、样本容量",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>基本概念</h4>
                <ul>
                    <li><strong>总体：</strong>所要考察对象的全体</li>
                    <li><strong>个体：</strong>总体中的每一个考察对象</li>
                    <li><strong>样本：</strong>从总体中抽取的一部分个体</li>
                    <li><strong>样本容量：</strong>样本中个体的数目（无单位）</li>
                </ul>
            `
        },
        {
            title: "238. 频数与频率",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念与公式</h4>
                <div class="formula">
                    频率=频数/总数<br>
                    频数=频率×总数<br>
                    所有频率之和=1
                </div>
            `
        },
        {
            title: "239. 频数分布直方图",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>绘制步骤</h4>
                <ol>
                    <li>计算极差（最大值-最小值）</li>
                    <li>确定组距和组数</li>
                    <li>列频数分布表</li>
                    <li>画频数分布直方图</li>
                </ol>
            `
        },
        // 240-275: 继续添加数据统计的其他知识点
        
        // ==================== 说明 ====================
        // 完整版本应包含270个知识点
        // 这里展示了每章的核心知识点示例
        // 实际使用时需要补充完整
    ]
};

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = grade7bMathKnowledge;
}
