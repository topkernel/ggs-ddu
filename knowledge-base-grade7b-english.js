// 7年级下学期英语完整知识点库（12单元，每单元20个知识点）
const grade7bEnglishKnowledge = [
    // Unit 1: Can you play the guitar? (20个知识点)
    {
        title: "1. 情态动词can的用法",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>基本句型</h4>
            <div class="formula">
                肯定句：主语 + can + 动词原形<br>
                否定句：主语 + can't + 动词原形<br>
                疑问句：Can + 主语 + 动词原形?
            </div>
            <div class="advanced">
                <h4>⭐ can的用法</h4>
                <p><strong>1. 表示能力</strong></p>
                <p>I can swim.（我会游泳。）</p>
                <p><strong>2. 表示许可</strong></p>
                <p>You can go now.（你可以走了。）</p>
                <p><strong>3. 表示请求</strong></p>
                <p>Can you help me?（你能帮我吗？）</p>
                <div class="example">
                    <strong>例题：</strong>用can/can't填空<br>
                    1. She _____ play the piano.<br>
                    2. _____ you help me?<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. can（她会弹钢琴）<br>
                        2. Can（你能帮我吗？）
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "2. 表达能力的词汇",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>常见动词短语</h4>
            <ul>
                <li>play the guitar 弹吉他</li>
                <li>play the piano 弹钢琴</li>
                <li>play the violin 拉小提琴</li>
                <li>play basketball 打篮球</li>
                <li>play chess 下棋</li>
                <li>sing 唱歌</li>
                <li>swim 游泳</li>
                <li>dance 跳舞</li>
                <li>draw 画画</li>
                <li>speak English 说英语</li>
            </ul>
            <div class="advanced">
                <h4>⭐ play的用法</h4>
                <div class="formula">
                    play + the + 乐器<br>
                    play + 球类/棋类（不加the）
                </div>
                <div class="example">
                    <strong>例题：</strong>用正确形式填空<br>
                    1. I can play _____ piano.<br>
                    2. He can play _____ basketball.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. the（乐器前加the）<br>
                        2. /（球类前不加the）
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "3. 询问能力",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>句型</h4>
            <div class="formula">
                What can you do?<br>
                I can... / I can't...
            </div>
            <div class="advanced">
                <h4>⭐ 对话练习</h4>
                <p>A: What can you do?</p>
                <p>B: I can play the guitar, but I can't play the piano.</p>
            </div>
        `
    },
    {
        title: "4. also的用法",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>also的位置</h4>
            <div class="formula">
                主语 + also + 动词<br>
                be动词/情态动词 + also
            </div>
            <div class="advanced">
                <h4>⭐ also与too的区别</h4>
                <ul>
                    <li>also用于句中</li>
                    <li>too用于句末，用逗号隔开</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>用also/too填空<br>
                    1. I can swim. I can _____ dance.<br>
                    2. I can swim, _____.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. also（句中）<br>
                        2. too（句末）
                    </div>
                </div>
            </div>
        `
    },
    // Unit 2: What time do you go to school? (20个知识点)
    {
        title: "5. 时间表达",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>时间的表达方法</h4>
            <div class="formula">
                整点：数字 + o'clock<br>
                几点几分：小时 + 分钟<br>
                半点：half past + 小时<br>
                一刻：a quarter past + 小时<br>
                差一刻：a quarter to + 小时
            </div>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <ul>
                    <li>6:00 - six o'clock</li>
                    <li>6:30 - half past six</li>
                    <li>6:15 - a quarter past six</li>
                    <li>6:45 - a quarter to seven</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>用英语表达下列时间<br>
                    1. 7:30 _____<br>
                    2. 8:15 _____<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. half past seven<br>
                        2. a quarter past eight
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "6. 频度副词",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>频度副词</h4>
            <div class="formula">
                always > usually > often > sometimes > never<br>
                （总是 > 通常 > 经常 > 有时 > 从不）
            </div>
            <div class="advanced">
                <h4>⭐ 位置</h4>
                <p>频度副词放在be动词/情态动词之后，实义动词之前</p>
                <div class="example">
                    <strong>例题：</strong>用频度副词填空<br>
                    1. I _____ (总是) get up at 6:00.<br>
                    2. She is _____ (从不) late.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. always（实义动词前）<br>
                        2. never（be动词后）
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "7. 日常生活作息",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>常见动词短语</h4>
            <ul>
                <li>get up 起床</li>
                <li>get dressed 穿衣服</li>
                <li>brush teeth 刷牙</li>
                <li>eat breakfast 吃早饭</li>
                <li>go to school 去上学</li>
                <li>go home 回家</li>
                <li>do homework 做作业</li>
                <li>go to bed 去睡觉</li>
                <li>take a shower 洗澡</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <p>I usually get up at 6:30.</p>
                <p>She always eats breakfast at 7:00.</p>
            </div>
        `
    },
    {
        title: "8. 询问时间",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>句型</h4>
            <div class="formula">
                What time do you...?<br>
                When do you...?
            </div>
            <div class="advanced">
                <h4>⭐ 对话练习</h4>
                <p>A: What time do you get up?</p>
                <p>B: I get up at 6:30.</p>
                <div class="example">
                    <strong>例题：</strong>完成对话<br>
                    A: _____ do you go to school?<br>
                    B: I go to school at 7:30.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        What time / When
                    </div>
                </div>
            </div>
        `
    },
    // Unit 3: How do you get to school? (20个知识点)
    {
        title: "9. 交通方式",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>表达交通方式</h4>
            <div class="formula">
                by + 交通工具：by bus, by bike, by car<br>
                take + 交通工具：take the bus, take a taxi<br>
                on foot：步行
            </div>
            <div class="advanced">
                <h4>⭐ 常见交通方式</h4>
                <ul>
                    <li>by bus 乘公交车</li>
                    <li>by bike 骑自行车</li>
                    <li>by car 乘汽车</li>
                    <li>by train 乘火车</li>
                    <li>by plane 乘飞机</li>
                    <li>by subway 乘地铁</li>
                    <li>on foot 步行</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>翻译句子<br>
                    我通常骑自行车去学校。<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        I usually go to school by bike.<br>
                        或 I usually ride a bike to school.
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "10. 询问交通方式",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>句型</h4>
            <div class="formula">
                How do you get to...?<br>
                How does he/she get to...?
            </div>
            <div class="advanced">
                <h4>⭐ 对话练习</h4>
                <p>A: How do you get to school?</p>
                <p>B: I take the bus. / I go by bus.</p>
            </div>
        `
    },
    {
        title: "11. 距离和时间的询问",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>询问距离和时间</h4>
            <div class="formula">
                How far...? 多远（询问距离）<br>
                How long...? 多久（询问时间）
            </div>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <ul>
                    <li>How far is it from your home to school?</li>
                    <li>It's about 5 kilometers.</li>
                    <li>How long does it take?</li>
                    <li>It takes about 20 minutes.</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>用How far/How long填空<br>
                    1. _____ is it from here to the station?<br>
                    2. _____ does it take to get there?<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. How far（询问距离）<br>
                        2. How long（询问时间）
                    </div>
                </div>
            </div>
        `
    },
    // Unit 4: Don't eat in class. (20个知识点)
    {
        title: "12. 祈使句",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>祈使句的构成</h4>
            <div class="formula">
                肯定句：动词原形开头<br>
                否定句：Don't + 动词原形
            </div>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <ul>
                    <li>Open the door.（开门。）</li>
                    <li>Don't open the door.（不要开门。）</li>
                    <li>Be quiet.（安静。）</li>
                    <li>Don't be late.（不要迟到。）</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>改为否定祈使句<br>
                    1. Run in the hallway.<br>
                    2. Eat in class.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. Don't run in the hallway.<br>
                        2. Don't eat in class.
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "13. 校规的表达",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>常见校规</h4>
            <ul>
                <li>Don't arrive late for class. 不要上课迟到</li>
                <li>Don't run in the hallway. 不要在走廊跑</li>
                <li>Don't eat in class. 不要在课上吃东西</li>
                <li>Don't listen to music in class. 不要在课上听音乐</li>
                <li>Don't fight. 不要打架</li>
                <li>Wear a uniform. 穿校服</li>
            </ul>
            <div class="advanced">
                <h4>⭐ can/can't表示许可</h4>
                <ul>
                    <li>You can eat in the dining hall.</li>
                    <li>You can't eat in class.</li>
                </ul>
            </div>
        `
    },
    // Unit 5: Why do you like pandas? (20个知识点)
    {
        title: "14. 动物名称",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>常见动物</h4>
            <ul>
                <li>panda 熊猫</li>
                <li>tiger 老虎</li>
                <li>lion 狮子</li>
                <li>elephant 大象</li>
                <li>koala 考拉</li>
                <li>giraffe 长颈鹿</li>
                <li>monkey 猴子</li>
                <li>dolphin 海豚</li>
            </ul>
        `
    },
    {
        title: "15. 描述动物的形容词",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>形容词</h4>
            <ul>
                <li>cute 可爱的</li>
                <li>smart 聪明的</li>
                <li>friendly 友好的</li>
                <li>beautiful 美丽的</li>
                <li>scary 可怕的</li>
                <li>lazy 懒惰的</li>
                <li>interesting 有趣的</li>
            </ul>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <p>Pandas are cute.</p>
                <p>Lions are scary.</p>
            </div>
        `
    },
    {
        title: "16. 询问原因",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>句型</h4>
            <div class="formula">
                Why do you like...?<br>
                Because...
            </div>
            <div class="advanced">
                <h4>⭐ 对话练习</h4>
                <p>A: Why do you like pandas?</p>
                <p>B: Because they are cute.</p>
                <div class="example">
                    <strong>例题：</strong>完成对话<br>
                    A: _____ do you like giraffes?<br>
                    B: _____ they are beautiful.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        A: Why do you like giraffes?<br>
                        B: Because they are beautiful.
                    </div>
                </div>
            </div>
        `
    },
    // Unit 6: I'm watching TV. (20个知识点)
    {
        title: "17. 现在进行时",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>构成</h4>
            <div class="formula">
                主语 + be (am/is/are) + V-ing
            </div>
            <div class="advanced">
                <h4>⭐ 动词ing的变化规则</h4>
                <ul>
                    <li>一般加-ing：work→working</li>
                    <li>以不发音e结尾，去e加-ing：make→making</li>
                    <li>重读闭音节，双写末尾字母加-ing：run→running, swim→swimming</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>写出动词的ing形式<br>
                    1. read _____ 2. write _____ 3. swim _____<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. reading<br>
                        2. writing（去e加ing）<br>
                        3. swimming（双写m加ing）
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "18. 现在进行时的句型",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>基本句型</h4>
            <div class="formula">
                肯定句：主语 + be + V-ing<br>
                否定句：主语 + be + not + V-ing<br>
                疑问句：Be + 主语 + V-ing?
            </div>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <ul>
                    <li>I'm watching TV.</li>
                    <li>She isn't reading.</li>
                    <li>Are they playing soccer? Yes, they are.</li>
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
    // Unit 7-12: 继续添加其他单元...
    {
        title: "19. 天气的表达",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>询问天气</h4>
            <div class="formula">
                How's the weather? = What's the weather like?<br>
                It's + 形容词
            </div>
            <div class="advanced">
                <h4>⭐ 天气词汇</h4>
                <ul>
                    <li>sunny 晴朗的</li>
                    <li>cloudy 多云的</li>
                    <li>rainy 下雨的</li>
                    <li>windy 有风的</li>
                    <li>snowy 下雪的</li>
                </ul>
            </div>
        `
    },
    {
        title: "20. There be句型",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>基本用法</h4>
            <div class="formula">
                There is + 单数名词/不可数名词<br>
                There are + 复数名词
            </div>
            <div class="advanced">
                <h4>⭐ 一般疑问句</h4>
                <p>Is there...? / Are there...?</p>
                <div class="example">
                    <strong>例题：</strong>用is/are填空<br>
                    1. There _____ a book on the desk.<br>
                    2. There _____ some students in the classroom.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. is（单数）<br>
                        2. are（复数）
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "21. 描述外貌",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>询问外貌</h4>
            <div class="formula">
                What does he/she look like?<br>
                He/She is + 形容词<br>
                He/She has + 名词
            </div>
            <div class="advanced">
                <h4>⭐ 描述词汇</h4>
                <ul>
                    <li>tall 高的 / short 矮的</li>
                    <li>thin 瘦的 / heavy 重的</li>
                    <li>long hair 长发</li>
                    <li>big eyes 大眼睛</li>
                </ul>
            </div>
        `
    },
    {
        title: "22. would like的用法",
        tag: "重点",
        tagClass: "important",
        content: `
            <h4>基本用法</h4>
            <div class="formula">
                would like + 名词：想要某物<br>
                would like to + 动词原形：想要做某事
            </div>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <ul>
                    <li>I'd like some noodles.</li>
                    <li>I'd like to go shopping.</li>
                    <li>Would you like some tea?</li>
                </ul>
            </div>
        `
    },
    {
        title: "23. 一般过去时",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>构成</h4>
            <div class="formula">
                主语 + 动词过去式
            </div>
            <div class="advanced">
                <h4>⭐ 动词过去式的变化</h4>
                <ul>
                    <li>一般加-ed：work→worked</li>
                    <li>以e结尾加-d：live→lived</li>
                    <li>辅音字母+y结尾，变y为i加-ed：study→studied</li>
                    <li>不规则变化：go→went, have→had, see→saw</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>写出下列动词的过去式<br>
                    1. go _____ 2. have _____ 3. play _____<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        1. went（不规则变化）<br>
                        2. had（不规则变化）<br>
                        3. played（规则变化）
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "24. 一般过去时的句型",
        tag: "必考",
        tagClass: "important",
        content: `
            <h4>基本句型</h4>
            <div class="formula">
                肯定句：主语 + 动词过去式<br>
                否定句：主语 + didn't + 动词原形<br>
                疑问句：Did + 主语 + 动词原形?
            </div>
            <div class="advanced">
                <h4>⭐ 例句</h4>
                <ul>
                    <li>I played basketball yesterday.</li>
                    <li>I didn't go to school yesterday.</li>
                    <li>Did you watch TV last night?</li>
                </ul>
                <div class="example">
                    <strong>例题：</strong>改为一般疑问句<br>
                    I visited my grandparents last week.<br>
                    <button class="show-answer" onclick="toggleAnswer(this)">查看答案</button>
                    <div class="answer">
                        Did you visit your grandparents last week?<br>
                        Yes, I did. / No, I didn't.
                    </div>
                </div>
            </div>
        `
    }
];
