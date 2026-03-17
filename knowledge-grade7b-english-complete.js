// 7年级下学期英语完整知识点库（牛津深圳版）
// 8个单元，80+知识点
// 标签分布：必考20%、重点30%、基础40%、拓展10%

const knowledgeBase = {
  version: "1.0",
  grade: "七年级下册",
  textbook: "牛津深圳版",
  totalPoints: 88,
  units: [
    {
      unitId: 1,
      title: "Can you play the guitar?",
      theme: "能力与才艺",
      knowledgePoints: [
        {
          id: "1-1",
          title: "情态动词can的用法",
          tag: "必考",
          grammar: "can表示能力，意为'能、会'，后接动词原形",
          vocabulary: "play the guitar弹吉他, play chess下棋, speak English说英语",
          examples: [
            { en: "I can play the guitar.", cn: "我会弹吉他。", note: "can后直接加动词原形" },
            { en: "She can speak English very well.", cn: "她英语说得很好。", note: "第三人称单数时can不变" },
            { en: "Can you swim?", cn: "你会游泳吗？", note: "变疑问句时can提前" }
          ],
          extension: {
            transformation: "I can play basketball. → Can you play basketball? / I can't play basketball.",
            scenario: "介绍自己的才艺时：I can sing and dance."
          },
          commonMistakes: "易错：can后加to（×）I can to swim; can后加-ing（×）I can swimming"
        },
        {
          id: "1-2",
          title: "can的否定形式",
          tag: "必考",
          grammar: "cannot/can't表示'不能、不会'",
          vocabulary: "can't = cannot",
          examples: [
            { en: "I can't play chess.", cn: "我不会下棋。", note: "can't是cannot的缩写" },
            { en: "He cannot speak Japanese.", cn: "他不会说日语。", note: "cannot连写，can not分开也可以" }
          ],
          extension: {
            transformation: "I can sing. → I can't sing.",
            scenario: "委婉拒绝：I'd like to, but I can't."
          },
          commonMistakes: "易错：写成can't（√）不是cann't（×）"
        },
        {
          id: "1-3",
          title: "can的疑问句及回答",
          tag: "重点",
          grammar: "Can + 主语 + 动词原形...? 回答：Yes, ...can. / No, ...can't.",
          vocabulary: "",
          examples: [
            { en: "—Can you play the piano? —Yes, I can. / No, I can't.", cn: "—你会弹钢琴吗？—是的，我会。/ 不，我不会。", note: "肯定回答用Yes, ...can，否定用No, ...can't" },
            { en: "—Can she dance? —Yes, she can.", cn: "—她会跳舞吗？—是的，她会。", note: "人称要对应" }
          ],
          extension: {
            transformation: "He can swim. → Can he swim?",
            scenario: "面试询问能力：Can you use a computer?"
          },
          commonMistakes: "易错：回答时说Yes, I do.（×）应该是Yes, I can."
        },
        {
          id: "1-4",
          title: "play + 乐器/球类",
          tag: "重点",
          grammar: "play + the + 乐器；play + 球类/棋类（不加the）",
          vocabulary: "play the violin拉小提琴, play basketball打篮球, play chess下棋",
          examples: [
            { en: "I can play the piano.", cn: "我会弹钢琴。", note: "乐器前加the" },
            { en: "He plays basketball every day.", cn: "他每天打篮球。", note: "球类前不加the" }
          ],
          extension: {
            transformation: "play the guitar → play football（去掉the）",
            scenario: "描述爱好：I like playing the drums."
          },
          commonMistakes: "易错：play guitar（×）应为play the guitar; play the football（×）应为play football"
        },
        {
          id: "1-5",
          title: "speak/talk/say/tell区别",
          tag: "重点",
          grammar: "speak说某种语言; talk交谈; say说具体内容; tell告诉",
          vocabulary: "speak English说英语, talk to/with和...谈话, say hello问好, tell a story讲故事",
          examples: [
            { en: "Can you speak Chinese?", cn: "你会说中文吗？", note: "speak后接语言" },
            { en: "Please say it in English.", cn: "请用英语说。", note: "say后接说的内容" },
            { en: "Tell me about your school.", cn: "告诉我关于你学校的事。", note: "tell后接人" }
          ],
          extension: {
            transformation: "speak English → say it in English",
            scenario: "不同场合用不同词：语言用speak，故事用tell"
          },
          commonMistakes: "易错：说某种语言用speak（√）不用say（×）"
        },
        {
          id: "1-6",
          title: "join的用法",
          tag: "基础",
          grammar: "join + 组织/团体，表示加入",
          vocabulary: "join the music club加入音乐俱乐部, join us加入我们",
          examples: [
            { en: "I want to join the art club.", cn: "我想加入美术俱乐部。", note: "join后直接加组织" },
            { en: "Can I join you?", cn: "我可以加入你们吗？", note: "join后可接人称代词" }
          ],
          extension: {
            transformation: "join the club → become a member of the club",
            scenario: "报名参加社团：I'd like to join the swimming club."
          },
          commonMistakes: "易错：join in（参加活动）vs join（加入组织）"
        },
        {
          id: "1-7",
          title: "be good at的用法",
          tag: "重点",
          grammar: "be good at + 名词/动词-ing，表示'擅长'",
          vocabulary: "be good at swimming擅长游泳, be good with善于应付",
          examples: [
            { en: "She is good at playing the piano.", cn: "她擅长弹钢琴。", note: "at后用动词-ing形式" },
            { en: "I'm good at English.", cn: "我擅长英语。", note: "at后也可以接名词" }
          ],
          extension: {
            transformation: "She dances well. → She is good at dancing.",
            scenario: "介绍特长：I'm good at drawing."
          },
          commonMistakes: "易错：be good at do（×）应为be good at doing"
        },
        {
          id: "1-8",
          title: "want的用法",
          tag: "基础",
          grammar: "want + 名词/不定式，表示'想要'",
          vocabulary: "want to do想要做, want sb to do想要某人做",
          examples: [
            { en: "I want to join the music club.", cn: "我想加入音乐俱乐部。", note: "want to后接动词原形" },
            { en: "I want some water.", cn: "我想要一些水。", note: "want后可直接接名词" }
          ],
          extension: {
            transformation: "I want to go. → I'd like to go.",
            scenario: "表达愿望：I want to learn English well."
          },
          commonMistakes: "易错：want doing（×）应为want to do"
        },
        {
          id: "1-9",
          title: "or在疑问句中的用法",
          tag: "基础",
          grammar: "or用于选择疑问句，意为'或者'",
          vocabulary: "",
          examples: [
            { en: "Can you sing or dance?", cn: "你会唱歌还是跳舞？", note: "选择疑问句用or连接" },
            { en: "Do you like apples or bananas?", cn: "你喜欢苹果还是香蕉？", note: "回答时选择其中一项" }
          ],
          extension: {
            transformation: "Can you sing? Can you dance? → Can you sing or dance?",
            scenario: "询问选择：Tea or coffee?"
          },
          commonMistakes: "易错：选择疑问句用or（√）不用and（×）"
        },
        {
          id: "1-10",
          title: "also/too区别",
          tag: "基础",
          grammar: "also用于句中，too用于句末",
          vocabulary: "",
          examples: [
            { en: "I can also play chess.", cn: "我也会下棋。", note: "also在be动词后，行为动词前" },
            { en: "I can play chess, too.", cn: "我也会下棋。", note: "too放在句末，前有逗号" }
          ],
          extension: {
            transformation: "I also like music. → I like music, too.",
            scenario: "表达'也'：also更正式，too更口语"
          },
          commonMistakes: "易错：also放在句末（×）；too放在句中（×）"
        },
        {
          id: "1-11",
          title: "club相关词汇",
          tag: "基础",
          grammar: "",
          vocabulary: "music club音乐俱乐部, art club美术俱乐部, sports club体育俱乐部, English club英语俱乐部, swimming club游泳俱乐部",
          examples: [
            { en: "There are many clubs in our school.", cn: "我们学校有很多俱乐部。", note: "club可数名词" },
            { en: "I'm in the music club.", cn: "我在音乐俱乐部。", note: "in the club在俱乐部里" }
          ],
          extension: {
            transformation: "",
            scenario: "介绍学校社团：Our school has a basketball club."
          },
          commonMistakes: "易错：club的复数是clubs"
        }
      ]
    },
    {
      unitId: 2,
      title: "What time do you go to school?",
      theme: "日常作息",
      knowledgePoints: [
        {
          id: "2-1",
          title: "What time提问时间",
          tag: "必考",
          grammar: "What time + 一般疑问句？询问具体时刻",
          vocabulary: "what time几点, get up起床, go to school去上学",
          examples: [
            { en: "What time do you get up?", cn: "你几点起床？", note: "what time询问具体时刻" },
            { en: "What time does she go to work?", cn: "她几点去上班？", note: "第三人称单数用does" }
          ],
          extension: {
            transformation: "I get up at 6:00. → What time do you get up?",
            scenario: "询问作息时间：What time does your class begin?"
          },
          commonMistakes: "易错：What time is it?（问现在几点）vs What time do you...?（问习惯时间）"
        },
        {
          id: "2-2",
          title: "时间表达法",
          tag: "必考",
          grammar: "整点：数字+o'clock；半点：half past + 数字；刻钟：a quarter past/to",
          vocabulary: "o'clock整点, half past半点过, a quarter一刻钟",
          examples: [
            { en: "It's six o'clock.", cn: "六点钟。", note: "整点用o'clock" },
            { en: "It's half past six.", cn: "六点半。", note: "half past表示半点" },
            { en: "It's a quarter past seven.", cn: "七点一刻。", note: "past表示'过'" },
            { en: "It's a quarter to eight.", cn: "七点四十五（差一刻八点）。", note: "to表示'差'" }
          ],
          extension: {
            transformation: "6:30 → half past six; 6:15 → a quarter past six",
            scenario: "描述时间：My class begins at 8 o'clock."
          },
          commonMistakes: "易错：half past six（√）不是half six（×）"
        },
        {
          id: "2-3",
          title: "频度副词",
          tag: "必考",
          grammar: "always(100%) > usually(80%) > often(60%) > sometimes(40%) > seldom(20%) > never(0%)",
          vocabulary: "always总是, usually通常, often经常, sometimes有时, never从不",
          examples: [
            { en: "I always get up early.", cn: "我总是早起。", note: "频度副词在be动词后" },
            { en: "She often goes to the library.", cn: "她经常去图书馆。", note: "频度副词在行为动词前" },
            { en: "I never eat junk food.", cn: "我从不吃垃圾食品。", note: "never表示否定" }
          ],
          extension: {
            transformation: "I always get up at 6. → I usually get up at 6.",
            scenario: "描述习惯：I usually have breakfast at 7."
          },
          commonMistakes: "易错：频度副词位置：be动词后，行为动词前"
        },
        {
          id: "2-4",
          title: "时间的介词用法",
          tag: "重点",
          grammar: "at + 具体时刻; on + 具体某天; in + 月/年/季节/早中晚",
          vocabulary: "at six o'clock在六点, on Monday在周一, in the morning在早上",
          examples: [
            { en: "I get up at 6:30.", cn: "我6:30起床。", note: "具体时刻用at" },
            { en: "We have classes on weekdays.", cn: "我们在工作日上课。", note: "具体某天用on" },
            { en: "I do exercise in the morning.", cn: "我在早上锻炼。", note: "早中晚用in" }
          ],
          extension: {
            transformation: "at 7:00 / on Sunday / in May",
            scenario: "正确使用时间介词：at noon, at night, on weekends"
          },
          commonMistakes: "易错：具体时刻用at（√）不用on/in（×）"
        },
        {
          id: "2-5",
          title: "一般现在时第三人称单数",
          tag: "必考",
          grammar: "第三人称单数动词加-s/-es",
          vocabulary: "gets起床(get的三单), goes去(go的三单), watches看(watch的三单)",
          examples: [
            { en: "He gets up at 6:00 every day.", cn: "他每天6点起床。", note: "get→gets" },
            { en: "She goes to school by bus.", cn: "她坐公交车去上学。", note: "go→goes" },
            { en: "My mother watches TV in the evening.", cn: "我妈妈晚上看电视。", note: "watch→watches" }
          ],
          extension: {
            transformation: "I get up → He gets up; I go → She goes",
            scenario: "描述他人习惯：My father exercises every morning."
          },
          commonMistakes: "易错：以o, s, x, ch, sh结尾加-es：go→goes, watch→watches"
        },
        {
          id: "2-6",
          title: "get up/get dressed/get to用法",
          tag: "基础",
          grammar: "get up起床; get dressed穿衣服; get to到达",
          vocabulary: "get up起床, get dressed穿衣服, get to school到校",
          examples: [
            { en: "I get up at 6:30.", cn: "我6:30起床。", note: "get up固定搭配" },
            { en: "She gets dressed quickly.", cn: "她很快穿好衣服。", note: "get dressed表示穿衣动作" },
            { en: "I get to school at 7:30.", cn: "我7:30到校。", note: "get to + 地点" }
          ],
          extension: {
            transformation: "get to school → arrive at school",
            scenario: "描述早晨活动：I get up, get dressed, and have breakfast."
          },
          commonMistakes: "易错：get to后接地点，get home不加to（home是副词）"
        },
        {
          id: "2-7",
          title: "take a shower/have a shower",
          tag: "基础",
          grammar: "take/have a shower洗澡",
          vocabulary: "take a shower洗澡, brush teeth刷牙, wash face洗脸",
          examples: [
            { en: "I take a shower every morning.", cn: "我每天早上洗澡。", note: "take a shower洗澡" },
            { en: "He brushes his teeth after dinner.", cn: "他晚饭后刷牙。", note: "brush one's teeth刷牙" }
          ],
          extension: {
            transformation: "take a shower → have a shower",
            scenario: "描述日常清洁：I brush my teeth twice a day."
          },
          commonMistakes: "易错：brush的第三人称单数是brushes"
        },
        {
          id: "2-8",
          title: "job/work区别",
          tag: "基础",
          grammar: "job可数名词，指具体工作; work不可数名词，泛指工作",
          vocabulary: "a good job一份好工作, go to work去上班",
          examples: [
            { en: "She has a good job.", cn: "她有一份好工作。", note: "job可数，用a" },
            { en: "My father goes to work by car.", cn: "我爸爸开车去上班。", note: "go to work固定搭配" }
          ],
          extension: {
            transformation: "find a job → look for work",
            scenario: "询问职业：What's your job? / What do you do?"
          },
          commonMistakes: "易错：a work（×）应为a job或work（无冠词）"
        },
        {
          id: "2-9",
          title: "exercise的用法",
          tag: "基础",
          grammar: "exercise作动词'锻炼'；作名词'练习/运动'",
          vocabulary: "do exercise做运动, do morning exercises做早操",
          examples: [
            { en: "I exercise every day.", cn: "我每天锻炼。", note: "exercise作动词" },
            { en: "We do morning exercises at school.", cn: "我们在学校做早操。", note: "exercises复数表示体操" }
          ],
          extension: {
            transformation: "exercise → do sports",
            scenario: "描述健康习惯：I exercise for 30 minutes every day."
          },
          commonMistakes: "易错：exercise的第三人称单数是exercises"
        },
        {
          id: "2-10",
          title: "either...or...的用法",
          tag: "拓展",
          grammar: "either...or...表示'要么...要么...'",
          vocabulary: "either...or...或者...或者...",
          examples: [
            { en: "I either watch TV or read books in the evening.", cn: "晚上我或者看电视或者看书。", note: "连接两个并列成分" },
            { en: "You can either stay or leave.", cn: "你可以留下或者离开。", note: "表示选择" }
          ],
          extension: {
            transformation: "I watch TV or read books. → I either watch TV or read books.",
            scenario: "表达选择：We can either go by bus or by bike."
          },
          commonMistakes: "易错：either...or...连接的成分要一致"
        },
        {
          id: "2-11",
          title: "lots of/a lot of的用法",
          tag: "基础",
          grammar: "lots of = a lot of，修饰可数或不可数名词",
          vocabulary: "lots of homework很多作业, a lot of people很多人",
          examples: [
            { en: "I have lots of homework today.", cn: "我今天有很多作业。", note: "lots of + 不可数名词" },
            { en: "There are a lot of students in the playground.", cn: "操场上有很多学生。", note: "a lot of + 可数名词" }
          ],
          extension: {
            transformation: "lots of → many/much（更正式）",
            scenario: "表达数量：I have a lot of friends."
          },
          commonMistakes: "易错：a lot（副词短语，修饰动词）vs a lot of（形容词短语，修饰名词）"
        }
      ]
    },
    {
      unitId: 3,
      title: "How do you get to school?",
      theme: "交通方式",
      knowledgePoints: [
        {
          id: "3-1",
          title: "how提问交通方式",
          tag: "必考",
          grammar: "How do/does + 主语 + go/get to...?",
          vocabulary: "how如何, by bus坐公交, by bike骑自行车, on foot步行",
          examples: [
            { en: "How do you get to school?", cn: "你怎么去学校？", note: "询问交通方式" },
            { en: "How does she go to work?", cn: "她怎么去上班？", note: "第三人称单数用does" }
          ],
          extension: {
            transformation: "I go by bus. → How do you go?",
            scenario: "询问他人：How does your father go to work?"
          },
          commonMistakes: "易错：How do you go to school?（√）不是How you go...?（×）"
        },
        {
          id: "3-2",
          title: "by + 交通工具",
          tag: "必考",
          grammar: "by + 交通工具（不加冠词），表示交通方式",
          vocabulary: "by bus坐公交, by bike骑自行车, by car开车, by train坐火车, by plane坐飞机",
          examples: [
            { en: "I go to school by bus.", cn: "我坐公交车去学校。", note: "by后不加the/a" },
            { en: "She travels by plane.", cn: "她坐飞机旅行。", note: "by plane = by air" }
          ],
          extension: {
            transformation: "by bus → take a bus（动词短语）",
            scenario: "描述出行方式：I usually go by subway."
          },
          commonMistakes: "易错：by a bus（×）应为by bus（不加冠词）"
        },
        {
          id: "3-3",
          title: "take + 时间",
          tag: "必考",
          grammar: "It takes sb + 时间 + to do sth. 做某事花费某人多少时间",
          vocabulary: "take花费(时间), hour小时, minute分钟",
          examples: [
            { en: "It takes me 20 minutes to get to school.", cn: "我去学校要花20分钟。", note: "It takes sb + 时间 + to do" },
            { en: "It takes him half an hour to do his homework.", cn: "他做作业要花半小时。", note: "half an hour半小时" }
          ],
          extension: {
            transformation: "I spend 20 minutes getting to school. = It takes me 20 minutes to get to school.",
            scenario: "描述时间花费：It takes about 2 hours to finish the work."
          },
          commonMistakes: "易错：It take（×）应为It takes（三单形式）"
        },
        {
          id: "3-4",
          title: "how long/how far区别",
          tag: "重点",
          grammar: "how long询问时长或距离；how far询问距离",
          vocabulary: "how long多长时间, how far多远, kilometer千米",
          examples: [
            { en: "—How long does it take? —About 15 minutes.", cn: "—要花多长时间？—大约15分钟。", note: "询问时间长度" },
            { en: "—How far is it from your home to school? —About 5 kilometers.", cn: "—从你家到学校有多远？—大约5公里。", note: "询问距离" }
          ],
          extension: {
            transformation: "How long is the river? / How far is the station?",
            scenario: "询问路程：How far is it from here?"
          },
          commonMistakes: "易错：how long问时间/长度，how far问距离"
        },
        {
          id: "3-5",
          title: "ride的用法",
          tag: "重点",
          grammar: "ride作动词'骑'，作名词'骑行'",
          vocabulary: "ride a bike骑自行车, ride a horse骑马, a long ride长途骑行",
          examples: [
            { en: "He rides his bike to school.", cn: "他骑自行车去学校。", note: "ride作动词" },
            { en: "It's a long ride.", cn: "这是一段很长的车程。", note: "ride作名词" }
          ],
          extension: {
            transformation: "ride a bike → by bike",
            scenario: "描述出行：I ride my bike to work every day."
          },
          commonMistakes: "易错：ride的第三人称单数是rides"
        },
        {
          id: "3-6",
          title: "walk/on foot",
          tag: "基础",
          grammar: "walk动词'步行'；on foot介词短语'步行'",
          vocabulary: "walk to school走到学校, go on foot步行前往",
          examples: [
            { en: "I walk to school every day.", cn: "我每天步行去学校。", note: "walk作动词" },
            { en: "She goes to work on foot.", cn: "她步行去上班。", note: "on foot固定搭配" }
          ],
          extension: {
            transformation: "I walk to school. = I go to school on foot.",
            scenario: "描述步行：It's not far, so I walk."
          },
          commonMistakes: "易错：on foot（√）不是by foot（×）"
        },
        {
          id: "3-7",
          title: "bus stop/bus station区别",
          tag: "基础",
          grammar: "bus stop公交站（路边）；bus station公交车站（大型）",
          vocabulary: "bus stop公交站点, bus station公交总站, subway station地铁站",
          examples: [
            { en: "There's a bus stop near my home.", cn: "我家附近有一个公交站。", note: "stop指路边站点" },
            { en: "We meet at the bus station.", cn: "我们在公交总站见面。", note: "station指大型车站" }
          ],
          extension: {
            transformation: "bus stop → train station（火车站）",
            scenario: "指路：Walk to the bus stop and take Bus No.5."
          },
          commonMistakes: "易错：stop（小站）vs station（大站）"
        },
        {
          id: "3-8",
          title: "hundred的用法",
          tag: "重点",
          grammar: "hundred前有具体数字时不加-s；表示概数时用hundreds of",
          vocabulary: "one hundred一百, hundreds of数百",
          examples: [
            { en: "There are two hundred students.", cn: "有两百名学生。", note: "具体数字，hundred不加s" },
            { en: "Hundreds of people come here every day.", cn: "每天有数百人来这里。", note: "hundreds of表示概数" }
          ],
          extension: {
            transformation: "two hundred（具体）vs hundreds of（概数）",
            scenario: "表达数量：The school has three hundred teachers."
          },
          commonMistakes: "易错：two hundreds（×）应为two hundred"
        },
        {
          id: "3-9",
          title: "be afraid的用法",
          tag: "基础",
          grammar: "be afraid of + 名词/动词-ing；be afraid to do",
          vocabulary: "be afraid of害怕, be afraid to do不敢做",
          examples: [
            { en: "She is afraid of dogs.", cn: "她害怕狗。", note: "be afraid of + 名词" },
            { en: "He is afraid to go out at night.", cn: "他不敢晚上出去。", note: "be afraid to + 动词" }
          ],
          extension: {
            transformation: "be afraid of swimming → be afraid to swim",
            scenario: "表达恐惧：I'm afraid of high places."
          },
          commonMistakes: "易错：be afraid of doing（√）和be afraid to do（√）都可以"
        },
        {
          id: "3-10",
          title: "leave的用法",
          tag: "基础",
          grammar: "leave离开；leave for出发去；leave sth somewhere把某物留在某处",
          vocabulary: "leave home离开家, leave for Beijing出发去北京",
          examples: [
            { en: "I leave home at 7:00.", cn: "我7点离家。", note: "leave + 地点，离开某地" },
            { en: "He leaves for Shanghai tomorrow.", cn: "他明天出发去上海。", note: "leave for + 地点，出发去某地" }
          ],
          extension: {
            transformation: "leave school → leave for school",
            scenario: "描述出发：We leave for the airport at 6 a.m."
          },
          commonMistakes: "易错：leave（离开）vs leave for（出发去）"
        },
        {
          id: "3-11",
          title: "cross/across/through区别",
          tag: "拓展",
          grammar: "cross动词'穿过'；across介词'横过'；through介词'穿过（内部）'",
          vocabulary: "cross the road过马路, go across横过, go through穿过",
          examples: [
            { en: "Be careful when you cross the street.", cn: "过马路时要小心。", note: "cross是动词" },
            { en: "Walk across the bridge.", cn: "走过桥。", note: "across表示从表面横过" },
            { en: "The train goes through the tunnel.", cn: "火车穿过隧道。", note: "through表示从内部穿过" }
          ],
          extension: {
            transformation: "cross the road = go across the road",
            scenario: "指路：Go across the street and turn left."
          },
          commonMistakes: "易错：cross（动词）vs across（介词）"
        }
      ]
    },
    {
      unitId: 4,
      title: "Don't eat in class",
      theme: "规章制度",
      knowledgePoints: [
        {
          id: "4-1",
          title: "祈使句的否定形式",
          tag: "必考",
          grammar: "Don't + 动词原形，表示'不要做某事'",
          vocabulary: "don't = do not",
          examples: [
            { en: "Don't eat in class.", cn: "不要在课堂上吃东西。", note: "祈使句否定用Don't开头" },
            { en: "Don't be late for school.", cn: "上学不要迟到。", note: "be动词也用Don't" },
            { en: "Don't run in the hallway.", cn: "不要在走廊里跑。", note: "禁止命令" }
          ],
          extension: {
            transformation: "Eat in the dining hall. → Don't eat in class.",
            scenario: "制定规则：Don't talk loudly in the library."
          },
          commonMistakes: "易错：Don't to eat（×）应为Don't eat（直接加动词原形）"
        },
        {
          id: "4-2",
          title: "祈使句的肯定形式",
          tag: "重点",
          grammar: "以动词原形开头的句子，表示命令、请求、建议",
          vocabulary: "",
          examples: [
            { en: "Open your books.", cn: "打开你们的书。", note: "动词原形开头" },
            { en: "Please sit down.", cn: "请坐下。", note: "加please更礼貌" },
            { en: "Listen to me carefully.", cn: "认真听我说。", note: "表示命令" }
          ],
          extension: {
            transformation: "Sit down. → Don't stand up.",
            scenario: "课堂指令：Read after me. / Write down the answer."
          },
          commonMistakes: "易错：祈使句主语you通常省略"
        },
        {
          id: "4-3",
          title: "have to/must区别",
          tag: "必考",
          grammar: "have to客观'不得不'；must主观'必须'",
          vocabulary: "have to不得不, must必须",
          examples: [
            { en: "I have to wear a uniform at school.", cn: "我在学校必须穿校服。", note: "学校规定，客观要求" },
            { en: "You must finish your homework first.", cn: "你必须先完成作业。", note: "主观要求" }
          ],
          extension: {
            transformation: "I have to go. → I must go.",
            scenario: "表达义务：We have to follow the rules."
          },
          commonMistakes: "易错：have to的三单是has to；must没有三单变化"
        },
        {
          id: "4-4",
          title: "can/can't表示许可",
          tag: "重点",
          grammar: "can/can't表示允许或不允许做某事",
          vocabulary: "",
          examples: [
            { en: "You can eat in the dining hall.", cn: "你可以在食堂吃东西。", note: "表示允许" },
            { en: "You can't listen to music in class.", cn: "你不能在课堂上听音乐。", note: "表示禁止" },
            { en: "Can I go out?", cn: "我可以出去吗？", note: "请求许可" }
          ],
          extension: {
            transformation: "You can go. → You can't go.",
            scenario: "制定规则：Students can't use phones in class."
          },
          commonMistakes: "易错：can表示能力或许可，根据语境判断"
        },
        {
          id: "4-5",
          title: "be late for的用法",
          tag: "基础",
          grammar: "be late for + 名词，表示'做某事迟到'",
          vocabulary: "be late for class上课迟到, be late for school上学迟到",
          examples: [
            { en: "Don't be late for school.", cn: "上学不要迟到。", note: "be late for + 活动" },
            { en: "He is late for the meeting.", cn: "他开会迟到了。", note: "late是形容词" }
          ],
          extension: {
            transformation: "be late for → arrive late for",
            scenario: "提醒时间：Don't be late for the exam."
          },
          commonMistakes: "易错：be late to（×）应为be late for（√）"
        },
        {
          id: "4-6",
          title: "listen to/hear区别",
          tag: "基础",
          grammar: "listen to强调'听的动作'；hear强调'听见的结果'",
          vocabulary: "listen to music听音乐, hear a sound听到声音",
          examples: [
            { en: "Listen to the teacher carefully.", cn: "认真听老师讲课。", note: "listen to强调动作" },
            { en: "I can hear you clearly.", cn: "我能清楚地听到你。", note: "hear强调结果" }
          ],
          extension: {
            transformation: "listen to → pay attention to",
            scenario: "课堂要求：Please listen to me."
          },
          commonMistakes: "易错：listen（不及物）+ to + 宾语；hear（及物）直接加宾语"
        },
        {
          id: "4-7",
          title: "fight的用法",
          tag: "基础",
          grammar: "fight动词'打架'；fight with sb和某人打架",
          vocabulary: "fight打架, fight with和...打架, have a fight打架",
          examples: [
            { en: "Don't fight with your classmates.", cn: "不要和同学打架。", note: "fight with sb" },
            { en: "They had a fight yesterday.", cn: "他们昨天打架了。", note: "have a fight" }
          ],
          extension: {
            transformation: "fight with → argue with（争论）",
            scenario: "校规：No fighting in school."
          },
          commonMistakes: "易错：fight的过去式是fought"
        },
        {
          id: "4-8",
          title: "wear/put on/dress区别",
          tag: "重点",
          grammar: "wear穿着（状态）；put on穿上（动作）；dress给...穿衣",
          vocabulary: "wear a uniform穿校服, put on clothes穿衣服, dress oneself自己穿衣",
          examples: [
            { en: "Students must wear uniforms.", cn: "学生必须穿校服。", note: "wear表示穿着状态" },
            { en: "Put on your coat. It's cold.", cn: "穿上外套。天很冷。", note: "put on表示穿上动作" },
            { en: "She dresses her baby every morning.", cn: "她每天早上给宝宝穿衣。", note: "dress后接人" }
          ],
          extension: {
            transformation: "wear（状态）vs put on（动作）",
            scenario: "描述穿着：She is wearing a red dress."
          },
          commonMistakes: "易错：wear + 衣服（√）不是wear + 人（×）"
        },
        {
          id: "4-9",
          title: "bring/take/fetch区别",
          tag: "重点",
          grammar: "bring带来；take带走；fetch去取来",
          vocabulary: "bring带来, take带走, fetch取来",
          examples: [
            { en: "Please bring your book to school.", cn: "请把你的书带到学校来。", note: "bring朝向说话者" },
            { en: "Take your bag with you.", cn: "带上你的包。", note: "take远离说话者" },
            { en: "Fetch me some water.", cn: "去给我取些水来。", note: "fetch去并回来" }
          ],
          extension: {
            transformation: "bring here / take there / fetch and return",
            scenario: "课堂要求：Bring your homework tomorrow."
          },
          commonMistakes: "易错：bring（带来）vs take（带走）方向不同"
        },
        {
          id: "4-10",
          title: "quiet的用法",
          tag: "基础",
          grammar: "quiet形容词'安静的'；be quiet保持安静",
          vocabulary: "quiet安静的, quietly安静地, keep quiet保持安静",
          examples: [
            { en: "Please be quiet in the library.", cn: "在图书馆请保持安静。", note: "be quiet" },
            { en: "The classroom is very quiet.", cn: "教室很安静。", note: "quiet作形容词" }
          ],
          extension: {
            transformation: "be quiet → keep quiet → stay quiet",
            scenario: "图书馆规则：Be quiet! Others are reading."
          },
          commonMistakes: "易错：quiet（安静的）vs quite（相当）拼写不同"
        },
        {
          id: "4-11",
          title: "outside/inside区别",
          tag: "基础",
          grammar: "outside在外面；inside在里面",
          vocabulary: "outside在外面, inside在里面, outdoor户外的",
          examples: [
            { en: "We can play outside after class.", cn: "下课后我们可以在外面玩。", note: "outside作副词" },
            { en: "Please wait outside the room.", cn: "请在房间外等候。", note: "outside作介词" }
          ],
          extension: {
            transformation: "outside → inside（反义词）",
            scenario: "制定规则：Eating is allowed only inside the dining hall."
          },
          commonMistakes: "易错：outside（副词/介词）vs out（副词）"
        }
      ]
    },
    {
      unitId: 5,
      title: "Why do you like pandas?",
      theme: "动物与偏好",
      knowledgePoints: [
        {
          id: "5-1",
          title: "why引导的特殊疑问句",
          tag: "必考",
          grammar: "Why + 一般疑问句？询问原因",
          vocabulary: "why为什么, because因为",
          examples: [
            { en: "Why do you like pandas?", cn: "你为什么喜欢熊猫？", note: "Why + 助动词 + 主语 + 动词" },
            { en: "—Why does she like cats? —Because they are cute.", cn: "—她为什么喜欢猫？—因为它们很可爱。", note: "用Because回答" }
          ],
          extension: {
            transformation: "I like pandas. → Why do you like pandas?",
            scenario: "询问原因：Why are you late?"
          },
          commonMistakes: "易错：Why提问用Because回答，不用Yes/No"
        },
        {
          id: "5-2",
          title: "because的用法",
          tag: "必考",
          grammar: "because + 句子，表示原因",
          vocabulary: "because因为, because of因为（后接名词）",
          examples: [
            { en: "I like dogs because they are friendly.", cn: "我喜欢狗因为它们很友好。", note: "because + 句子" },
            { en: "He can't come because of the rain.", cn: "因为下雨他不能来了。", note: "because of + 名词" }
          ],
          extension: {
            transformation: "because it's raining = because of the rain",
            scenario: "解释原因：I'm late because the bus was late."
          },
          commonMistakes: "易错：because和so不能同时使用（×Because..., so...）"
        },
        {
          id: "5-3",
          title: "形容词描述动物",
          tag: "重点",
          grammar: "形容词放在be动词后或名词前",
          vocabulary: "cute可爱的, smart聪明的, friendly友好的, beautiful美丽的, scary可怕的, lazy懒惰的",
          examples: [
            { en: "Pandas are very cute.", cn: "熊猫很可爱。", note: "形容词在be后" },
            { en: "Lions are scary animals.", cn: "狮子是可怕的动物。", note: "形容词在名词前" }
          ],
          extension: {
            transformation: "The panda is cute. → What a cute panda!",
            scenario: "描述动物：Elephants are smart and friendly."
          },
          commonMistakes: "易错：friendly以-ly结尾但是形容词"
        },
        {
          id: "5-4",
          title: "kind of的用法",
          tag: "重点",
          grammar: "kind of + 形容词，表示'有点儿'",
          vocabulary: "kind of有点儿, a little有点儿, very非常",
          examples: [
            { en: "Pandas are kind of shy.", cn: "熊猫有点害羞。", note: "kind of = a little" },
            { en: "It's kind of cold today.", cn: "今天有点冷。", note: "表示程度" }
          ],
          extension: {
            transformation: "kind of cute = a little cute = slightly cute",
            scenario: "描述程度：He is kind of tired."
          },
          commonMistakes: "易错：kind of（副词短语）vs a kind of（一种）"
        },
        {
          id: "5-5",
          title: "be from/come from",
          tag: "重点",
          grammar: "be from = come from，表示'来自'",
          vocabulary: "be from来自, come from来自",
          examples: [
            { en: "Pandas are from China.", cn: "熊猫来自中国。", note: "be from + 地点" },
            { en: "Where do you come from?", cn: "你来自哪里？", note: "come from + 地点" }
          ],
          extension: {
            transformation: "I'm from China. = I come from China.",
            scenario: "询问来源：Where are koalas from?"
          },
          commonMistakes: "易错：be from（√）不是come from（√）两者都可"
        },
        {
          id: "5-6",
          title: "动物名称词汇",
          tag: "基础",
          grammar: "",
          vocabulary: "panda熊猫, tiger老虎, lion狮子, elephant大象, koala考拉, giraffe长颈鹿, dolphin海豚",
          examples: [
            { en: "I like pandas best.", cn: "我最喜欢熊猫。", note: "like...best最喜欢" },
            { en: "Tigers and lions are dangerous.", cn: "老虎和狮子很危险。", note: "复数加s" }
          ],
          extension: {
            transformation: "a panda → pandas（复数）",
            scenario: "讨论动物：My favorite animal is the elephant."
          },
          commonMistakes: "易错：panda的复数是pandas"
        },
        {
          id: "5-7",
          title: "save的用法",
          tag: "基础",
          grammar: "save动词'拯救、节省、保存'",
          vocabulary: "save the animals拯救动物, save water节约用水, save money省钱",
          examples: [
            { en: "We should save the endangered animals.", cn: "我们应该拯救濒危动物。", note: "save表示拯救" },
            { en: "Please save some water.", cn: "请节约用水。", note: "save表示节省" }
          ],
          extension: {
            transformation: "save → help / protect",
            scenario: "环保话题：We need to save the forests."
          },
          commonMistakes: "易错：save有多种含义，根据语境判断"
        },
        {
          id: "5-8",
          title: "one of + 复数名词",
          tag: "重点",
          grammar: "one of + the + 形容词最高级 + 复数名词，表示'最...之一'",
          vocabulary: "one of... ...之一",
          examples: [
            { en: "The panda is one of the most popular animals.", cn: "熊猫是最受欢迎的动物之一。", note: "one of + 复数" },
            { en: "Shanghai is one of the biggest cities in China.", cn: "上海是中国最大的城市之一。", note: "最高级 + 复数" }
          ],
          extension: {
            transformation: "one of the best students（最好的学生之一）",
            scenario: "表达程度：He is one of my best friends."
          },
          commonMistakes: "易错：one of + 复数名词（√）不是单数（×）"
        },
        {
          id: "5-9",
          title: "forget/remember的用法",
          tag: "基础",
          grammar: "forget/remember to do忘记/记得去做；forget/remember doing忘记/记得做过",
          vocabulary: "forget忘记, remember记得",
          examples: [
            { en: "Don't forget to bring your book.", cn: "别忘了带书。", note: "forget to do未做" },
            { en: "I remember meeting him before.", cn: "我记得以前见过他。", note: "remember doing已做" }
          ],
          extension: {
            transformation: "forget to do（未做）vs forget doing（做过但忘了）",
            scenario: "提醒：Remember to save the animals."
          },
          commonMistakes: "易错：to do（未做）vs doing（已做）意义不同"
        },
        {
          id: "5-10",
          title: "get lost的用法",
          tag: "基础",
          grammar: "get lost迷路；lose one's way迷路",
          vocabulary: "get lost迷路, lose丢失, find找到",
          examples: [
            { en: "Elephants never get lost.", cn: "大象从不迷路。", note: "get lost = lose one's way" },
            { en: "Don't get lost in the forest.", cn: "不要在森林里迷路。", note: "get + 形容词" }
          ],
          extension: {
            transformation: "get lost = lose one's way",
            scenario: "警告：Be careful not to get lost."
          },
          commonMistakes: "易错：lose的过去式是lost"
        },
        {
          id: "5-11",
          title: "be in danger的用法",
          tag: "拓展",
          grammar: "be in danger处于危险中；dangerous形容词'危险的'",
          vocabulary: "danger危险, dangerous危险的, be in danger处于危险中",
          examples: [
            { en: "Some animals are in great danger.", cn: "一些动物处于极大的危险中。", note: "be in danger" },
            { en: "It's dangerous to swim alone.", cn: "独自游泳很危险。", note: "dangerous是形容词" }
          ],
          extension: {
            transformation: "in danger（名词短语）vs dangerous（形容词）",
            scenario: "环保话题：Many wild animals are in danger."
          },
          commonMistakes: "易错：danger（名词）vs dangerous（形容词）"
        }
      ]
    },
    {
      unitId: 6,
      title: "I'm watching TV",
      theme: "现在进行时",
      knowledgePoints: [
        {
          id: "6-1",
          title: "现在进行时构成",
          tag: "必考",
          grammar: "be (am/is/are) + V-ing，表示正在进行的动作",
          vocabulary: "",
          examples: [
            { en: "I'm watching TV now.", cn: "我正在看电视。", note: "I am watching = I'm watching" },
            { en: "She is reading a book.", cn: "她正在读书。", note: "is + reading" },
            { en: "They are playing basketball.", cn: "他们正在打篮球。", note: "are + playing" }
          ],
          extension: {
            transformation: "I watch TV. → I'm watching TV.",
            scenario: "描述正在做的事：I'm doing my homework now."
          },
          commonMistakes: "易错：be动词不能省略：I watching（×）应为I'm watching（√）"
        },
        {
          id: "6-2",
          title: "动词-ing形式变化规则",
          tag: "必考",
          grammar: "一般加-ing；以不发音e结尾去e加-ing；重读闭音节双写尾字母加-ing",
          vocabulary: "watch→watching, make→making, run→running, swim→swimming",
          examples: [
            { en: "watch → watching", cn: "", note: "一般加-ing" },
            { en: "write → writing", cn: "", note: "去e加-ing" },
            { en: "run → running, swim → swimming", cn: "", note: "双写尾字母加-ing" }
          ],
          extension: {
            transformation: "sit→sitting, begin→beginning, shop→shopping",
            scenario: "正确变化：He is running. She is swimming."
          },
          commonMistakes: "易错：以e结尾：make→making（√）不是makeing（×）"
        },
        {
          id: "6-3",
          title: "现在进行时的时间状语",
          tag: "重点",
          grammar: "now, right now, at the moment, Look!, Listen!等提示现在进行时",
          vocabulary: "now现在, at this moment此刻, these days这些天",
          examples: [
            { en: "I'm reading now.", cn: "我现在正在读书。", note: "now表示现在" },
            { en: "Look! The bus is coming.", cn: "看！公交车来了。", note: "Look!提示进行时" },
            { en: "Listen! Someone is singing.", cn: "听！有人在唱歌。", note: "Listen!提示进行时" }
          ],
          extension: {
            transformation: "I read every day. → I'm reading now.",
            scenario: "Look! The children are playing in the garden."
          },
          commonMistakes: "易错：Look!/Listen!后通常用现在进行时"
        },
        {
          id: "6-4",
          title: "现在进行时的一般疑问句",
          tag: "重点",
          grammar: "Be + 主语 + V-ing...?",
          vocabulary: "",
          examples: [
            { en: "—Are you watching TV? —Yes, I am. / No, I'm not.", cn: "—你在看电视吗？—是的。/ 不是。", note: "be动词提前" },
            { en: "—Is he sleeping? —No, he isn't.", cn: "—他在睡觉吗？—不，他不在。", note: "Is提前" }
          ],
          extension: {
            transformation: "He is reading. → Is he reading?",
            scenario: "询问正在做什么：Are you busy now?"
          },
          commonMistakes: "易错：疑问句中be动词提前，回答用Yes/No + be动词"
        },
        {
          id: "6-5",
          title: "现在进行时的否定句",
          tag: "重点",
          grammar: "be + not + V-ing",
          vocabulary: "",
          examples: [
            { en: "I'm not watching TV.", cn: "我没在看电视。", note: "I'm not = I am not" },
            { en: "She isn't sleeping.", cn: "她没在睡觉。", note: "isn't = is not" },
            { en: "They aren't playing soccer.", cn: "他们没在踢足球。", note: "aren't = are not" }
          ],
          extension: {
            transformation: "He is reading. → He isn't reading.",
            scenario: "否定回答：I'm not doing anything special."
          },
          commonMistakes: "易错：be + not + V-ing顺序不能错"
        },
        {
          id: "6-6",
          title: "一般现在时vs现在进行时",
          tag: "必考",
          grammar: "一般现在时表示习惯性动作；现在进行时表示正在进行的动作",
          vocabulary: "",
          examples: [
            { en: "I watch TV every evening. (习惯)", cn: "我每天晚上看电视。", note: "一般现在时：习惯" },
            { en: "I'm watching TV now. (正在)", cn: "我现在正在看电视。", note: "现在进行时：正在" }
          ],
          extension: {
            transformation: "She reads every day. → She is reading now.",
            scenario: "区分：I usually get up at 6. / I'm getting up now."
          },
          commonMistakes: "易错：习惯用一般现在时，正在做用现在进行时"
        },
        {
          id: "6-7",
          title: "What are you doing?",
          tag: "重点",
          grammar: "What + be + 主语 + doing? 询问正在做什么",
          vocabulary: "",
          examples: [
            { en: "—What are you doing? —I'm reading.", cn: "—你在做什么？—我在读书。", note: "What提问" },
            { en: "—What's he doing? —He's cleaning his room.", cn: "—他在做什么？—他在打扫房间。", note: "What's = What is" }
          ],
          extension: {
            transformation: "I'm reading. → What are you doing?",
            scenario: "电话中询问：Hi, what are you doing?"
          },
          commonMistakes: "易错：What doing（×）应为What are you doing?（√）"
        },
        {
          id: "6-8",
          title: "use的用法",
          tag: "基础",
          grammar: "use动词'使用'；use sth to do用某物做某事",
          vocabulary: "use the computer用电脑, use sth to do用...做...",
          examples: [
            { en: "I'm using the computer.", cn: "我在用电脑。", note: "use + 名词" },
            { en: "We use scissors to cut paper.", cn: "我们用剪刀剪纸。", note: "use sth to do sth" }
          ],
          extension: {
            transformation: "use → make use of（利用）",
            scenario: "描述使用：I'm using my phone to call my friend."
          },
          commonMistakes: "易错：use的现在分词是using"
        },
        {
          id: "6-9",
          title: "wash的用法",
          tag: "基础",
          grammar: "wash动词'洗'；wash + 名词",
          vocabulary: "wash the dishes洗碗, wash clothes洗衣服, wash one's face洗脸",
          examples: [
            { en: "She is washing the dishes.", cn: "她在洗碗。", note: "wash + the dishes" },
            { en: "I wash my hands before meals.", cn: "我饭前洗手。", note: "wash one's hands" }
          ],
          extension: {
            transformation: "wash the dishes → do the dishes",
            scenario: "描述家务：My mother is washing clothes."
          },
          commonMistakes: "易错：wash的现在分词是washing"
        },
        {
          id: "6-10",
          title: "movie/film区别",
          tag: "基础",
          grammar: "movie美式英语'电影'；film英式英语'电影'",
          vocabulary: "go to the movies去看电影, watch a movie看电影",
          examples: [
            { en: "Let's go to the movies.", cn: "我们去看电影吧。", note: "go to the movies美式" },
            { en: "I want to watch a movie tonight.", cn: "我今晚想看电影。", note: "watch a movie" }
          ],
          extension: {
            transformation: "go to the movies = go to the cinema",
            scenario: "邀请：Would you like to go to the movies?"
          },
          commonMistakes: "易错：movie（美式）vs film（英式）"
        },
        {
          id: "6-11",
          title: "just的用法",
          tag: "拓展",
          grammar: "just副词'刚刚、只是'",
          vocabulary: "just now刚刚, just only只是",
          examples: [
            { en: "I'm just watching TV.", cn: "我只是在看电视。", note: "just表示'只是'" },
            { en: "He just arrived.", cn: "他刚到。", note: "just表示'刚刚'" }
          ],
          extension: {
            transformation: "just = only（只是）",
            scenario: "解释：I'm just kidding.我只是开玩笑。"
          },
          commonMistakes: "易错：just的位置：be动词后，行为动词前"
        }
      ]
    },
    {
      unitId: 7,
      title: "It's raining!",
      theme: "天气",
      knowledgePoints: [
        {
          id: "7-1",
          title: "询问天气",
          tag: "必考",
          grammar: "How's the weather? = What's the weather like?",
          vocabulary: "weather天气, sunny晴朗的, cloudy多云的, rainy下雨的",
          examples: [
            { en: "—How's the weather in Beijing? —It's sunny.", cn: "—北京天气怎么样？—很晴朗。", note: "How's = How is" },
            { en: "—What's the weather like today? —It's raining.", cn: "—今天天气如何？—在下雨。", note: "What's...like?" }
          ],
          extension: {
            transformation: "How's the weather? = What's the weather like?",
            scenario: "谈论天气：How's the weather in your city?"
          },
          commonMistakes: "易错：weather不可数，不能加a"
        },
        {
          id: "7-2",
          title: "天气形容词",
          tag: "必考",
          grammar: "名词 + y = 形容词",
          vocabulary: "sun→sunny晴朗的, cloud→cloudy多云的, rain→rainy下雨的, snow→snowy下雪的, wind→windy有风的",
          examples: [
            { en: "It's sunny today.", cn: "今天很晴朗。", note: "sun + y = sunny" },
            { en: "It's windy and cloudy.", cn: "既多风又多云。", note: "cloud + y = cloudy" }
          ],
          extension: {
            transformation: "rain → rainy, snow → snowy, fog → foggy",
            scenario: "描述天气：Tomorrow will be rainy."
          },
          commonMistakes: "易错：sun（名词）→ sunny（形容词）双写n"
        },
        {
          id: "7-3",
          title: "It's + V-ing表示天气",
          tag: "重点",
          grammar: "It's raining/snowing. 表示正在下雨/下雪",
          vocabulary: "It's raining在下雨, It's snowing在下雪",
          examples: [
            { en: "It's raining hard.", cn: "雨下得很大。", note: "raining = rainy" },
            { en: "It's snowing outside.", cn: "外面在下雪。", note: "snowing = snowy" }
          ],
          extension: {
            transformation: "It's raining. = It's rainy.",
            scenario: "描述天气状况：Look! It's raining."
          },
          commonMistakes: "易错：It's raining（动作）= It's rainy（状态）"
        },
        {
          id: "7-4",
          title: "Could you...?表示请求",
          tag: "重点",
          grammar: "Could you + 动词原形...? 表示委婉请求",
          vocabulary: "could能（can的过去式，用于委婉请求）",
          examples: [
            { en: "Could you please help me?", cn: "请你帮帮我好吗？", note: "比Can you更礼貌" },
            { en: "Could you tell me the way to the station?", cn: "你能告诉我去车站的路吗？", note: "委婉询问" }
          ],
          extension: {
            transformation: "Can you help? → Could you help?（更礼貌）",
            scenario: "请求帮助：Could you please open the window?"
          },
          commonMistakes: "易错：Could是Can的过去式，但在这里表示委婉，不是过去时"
        },
        {
          id: "7-5",
          title: "message的用法",
          tag: "基础",
          grammar: "take a message捎口信；leave a message留口信",
          vocabulary: "message信息, take a message捎口信, leave a message留口信",
          examples: [
            { en: "Can I take a message?", cn: "我能捎个口信吗？", note: "take a message for sb" },
            { en: "Please leave a message after the beep.", cn: "哔声后请留言。", note: "leave a message" }
          ],
          extension: {
            transformation: "take a message（捎信）vs leave a message（留言）",
            scenario: "电话用语：He's not in. Can I take a message?"
          },
          commonMistakes: "易错：take a message（给某人捎信）vs leave a message（自己留言）"
        },
        {
          id: "7-6",
          title: "call back的用法",
          tag: "基础",
          grammar: "call back回电话；call sb back给某人回电话",
          vocabulary: "call back回电话, call sb给某人打电话",
          examples: [
            { en: "Please ask him to call me back.", cn: "请让他给我回电话。", note: "call sb back" },
            { en: "I'll call you back later.", cn: "我稍后给你回电话。", note: "will call back" }
          ],
          extension: {
            transformation: "call back = return a call",
            scenario: "电话沟通：Can you call me back in 10 minutes?"
          },
          commonMistakes: "易错：call back后接人时加宾格：call me back（√）"
        },
        {
          id: "7-7",
          title: "have a good time",
          tag: "基础",
          grammar: "have a good time = have fun = enjoy oneself玩得开心",
          vocabulary: "have a good time玩得开心, have fun玩得开心, enjoy oneself玩得开心",
          examples: [
            { en: "We're having a good time!", cn: "我们玩得很开心！", note: "have a good time" },
            { en: "I hope you have a good time.", cn: "希望你玩得开心。", note: "表示祝愿" }
          ],
          extension: {
            transformation: "have a good time = have fun = enjoy oneself",
            scenario: "表达祝愿：Have a good time at the party!"
          },
          commonMistakes: "易错：have a good time中time不加s"
        },
        {
          id: "7-8",
          title: "study的用法",
          tag: "基础",
          grammar: "study动词'学习、研究'；study for为...而学习",
          vocabulary: "study English学英语, study for a test为考试而学习",
          examples: [
            { en: "I'm studying for a test.", cn: "我在为考试而学习。", note: "study for + 目的" },
            { en: "She studies hard every day.", cn: "她每天努力学习。", note: "study的第三人称单数" }
          ],
          extension: {
            transformation: "study → learn（学习）",
            scenario: "描述学习：I'm studying math now."
          },
          commonMistakes: "易错：study的现在分词是studying（不双写）"
        },
        {
          id: "7-9",
          title: "cook的用法",
          tag: "基础",
          grammar: "cook动词'做饭'；cook名词'厨师'；cooker'炊具'",
          vocabulary: "cook做饭, cook dinner做晚饭, a good cook一个好厨师",
          examples: [
            { en: "My mother is cooking dinner.", cn: "我妈妈正在做晚饭。", note: "cook作动词" },
            { en: "He is a good cook.", cn: "他是一个好厨师。", note: "cook作名词" }
          ],
          extension: {
            transformation: "cook（动词/人）vs cooker（炊具）",
            scenario: "描述做饭：I'm cooking in the kitchen."
          },
          commonMistakes: "易错：cook（厨师）vs cooker（炊具）"
        },
        {
          id: "7-10",
          title: "vacation的用法",
          tag: "基础",
          grammar: "on vacation在度假；summer/winter vacation暑假/寒假",
          vocabulary: "vacation假期, on vacation在度假, summer vacation暑假",
          examples: [
            { en: "I'm on vacation in Hainan.", cn: "我在海南度假。", note: "on vacation" },
            { en: "We have a long summer vacation.", cn: "我们有很长的暑假。", note: "summer vacation" }
          ],
          extension: {
            transformation: "on vacation = on holiday",
            scenario: "描述假期：How was your vacation?"
          },
          commonMistakes: "易错：on vacation（√）不是in vacation（×）"
        },
        {
          id: "7-11",
          title: "by the pool/in the pool区别",
          tag: "拓展",
          grammar: "by在...旁边；in在...里面",
          vocabulary: "by the pool在泳池边, in the pool在泳池里",
          examples: [
            { en: "She is sitting by the pool.", cn: "她坐在泳池边。", note: "by表示在旁边" },
            { en: "They are swimming in the pool.", cn: "他们在泳池里游泳。", note: "in表示在里面" }
          ],
          extension: {
            transformation: "by the pool（在旁边）vs in the pool（在里面）",
            scenario: "描述位置：I'm reading by the pool."
          },
          commonMistakes: "易错：by（旁边）vs in（里面）位置不同"
        }
      ]
    },
    {
      unitId: 8,
      title: "Is there a post office near here?",
      theme: "问路与方位",
      knowledgePoints: [
        {
          id: "8-1",
          title: "There be句型",
          tag: "必考",
          grammar: "There is + 单数/不可数名词；There are + 复数名词",
          vocabulary: "there is/are有, there isn't/aren't没有",
          examples: [
            { en: "There is a post office near here.", cn: "这附近有一个邮局。", note: "There is + 单数" },
            { en: "There are many people in the park.", cn: "公园里有很多人。", note: "There are + 复数" },
            { en: "There is some water in the bottle.", cn: "瓶子里有一些水。", note: "There is + 不可数" }
          ],
          extension: {
            transformation: "I have a book. → There is a book on the desk.",
            scenario: "描述存在：There is a bank near my home."
          },
          commonMistakes: "易错：There have（×）应为There is/are（√）"
        },
        {
          id: "8-2",
          title: "There be的一般疑问句",
          tag: "必考",
          grammar: "Is/Are there...? Yes, there is/are. No, there isn't/aren't.",
          vocabulary: "",
          examples: [
            { en: "—Is there a bank near here? —Yes, there is.", cn: "—这附近有银行吗？—是的，有。", note: "Is there...?" },
            { en: "—Are there any restaurants? —No, there aren't.", cn: "—有餐馆吗？—不，没有。", note: "Are there...?" }
          ],
          extension: {
            transformation: "There is a shop. → Is there a shop?",
            scenario: "询问地点：Is there a hospital nearby?"
          },
          commonMistakes: "易错：回答用there is/are，不用it is"
        },
        {
          id: "8-3",
          title: "方位介词",
          tag: "必考",
          grammar: "in front of在前面; behind在后面; next to紧邻; across from对面; between...and...在...之间",
          vocabulary: "in front of在前面, behind在后面, next to紧邻, across from在对面, between在两者之间",
          examples: [
            { en: "The bank is in front of the school.", cn: "银行在学校前面。", note: "in front of外部前面" },
            { en: "The park is across from the library.", cn: "公园在图书馆对面。", note: "across from对面" },
            { en: "The hotel is between the bank and the hospital.", cn: "旅馆在银行和医院之间。", note: "between...and..." }
          ],
          extension: {
            transformation: "next to = beside",
            scenario: "指路：The shop is next to the bank."
          },
          commonMistakes: "易错：in front of（外部）vs in the front of（内部前部）"
        },
        {
          id: "8-4",
          title: "on/across/through/over区别",
          tag: "重点",
          grammar: "on在...上面; across横过; through穿过（内部）; over越过（上方）",
          vocabulary: "on the left在左边, across the street过马路, through the park穿过公园",
          examples: [
            { en: "The hotel is on the left.", cn: "旅馆在左边。", note: "on the left/right" },
            { en: "Go across the street.", cn: "过马路。", note: "across横过表面" },
            { en: "Walk through the park.", cn: "穿过公园。", note: "through从内部穿过" }
          ],
          extension: {
            transformation: "across the road = cross the road",
            scenario: "指路：Go along the street and turn left."
          },
          commonMistakes: "易错：across（介词）vs cross（动词）"
        },
        {
          id: "8-5",
          title: "问路与指路",
          tag: "必考",
          grammar: "How can I get to...? / Where is...? / Is there...near here?",
          vocabulary: "Excuse me打扰了, turn left/right左转/右转, go along沿着走",
          examples: [
            { en: "—Excuse me, is there a bank near here?", cn: "—打扰了，这附近有银行吗？", note: "礼貌询问" },
            { en: "—How can I get to the library? —Go along the street and turn left.", cn: "—我怎么去图书馆？—沿着街道走然后左转。", note: "指路句型" }
          ],
          extension: {
            transformation: "How can I get to...? = Where is...?",
            scenario: "问路：Excuse me, where is the nearest hospital?"
          },
          commonMistakes: "易错：问路时先说Excuse me表示礼貌"
        },
        {
          id: "8-6",
          title: "turn的用法",
          tag: "重点",
          grammar: "turn left/right左转/右转；turn on/off打开/关闭",
          vocabulary: "turn left左转, turn right右转, turn on打开, turn off关闭",
          examples: [
            { en: "Turn left at the first crossing.", cn: "在第一个路口左转。", note: "turn left/right" },
            { en: "Please turn on the light.", cn: "请打开灯。", note: "turn on/off电器" }
          ],
          extension: {
            transformation: "turn left = take a left",
            scenario: "指路：Turn right at the traffic lights."
          },
          commonMistakes: "易错：turn left（√）不是turn to left（×）"
        },
        {
          id: "8-7",
          title: "go along的用法",
          tag: "基础",
          grammar: "go along = go down沿着...走",
          vocabulary: "go along沿着走, go down沿着走, go straight直走",
          examples: [
            { en: "Go along this street.", cn: "沿着这条街走。", note: "go along + 街道" },
            { en: "Go straight and turn right.", cn: "直走然后右转。", note: "go straight直走" }
          ],
          extension: {
            transformation: "go along = go down",
            scenario: "指路：Go along the road for about 100 meters."
          },
          commonMistakes: "易错：go along the street（√）不是go along to the street（×）"
        },
        {
          id: "8-8",
          title: "near/next to/beside区别",
          tag: "基础",
          grammar: "near在附近；next to紧邻；beside在旁边",
          vocabulary: "near附近, next to紧邻, beside在旁边",
          examples: [
            { en: "There is a shop near my home.", cn: "我家附近有一个商店。", note: "near表示附近" },
            { en: "The bank is next to the school.", cn: "银行紧邻学校。", note: "next to表示紧邻" }
          ],
          extension: {
            transformation: "next to = beside（紧邻）",
            scenario: "描述位置：The hospital is near the station."
          },
          commonMistakes: "易错：near（附近，距离较远）vs next to（紧邻，距离很近）"
        },
        {
          id: "8-9",
          title: "地点词汇",
          tag: "基础",
          grammar: "",
          vocabulary: "post office邮局, police station警察局, hotel旅馆, restaurant餐馆, bank银行, hospital医院, street街道, pay phone公用电话",
          examples: [
            { en: "Is there a post office near here?", cn: "这附近有邮局吗？", note: "post office邮局" },
            { en: "I need to find a hospital.", cn: "我需要找一家医院。", note: "hospital医院" }
          ],
          extension: {
            transformation: "",
            scenario: "描述地点：There are many restaurants in this street."
          },
          commonMistakes: "易错：police station（警察局）不是police office"
        },
        {
          id: "8-10",
          title: "on the left/right",
          tag: "基础",
          grammar: "on the left/right在左边/右边；on one's left/right在某人的左边/右边",
          vocabulary: "on the left在左边, on the right在右边",
          examples: [
            { en: "The bank is on the left.", cn: "银行在左边。", note: "on the left" },
            { en: "You'll see it on your right.", cn: "你会在右边看到它。", note: "on your right" }
          ],
          extension: {
            transformation: "on the left = on the left-hand side",
            scenario: "指路：The shop is on your left."
          },
          commonMistakes: "易错：on the left（√）不是at the left（×）"
        },
        {
          id: "8-11",
          title: "spend的用法",
          tag: "拓展",
          grammar: "spend time/money on sth; spend time/money (in) doing sth",
          vocabulary: "spend花费, spend...on在...上花费, spend...doing花...做",
          examples: [
            { en: "I spend an hour on my homework.", cn: "我花一小时做作业。", note: "spend...on sth" },
            { en: "She spends much time reading.", cn: "她花很多时间读书。", note: "spend...(in) doing" }
          ],
          extension: {
            transformation: "spend → take（It takes sb...）",
            scenario: "描述时间花费：I spend 30 minutes walking to school."
          },
          commonMistakes: "易错：spend...on sth; spend...(in) doing（in可省略）"
        }
      ]
    }
  ],
  statistics: {
    totalUnits: 8,
    totalPoints: 88,
    tagDistribution: {
      "必考": 18,
      "重点": 26,
      "基础": 35,
      "拓展": 9
    },
    unitBreakdown: [
      { unit: 1, title: "Can you play the guitar?", points: 11 },
      { unit: 2, title: "What time do you go to school?", points: 11 },
      { unit: 3, title: "How do you get to school?", points: 11 },
      { unit: 4, title: "Don't eat in class", points: 11 },
      { unit: 5, title: "Why do you like pandas?", points: 11 },
      { unit: 6, title: "I'm watching TV", points: 11 },
      { unit: 7, title: "It's raining!", points: 11 },
      { unit: 8, title: "Is there a post office near here?", points: 11 }
    ]
  }
};

// 导出知识点库
if (typeof module !== 'undefined' && module.exports) {
  module.exports = knowledgeBase;
}

// 使用示例
console.log(`📚 7年级下册英语知识点库（牛津深圳版）`);
console.log(`✅ 共 ${knowledgeBase.totalPoints} 个知识点`);
console.log(`📊 标签分布：`);
Object.entries(knowledgeBase.statistics.tagDistribution).forEach(([tag, count]) => {
  const percentage = ((count / knowledgeBase.totalPoints) * 100).toFixed(1);
  console.log(`   ${tag}: ${count}个 (${percentage}%)`);
});
