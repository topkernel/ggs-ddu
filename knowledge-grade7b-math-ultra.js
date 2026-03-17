/**
 * 7年级下学期数学超详细知识点库
 * 深圳教材-北师大版
 * 共6章，120+知识点
 */

const grade7BMathUltra = {
  // 第一章：整式的运算
  chapter1: {
    title: "第一章 整式的运算",
    knowledgePoints: [
      {
        id: "1.1", title: "用字母表示数", category: "概念理解",
        content: {
          concept: { 
            definition: "用字母可以表示任意的数，用字母表示数是代数的基础。字母可以表示：数量关系、运算律、公式、性质等。",
            keyPoints: [
              "字母可以表示任何数",
              "字母表示数时，乘号可以省略或用·表示",
              "数字与字母相乘，数字写在字母前面",
              "除法写成分数形式"
            ],
            examples: [
              "加法交换律：a + b = b + a",
              "乘法分配律：a(b + c) = ab + ac",
              "正方形面积：S = a²"
            ]
          },
          formulas: [],
          examples: [
            { type: "基础", problem: "用字母表示：比x的3倍少5的数", solution: "3x - 5", steps: ["理解'比x的3倍少5'即3x - 5"] },
            { type: "中等", problem: "用字母表示：a与b的和的平方", solution: "(a+b)² = a²+2ab+b²", steps: ["先求和：a+b", "再平方"] },
            { type: "提高", problem: "三个连续偶数的和", solution: "设最小为n，则和为n+(n+2)+(n+4)=3n+6", steps: ["设最小偶数为n", "第二个n+2", "第三个n+4", "求和"] }
          ],
          variants: [
            { problem: "用字母表示：m的倒数与n的和", answer: "1/m + n" },
            { problem: "用字母表示：a的相反数与b的绝对值的差", answer: "-a - |b|" },
            { problem: "用字母表示：x的平方与y的3倍的积", answer: "3xy²" }
          ],
          mistakes: [
            { mistake: "混淆'比...少'和'比...多'", correction: "'比x少5'是x-5，'比x多5'是x+5" },
            { mistake: "省略乘号时忘记数字应在字母前", correction: "3×a应写成3a，不是a3" },
            { mistake: "将字母与数字同等对待", correction: "数字是具体值，字母是未知数" }
          ],
          examLink: "用字母表示数是代数基础，在中考中常与方程结合考查，分值约3-5分"
        }
      },
      {
        id: "1.2", title: "单项式与多项式", category: "概念理解",
        content: {
          concept: { 
            definition: "单项式：由数或字母的积组成的代数式叫做单项式。单独的一个数或一个字母也是单项式。\n多项式：几个单项式的和叫做多项式。",
            details: [
              "单项式的系数：单项式中的数字因数",
              "单项式的次数：所有字母的指数之和",
              "多项式的项：多项式中每个单项式",
              "多项式的次数：次数最高项的次数",
              "常数项：不含字母的项"
            ],
            examples: [
              "单项式：3x², -5ab, 7, -x",
              "多项式：3x² + 2x - 5（二次三项式）"
            ]
          },
          formulas: [],
          examples: [
            { type: "基础", problem: "判断：3x, x+1, -5, 1/x哪些是单项式？", solution: "3x和-5是，x+1和1/x不是", steps: ["3x是数与字母的积", "-5是单独的数", "x+1是多项式", "1/x是除法形式"] },
            { type: "中等", problem: "单项式3a²b³的系数和次数", solution: "系数3，次数5", steps: ["系数是数字因数=3", "次数=a的指数2+b的指数3=5"] },
            { type: "提高", problem: "多项式2x³-3x²y+4xy²-y³是几次几项式？", solution: "三次四项式", steps: ["各项次数：2x³(3次), -3x²y(3次), 4xy²(3次), -y³(3次)", "最高次数3，是三次式", "共有4项，是四项式"] }
          ],
          variants: [
            { problem: "-x²y是单项式吗？系数和次数？", answer: "是，系数-1，次数3" },
            { problem: "x⁴-3x²+2是几次几项式？", answer: "四次三项式" },
            { problem: "5x³-2x²+x-7的常数项？", answer: "-7" }
          ],
          mistakes: [
            { mistake: "遗漏单项式的符号", correction: "系数包括前面的符号，-3x²的系数是-3" },
            { mistake: "混淆单项式次数和字母指数", correction: "次数是所有字母指数之和，不是某个字母的指数" },
            { mistake: "忘记常数项是多项式的一项", correction: "常数项也是项，如x²+3x-5有3项" }
          ],
          examLink: "单项式、多项式的概念是整式运算的基础，中考常考系数、次数的识别，分值约3分"
        }
      },
      {
        id: "1.3", title: "整式的加减", category: "运算技能",
        content: {
          concept: { definition: "合并同类项：系数相加，字母不变。去括号：+直接去，-全变号。", formulas: [] },
          examples: [
            { type: "基础", problem: "3x+5x-2x", solution: "6x", steps: ["合并"] },
            { type: "中等", problem: "3(a+b)-2(a-b)", solution: "a+5b", steps: ["去括号合并"] },
            { type: "提高", problem: "2x^2-3x+5-(x^2-2x+3)", solution: "x^2-x+2", steps: ["去括号合并"] }
          ],
          variants: [{ problem: "4(x+y)-3(x-y)", answer: "x+7y" }],
          mistakes: [{ mistake: "去括号错", correction: "-变号" }],
          examLink: "中考必考"
        }
      },
      {
        id: "1.4", title: "同底数幂乘法", category: "运算技能",
        content: { concept: { definition: "同底数幂相乘，底不变指数相加。", formula: "a^m*a^n=a^(m+n)" }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.5", title: "幂的乘方", category: "运算技能",
        content: { concept: { definition: "幂的乘方，底不变指数相乘。", formula: "(a^m)^n=a^(mn)" }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.6", title: "积的乘方", category: "运算技能",
        content: { concept: { definition: "积的乘方分别乘方。", formula: "(ab)^n=a^n*b^n" }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.7", title: "单项式乘单项式", category: "运算技能",
        content: { concept: { definition: "系数相乘，同底数幂相乘，单独的字母保留。", formula: "a^m*b^n=a^mb^n" }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.8", title: "单项式乘多项式", category: "运算技能",
        content: { concept: { definition: "用单项式乘多项式每一项再相加。", formula: "a(b+c+d)=ab+ac+ad" }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.9", title: "多项式乘多项式", category: "运算技能",
        content: { concept: { definition: "用每一项乘每一项再合并。", formula: "(a+b)(m+n)=am+an+bm+bn" }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.10", title: "平方差公式", category: "公式应用",
        content: { concept: { definition: "(a+b)(a-b)=a^2-b^2", formula: "(a+b)(a-b)=a^2-b^2" }, examples: [
          { type: "基础", problem: "(x+3)(x-3)", solution: "x^2-9" },
          { type: "中等", problem: "(2x+5)(2x-5)", solution: "4x^2-25" }
        ], variants: [], mistakes: [], examLink: "中考必考" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.11", title: "完全平方公式", category: "公式应用",
        content: { concept: { definition: "(a+b)^2=a^2+2ab+b^2, (a-b)^2=a^2-2ab+b^2", formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.12", title: "整式除法", category: "运算技能",
        content: { concept: { definition: "同底数幂相除，底不变指数相减。", formula: "a^m/a^n=a^(m-n)" }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.13", title: "零指数幂负指数幂", category: "运算技能",
        content: { concept: { definition: "a^0=1(a≠0), a^(-p)=1/a^p", formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.14", title: "科学计数法", category: "概念理解",
        content: { concept: { definition: "a×10^n(1≤|a|<10)", formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.15", title: "整式综合应用", category: "综合应用",
        content: { examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.16", title: "幂的大小比较", category: "综合应用",
        content: { examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.17", title: "完全平方变形", category: "公式应用",
        content: { formulas: ["a^2+b^2=(a+b)^2-2ab"] }, examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.18", title: "混合运算", category: "运算技能",
        content: { examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.19", title: "单元复习", category: "单元总结",
        content: { examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      },
      {
        id: "1.20", title: "整式运算总结", category: "单元总结",
        content: { examples: [], variants: [], mistakes: [], examLink: "" },
        variants: [], mistakes: [], examLink: ""
      }
    ]
  },
  // 第二章：平行线与相交线
  chapter2: {
    title: "第二章 平行线与相交线",
    knowledgePoints: [
      { id: "2.1", title: "余角与补角", category: "概念理解", content: { concept: { definition: "余角90度，补角180度", formulas: [] }, examples: [{ type: "基础", problem: "35度余角补角", solution: "55度和145度" }], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.2", title: "对顶角", category: "概念理解", content: { concept: { definition: "对顶角相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.3", title: "垂线", category: "概念理解", content: { concept: { definition: "垂直90度，点到距离是垂线段" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.4", title: "三线八角", category: "概念理解", content: { concept: { definition: "同位角F形，内错角Z形，同旁内角U形" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.5", title: "平行线判定", category: "几何证明", content: { concept: { definition: "同位角等平行，内错角等平行，同旁内角互补平行" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.6", title: "平行线性质", category: "几何证明", content: { concept: { definition: "平行同位角等，内错角等，同旁内角互补" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.7", title: "平行线综合", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.8", title: "平移", category: "几何变换", content: { concept: { definition: "对应点连线平行相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.9", title: "命题定理证明", category: "逻辑推理", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.10", title: "平行线单元总结", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.11", title: "垂线段", category: "概念理解", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.12", title: "同位角判定", category: "几何证明", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.13", title: "内错角判定", category: "几何证明", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.14", title: "同旁内角判定", category: "几何证明", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.15", title: "平行性质应用", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.16", title: "平移作图", category: "作图技能", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.17", title: "平移性质", category: "几何性质", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.18", title: "证明步骤", category: "逻辑推理", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.19", title: "几何语言", category: "逻辑推理", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "2.20", chapter2总结, category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" }
    ]
  },
  // 第三章：三角形
  chapter3: {
    title: "第三章 三角形",
    knowledgePoints: [
      { id: "3.1", title: "三角形的边", category: "概念理解", content: { concept: { definition: "三边关系:任意两边之和大于第三边" }, examples: [{ type: "基础", problem: "3,4,5能组成三角形", solution: "能", steps: ["3+4>5"] }], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.2", title: "三角形的角", category: "概念理解", content: { concept: { definition: "内角和180度", formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.3", title: "三角形高", category: "概念理解", content: { concept: { definition: "从顶点到对边垂线" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.4", title: "三角形中线", category: "概念理解", content: { concept: { definition: "顶点到对边中点" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.5", title: "角平分线", category: "概念理解", content: { concept: { definition: "平分角的线段" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.6", title: "全等三角形", category: "概念理解", content: { concept: { definition: "完全重合的三角形" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.7", title: "SSS判定", category: "几何证明", content: { concept: { definition: "三边对应相等全等" }, formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.8", title: "SAS判定", category: "几何证明", content: { concept: { definition: "两边夹角对应相等" }, formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.9", title: "ASA判定", category: "几何证明", content: { concept: { definition: "两角夹边对应相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.10", title: "AAS判定", category: "几何证明", content: { concept: { definition: "两角和一边对应相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.11", title: "HL判定", category: "几何证明", content: { concept: { definition: "直角三角形斜边直角边对应相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.12", title: "等腰三角形", category: "概念理解", content: { concept: { definition: "两腰相等，两底角相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.13", title: "等边三角形", category: "概念理解", content: { concept: { definition: "三边相等，三角60度" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.14", title: "角平分线性质", category: "几何性质", content: { concept: { definition: "角平分线上点到两边距离相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.15", title: "线段垂直平分线", category: "几何性质", content: { concept: { definition: "垂直平分线上点到两端点距离相等" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.16", title: "三角形稳定性", category: "概念理解", content: { concept: { definition: "三角形具有稳定性" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.17", title: "三角形综合", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.18", title: "全等证明", category: "几何证明", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.19", title: "等腰三角形性质", category: "几何性质", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "3.20", title: "三角形单元总结", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" }
    ]
  },
  // 第四章：变量之间的关系
  chapter4: {
    title: "第四章 变量之间的关系",
    knowledgePoints: [
      { id: "4.1", title: "变量与常量", category: "概念理解", content: { concept: { definition: "常量是不变的量，变量是可变的量" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.2", title: "函数概念", category: "概念理解", content: { concept: { definition: "对于x每个值，y有唯一值" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.3", title: "函数表示法", category: "概念理解", content: { concept: { definition: "解析式法、列表法、图象法" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.4", title: "函数的图象", category: "图象理解", content: { concept: { definition: "自变量为横坐标，函数值为纵坐标的点" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.5", title: "正比例函数", category: "函数类型", content: { concept: { definition: "y=kx(k≠0)" }, formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.6", title: "一次函数", category: "函数类型", content: { concept: { definition: "y=kx+b(k≠0)" }, formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.7", title: "一次函数图象", category: "图象理解", content: { concept: { definition: "k决定倾斜，b决定截距" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.8", title: "一次函数性质", category: "函数性质", content: { concept: { definition: "k>0增大，k<0减小" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.9", title: "一次函数与方程", category: "综合应用", content: { concept: { definition: "y=0时是方程" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.10", title: "一次函数与不等式", category: "综合应用", content: { concept: { definition: "y>0时是不等式" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.11", title: "待定系数法", category: "方法技能", content: { concept: { definition: "设系数代点求" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.12", title: "二元一次方程组与函数", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.13", title: "实际问题", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.14", title: "函数与几何", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.15", title: "函数最值", category: "函数性质", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.16", title: "函数对称性", category: "函数性质", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.17", title: "函数应用题", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.18", title: "函数综合", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.19", title: "函数复习", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "4.20", title: "变量关系总结", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" }
    ]
  },
  // 第五章：生活中的轴对称
  chapter5: {
    title: "第五章 生活中的轴对称",
    knowledgePoints: [
      { id: "5.1", title: "轴对称图形", category: "概念理解", content: { concept: { definition: "沿对称轴折叠能重合" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.2", title: "轴对称", category: "概念理解", content: { concept: { definition: "关于直线对称" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.3", title: "轴对称性质", category: "几何性质", content: { concept: { definition: "对应点连线被对称轴垂直平分" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.4", title: "轴对称作图", category: "作图技能", content: { concept: { definition: "找关键点，作对称点，连线" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.5", title: "对称点坐标", category: "坐标应用", content: { concept: { definition: "x轴对称y变号，y轴对称x变号" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.6", title: "等腰三角形对称性", category: "几何性质", content: { concept: { definition: "三线合一" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.7", title: "等边三角形对称性", category: "几何性质", content: { concept: { definition: "3条对称轴" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.8", title: "轴对称与全等", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.9", title: "轴对称应用", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.10", title: "将军饮马问题", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.11", title: "轴对称图案", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.12", title: "轴对称单元总结", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.13", title: "轴对称复习", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.14", title: "对称轴性质", category: "几何性质", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.15", title: "等腰判定", category: "几何证明", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.16", title: "等边判定", category: "几何证明", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.17", title: "轴对称证明", category: "几何证明", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.18", title: "轴对称计算", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.19", title: "轴对称综合", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "5.20", title: "第五章总结", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" }
    ]
  },
  // 第六章：概率初步
  chapter6: {
    title: "第六章 概率初步",
    knowledgePoints: [
      { id: "6.1", title: "随机事件", category: "概念理解", content: { concept: { definition: "可能发生也可能不发生" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.2", title: "必然事件不可能事件", category: "概念理解", content: { concept: { definition: "必然发生和必然不发生" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.3", title: "概率意义", category: "概念理解", content: { concept: { definition: "P(A)=m/n", formulas: [] }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.4", title: "概率范围", category: "概念理解", content: { concept: { definition: "0≤P≤1" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.5", title: "列举法", category: "概率计算", content: { concept: { definition: "列表或树状图" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.6", title: "列表法", category: "概率计算", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.7", title: "树状图法", category: "概率计算", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.8", title: "频率与概率", category: "概念理解", content: { concept: { definition: "频率稳定于概率" }, examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.9", title: "概率应用", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.10", title: "游戏公平性", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.11", title: "概率综合", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.12", title: "概率复习", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.13", title: "等可能事件", category: "概念理解", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.14", title: "不放回抽样", category: "概率计算", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.15", title: "放回抽样", category: "概率计算", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.16", title: "概率与统计", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.17", title: "概率与几何", category: "综合应用", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.18", title: "概率计算技巧", category: "方法技能", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.19", title: "概率单元综合", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" }, variants: [], mistakes: [], examLink: "" },
      { id: "6.20", title: "概率总结", category: "单元总结", content: { examples: [], variants: [], mistakes: [], examLink: "" } }
    ]
  }
};

module.exports = grade7BMathUltra;