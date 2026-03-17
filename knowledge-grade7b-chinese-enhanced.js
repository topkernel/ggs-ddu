// 7年级下学期语文知识点库（优化增强版）
// 每个知识点包含：核心要点 + 3道例题 + 3道举一反三 + 易错提醒

const grade7bChineseEnhanced = [
    // ==================== 第一单元：杰出人物 ====================
    
    {
        title: "1.1 邓稼先 - 人物形象分析",
        tag: "必考",
        tagClass: "important",
        unit: "第一单元",
        difficulty: "★★★",
        content: `
            <h4>🎯 核心要点</h4>
            <ul>
                <li><strong>爱国精神：</strong>1950年获博士学位后，放弃国外优越条件，毅然回国</li>
                <li><strong>奉献精神：</strong>1958-1986年，28年隐姓埋名，投身核武器研究</li>
                <li><strong>严谨态度：</strong>对工作精益求精，一丝不苟，追求完美</li>
                <li><strong>朴实品格：</strong>生活简朴，淡泊名利，不张扬</li>
            </ul>

            <div class="advanced">
                <h4>⭐ 写作手法深度分析</h4>
                <p><strong>1. 对比手法</strong></p>
                <table border="1" style="width:100%; border-collapse:collapse; margin:10px 0;">
                    <tr style="background:#f0f0f0;">
                        <th style="padding:8px;">对比角度</th>
                        <th style="padding:8px;">邓稼先</th>
                        <th style="padding:8px;">奥本海默</th>
                    </tr>
                    <tr>
                        <td style="padding:8px;">性格</td>
                        <td style="padding:8px;">朴实谦逊</td>
                        <td style="padding:8px;">锋芒毕露</td>
                    </tr>
                    <tr>
                        <td style="padding:8px;">处事</td>
                        <td style="padding:8px;">低调内敛</td>
                        <td style="padding:8px;">善于社交</td>
                    </tr>
                    <tr>
                        <td style="padding:8px;">成就</td>
                        <td style="padding:8px;">原子弹、氢弹</td>
                        <td style="padding:8px;">原子弹</td>
                    </tr>
                </table>
                
                <p><strong>2. 侧面描写</strong></p>
                <ul>
                    <li>通过他人评价烘托：同事、领导的评价</li>
                    <li>环境描写衬托：戈壁滩的艰苦环境</li>
                    <li>对比描写：与奥本海默对比</li>
                </ul>

                <p><strong>3. 小标题的作用</strong></p>
                <ul>
                    <li>结构清晰：六个部分层次分明</li>
                    <li>主题突出：每个小标题概括一个主题</li>
                    <li>便于阅读：读者可快速定位</li>
                </ul>
            </div>

            <div class="example">
                <h5>📝 例题1（基础）</h5>
                <strong>题目：</strong>文章为什么要写奥本海默？<br><br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>【参考答案】</strong><br>
                    通过对比，突出邓稼先的品格特点：<br>
                    1. <strong>性格对比：</strong>奥本海默锋芒毕露，邓稼先朴实谦逊<br>
                    2. <strong>处事对比：</strong>奥本海默善于社交，邓稼先专注科研<br>
                    3. <strong>共同点：</strong>两者都是杰出科学家，但性格迥异<br>
                    4. <strong>表达效果：</strong>对比使人物形象更鲜明，更能突出邓稼先的优秀品质<br><br>
                    <strong>【答题技巧】</strong><br>
                    答对比作用题的步骤：<br>
                    ① 明确对比的对象<br>
                    ② 分析对比的内容<br>
                    ③ 总结对比的作用
                </div>
            </div>

            <div class="example">
                <h5>📝 例题2（中等）</h5>
                <strong>题目：</strong>文中写道"邓稼先是中国几千年传统文化所孕育的儿子"，如何理解这句话？<br><br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>【参考答案】</strong><br>
                    这句话高度概括了邓稼先的品格与中国传统文化的关系：<br><br>
                    <strong>1. 传统文化的影响：</strong><br>
                    • 儒家思想：仁爱、忠诚、责任担当<br>
                    • 道家思想：淡泊名利、返璞归真<br>
                    • 爱国传统：家国情怀、舍小家为大家<br><br>
                    <strong>2. 具体体现：</strong><br>
                    • 忠诚：对国家的忠诚，28年隐姓埋名<br>
                    • 责任：勇于承担责任，为国家核事业奉献<br>
                    • 谦逊：不张扬、不炫耀，默默奉献<br>
                    • 淡泊：生活简朴，不追求个人名利<br><br>
                    <strong>3. 表达效果：</strong><br>
                    这句话升华了人物形象，将邓稼先个人品质上升到文化传承的高度
                </div>
            </div>

            <div class="example">
                <h5>📝 例题3（提高）</h5>
                <strong>题目：</strong>文章第六部分引用《吊古战场文》有什么作用？<br><br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>【参考答案】</strong><br>
                    <strong>1. 内容作用：</strong><br>
                    • 营造悲壮氛围：古战场的荒凉、惨烈<br>
                    • 烘托工作环境：戈壁滩的艰苦、寂寞<br>
                    • 暗示工作性质：核武器研究的危险、重大<br><br>
                    <strong>2. 结构作用：</strong><br>
                    • 承上启下：承接上文的工作环境描写<br>
                    • 引出下文：引出邓稼先的奉献精神<br><br>
                    <strong>3. 主题作用：</strong><br>
                    • 深化主题：突出邓稼先为国奉献的伟大<br>
                    • 情感表达：表达作者的敬仰之情<br><br>
                    <strong>4. 文化作用：</strong><br>
                    • 增加文化底蕴：古典文学与现代人物结合<br>
                    • 提升文章格调：使文章更具文学性
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>练习1：</strong>文章为什么要用"两弹元勋"这个称号来称呼邓稼先？</p>
                <button class="show-answer" onclick="toggleAnswer(this)">查看提示</button>
                <div class="answer">
                    <strong>提示：</strong>从成就、贡献、历史地位三个角度思考
                </div>

                <p><strong>练习2：</strong>比较邓稼先与奥本海默，谈谈科学家应该具备怎样的品质？</p>
                <button class="show-answer" onclick="toggleAnswer(this)">查看提示</button>
                <div class="answer">
                    <strong>提示：</strong>可以从专业能力、人格魅力、社会责任等方面分析
                </div>

                <p><strong>练习3：</strong>如果你是记者，要采访邓稼先的同事，你会问哪些问题？请设计3个问题。</p>
                <button class="show-answer" onclick="toggleAnswer(this)">查看提示</button>
                <div class="answer">
                    <strong>提示：</strong>问题应该围绕工作态度、人格魅力、重大贡献等方面设计
                </div>
            </div>

            <div class="warning">
                <h5>⚠️ 易错提醒</h5>
                <ul>
                    <li><strong>易错1：</strong>混淆"对比"和"衬托"<br>
                    <span style="color:#666;">对比是两事物相互比较，衬托是用一事物突出另一事物</span></li>
                    <li><strong>易错2：</strong>答题时只答内容，忽略结构和主题作用<br>
                    <span style="color:#666;">答题要全面：内容+结构+主题</span></li>
                    <li><strong>易错3：</strong>分析人物形象时只列举特点，不结合文本<br>
                    <span style="color:#666;">必须结合文章具体内容分析</span></li>
                </ul>
            </div>

            <div class="tips">
                <h5>💡 学习建议</h5>
                <ul>
                    <li>熟读课文，理解邓稼先的主要品质</li>
                    <li>掌握对比、侧面描写等写作手法</li>
                    <li>学会从内容、结构、主题三个角度答题</li>
                    <li>积累描写人物的词语和句式</li>
                </ul>
            </div>
        `
    },

    {
        title: "1.2 邓稼先 - 重点字词",
        tag: "基础",
        tagClass: "basic",
        unit: "第一单元",
        difficulty: "★",
        content: `
            <h4>🎯 重点字词</h4>
            <table border="1" style="width:100%; border-collapse:collapse;">
                <tr style="background:#f0f0f0;">
                    <th style="padding:8px;">词语</th>
                    <th style="padding:8px;">读音</th>
                    <th style="padding:8px;">释义</th>
                    <th style="padding:8px;">例句</th>
                </tr>
                <tr>
                    <td style="padding:8px;">元勋</td>
                    <td style="padding:8px;">yuán xūn</td>
                    <td style="padding:8px;">立大功的人</td>
                    <td style="padding:8px;">邓稼先是中国核武器的元勋。</td>
                </tr>
                <tr>
                    <td style="padding:8px;">选聘</td>
                    <td style="padding:8px;">xuǎn pìn</td>
                    <td style="padding:8px;">挑选聘用</td>
                    <td style="padding:8px;">他被选聘到核武器研究所。</td>
                </tr>
                <tr>
                    <td style="padding:8px;">谣言</td>
                    <td style="padding:8px;">yáo yán</td>
                    <td style="padding:8px;">没有事实根据的消息</td>
                    <td style="padding:8px;">不要传播谣言。</td>
                </tr>
                <tr>
                    <td style="padding:8px;">背诵</td>
                    <td style="padding:8px;">bèi sòng</td>
                    <td style="padding:8px;">凭记忆念出</td>
                    <td style="padding:8px;">他背诵了《吊古战场文》。</td>
                </tr>
                <tr>
                    <td style="padding:8px;">昆仑</td>
                    <td style="padding:8px;">kūn lún</td>
                    <td style="padding:8px;">山名，在新疆、西藏之间</td>
                    <td style="padding:8px;">昆仑山是中国著名的山脉。</td>
                </tr>
                <tr>
                    <td style="padding:8px;">挚友</td>
                    <td style="padding:8px;">zhì yǒu</td>
                    <td style="padding:8px;">亲密的朋友</td>
                    <td style="padding:8px;">杨振宁是邓稼先的挚友。</td>
                </tr>
                <tr>
                    <td style="padding:8px;">可歌可泣</td>
                    <td style="padding:8px;">kě gē kě qì</td>
                    <td style="padding:8px;">值得歌颂赞美，使人感动流泪</td>
                    <td style="padding:8px;">他的事迹可歌可泣。</td>
                </tr>
                <tr>
                    <td style="padding:8px;">鞠躬尽瘁</td>
                    <td style="padding:8px;">jū gōng jìn cuì</td>
                    <td style="padding:8px;">指小心谨慎，贡献全部精力</td>
                    <td style="padding:8px;">他为祖国鞠躬尽瘁。</td>
                </tr>
            </table>

            <div class="example">
                <h5>📝 例题1</h5>
                <strong>题目：</strong>下列加点字注音正确的一项是（　）<br>
                A. 元勋（xūn）　选聘（pìng）<br>
                B. 谣言（yáo）　背诵（sòng）<br>
                C. 昆仑（lún）　挚友（zhì）<br>
                D. 鞠躬尽瘁（cuì）　马革裹尸（guǒ）<br><br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>答案：B</strong><br>
                    A. 聘应读pìn<br>
                    C. 昆应读kūn<br>
                    D. 裹应读guǒ（正确）<br>
                    所以选B
                </div>
            </div>

            <div class="example">
                <h5>📝 例题2</h5>
                <strong>题目：</strong>解释下列词语在文中的含义。<br>
                （1）元勋：__________<br>
                （2）鞠躬尽瘁：__________<br><br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    （1）元勋：指邓稼先为中国核武器事业做出了重大贡献，是核武器研究的开创者。<br>
                    （2）鞠躬尽瘁：形容邓稼先小心谨慎，为祖国的核武器事业贡献了全部精力。
                </div>
            </div>

            <div class="example">
                <h5>📝 例题3</h5>
                <strong>题目：</strong>用"可歌可泣"和"鞠躬尽瘁"各造一个句子。<br><br>
                <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                <div class="answer">
                    <strong>可歌可泣：</strong>抗震救灾中，解放军战士的英雄事迹可歌可泣。<br>
                    <strong>鞠躬尽瘁：</strong>袁隆平院士为杂交水稻研究鞠躬尽瘁，解决了亿万人的吃饭问题。
                </div>
            </div>

            <div class="example">
                <h5>🔄 举一反三</h5>
                <p><strong>练习1：</strong>找出文中所有成语，并解释其含义。</p>
                <p><strong>练习2：</strong>选择3个重点词语，分别造句。</p>
                <p><strong>练习3：</strong>辨析"挚友"与"朋友"的区别。</p>
            </div>

            <div class="warning">
                <h5>⚠️ 易错提醒</h5>
                <ul>
                    <li><strong>易错字：</strong>聘（pìn）不要读成pìng</li>
                    <li><strong>易错字：</strong>昆（kūn）不要读成lún</li>
                    <li><strong>成语书写：</strong>鞠躬尽瘁，不要写成"鞠躬尽粹"</li>
                </ul>
            </div>
        `
    },

    // 继续添加更多优化后的知识点...
];

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = grade7bChineseEnhanced;
}
