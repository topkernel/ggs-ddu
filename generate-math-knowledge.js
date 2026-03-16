// 7年级下学期数学完整知识点生成器
// 本脚本用于生成每章40+知识点的完整知识点库

const knowledgeBase = {
    math: []
};

// ==================== 辅助函数 ====================
function createKnowledgePoint(number, title, tag, tagClass, concepts, formulas, examples, warnings) {
    return {
        title: `${number}. ${title}`,
        tag: tag,
        tagClass: tagClass,
        content: `
            <h4>概念定义</h4>
            <ul>
                ${concepts.map(c => `<li><strong>${c.term}：</strong>${c.definition}</li>`).join('\n                ')}
            </ul>
            <div class="advanced">
                <h4>⭐ 重要定理/公式</h4>
                <div class="formula">
                    ${formulas.join('<br>')}
                </div>
                ${warnings ? `
                <h4>⚠️ 易错点</h4>
                <ul>
                    ${warnings.map(w => `<li>${w}</li>`).join('\n                    ')}
                </ul>
                ` : ''}
                ${examples ? `
                <div class="example">
                    <strong>例题：</strong>${examples.question}<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        ${examples.answer}
                    </div>
                </div>
                ` : ''}
            </div>
        `
    };
}

// ==================== 第一章：相交线与平行线（45个知识点）====================
const chapter1 = [
    // 基础概念（1-15）
    {
        number: 1,
        title: "相交线的定义与性质",
        tag: "基础",
        tagClass: "basic",
        concepts: [
            { term: "相交线", definition: "两条直线有一个公共点，这两条直线叫做相交线" },
            { term: "交点", definition: "两条相交直线的公共点" },
            { term: "邻补角", definition: "有公共顶点和公共边，另一边互为反向延长线的两个角" },
            { term: "对顶角", definition: "有公共顶点，且一个角的两边分别是另一个角两边的反向延长线" }
        ],
        formulas: ["对顶角相等：∠1=∠3, ∠2=∠4", "邻补角互补：∠1+∠2=180°"],
        warnings: [
            "❌ 误认为有公共顶点的角就是对顶角",
            "❌ 忘记邻补角和为180°而非90°",
            "✅ 对顶角必须满足两边互为反向延长线"
        ],
        examples: {
            question: "如图，直线AB、CD相交于点O，∠AOC=50°，求∠BOD和∠BOC的度数。",
            answer: "解：<br>∵∠AOC和∠BOD是对顶角<br>∴∠BOD=∠AOC=50°<br>∵∠AOC和∠BOC是邻补角<br>∴∠BOC=180°-∠AOC=180°-50°=130°"
        }
    },
    // ... 省略其他知识点，实际应包含45个
];

// ==================== 第二章：实数（50个知识点）====================
const chapter2 = [
    // 平方根（1-15）
    {
        number: 46,
        title: "平方根的概念",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "平方根", definition: "如果一个数的平方等于a，那么这个数叫做a的平方根" },
            { term: "算术平方根", definition: "正数a的正的平方根，记作√a" },
            { term: "开平方", definition: "求一个数的平方根的运算" }
        ],
        formulas: [
            "正数有两个平方根，它们互为相反数",
            "0的平方根是0",
            "负数没有平方根",
            "(√a)²=a (a≥0)",
            "√(a²)=|a|"
        ],
        warnings: [
            "❌ √4=±2（错误，√4=2）",
            "❌ 4的平方根=2（错误，4的平方根=±2）",
            "✅ 算术平方根只有一个，且为非负数"
        ],
        examples: {
            question: "求下列各数的平方根和算术平方根：(1) 16　(2) 0.09　(3) 5",
            answer: "(1) 16的平方根：±4，算术平方根：4<br>(2) 0.09的平方根：±0.3，算术平方根：0.3<br>(3) 5的平方根：±√5，算术平方根：√5"
        }
    },
    {
        number: 47,
        title: "算术平方根的性质",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "双重非负性", definition: "被开方数a≥0，且算术平方根√a≥0" }
        ],
        formulas: [
            "√a≥0（a≥0）——双重非负性",
            "(√a)²=a（a≥0）",
            "√(a²)=|a|"
        ],
        examples: {
            question: "若√(x-2)+√(3-x)有意义，求x的取值范围。",
            answer: "解：<br>∵√(x-2)有意义，∴x-2≥0，即x≥2<br>∵√(3-x)有意义，∴3-x≥0，即x≤3<br>∴2≤x≤3"
        }
    },
    {
        number: 48,
        title: "平方根的计算",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "计算方法", definition: "熟记1-20的平方数，掌握小数、分数的平方根" }
        ],
        formulas: [
            "1²=1, 2²=4, 3²=9, 4²=16, 5²=25",
            "6²=36, 7²=49, 8²=64, 9²=81, 10²=100",
            "11²=121, 12²=144, 13²=169, 14²=196, 15²=225",
            "16²=256, 17²=289, 18²=324, 19²=361, 20²=400"
        ],
        examples: {
            question: "计算：(1) √144　(2) √(9/16)　(3) √0.0025",
            answer: "(1) √144=12（∵12²=144）<br>(2) √(9/16)=3/4（∵(3/4)²=9/16）<br>(3) √0.0025=0.05（∵0.05²=0.0025）"
        }
    },
    {
        number: 49,
        title: "平方根的应用",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "应用类型", definition: "已知面积求边长、几何问题、实际问题" }
        ],
        examples: {
            question: "一个正方形的面积是169cm²，求它的边长。",
            answer: "解：设正方形的边长为x cm<br>∴x²=169<br>∴x=√169=13（边长为正，舍去负值）<br>答：正方形的边长为13cm。"
        }
    },
    {
        number: 50,
        title: "立方根的概念",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "立方根", definition: "如果一个数的立方等于a，那么这个数叫做a的立方根，记作³√a" },
            { term: "开立方", definition: "求一个数的立方根的运算" }
        ],
        formulas: [
            "正数的立方根是正数",
            "0的立方根是0",
            "负数的立方根是负数",
            "(³√a)³=a",
            "³√(a³)=a"
        ],
        warnings: [
            "❌ 混淆平方根和立方根的性质",
            "✅ 负数有立方根，但没有平方根"
        ],
        examples: {
            question: "求下列各数的立方根：(1) 8　(2) -27　(3) 0.125",
            answer: "(1) ³√8=2（∵2³=8）<br>(2) ³√(-27)=-3（∵(-3)³=-27）<br>(3) ³√0.125=0.5（∵0.5³=0.125）"
        }
    },
    {
        number: 51,
        title: "立方根的性质与计算",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "立方根的唯一性", definition: "任何实数都有且只有一个立方根" }
        ],
        formulas: [
            "³√(a³)=a",
            "(³√a)³=a",
            "³√(-a)=-³√a"
        ],
        examples: {
            question: "计算：(1) ³√64　(2) ³√(-1/8)　(3) (³√5)³",
            answer: "(1) ³√64=4（∵4³=64）<br>(2) ³√(-1/8)=-1/2（∵(-1/2)³=-1/8）<br>(3) (³√5)³=5"
        }
    },
    {
        number: 52,
        title: "无理数的概念",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "无理数", definition: "无限不循环小数" },
            { term: "常见无理数", definition: "√2、√3、π等" }
        ],
        formulas: [
            "无理数特征：无限、不循环",
            "无理数不能用分数表示"
        ],
        warnings: [
            "❌ 认为带根号的数都是无理数（√4=2是有理数）",
            "❌ 认为无限小数都是无理数（0.333...是循环小数）",
            "✅ 只有无限不循环小数才是无理数"
        ],
        examples: {
            question: "下列各数中，哪些是无理数？<br>3.14, √2, 22/7, 0.1010010001..., π, √4",
            answer: "无理数有：√2, 0.1010010001..., π<br><br>解析：<br>- 3.14是有限小数，有理数<br>- √2是无理数<br>- 22/7是分数，有理数<br>- 0.1010010001...不循环，无理数<br>- π是无理数<br>- √4=2是整数，有理数"
        }
    },
    {
        number: 53,
        title: "实数的分类",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "实数", definition: "有理数和无理数统称为实数" },
            { term: "有理数", definition: "整数和分数（有限小数或无限循环小数）" },
            { term: "无理数", definition: "无限不循环小数" }
        ],
        formulas: [
            "实数 = 有理数 + 无理数",
            "有理数 = 整数 + 分数",
            "整数 = 正整数 + 0 + 负整数"
        ],
        examples: {
            question: "把下列各数填入相应的集合中：<br>-3, 0, √2, 1/2, -√5, π, 0.333..., √16",
            answer: "正有理数集合：{1/2, √16}<br>负有理数集合：{-3}<br>无理数集合：{√2, -√5, π}<br>正实数集合：{1/2, √2, √16, π}"
        }
    },
    {
        number: 54,
        title: "实数与数轴",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "实数与数轴的关系", definition: "实数与数轴上的点一一对应" },
            { term: "在数轴上表示无理数", definition: "可以用几何作图法表示某些无理数" }
        ],
        formulas: [
            "任何一个实数都可以用数轴上的一个点来表示",
            "数轴上的任何一个点都表示一个实数"
        ],
        examples: {
            question: "在数轴上作出表示√2的点。",
            answer: "作法：<br>1. 画数轴，标出原点O和单位长度<br>2. 过原点作数轴的垂线<br>3. 在垂线上截取OA=1<br>4. 连接OB，则OB=√(1²+1²)=√2<br>5. 以O为圆心，OB为半径画弧，交数轴于点C<br>6. 点C表示√2"
        }
    },
    {
        number: 55,
        title: "实数的大小比较",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "比较方法", definition: "利用数轴、作差法、平方法等" }
        ],
        formulas: [
            "数轴上右边的数总比左边的数大",
            "正数>0>负数",
            "两个负数比较，绝对值大的反而小"
        ],
        examples: {
            question: "比较下列各组数的大小：<br>(1) √5和2.5　(2) -√10和-π",
            answer: "(1) √5和2.5<br>∵√5≈2.236，2.5=2.5<br>∴√5<2.5<br><br>(2) -√10和-π<br>∵√10≈3.162，π≈3.141<br>∴√10>π<br>∴-√10<-π（负数，绝对值大的反而小）"
        }
    },
    {
        number: 56,
        title: "实数的运算（加减）",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "运算法则", definition: "与有理数运算法则相同" }
        ],
        formulas: [
            "加法：同号相加，异号相减",
            "减法：减去一个数等于加上这个数的相反数"
        ],
        examples: {
            question: "计算：√18 - √8 + √2",
            answer: "解：√18 - √8 + √2<br>= √(9×2) - √(4×2) + √2<br>= 3√2 - 2√2 + √2<br>= (3-2+1)√2<br>= 2√2"
        }
    },
    {
        number: 57,
        title: "实数的运算（乘除）",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "乘法法则", definition: "同号得正，异号得负，并把绝对值相乘" },
            { term: "除法法则", definition: "除以一个不为零的数等于乘以这个数的倒数" }
        ],
        formulas: [
            "√a·√b=√(ab) (a≥0, b≥0)",
            "√a÷√b=√(a/b) (a≥0, b>0)"
        ],
        examples: {
            question: "计算：(1) √12×√3　(2) √20÷√5",
            answer: "(1) √12×√3=√(12×3)=√36=6<br>(2) √20÷√5=√(20/5)=√4=2"
        }
    },
    {
        number: 58,
        title: "实数的混合运算",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "运算顺序", definition: "先乘方开方，再乘除，后加减，有括号先算括号内的" }
        ],
        examples: {
            question: "计算：√2×(√8-√2)÷√2",
            answer: "解：<br>原式=√2×(2√2-√2)÷√2<br>=√2×√2÷√2<br>=2÷√2<br>=2√2/2<br>=√2"
        }
    },
    {
        number: 59,
        title: "实数的近似计算",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "近似值", definition: "根据精确度要求，用近似值代替准确值进行计算" }
        ],
        formulas: [
            "常用无理数的近似值：",
            "√2≈1.414",
            "√3≈1.732",
            "√5≈2.236",
            "π≈3.14159"
        ],
        examples: {
            question: "计算√2×√3（结果保留两位小数）",
            answer: "解：<br>√2×√3=√6<br>≈2.449<br>≈2.45（保留两位小数）"
        }
    },
    {
        number: 60,
        title: "实数的性质综合应用",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "综合性质", definition: "结合绝对值、平方根、立方根等性质" }
        ],
        examples: {
            question: "已知|x-3|+√(y+2)²=0，求x+y的值。",
            answer: "解：<br>∵|x-3|≥0，√(y+2)²≥0<br>且|x-3|+√(y+2)²=0<br>∴|x-3|=0，√(y+2)²=0<br>∴x-3=0，y+2=0<br>∴x=3，y=-2<br>∴x+y=3+(-2)=1"
        }
    },
    // ... 继续添加第61-95个知识点
];

// ==================== 第三章：平面直角坐标系（45个知识点）====================
const chapter3 = [
    {
        number: 96,
        title: "平面直角坐标系的概念",
        tag: "基础",
        tagClass: "basic",
        concepts: [
            { term: "平面直角坐标系", definition: "在平面内，由两条互相垂直、原点重合的数轴组成的坐标系" },
            { term: "横轴(x轴)", definition: "水平方向的数轴" },
            { term: "纵轴(y轴)", definition: "竖直方向的数轴" },
            { term: "原点", definition: "两轴的交点，坐标为(0,0)" }
        ],
        formulas: [
            "点的坐标表示：P(x,y)",
            "x称为横坐标，y称为纵坐标"
        ],
        examples: {
            question: "写出点A、B、C的坐标。",
            answer: "需要具体图形，根据点在坐标系中的位置确定坐标。"
        }
    },
    {
        number: 97,
        title: "象限的划分与点的符号",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "象限", definition: "坐标轴把平面分成四个部分，分别称为第一、二、三、四象限" }
        ],
        formulas: [
            "第一象限：(+,+)",
            "第二象限：(-,+)",
            "第三象限：(-,-)",
            "第四象限：(+,-)",
            "x轴上的点：(x,0)",
            "y轴上的点：(0,y)"
        ],
        warnings: [
            "❌ 坐标轴上的点不属于任何象限",
            "✅ 判断象限时，先看x坐标的正负，再看y坐标的正负"
        ],
        examples: {
            question: "点P(-3,2)在第几象限？点Q(0,-5)在什么位置？",
            answer: "点P(-3,2)在第二象限（x<0, y>0）<br>点Q(0,-5)在y轴的负半轴上"
        }
    },
    {
        number: 98,
        title: "点的坐标特征",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "特殊位置的点", definition: "坐标轴上的点、象限角平分线上的点等" }
        ],
        formulas: [
            "x轴上的点：纵坐标为0，即(x,0)",
            "y轴上的点：横坐标为0，即(0,y)",
            "第一、三象限角平分线上的点：横纵坐标相等，即(a,a)",
            "第二、四象限角平分线上的点：横纵坐标互为相反数，即(a,-a)"
        ],
        examples: {
            question: "已知点P(2a-1,a+3)在第一、三象限角平分线上，求a的值。",
            answer: "解：<br>∵点P在第一、三象限角平分线上<br>∴2a-1=a+3<br>∴a=4"
        }
    },
    {
        number: 99,
        title: "点到坐标轴的距离",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "点到x轴的距离", definition: "点的纵坐标的绝对值" },
            { term: "点到y轴的距离", definition: "点的横坐标的绝对值" }
        ],
        formulas: [
            "点P(x,y)到x轴的距离=|y|",
            "点P(x,y)到y轴的距离=|x|",
            "点P(x,y)到原点的距离=√(x²+y²)"
        ],
        warnings: [
            "❌ 距离不加绝对值符号",
            "✅ 距离始终是非负数"
        ],
        examples: {
            question: "点P(-3,4)到x轴、y轴的距离分别是多少？到原点的距离呢？",
            answer: "点P(-3,4)：<br>到x轴的距离=|4|=4<br>到y轴的距离=|-3|=3<br>到原点的距离=√((-3)²+4²)=√(9+16)=√25=5"
        }
    },
    {
        number: 100,
        title: "坐标的平移（上下左右）",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "平移", definition: "在平面内，将图形沿某个方向移动一定的距离" }
        ],
        formulas: [
            "向右平移a个单位：(x,y)→(x+a,y)",
            "向左平移a个单位：(x,y)→(x-a,y)",
            "向上平移b个单位：(x,y)→(x,y+b)",
            "向下平移b个单位：(x,y)→(x,y-b)"
        ],
        warnings: [
            "❌ 左右平移改变纵坐标（错误，应改变横坐标）",
            "✅ 左右平移改变横坐标，上下平移改变纵坐标"
        ],
        examples: {
            question: "点A(2,3)向右平移3个单位，再向下平移2个单位，得到点B，求B的坐标。",
            answer: "解：<br>点A(2,3)向右平移3个单位：(2+3,3)=(5,3)<br>再向下平移2个单位：(5,3-2)=(5,1)<br>∴点B的坐标为(5,1)"
        }
    },
    // ... 继续添加第101-140个知识点
];

// ==================== 第四章：二元一次方程组（50个知识点）====================
const chapter4 = [
    {
        number: 141,
        title: "二元一次方程的概念",
        tag: "基础",
        tagClass: "basic",
        concepts: [
            { term: "二元一次方程", definition: "含有两个未知数，且未知数的次数都是1的方程" },
            { term: "一般形式", definition: "ax+by=c（a≠0，b≠0）" }
        ],
        formulas: [
            "二元一次方程满足的条件：",
            "1. 含有两个未知数",
            "2. 未知数的次数都是1",
            "3. 整式方程"
        ],
        examples: {
            question: "判断下列方程是否是二元一次方程：<br>(1) x+y=3　(2) xy=2　(3) x²+y=5",
            answer: "(1) 是（符合所有条件）<br>(2) 不是（xy是二次项）<br>(3) 不是（x²是二次项）"
        }
    },
    {
        number: 142,
        title: "二元一次方程的解",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "二元一次方程的解", definition: "使方程成立的两个未知数的值" }
        ],
        formulas: [
            "二元一次方程有无数个解",
            "每个解都是一对数值"
        ],
        examples: {
            question: "写出方程x+y=5的三个解。",
            answer: "解：<br>x=1时，y=4，即(1,4)<br>x=2时，y=3，即(2,3)<br>x=3时，y=2，即(3,2)"
        }
    },
    {
        number: 143,
        title: "二元一次方程组的概念",
        tag: "基础",
        tagClass: "basic",
        concepts: [
            { term: "二元一次方程组", definition: "由两个二元一次方程组成的方程组" },
            { term: "方程组的解", definition: "使方程组中两个方程都成立的两个未知数的值" }
        ],
        formulas: [
            "一般形式：",
            "ax+by=c",
            "dx+ey=f"
        ],
        examples: {
            question: "判断x=2, y=1是否是方程组的解：<br>x+y=3<br>2x-y=3",
            answer: "检验：<br>把x=2, y=1代入x+y=3：<br>2+1=3 ✓<br>把x=2, y=1代入2x-y=3：<br>2×2-1=3 ✓<br>∴x=2, y=1是该方程组的解"
        }
    },
    {
        number: 144,
        title: "代入消元法",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "代入消元法", definition: "将一个未知数用含另一个未知数的式子表示，然后代入另一个方程，消去一个未知数" }
        ],
        formulas: [
            "步骤：",
            "1. 从一个方程中用一个未知数表示另一个未知数",
            "2. 代入另一个方程",
            "3. 解一元一次方程",
            "4. 回代求另一个未知数"
        ],
        examples: {
            question: "用代入法解方程组：<br>y=2x<br>x+y=12",
            answer: "解：<br>将y=2x代入x+y=12：<br>x+2x=12<br>3x=12<br>x=4<br><br>将x=4代入y=2x：<br>y=2×4=8<br><br>∴x=4, y=8"
        }
    },
    {
        number: 145,
        title: "加减消元法",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "加减消元法", definition: "通过两个方程相加或相减，消去一个未知数" }
        ],
        formulas: [
            "步骤：",
            "1. 将两个方程中某一未知数的系数化为相等或相反数",
            "2. 将两个方程相加或相减",
            "3. 解一元一次方程",
            "4. 回代求另一个未知数"
        ],
        examples: {
            question: "用加减法解方程组：<br>x+y=5<br>x-y=1",
            answer: "解：<br>①+②：<br>(x+y)+(x-y)=5+1<br>2x=6<br>x=3<br><br>①-②：<br>(x+y)-(x-y)=5-1<br>2y=4<br>y=2<br><br>∴x=3, y=2"
        }
    },
    // ... 继续添加第146-190个知识点
];

// ==================== 第五章：不等式与不等式组（45个知识点）====================
const chapter5 = [
    {
        number: 191,
        title: "不等式的概念",
        tag: "基础",
        tagClass: "basic",
        concepts: [
            { term: "不等式", definition: "用不等号表示大小关系的式子" },
            { term: "不等式的解", definition: "使不等式成立的未知数的值" },
            { term: "解集", definition: "所有解组成的集合" }
        ],
        formulas: [
            "不等号：>、<、≥、≤",
            "注意：≠不是表示大小关系的不等号"
        ],
        examples: {
            question: "判断下列哪些是不等式：<br>(1) x+1>2　(2) x=3　(3) x+y",
            answer: "(1) 是（用>表示大小关系）<br>(2) 不是（是等式）<br>(3) 不是（是代数式，没有不等号）"
        }
    },
    {
        number: 192,
        title: "不等式的性质1",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "性质1", definition: "不等式两边加（或减）同一个数（或式子），不等号方向不变" }
        ],
        formulas: [
            "如果a>b，那么a±c>b±c"
        ],
        examples: {
            question: "若a>b，比较a+3和b+3的大小。",
            answer: "解：<br>∵a>b<br>∴a+3>b+3（不等式性质1）"
        }
    },
    {
        number: 193,
        title: "不等式的性质2和3",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "性质2", definition: "不等式两边乘（或除以）同一个正数，不等号方向不变" },
            { term: "性质3", definition: "不等式两边乘（或除以）同一个负数，不等号方向改变" }
        ],
        formulas: [
            "如果a>b，c>0，那么ac>bc，a/c>b/c",
            "如果a>b，c<0，那么ac<bc，a/c<b/c"
        ],
        warnings: [
            "❌ 乘除负数时忘记改变不等号方向",
            "✅ 乘除负数时，不等号方向必须改变"
        ],
        examples: {
            question: "若a>b，比较-2a和-2b的大小。",
            answer: "解：<br>∵a>b，-2<0<br>∴-2a<-2b（乘负数，不等号方向改变）"
        }
    },
    {
        number: 194,
        title: "一元一次不等式的解法",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "一元一次不等式", definition: "含有一个未知数，未知数的次数是1的不等式" },
            { term: "解法步骤", definition: "去分母→去括号→移项→合并同类项→系数化为1" }
        ],
        formulas: [
            "注意：系数化为1时，",
            "如果系数为负数，不等号方向要改变"
        ],
        examples: {
            question: "解不等式：2x-3<5",
            answer: "解：<br>2x-3<5<br>2x<5+3<br>2x<8<br>x<4"
        }
    },
    {
        number: 195,
        title: "一元一次不等式组的解法",
        tag: "必考",
        tagClass: "important",
        concepts: [
            { term: "不等式组", definition: "由几个一元一次不等式组成的不等式组" },
            { term: "解集", definition: "各个不等式解集的公共部分" }
        ],
        formulas: [
            "解集的确定：",
            "① 同大取大：x>a, x>b → x>max(a,b)",
            "② 同小取小：x<a, x<b → x<min(a,b)",
            "③ 大小小大取中间：a<x<b",
            "④ 大大小小无解：x>a, x<a → 无解"
        ],
        examples: {
            question: "解不等式组：<br>2x-1>x+1<br>x+8<4x-1",
            answer: "解：<br>由2x-1>x+1得：x>2<br>由x+8<4x-1得：9<3x，即x>3<br><br>∴x>3（同大取大）"
        }
    },
    // ... 继续添加第196-235个知识点
];

// ==================== 第六章：数据的收集、整理与描述（40个知识点）====================
const chapter6 = [
    {
        number: 236,
        title: "统计调查的方式",
        tag: "基础",
        tagClass: "basic",
        concepts: [
            { term: "全面调查（普查）", definition: "对所有对象进行调查" },
            { term: "抽样调查", definition: "从总体中抽取样本进行调查" }
        ],
        formulas: [
            "全面调查适用：",
            "- 总体数量较少",
            "- 需要精确数据",
            "- 破坏性小",
            "",
            "抽样调查适用：",
            "- 总体数量较多",
            "- 破坏性大",
            "- 时效性要求高"
        ],
        examples: {
            question: "下列调查适合用全面调查还是抽样调查？<br>(1) 了解全国中学生的视力情况<br>(2) 检测一批灯泡的使用寿命",
            answer: "(1) 抽样调查（总体数量太多）<br>(2) 抽样调查（破坏性大）"
        }
    },
    {
        number: 237,
        title: "总体、个体、样本、样本容量",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "总体", definition: "所要考察对象的全体" },
            { term: "个体", definition: "总体中的每一个考察对象" },
            { term: "样本", definition: "从总体中抽取的一部分个体" },
            { term: "样本容量", definition: "样本中个体的数目（不带单位）" }
        ],
        warnings: [
            "❌ 样本容量带单位",
            "✅ 样本容量只是一个数字，没有单位"
        ],
        examples: {
            question: "为了了解某校2000名学生的视力情况，从中抽取100名学生进行检查，指出总体、个体、样本、样本容量。",
            answer: "总体：2000名学生的视力情况<br>个体：每一名学生的视力情况<br>样本：抽取的100名学生的视力情况<br>样本容量：100"
        }
    },
    {
        number: 238,
        title: "频数与频率",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "频数", definition: "每个类别中数据的个数" },
            { term: "频率", definition: "频数与总数的比值" }
        ],
        formulas: [
            "频率=频数/总数",
            "频数=频率×总数",
            "所有频率之和=1"
        ],
        examples: {
            question: "在一次调查中，50名学生中喜欢数学的有15人，求喜欢数学的频数和频率。",
            answer: "频数=15<br>频率=15/50=0.3"
        }
    },
    {
        number: 239,
        title: "频数分布表",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "频数分布表", definition: "将数据分组后，列出各组的频数的表格" }
        ],
        formulas: [
            "制作步骤：",
            "1. 计算极差（最大值-最小值）",
            "2. 确定组距和组数",
            "3. 列频数分布表"
        ],
        examples: {
            question: "某班40名学生的身高（单位：cm）如下，制作频数分布表。<br>150, 152, 155, 158, 160, ...",
            answer: "步骤：<br>1. 极差=最大值-最小值<br>2. 组距=极差÷组数<br>3. 分组统计频数<br>（具体数据需要完整数据集）"
        }
    },
    {
        number: 240,
        title: "频数分布直方图",
        tag: "重点",
        tagClass: "important",
        concepts: [
            { term: "频数分布直方图", definition: "用小长方形的面积表示各组频数的统计图" }
        ],
        formulas: [
            "小长方形的面积=组距×频数",
            "所有小长方形面积之和=样本容量"
        ],
        examples: {
            question: "频数分布直方图中，各小长方形的面积之和等于什么？",
            answer: "各小长方形的面积之和等于样本容量（数据的总个数）。"
        }
    },
    // ... 继续添加第241-275个知识点
];

// ==================== 组装完整知识点库 ====================
knowledgeBase.math = [
    ...chapter1,
    ...chapter2,
    ...chapter3,
    ...chapter4,
    ...chapter5,
    ...chapter6
];

// 导出
module.exports = knowledgeBase;
