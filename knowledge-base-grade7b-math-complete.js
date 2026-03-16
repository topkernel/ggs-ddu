// 7年级下学期数学完整知识点库（每章40+知识点）
const grade7bMathKnowledge = {
    math: [
        // ==================== 第一章：相交线与平行线（45个知识点）====================
        
        // 基础概念（1-10）
        {
            title: "1. 相交线的定义与性质",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>相交线：</strong>两条直线有一个公共点，这两条直线叫做相交线</li>
                    <li><strong>交点：</strong>两条相交直线的公共点</li>
                    <li><strong>邻补角：</strong>有公共顶点和公共边，另一边互为反向延长线的两个角</li>
                    <li><strong>对顶角：</strong>有公共顶点，且一个角的两边分别是另一个角两边的反向延长线</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要定理</h4>
                    <div class="formula">
                        对顶角相等：∠1=∠3, ∠2=∠4<br>
                        邻补角互补：∠1+∠2=180°
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 误认为有公共顶点的角就是对顶角</li>
                        <li>❌ 忘记邻补角和为180°而非90°</li>
                        <li>✅ 对顶角必须满足两边互为反向延长线</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，直线AB、CD相交于点O，∠AOC=50°，求∠BOD和∠BOC的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵∠AOC和∠BOD是对顶角<br>
                            ∴∠BOD=∠AOC=50°<br>
                            ∵∠AOC和∠BOC是邻补角<br>
                            ∴∠BOC=180°-∠AOC=180°-50°=130°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "2. 垂线的定义与表示",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>垂直：</strong>两条直线相交所成的四个角中，有一个角是直角</li>
                    <li><strong>垂线：</strong>互相垂直的两条直线，其中一条是另一条的垂线</li>
                    <li><strong>垂足：</strong>两条垂线的交点</li>
                    <li><strong>表示方法：</strong>AB⊥CD，读作"AB垂直于CD"</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        垂线性质1：过一点有且只有一条直线与已知直线垂直<br>
                        垂线性质2：垂线段最短<br>
                        点到直线的距离：直线外一点到这条直线的垂线段的长度
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 误认为垂线段就是距离（距离是数值）</li>
                        <li>❌ 忘记垂直有且只有一条</li>
                        <li>✅ 距离是长度，有单位；垂线段是图形</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>下列说法正确的是（　）<br>
                        A. 过一点有无数条直线与已知直线垂直<br>
                        B. 垂线段就是点到直线的距离<br>
                        C. 直线外一点到直线的距离是这点到直线的垂线段的长度<br>
                        D. 从直线外一点到直线的垂线段叫做这点到直线的距离<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            答案：C<br>
                            解析：<br>
                            A错误：过一点只有一条直线与已知直线垂直<br>
                            B错误：垂线段是图形，距离是数值<br>
                            C正确：符合定义<br>
                            D错误：距离是长度，不是垂线段本身
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "3. 垂线的画法与性质应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>画法步骤</h4>
                <ol>
                    <li>把三角尺的一条直角边靠在已知直线上</li>
                    <li>沿直线移动三角尺，使另一条直角边经过已知点</li>
                    <li>沿另一条直角边画直线</li>
                    <li>标出直角符号和垂足</li>
                </ol>
                <div class="advanced">
                    <h4>⭐ 性质应用</h4>
                    <ul>
                        <li><strong>最短路径问题：</strong>垂线段最短</li>
                        <li><strong>点到直线距离：</strong>实际应用</li>
                        <li><strong>垂直判定：</strong>∠=90°或符号⊥</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，在铁路旁有一村庄，现要建一个火车站，为使该村村民乘车最方便，请你在铁路上选一点来建火车站，说明理由。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：过村庄作铁路的垂线，垂足即为火车站位置。<br>
                            理由：垂线段最短，这样村民到火车站的距离最近。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "4. 同位角的概念与识别",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>截线：</strong>与两条直线都相交的第三条直线</li>
                    <li><strong>被截线：</strong>被截线所截的两条直线</li>
                    <li><strong>同位角：</strong>两个角都在两条被截线的同一侧，并且在截线的同一旁</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 识别方法</h4>
                    <div class="formula">
                        位置特征："同侧同旁"<br>
                        形状特征：形如"F"或反"F"、"L"<br>
                        记忆口诀：同位角，站两旁，形如F要看详
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 只看形状不看位置关系</li>
                        <li>❌ 误认为同位角一定相等</li>
                        <li>✅ 必须先确定截线和被截线</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，直线a、b被直线c所截，找出所有的同位角。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            同位角有4对：<br>
                            ∠1和∠5（左上）<br>
                            ∠2和∠6（右上）<br>
                            ∠3和∠7（左下）<br>
                            ∠4和∠8（右下）<br>
                            它们都符合"同侧同旁"的位置特征。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "5. 内错角的概念与识别",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>内错角：</strong>两个角都在两条被截线之间，并且在截线的两旁</li>
                    <li><strong>位置特征：</strong>"内部交错"</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 识别方法</h4>
                    <div class="formula">
                        位置特征：在被截线之间，在截线两旁<br>
                        形状特征：形如"Z"或反"Z"<br>
                        记忆口诀：内错角，在两旁，形如Z字要记牢
                    </div>
                    <div class="example">
                        <strong>例题：</strong>找出图中所有的内错角。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            内错角有2对：<br>
                            ∠3和∠6（左下和右上）<br>
                            ∠4和∠5（右下和左上）<br>
                            它们都在被截线之间，在截线两旁。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "6. 同旁内角的概念与识别",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>同旁内角：</strong>两个角都在两条被截线之间，并且在截线的同一旁</li>
                    <li><strong>位置特征：</strong>"内部同旁"</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 识别方法</h4>
                    <div class="formula">
                        位置特征：在被截线之间，在截线同旁<br>
                        形状特征：形如"U"或"C"<br>
                        记忆口诀：同旁内角，在一边，形如U字记心间
                    </div>
                    <div class="example">
                        <strong>例题：</strong>找出图中所有的同旁内角。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            同旁内角有2对：<br>
                            ∠3和∠5（都在左侧）<br>
                            ∠4和∠6（都在右侧）<br>
                            它们都在被截线之间，在截线同旁。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "7. 三线八角的综合识别",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>识别步骤</h4>
                <ol>
                    <li>找出截线（同时与两条直线相交的线）</li>
                    <li>确定被截线</li>
                    <li>根据角的位置关系判断类型</li>
                </ol>
                <div class="advanced">
                    <h4>⭐ 总结对比</h4>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr style="background:#f0f0f0;">
                            <th style="border:1px solid #ddd; padding:8px;">角类型</th>
                            <th style="border:1px solid #ddd; padding:8px;">位置特征</th>
                            <th style="border:1px solid #ddd; padding:8px;">形状</th>
                            <th style="border:1px solid #ddd; padding:8px;">数量</th>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">同位角</td>
                            <td style="border:1px solid #ddd; padding:8px;">同侧同旁</td>
                            <td style="border:1px solid #ddd; padding:8px;">F型</td>
                            <td style="border:1px solid #ddd; padding:8px;">4对</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">内错角</td>
                            <td style="border:1px solid #ddd; padding:8px;">内部两旁</td>
                            <td style="border:1px solid #ddd; padding:8px;">Z型</td>
                            <td style="border:1px solid #ddd; padding:8px;">2对</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">同旁内角</td>
                            <td style="border:1px solid #ddd; padding:8px;">内部同旁</td>
                            <td style="border:1px solid #ddd; padding:8px;">U型</td>
                            <td style="border:1px solid #ddd; padding:8px;">2对</td>
                        </tr>
                    </table>
                    <div class="example">
                        <strong>例题：</strong>如图，直线DE、BC被直线AB所截，∠1和∠2是什么角？∠1和∠3是什么角？∠2和∠3是什么角？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            分析：<br>
                            截线是AB，被截线是DE、BC<br>
                            ∠1和∠2：同位角（都在AB的右侧，在DE、BC的同侧）<br>
                            ∠1和∠3：内错角（都在DE、BC之间，在AB的两旁）<br>
                            ∠2和∠3：同旁内角（都在DE、BC之间，在AB的同旁）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "8. 平行线的概念与表示",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>平行线：</strong>在同一平面内，不相交的两条直线</li>
                    <li><strong>表示方法：</strong>AB∥CD，读作"AB平行于CD"</li>
                    <li><strong>平行公理：</strong>经过直线外一点，有且只有一条直线与这条直线平行</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 平行公理的推论</h4>
                    <div class="formula">
                        如果两条直线都与第三条直线平行，那么这两条直线也互相平行<br>
                        即：若a∥b，b∥c，则a∥c
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 忘记"在同一平面内"这个前提</li>
                        <li>❌ 混淆平行公理和垂线性质</li>
                        <li>✅ 平行是相互的，a∥b则b∥a</li>
                    </ul>
                </div>
            `
        },
        {
            title: "9. 平行线的判定方法1：同位角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>判定定理</h4>
                <div class="formula">
                    <strong>判定方法1：</strong>同位角相等，两直线平行<br>
                    即：若∠1=∠2（同位角），则a∥b
                </div>
                <div class="advanced">
                    <h4>⭐ 应用步骤</h4>
                    <ol>
                        <li>找出两个角</li>
                        <li>确定它们是同位角关系</li>
                        <li>证明这两个角相等</li>
                        <li>得出两直线平行的结论</li>
                    </ol>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 没有确认是同位角就直接使用</li>
                        <li>❌ 混淆判定和性质</li>
                        <li>✅ 判定：由角→线平行</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，∠1=∠2，求证：AB∥CD。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            证明：<br>
                            ∵∠1=∠2（已知）<br>
                            又∵∠1和∠2是同位角<br>
                            ∴AB∥CD（同位角相等，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "10. 平行线的判定方法2：内错角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>判定定理</h4>
                <div class="formula">
                    <strong>判定方法2：</strong>内错角相等，两直线平行<br>
                    即：若∠1=∠2（内错角），则a∥b
                </div>
                <div class="advanced">
                    <h4>⭐ 证明格式</h4>
                    <div class="formula">
                        ∵∠___=∠___（已知）<br>
                        又∵∠___和∠___是内错角<br>
                        ∴___∥___（内错角相等，两直线平行）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，∠1=70°，∠2=70°，求证：a∥b。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            证明：<br>
                            ∵∠1=70°，∠2=70°（已知）<br>
                            ∴∠1=∠2（等量代换）<br>
                            又∵∠1和∠2是内错角<br>
                            ∴a∥b（内错角相等，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },

        // 平行线判定与性质（11-20）
        {
            title: "11. 平行线的判定方法3：同旁内角互补",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>判定定理</h4>
                <div class="formula">
                    <strong>判定方法3：</strong>同旁内角互补，两直线平行<br>
                    即：若∠1+∠2=180°（同旁内角），则a∥b
                </div>
                <div class="advanced">
                    <h4>⭐ 关键点</h4>
                    <ul>
                        <li>同旁内角<strong>互补</strong>，不是相等</li>
                        <li>互补意味着和为180°</li>
                        <li>这是唯一一个用"和"来判定的方法</li>
                    </ul>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 误认为同旁内角相等就能判定平行</li>
                        <li>❌ 计算错误导致和不为180°</li>
                        <li>✅ 必须验证∠1+∠2=180°</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，∠1=120°，∠2=60°，能判定a∥b吗？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵∠1=120°，∠2=60°（已知）<br>
                            ∴∠1+∠2=120°+60°=180°<br>
                            又∵∠1和∠2是同旁内角<br>
                            ∴a∥b（同旁内角互补，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "12. 平行线的其他判定方法",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>其他判定方法</h4>
                <div class="formula">
                    <strong>方法4：</strong>平行于同一条直线的两条直线平行<br>
                    若a∥c，b∥c，则a∥b<br><br>
                    <strong>方法5：</strong>在同一平面内，垂直于同一条直线的两条直线平行<br>
                    若a⊥c，b⊥c，则a∥b
                </div>
                <div class="advanced">
                    <h4>⭐ 应用场景</h4>
                    <ul>
                        <li>方法4：用于间接证明平行</li>
                        <li>方法5：结合垂直条件使用</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，a⊥c，b⊥c，求证：a∥b。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            证明：<br>
                            ∵a⊥c，b⊥c（已知）<br>
                            ∴a∥b（在同一平面内，垂直于同一条直线的两条直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "13. 平行线的性质1：两直线平行，同位角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>性质定理</h4>
                <div class="formula">
                    <strong>性质1：</strong>两直线平行，同位角相等<br>
                    即：若a∥b，则∠1=∠2（同位角）
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
                        <strong>例题：</strong>如图，a∥b，∠1=50°，求∠2。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵a∥b（已知）<br>
                            ∴∠2=∠1（两直线平行，同位角相等）<br>
                            又∵∠1=50°<br>
                            ∴∠2=50°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "14. 平行线的性质2：两直线平行，内错角相等",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>性质定理</h4>
                <div class="formula">
                    <strong>性质2：</strong>两直线平行，内错角相等<br>
                    即：若a∥b，则∠1=∠2（内错角）
                </div>
                <div class="advanced">
                    <h4>⭐ 应用技巧</h4>
                    <ul>
                        <li>先确认两直线平行</li>
                        <li>找出内错角</li>
                        <li>直接得出相等的结论</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，AB∥CD，∠1=65°，求∠2的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵AB∥CD（已知）<br>
                            ∴∠2=∠1（两直线平行，内错角相等）<br>
                            又∵∠1=65°<br>
                            ∴∠2=65°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "15. 平行线的性质3：两直线平行，同旁内角互补",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>性质定理</h4>
                <div class="formula">
                    <strong>性质3：</strong>两直线平行，同旁内角互补<br>
                    即：若a∥b，则∠1+∠2=180°（同旁内角）
                </div>
                <div class="advanced">
                    <h4>⭐ 求角的方法</h4>
                    <div class="formula">
                        知道其中一个角，可以求另一个角：<br>
                        ∠2=180°-∠1
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，a∥b，∠1=110°，求∠2。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵a∥b（已知）<br>
                            ∴∠1+∠2=180°（两直线平行，同旁内角互补）<br>
                            又∵∠1=110°<br>
                            ∴∠2=180°-110°=70°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "16. 平行线判定与性质的综合应用1",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解题思路</h4>
                <div class="formula">
                    先用判定证明平行，再用性质求角<br>
                    判定→平行→性质→求角
                </div>
                <div class="advanced">
                    <h4>⭐ 解题步骤</h4>
                    <ol>
                        <li>分析已知条件和所求</li>
                        <li>确定需要证明平行</li>
                        <li>选择合适的判定方法</li>
                        <li>证明平行后使用性质</li>
                        <li>求出所需的角</li>
                    </ol>
                    <div class="example">
                        <strong>例题：</strong>如图，∠1=∠2，∠3=70°，求∠4。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵∠1=∠2（已知）<br>
                            ∴a∥b（内错角相等，两直线平行）<br>
                            ∴∠4=∠3（两直线平行，同位角相等）<br>
                            又∵∠3=70°<br>
                            ∴∠4=70°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "17. 平行线判定与性质的综合应用2",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>复杂图形分析</h4>
                <ul>
                    <li>学会从复杂图形中分离出基本图形</li>
                    <li>注意一题多解</li>
                    <li>选择最简捷的方法</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 技巧总结</h4>
                    <ul>
                        <li>标记已知角和所求角</li>
                        <li>找中间角过渡</li>
                        <li>利用对顶角、邻补角</li>
                        <li>多次使用平行线的判定和性质</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，AB∥CD，∠1=∠2，求证：∠E=∠F。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            证明：<br>
                            ∵AB∥CD（已知）<br>
                            ∴∠BAE=∠DCF（两直线平行，同位角相等）<br>
                            又∵∠1=∠2（已知）<br>
                            ∴∠BAE-∠1=∠DCF-∠2<br>
                            即∠E=∠F
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "18. 平行线与角的计算综合题",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>常见题型</h4>
                <ul>
                    <li>求角的度数</li>
                    <li>证明角之间的关系</li>
                    <li>角的倍数、和差关系</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 解题技巧</h4>
                    <div class="formula">
                        设未知数→列方程→求解<br>
                        利用代数方法解决几何问题
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，AB∥CD，∠1:∠2=2:7，求∠1和∠2的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            设∠1=2x，则∠2=7x<br>
                            ∵AB∥CD<br>
                            ∴∠1+∠2=180°（两直线平行，同旁内角互补）<br>
                            ∴2x+7x=180°<br>
                            9x=180°<br>
                            x=20°<br>
                            ∴∠1=2×20°=40°，∠2=7×20°=140°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "19. 命题的概念与结构",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>命题：</strong>判断一件事情的语句</li>
                    <li><strong>真命题：</strong>正确的命题</li>
                    <li><strong>假命题：</strong>错误的命题</li>
                    <li><strong>题设：</strong>已知事项（条件）</li>
                    <li><strong>结论：</strong>由已知事项推出的事项</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 命题的结构</h4>
                    <div class="formula">
                        命题 = 题设（如果……）+ 结论（那么……）<br>
                        标准形式：如果……，那么……
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ 疑问句、祈使句不是命题</li>
                        <li>❌ 命题必须是对一件事的判断</li>
                        <li>✅ 命题有真假之分</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>下列语句是命题吗？如果是，指出题设和结论。<br>
                        (1) 对顶角相等<br>
                        (2) 画一个角<br>
                        (button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) 是命题<br>
                            改写：如果两个角是对顶角，那么这两个角相等<br>
                            题设：两个角是对顶角<br>
                            结论：这两个角相等<br><br>
                            (2) 不是命题（是祈使句，没有判断）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "20. 定理与证明",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>定理：</strong>经过推理证实得到的真命题</li>
                    <li><strong>证明：</strong>推理的过程</li>
                    <li><strong>公理：</strong>公认的真命题，不需证明</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 证明的步骤</h4>
                    <ol>
                        <li>审题：分清题设和结论</li>
                        <li>画图：根据题意画出图形</li>
                        <li>写已知、求证</li>
                        <li>推理证明</li>
                    </ol>
                    <div class="example">
                        <strong>例题：</strong>证明：邻补角的平分线互相垂直。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            已知：∠AOB和∠BOC是邻补角，OE平分∠AOB，OF平分∠BOC<br>
                            求证：OE⊥OF<br><br>
                            证明：<br>
                            ∵OE平分∠AOB<br>
                            ∴∠EOB=½∠AOB<br>
                            ∵OF平分∠BOC<br>
                            ∴∠BOF=½∠BOC<br>
                            ∴∠EOF=∠EOB+∠BOF=½∠AOB+½∠BOC=½(∠AOB+∠BOC)<br>
                            又∵∠AOB+∠BOC=180°（邻补角定义）<br>
                            ∴∠EOF=½×180°=90°<br>
                            ∴OE⊥OF
                        </div>
                    </div>
                </div>
            `
        },

        // 平移与应用（21-30）
        {
            title: "21. 平移的概念与特征",
            tag: "基础",
            tagClass: "basic",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>平移：</strong>在平面内，将一个图形沿某个方向移动一定的距离</li>
                    <li><strong>平移的要素：</strong>方向和距离</li>
                    <li><strong>对应点：</strong>原图形上的点平移后的新位置</li>
                    <li><strong>对应线段：</strong>原图形的线段平移后的新线段</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 平移的特征</h4>
                    <ul>
                        <li>图形的形状、大小不变</li>
                        <li>只改变图形的位置</li>
                        <li>对应点连线平行（或在同一直线上）且相等</li>
                        <li>对应线段平行（或在同一直线上）且相等</li>
                        <li>对应角相等</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>判断下列运动是否是平移：<br>
                        (1) 电梯的运动 (2) 时针的转动 (3) 推拉窗的运动<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) 是平移（沿直线移动）<br>
                            (2) 不是平移（是旋转）<br>
                            (3) 是平移（沿直线移动）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "22. 平移的性质",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>平移的基本性质</h4>
                <div class="formula">
                    1. 平移不改变图形的形状和大小（全等）<br>
                    2. 对应点连线平行且相等<br>
                    3. 对应线段平行且相等<br>
                    4. 对应角相等
                </div>
                <div class="advanced">
                    <h4>⭐ 应用</h4>
                    <ul>
                        <li>求平移后的坐标</li>
                        <li>求平移的距离</li>
                        <li>判断是否是平移</li>
                        <li>利用平移解决实际问题</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>三角形ABC平移后得到三角形A'B'C'，AB=5，∠A=60°，则A'B'=_____，∠A'=_____。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            A'B'=5，∠A'=60°<br>
                            解析：平移不改变图形的形状和大小，对应线段相等，对应角相等。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "23. 平移作图",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>作图步骤</h4>
                <ol>
                    <li>找出图形的关键点（顶点等）</li>
                    <li>按照平移的方向和距离，作出各关键点的对应点</li>
                    <li>顺次连接各对应点，得到平移后的图形</li>
                </ol>
                <div class="advanced">
                    <h4>⭐ 作图技巧</h4>
                    <ul>
                        <li>使用三角板保证方向</li>
                        <li>使用圆规量取距离</li>
                        <li>标记对应点</li>
                        <li>标明平移方向和距离</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>将三角形ABC向右平移3cm，画出平移后的图形。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            步骤：<br>
                            1. 过点A作水平线，向右截取3cm得到A'<br>
                            2. 同样作出B'、C'<br>
                            3. 连接A'B'、B'C'、C'A'<br>
                            4. △A'B'C'即为所求
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "24. 平移的应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>常见应用</h4>
                <ul>
                    <li>装饰图案设计</li>
                    <li>求不规则图形的面积</li>
                    <li>最短路径问题</li>
                    <li>建筑、艺术中的平移</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 面积问题</h4>
                    <div class="formula">
                        通过平移，将不规则图形转化为规则图形<br>
                        平移不改变面积
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，在一块长为20m，宽为16m的长方形草地上，有一条弯曲的小路（小路任何地方的水平宽度都是2m），求草地面积。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            将弯曲的小路通过平移，变成一个长方形<br>
                            小路面积=16×2=32m²<br>
                            草地面积=20×16-32=288m²
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "25. 平行线与实际问题的应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>实际应用场景</h4>
                <ul>
                    <li>铁轨平行问题</li>
                    <li>光线反射问题</li>
                    <li>测量问题</li>
                    <li>工程设计问题</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>如图，一条公路两次转弯后，和原来的方向相同（即拐弯前后的两条路平行），如果第一次的拐角∠B=140°，则第二次的拐角∠C=_____。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            ∠C=140°<br>
                            解析：<br>
                            ∵拐弯前后两条路平行<br>
                            ∴∠B=∠C=140°（两直线平行，内错角相等）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "26. 折叠问题中的平行线",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>折叠的性质</h4>
                <div class="formula">
                    折叠前后图形关于折痕对称<br>
                    对应角相等，对应线段相等
                </div>
                <div class="advanced">
                    <h4>⭐ 解题关键</h4>
                    <ul>
                        <li>找出折痕</li>
                        <li>标记折叠前后的对应点、对应角</li>
                        <li>利用平行线性质求解</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>将一张长方形纸片折叠，使点C落在点C'处，折痕为EF，若∠C'EF=40°，求∠EFB的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵折叠，∴∠CEF=∠C'EF=40°<br>
                            ∴∠C'EB=∠CEF+∠C'EF=80°<br>
                            又∵AD∥BC<br>
                            ∴∠EFB=∠C'EB=80°（两直线平行，内错角相等）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "27. 平行线中的拐点问题",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>拐点问题的类型</h4>
                <ul>
                    <li>一个拐点（M型、锯齿型）</li>
                    <li>两个拐点</li>
                    <li>多个拐点</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 解题方法</h4>
                    <div class="formula">
                        过拐点作平行线，将问题分解<br>
                        或：将线段平移
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，AB∥CD，∠B=40°，∠D=30°，求∠BED的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解法1：过点E作EF∥AB<br>
                            ∵AB∥CD，EF∥AB<br>
                            ∴EF∥CD<br>
                            ∴∠BEF=∠B=40°，∠FED=∠D=30°<br>
                            ∴∠BED=∠BEF+∠FED=40°+30°=70°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "28. 平行线的判定综合证明",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>证明两直线平行的方法总结</h4>
                <div class="formula">
                    1. 同位角相等→两直线平行<br>
                    2. 内错角相等→两直线平行<br>
                    3. 同旁内角互补→两直线平行<br>
                    4. 平行于同一直线的两直线平行<br>
                    5. 垂直于同一直线的两直线平行
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>如图，∠B=∠C，∠B+∠D=180°，求证：AB∥EF。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            证明：<br>
                            ∵∠B=∠C，∠B+∠D=180°（已知）<br>
                            ∴∠C+∠D=180°<br>
                            ∴BC∥DE（同旁内角互补，两直线平行）<br>
                            ∴∠C=∠1（两直线平行，内错角相等）<br>
                            又∵∠B=∠C<br>
                            ∴∠B=∠1<br>
                            ∴AB∥EF（内错角相等，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "29. 平行线与角平分线的综合",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>常见题型</h4>
                <ul>
                    <li>平行线+角平分线→特殊角</li>
                    <li>利用角平分线和平行线求角度</li>
                    <li>证明角平分线</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要结论</h4>
                    <div class="formula">
                        平行线+角平分线→等腰三角形（后续学习）
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，AB∥CD，∠ABE的平分线与∠CDE的平分线交于点F，若∠E=80°，求∠BFD的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：过点F作FG∥AB<br>
                            ∵AB∥CD，FG∥AB<br>
                            ∴FG∥CD<br>
                            设∠ABE=2α，∠CDE=2β<br>
                            则∠EBF=∠ABF=α，∠EDF=∠CDF=β<br>
                            ∵∠E=80°<br>
                            ∴∠E+2α+2β=180°（三角形内角和）<br>
                            2α+2β=100°<br>
                            α+β=50°<br>
                            ∴∠BFD=180°-(α+β)=180°-50°=130°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "30. 平行线中的探究题",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>探究题类型</h4>
                <ul>
                    <li>条件探究：给出结论，探究需要的条件</li>
                    <li>结论探究：给出条件，探究可能的结论</li>
                    <li>存在性探究：判断是否存在满足条件的图形</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 解题策略</h4>
                    <ol>
                        <li>从特殊到一般</li>
                        <li>逆向思维</li>
                        <li>分类讨论</li>
                        <li>归纳猜想</li>
                    </ol>
                    <div class="example">
                        <strong>例题：</strong>探究：如图，AB∥CD，点E在AB、CD之间，∠AEC与∠BAE、∠DCE之间有什么关系？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            探究过程：<br>
                            过点E作EF∥AB<br>
                            ∵AB∥CD<br>
                            ∴EF∥CD<br>
                            ∴∠BAE=∠1，∠DCE=∠2<br>
                            ∴∠AEC=∠1+∠2=∠BAE+∠DCE<br><br>
                            结论：∠AEC=∠BAE+∠DCE
                        </div>
                    </div>
                </div>
            `
        },

        // 综合应用与拓展（31-45）
        {
            title: "31. 垂线段最短的应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>基本原理</h4>
                <div class="formula">
                    直线外一点与直线上各点连接的所有线段中，垂线段最短
                </div>
                <div class="advanced">
                    <h4>⭐ 实际应用</h4>
                    <ul>
                        <li>最短距离问题</li>
                        <li>选址问题</li>
                        <li>测量问题</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>如图，在河的两岸有A、B两个村庄，现要在河上建一座桥，使A、B两村到桥的距离之和最小，桥应建在哪里？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：分别过A、B向河岸作垂线，垂足分别为C、D，桥应建在C、D之间的任何位置。<br>
                            理由：垂线段最短，这样A、B到桥的距离都最短。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "32. 点到直线的距离计算",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>计算方法</h4>
                <ul>
                    <li>直接度量：用刻度尺量出垂线段的长度</li>
                    <li>间接计算：通过几何关系计算</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>如图，在Rt△ABC中，∠C=90°，AC=3，BC=4，求点C到AB的距离。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：设点C到AB的距离为h<br>
                            ∵S△ABC=½AC·BC=½×3×4=6<br>
                            又S△ABC=½AB·h<br>
                            AB=√(AC²+BC²)=√(9+16)=5<br>
                            ∴½×5×h=6<br>
                            h=2.4<br>
                            ∴点C到AB的距离为2.4
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "33. 平行线与角度的综合计算",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>解题技巧</h4>
                <div class="formula">
                    设未知数→找等量关系→列方程→求解
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>如图，AB∥CD，∠ABE=120°，∠CDE=140°，求∠BED的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：过点E作EF∥AB<br>
                            ∵AB∥CD<br>
                            ∴EF∥CD<br>
                            ∵∠ABE=120°<br>
                            ∴∠1=180°-∠ABE=60°<br>
                            同理∠2=180°-∠CDE=40°<br>
                            ∴∠BED=∠1+∠2=60°+40°=100°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "34. 平行线的实际应用：测量的量",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>测量原理</h4>
                <ul>
                    <li>利用平行线的性质测量角度</li>
                    <li>利用相似（后续学习）测量距离</li>
                    <li>利用平行线测量高度</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>如图，小明想测量河对岸树AB的高度，他在河这边选取一点C，测得∠ACB=30°，然后沿与AC垂直的方向走了20米到点D，测得∠ADB=45°，求树AB的高度。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：此题需要用到相似三角形知识（后续学习），暂时用三角函数方法：<br>
                            设AB=h，BC=x<br>
                            在Rt△ABC中：tan30°=h/x，x=h√3<br>
                            在Rt△ABD中：tan45°=h/(x+20)，x+20=h<br>
                            ∴h√3+20=h<br>
                            h(√3-1)=20<br>
                            h=20/(√3-1)=10(√3+1)≈27.3米
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "35. 平行线在建筑中的应用",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>应用实例</h4>
                <ul>
                    <li>房屋设计中平行线的使用</li>
                    <li>桥梁建设中的平行线</li>
                    <li>道路设计中的平行线</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>某建筑物的横截面如图所示，AB∥CD，∠A=60°，∠D=45°，求∠AED的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：过点E作EF∥AB<br>
                            ∵AB∥CD<br>
                            ∴EF∥CD<br>
                            ∴∠AEF=180°-∠A=120°<br>
                            ∠FED=∠D=45°<br>
                            ∴∠AED=∠AEF-∠FED=120°-45°=75°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "36. 平行线与光的反射",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>反射定律</h4>
                <div class="formula">
                    入射角=反射角<br>
                    入射光线、反射光线关于法线对称
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>如图，两面镜子AB、CD互相平行，光线EF射到AB上，反射后射到CD上，再反射出去，证明：入射光线EF与反射光线GH平行。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            证明：<br>
                            设EF的入射角和反射角为∠1、∠2<br>
                            GH的入射角和反射角为∠3、∠4<br>
                            根据反射定律：∠1=∠2，∠3=∠4<br>
                            ∵AB∥CD<br>
                            ∴∠2=∠3（两直线平行，内错角相等）<br>
                            ∴∠1=∠4<br>
                            ∴EF∥GH（内错角相等，两直线平行）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "37. 平行线的动态问题",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>动态问题类型</h4>
                <ul>
                    <li>点在线段上运动</li>
                    <li>直线的旋转</li>
                    <li>图形的平移</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 解题方法</h4>
                    <div class="formula">
                        1. 确定运动规律<br>
                        2. 分段讨论<br>
                        3. 建立函数关系
                    </div>
                    <div class="example">
                        <strong>例题：</strong>如图，AB∥CD，点P从A出发，沿AB向B运动，速度为1cm/s，同时点Q从C出发，沿CD向D运动，速度为2cm/s，AB=10cm，CD=15cm，经过几秒后，PQ∥BC？<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：设经过t秒后，PQ∥BC<br>
                            此时AP=t，CQ=2t<br>
                            若PQ∥BC，则AP=CQ（平行四边形对边相等）<br>
                            t=2t<br>
                            t=0<br>
                            ∴只有在开始时刻（t=0）时PQ∥BC
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "38. 平行线的折叠与剪纸",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>折叠的性质</h4>
                <div class="formula">
                    折叠前后图形全等<br>
                    对应边相等，对应角相等<br>
                    折痕是对称轴
                </div>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>将长方形纸片ABCD折叠，使点C落在点C'处，折痕为EF，若∠BFC'=50°，求∠EFB的度数。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵折叠，∴∠EFC=∠EFC'<br>
                            ∵∠BFC'+∠EFC'=180°<br>
                            ∴∠EFC'=180°-50°=130°<br>
                            ∴∠EFC=130°<br>
                            ∵AD∥BC<br>
                            ∴∠EFB+∠EFC=180°<br>
                            ∠EFB=180°-130°=50°
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "39. 平行线与格点问题",
            tag: "拓展",
            tagClass: "advanced",
            content: `
                <h4>格点问题</h4>
                <ul>
                    <li>在方格纸上画平行线</li>
                    <li>利用格点判断平行</li>
                    <li>格点中的角度计算</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>在5×5的方格纸上，每个小方格的边长为1，判断AB与CD是否平行。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：利用斜率判断<br>
                            计算AB和CD的斜率<br>
                            若斜率相等，则平行；否则不平行<br>
                            （斜率知识在后续学习）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "40. 相交线与平行线单元总结",
            tag: "总结",
            tagClass: "important",
            content: `
                <h4>知识框架</h4>
                <div class="formula">
                    <strong>一、相交线</strong><br>
                    1. 对顶角：相等<br>
                    2. 邻补角：互补（和为180°）<br>
                    3. 垂线：<br>
                       - 垂线性质1：过一点有且只有一条<br>
                       - 垂线性质2：垂线段最短<br>
                       - 点到直线的距离<br><br>
                    <strong>二、平行线</strong><br>
                    1. 三线八角：同位角、内错角、同旁内角<br>
                    2. 判定：<br>
                       - 同位角相等→平行<br>
                       - 内错角相等→平行<br>
                       - 同旁内角互补→平行<br>
                    3. 性质：<br>
                       - 平行→同位角相等<br>
                       - 平行→内错角相等<br>
                       - 平行→同旁内角互补<br><br>
                    <strong>三、命题与证明</strong><br>
                    1. 命题：题设+结论<br>
                    2. 定理：经过证明的真命题<br><br>
                    <strong>四、平移</strong><br>
                    1. 要素：方向、距离<br>
                    2. 性质：形状大小不变，对应点连线平行且相等
                </div>
            `
        },
        {
            title: "41. 平行线的经典题型总结",
            tag: "总结",
            tagClass: "important",
            content: `
                <h4>题型分类</h4>
                <div class="formula">
                    <strong>1. 基础题：</strong><br>
                    - 识别同位角、内错角、同旁内角<br>
                    - 利用平行线性质求角度<br><br>
                    <strong>2. 中档题：</strong><br>
                    - 平行线的判定与性质综合<br>
                    - 添加辅助线（过拐点作平行线）<br>
                    - 平移作图与应用<br><br>
                    <strong>3. 难题：</strong><br>
                    - 动态问题<br>
                    - 探究题<br>
                    - 折叠问题<br>
                    - 综合应用题
                </div>
            `
        },
        {
            title: "42. 平行线解题技巧总结",
            tag: "总结",
            tagClass: "important",
            content: `
                <h4>技巧总结</h4>
                <div class="formula">
                    <strong>1. 识别角的位置关系：</strong><br>
                    - 先找截线和被截线<br>
                    - 根据位置特征判断<br><br>
                    <strong>2. 求角度：</strong><br>
                    - 找到已知角和所求角的关系<br>
                    - 利用平行线性质<br>
                    - 注意对顶角、邻补角的运用<br><br>
                    <strong>3. 证明平行：</strong><br>
                    - 证明角相等或互补<br>
                    - 选择合适的判定方法<br><br>
                    <strong>4. 拐点问题：</strong><br>
                    - 过拐点作平行线<br>
                    - 将角分解或合成<br><br>
                    <strong>5. 综合题：</strong><br>
                    - 分解为基本图形<br>
                    - 逐步推理<br>
                    - 注意格式规范
                </div>
            `
        },
        {
            title: "43. 易错题辨析",
            tag: "总结",
            tagClass: "important",
            content: `
                <h4>常见错误</h4>
                <ul>
                    <li>❌ 混淆判定和性质</li>
                    <li>❌ 不确认角的位置关系就使用定理</li>
                    <li>❌ 忘记"在同一平面内"这个前提</li>
                    <li>❌ 点到直线的距离与垂线段混淆</li>
                    <li>❌ 对顶角、邻补角识别错误</li>
                    <li>❌ 同旁内角互补记成相等</li>
                    <li>❌ 证明过程格式不规范</li>
                    <li>❌ 平移方向和距离表述不清</li>
                </ul>
            `
        },
        {
            title: "44. 平行线在中考中的考查",
            tag: "总结",
            tagClass: "important",
            content: `
                <h4>中考考查要点</h4>
                <div class="formula">
                    <strong>1. 选择题、填空题：</strong><br>
                    - 角度计算（3-5分）<br>
                    - 平行线的判定与性质（3-5分）<br><br>
                    <strong>2. 解答题：</strong><br>
                    - 证明题（6-8分）<br>
                    - 综合计算题（8-10分）<br><br>
                    <strong>3. 考查频率：</strong><br>
                    - 平行线性质：★★★★★<br>
                    - 平行线判定：★★★★<br>
                    - 综合应用：★★★★<br>
                    - 平移：★★★
                </div>
            `
        },
        {
            title: "45. 相交线与平行线学习建议",
            tag: "总结",
            tagClass: "important",
            content: `
                <h4>学习建议</h4>
                <div class="formula">
                    <strong>1. 理解概念：</strong><br>
                    - 准确理解对顶角、邻补角、同位角等概念<br>
                    - 理解判定与性质的区别<br><br>
                    <strong>2. 掌握方法：</strong><br>
                    - 熟练掌握平行线的判定和性质<br>
                    - 学会添加辅助线<br>
                    - 掌握证明题的书写格式<br><br>
                    <strong>3. 多练习：</strong><br>
                    - 基础题要熟练<br>
                    - 中档题要准确<br>
                    - 难题要尝试<br><br>
                    <strong>4. 总结归纳：</strong><br>
                    - 整理错题<br>
                    - 归纳题型<br>
                    - 总结方法
                </div>
            `
        },

        // ==================== 第二章：实数（50个知识点）====================
        
        // 基础概念（46-55）
        {
            title: "46. 平方根的概念",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>平方根：</strong>一般地，如果一个数的平方等于a，那么这个数叫做a的平方根</li>
                    <li><strong>表示：</strong>a的平方根记作±√a</li>
                    <li><strong>算术平方根：</strong>正数a的正的平方根，记作√a</li>
                    <li><strong>开平方：</strong>求一个数的平方根的运算</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        正数有两个平方根，它们互为相反数<br>
                        0的平方根是0<br>
                        负数没有平方根<br>
                        (√a)²=a (a≥0)<br>
                        √(a²)=|a|
                    </div>
                    <h4>⚠️ 易错点</h4>
                    <ul>
                        <li>❌ √4=±2（错误，√4=2）</li>
                        <li>❌ 4的平方根=2（错误，4的平方根=±2）</li>
                        <li>✅ 算术平方根只有一个，且为非负数</li>
                        <li>✅ 平方根有两个（正数），或一个（0），或没有（负数）</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>求下列各数的平方根和算术平方根：<br>
                        (1) 16　(2) 0.09　(3) 5<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) 16的平方根：±4，算术平方根：4<br>
                            (2) 0.09的平方根：±0.3，算术平方根：0.3<br>
                            (3) 5的平方根：±√5，算术平方根：√5
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
                <h4>基本性质</h4>
                <div class="formula">
                    1. √a≥0（a≥0）——双重非负性<br>
                    2. (√a)²=a（a≥0）<br>
                    3. √(a²)=|a|
                </div>
                <div class="advanced">
                    <h4>⭐ 双重非负性</h4>
                    <ul>
                        <li>被开方数a≥0</li>
                        <li>算术平方根√a≥0</li>
                    </ul>
                    <div class="example">
                        <strong>例题：</strong>若√(x-2)+√(3-x)有意义，求x的取值范围。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：<br>
                            ∵√(x-2)有意义，∴x-2≥0，即x≥2<br>
                            ∵√(3-x)有意义，∴3-x≥0，即x≤3<br>
                            ∴2≤x≤3
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "48. 平方根的计算",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>计算方法</h4>
                <ul>
                    <li>熟记1-20的平方数</li>
                    <li>掌握小数、分数的平方根</li>
                    <li>理解√a的含义</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 常用平方数</h4>
                    <div class="formula">
                        1²=1, 2²=4, 3²=9, 4²=16, 5²=25<br>
                        6²=36, 7²=49, 8²=64, 9²=81, 10²=100<br>
                        11²=121, 12²=144, 13²=169, 14²=196, 15²=225<br>
                        16²=256, 17²=289, 18²=324, 19²=361, 20²=400
                    </div>
                    <div class="example">
                        <strong>例题：</strong>计算：<br>
                        (1) √144　(2) √(9/16)　(3) √0.0025<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) √144=12（∵12²=144）<br>
                            (2) √(9/16)=3/4（∵(3/4)²=9/16）<br>
                            (3) √0.0025=0.05（∵0.05²=0.0025）
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "49. 平方根的应用",
            tag: "重点",
            tagClass: "important",
            content: `
                <h4>应用类型</h4>
                <ul>
                    <li>已知面积求边长</li>
                    <li>几何问题</li>
                    <li>实际问题</li>
                </ul>
                <div class="advanced">
                    <div class="example">
                        <strong>例题：</strong>一个正方形的面积是169cm²，求它的边长。<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            解：设正方形的边长为x cm<br>
                            ∴x²=169<br>
                            ∴x=√169=13（边长为正，舍去负值）<br>
                            答：正方形的边长为13cm。
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "50. 立方根的概念",
            tag: "必考",
            tagClass: "important",
            content: `
                <h4>概念定义</h4>
                <ul>
                    <li><strong>立方根：</strong>如果一个数的立方等于a，那么这个数叫做a的立方根</li>
                    <li><strong>表示：</strong>a的立方根记作³√a</li>
                    <li><strong>开立方：</strong>求一个数的立方根的运算</li>
                </ul>
                <div class="advanced">
                    <h4>⭐ 重要性质</h4>
                    <div class="formula">
                        正数的立方根是正数<br>
                        0的立方根是0<br>
                        负数的立方根是负数<br>
                        (³√a)³=a<br>
                        ³√(a³)=a
                    </div>
                    <h4>⚠️ 与平方根的区别</h4>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr style="background:#f0f0f0;">
                            <th style="border:1px solid #ddd; padding:8px;">项目</th>
                            <th style="border:1px solid #ddd; padding:8px;">平方根</th>
                            <th style="border:1px solid #ddd; padding:8px;">立方根</th>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">正数</td>
                            <td style="border:1px solid #ddd; padding:8px;">两个（互为相反数）</td>
                            <td style="border:1px solid #ddd; padding:8px;">一个（正数）</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">0</td>
                            <td style="border:1px solid #ddd; padding:8px;">0</td>
                            <td style="border:1px solid #ddd; padding:8px;">0</td>
                        </tr>
                        <tr>
                            <td style="border:1px solid #ddd; padding:8px;">负数</td>
                            <td style="border:1px solid #ddd; padding:8px;">没有</td>
                            <td style="border:1px solid #ddd; padding:8px;">一个（负数）</td>
                        </tr>
                    </table>
                    <div class="example">
                        <strong>例题：</strong>求下列各数的立方根：<br>
                        (1) 8　(2) -27　(3) 0.125<br>
                        <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                        <div class="answer">
                            (1) ³√8=2（∵2³=8）<br>
                            (2) ³√(-27)=-3（∵(-3)³=-27）<br>
                            (3) ³√0.125=0.5（∵0.5³=0.125）
                        </div>
                    </div>
                </div>
            `
        },

        // 由于篇幅限制，这里展示部分知识点
        // 完整版本应包含每章40-50个知识点，总计240-300个知识点
        // 后续知识点继续按照相同格式展开...

        // ==================== 说明 ====================
        // 由于完整生成240+个知识点会超出单次输出限制
        // 这里展示了第一章（相交线与平行线）的完整45个知识点
        // 以及第二章（实数）的前5个知识点示例
        
        // 完整的知识点库应包括：
        // 第一章：相交线与平行线（45个）✓
        // 第二章：实数（50个）
        // 第三章：平面直角坐标系（45个）
        // 第四章：二元一次方程组（50个）
        // 第五章：不等式与不等式组（45个）
        // 第六章：数据的收集、整理与描述（40个）
        
        // 每个知识点都包含：
        // - 概念定义
        // - 公式定理
        // - 例题讲解
        // - 易错点提醒
        // - 习题练习
    ]
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = grade7bMathKnowledge;
}
