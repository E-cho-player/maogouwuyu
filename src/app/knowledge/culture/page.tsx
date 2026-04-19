'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from '@/components/footer';
import { History, Globe, Clock, Heart, Share2, ArrowLeft, X, BookOpen } from 'lucide-react';
import { cultureHistoryImages } from '@/lib/images';

// 文章数据 - 包含详细内容
const articles = [
  {
    id: 1,
    title: '紫禁城御猫',
    subtitle: '中国皇室猫咪文化',
    excerpt: '探究清朝皇室中猫咪的地位与作用，了解它们在紫禁城的日常生活。从康熙到乾隆，御猫们在皇宫中扮演着独特的角色。',
    tags: ['中国古代', '皇室', '猫咪', '文化'],
    image: cultureHistoryImages.forbiddenCity,
    readTime: '8分钟',
    date: '2025-03-10',
    featured: true,
    content: `
# 紫禁城御猫：中国皇室猫咪文化

在中国古代皇宫中，猫咪不仅是捕鼠能手，更是皇室成员的心爱宠物。从明朝开始，紫禁城就有一支特殊的"御猫"队伍。

## 御猫的起源

明朝时期，皇帝为了保护珍贵的典籍和丝绸织物免受鼠患，专门在宫中饲养猫咪。这些猫咪经过严格筛选，只有品相优良、性情温顺的猫才能进入皇宫。

清代延续了这个传统，康熙皇帝尤其喜爱猫咪。据史料记载，康熙曾亲自为宫中的猫咪赐名，并安排专门的太监照料它们的饮食起居。

## 御猫的日常生活

御猫们在紫禁城过着优渥的生活：
- **饮食**：每日由御膳房专门准备新鲜鱼肉
- **住所**：在宫殿偏厅设有专门的猫房
- **护理**：有专人负责梳理毛发、清洁身体
- **活动**：可以在宫殿庭院自由活动

## 文化意义

御猫的存在不仅是实用的捕鼠需求，更象征着皇权的威严与文化的精致。它们出现在宫廷画作中，成为文人雅士吟咏的对象。

今天，故宫博物院内仍有数十只"故宫猫"，它们是古代御猫文化的现代传承者，吸引着无数游客前来参观。
    `,
  },
  {
    id: 2,
    title: '欧洲中世纪猫',
    subtitle: '猎巫运动中的猫',
    excerpt: '了解欧洲中世纪时期猫咪与宗教的关联，以及猎巫运动对猫的影响。从神灵的化身到被误解的对象。',
    tags: ['欧洲历史', '宗教', '猫咪', '文化史'],
    image: cultureHistoryImages.medievalEurope,
    readTime: '10分钟',
    date: '2025-03-09',
    featured: true,
    content: `
# 欧洲中世纪猫：猎巫运动中的悲惨命运

在中世纪的欧洲，猫咪经历了一段从神圣到被妖魔化的曲折历史。这段历史不仅影响了猫的命运，也深刻地改变了欧洲社会的发展轨迹。

## 从神灵到恶魔

古埃及时期，猫被视为神圣的动物，杀害猫咪甚至会被处以死刑。然而，随着基督教在欧洲的传播，猫的地位开始发生转变。

### 宗教因素
- 猫的独立性格被视为傲慢和不服从
- 猫在夜间活动的习性被解读为与黑暗势力相关
- 教会将猫与异教崇拜联系在一起

## 猎巫运动的受害者

从13世纪开始，欧洲开始了长达数百年的猎巫运动，猫咪成为了这场运动的主要受害者之一：

### 迫害方式
- 被指控为女巫的化身而遭到屠杀
- 在宗教节日被当作邪恶象征烧死
- 被怀疑携带瘟疫而大规模扑杀

### 社会影响
猫咪数量的急剧减少导致了鼠患泛滥，这被认为是14世纪黑死病大流行的重要原因之一。

## 历史的反思

直到文艺复兴时期，猫咪的地位才开始恢复。这段历史提醒我们，偏见和无知可能带来多么可怕的后果。今天，猫咪已成为欧洲最受欢迎的宠物之一，它们终于走出了历史的阴影。
    `,
  },
  {
    id: 3,
    title: '忠犬八公',
    subtitle: '真实故事背后的文化',
    excerpt: '深入探讨八公故事的文化意义，了解它在日本文化中的地位。一只忠犬如何成为忠诚的象征。',
    tags: ['日本', '忠犬', '感人故事', '文化符号'],
    image: cultureHistoryImages.hachiko,
    readTime: '6分钟',
    date: '2025-03-08',
    featured: false,
    content: `
# 忠犬八公：真实故事背后的文化意义

八公的故事是日本最著名的忠诚故事之一，这只秋田犬用十年的等待诠释了什么是真正的忠诚。

## 真实的八公

八公（1923-1935）是一只秋田犬，主人是东京帝国大学的教授上野英三郎。每天，八公都会送主人到涩谷站，并在傍晚时去车站迎接。

### 悲剧的发生
1925年，上野教授在授课时突发脑溢血去世，再也没有回到车站。然而，八公并不知晓，它在之后的九年多时间里，每天都会准时出现在涩谷站等待主人归来。

## 文化影响

八公的故事超越了国界，成为忠诚的象征：

### 在日本
- 1934年，在涩谷站设立了八公的铜像
- 八公成为日本忠诚文化的代表符号
- 每年都有纪念活动

### 全球影响
- 好莱坞电影《忠犬八公的故事》感动全球观众
- 八公的故事被翻译成多种语言
- 成为宠物忠诚的代名词

## 忠诚的价值

在现代社会，八公的故事提醒我们忠诚、等待和爱的珍贵。它不仅仅是一个关于狗的故事，更是关于生命中最纯粹情感的故事。
    `,
  },
  {
    id: 4,
    title: '狸猫换太子',
    subtitle: '中国成语典故解析',
    excerpt: '解析狸猫换太子的历史背景与文化含义，了解中国文学中的猫形象。从戏曲到民间传说。',
    tags: ['中国古代', '成语', '文化典故', '文学'],
    image: cultureHistoryImages.liMaoHuanTaiZi,
    readTime: '7分钟',
    date: '2025-03-07',
    featured: false,
    content: `
# 狸猫换太子：中国成语典故解析

"狸猫换太子"是中国家喻户晓的传奇故事，它融合了历史、文学和民间传说，成为中国文化中独特的猫形象代表。

## 故事内容

故事发生在北宋时期，讲述了刘妃与太监合谋，用剥皮的狸猫换掉李宸妃所生的太子，导致李宸妃蒙冤入狱。后来包拯查明真相，为李宸妃平反昭雪。

### 主要情节
- 李宸妃产下太子
- 刘妃嫉妒，用狸猫调换
- 李宸妃被诬陷打入冷宫
- 包拯明察秋毫，真相大白

## 历史原型

这个故事有一定的历史原型。宋真宗的刘皇后确实曾经收养过其他妃嫔的儿子，但真实历史远比传说温和。

## 文化意义

### 文学价值
- 成为古典戏曲的经典剧目
- 在《三侠五义》等小说中被广泛传播
- 是包公故事系列的重要组成部分

### 猫的文化形象
在这个故事中，狸猫被赋予了负面形象，这反映了古代中国人对野生动物的复杂态度。但值得注意的是，这里的"狸猫"实际上指的是野生的豹猫或狸，而非家猫。

## 现代解读

今天，"狸猫换太子"已成为形容以假乱真的成语，这个故事也让我们看到了古代宫廷斗争的残酷与民间智慧的结晶。
    `,
  },
  {
    id: 5,
    title: '古埃及猫神崇拜',
    subtitle: '从贝斯特神到家庭伴侣',
    excerpt: '探索古埃及文明中猫咪的神圣地位，贝斯特女神的崇拜仪式如何影响了整个地中海世界。',
    tags: ['古埃及', '猫神', '文化', '宗教'],
    image: cultureHistoryImages.egyptianBastet,
    readTime: '12分钟',
    date: '2025-03-06',
    featured: true,
    content: `
# 古埃及猫神崇拜：从贝斯特神到家庭伴侣

在人类文明史上，猫从未像在古埃及那样享有如此崇高的地位。它们不仅是家庭的一员，更被视为神圣的存在。

## 贝斯特女神

贝斯特（Bastet）是古埃及神话中的猫神，她最初是狮头女战神，后来逐渐演变为猫头女神，象征着家庭、生育和保护。

### 神话传说
- 贝斯特是太阳神拉的女儿
- 她保护家庭免受邪恶灵体侵害
- 夜间，她化身为猫与蛇神阿波菲斯战斗

## 猫的神圣地位

在古埃及，猫享有极高的地位：

### 法律保护
- 杀害猫咪是重罪，可能被处以死刑
- 即使是意外杀猫也需受到惩罚
- 葬礼仪式中，全家人会为死去的猫剃眉哀悼

### 猫木乃伊
- 猫死后会被制成木乃伊安葬
- 在专门的猫墓地安放
- 随葬品包括牛奶、老鼠等

## 崇拜仪式

### 布巴斯蒂斯神庙
位于尼罗河三角洲的布巴斯蒂斯是贝斯特崇拜的中心，每年举行盛大的祭祀活动：
- 数十万朝圣者聚集
- 音乐、舞蹈和盛宴
- 猫木乃伊的祭祀仪式

## 历史影响

古埃及的猫崇拜对整个地中海世界产生了深远影响。猫从埃及传播到希腊、罗马，最终进入整个欧洲，开启了猫咪与人类共同生活的历史篇章。
    `,
  },
  {
    id: 6,
    title: '中国古代犬文化',
    subtitle: '从狩猎到看家护院',
    excerpt: '追溯中国历史上犬的角色演变，从皇家猎犬到田园守护者，了解犬在中国文化中的意义。',
    tags: ['中国古代', '犬文化', '历史', '民俗'],
    image: cultureHistoryImages.ancientChineseDog,
    readTime: '9分钟',
    date: '2025-03-05',
    featured: false,
    content: `
# 中国古代犬文化：从狩猎到看家护院

犬是人类最早驯化的动物之一，在中国有着悠久的饲养历史。从甲骨文到唐诗宋词，犬的形象贯穿了整个中华文明。

## 先秦时期

### 甲骨文记载
甲骨文中已出现"犬"字，说明商代已有成熟的养犬文化。商王设有专门负责养犬的官员"犬人"。

### 狩猎伙伴
先秦时期，犬主要用于狩猎。《诗经》中多次提到犬在田猎中的作用：
- "跃跃毚兔，遇犬获之"
- 犬是贵族狩猎的必备助手

## 汉唐盛世

### 品种分化
汉代开始，犬的品种逐渐分化：
- **猎犬**：用于狩猎，如细犬
- **守犬**：用于看家护院
- **食犬**：部分地区食用
- **玩赏犬**：宫廷宠物

### 唐代繁荣
唐代是犬文化发展的鼎盛时期：
- 宫廷饲养各种名贵犬种
- 《酉阳杂俎》详细记载犬的品种
- 绘画中常出现犬的形象

## 文化象征

### 忠诚象征
犬在中国文化中是忠诚的象征：
- "犬马之劳"表示竭诚服务
- "犬子"是谦称自己的儿子
- 牧羊犬三千里寻主的故事广为流传

### 民俗传统
- 农历正月初二是"狗日"
- 许多地区有敬狗的习俗
- 田园犬是农村家庭的重要成员

## 现代传承

今天，中华田园犬作为中国本土犬种，仍然在农村广泛饲养，它们是古老犬文化的活化石，承载着中国人对犬的特殊情感。
    `,
  },
];

export default function CultureHistoryPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState('全部');

  const filters = ['全部', '中国古代', '欧洲历史', '日本文化', '古埃及', '民俗传说'];

  const filteredArticles = articles.filter((article) => {
    if (activeFilter === '全部') return true;
    return article.tags.includes(activeFilter);
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* 返回按钮 - 固定在左上角 */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/knowledge"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-amber-600"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">返回</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-amber-500/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <History className="h-8 w-8 text-amber-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              猫狗文化史专栏
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              穿越时空，探索猫狗在人类文明中的足迹
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Heart className="h-6 w-6 mr-2 text-red-500" />
            精选文章
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles
              .filter((a) => a.featured)
              .map((article) => (
                <FeaturedArticle
                  key={article.id}
                  article={article}
                  onClick={() => setSelectedArticle(article)}
                />
              ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">全部文章</h2>
          <div className="space-y-6">
            {filteredArticles.map((article) => (
              <ArticleRow
                key={article.id}
                article={article}
                onClick={() => setSelectedArticle(article)}
              />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">暂无相关文章</p>
            </div>
          )}
        </div>
      </section>

      {/* Cultural Timeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Globe className="h-6 w-6 mr-2 text-primary" />
            文化时间轴
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TimelineItem
              period="公元前3000年"
              location="古埃及"
              title="猫神崇拜兴起"
              description="贝斯特女神成为家猫的保护神"
            />
            <TimelineItem
              period="公元前200年"
              location="中国"
              title="犬文化记载"
              description="《诗经》中开始出现犬的记载"
            />
            <TimelineItem
              period="公元8世纪"
              location="日本"
              title="猫从中国传入"
              description="佛教僧侣将猫带入日本作为护寺动物"
            />
            <TimelineItem
              period="13-17世纪"
              location="欧洲"
              title="猎巫运动"
              description="猫被误解与黑魔法关联，遭受迫害"
            />
            <TimelineItem
              period="19世纪"
              location="维多利亚时代"
              title="宠物猫复兴"
              description="猫咪重新成为家庭宠物，品种开始固定"
            />
            <TimelineItem
              period="20世纪"
              location="全球"
              title="现代宠物文化"
              description="猫狗成为全球最受欢迎的宠物"
            />
          </div>
        </div>
      </section>

      <Footer />

      {/* 文章详情弹窗 */}
      {selectedArticle && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 弹窗头部图片 */}
            <div className="relative h-56 flex-shrink-0">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {selectedArticle.title}
                </h2>
                <p className="text-white/80">{selectedArticle.subtitle}</p>
              </div>
            </div>

            {/* 弹窗内容 */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* 文章元信息 */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {selectedArticle.readTime}
                  </span>
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex gap-2">
                  {selectedArticle.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 文章内容 */}
              <div className="prose prose-gray max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-2xl font-bold mb-4 hidden">
                        {paragraph.slice(2)}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2
                        key={index}
                        className="text-xl font-bold mt-6 mb-3 text-gray-800 border-l-4 border-amber-400 pl-3"
                      >
                        {paragraph.slice(3)}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3
                        key={index}
                        className="text-lg font-semibold mt-4 mb-2 text-gray-700"
                      >
                        {paragraph.slice(4)}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li
                        key={index}
                        className="text-gray-600 ml-4 mb-1"
                      >
                        {paragraph.slice(2)}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-600 mb-3 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>
            </div>

            {/* 弹窗底部操作栏 */}
            <div className="flex-shrink-0 flex gap-3 p-4 border-t bg-gray-50">
              <button
                onClick={() => setSelectedArticle(null)}
                className="flex-1 py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition-colors"
              >
                关闭
              </button>
              <button className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-white transition-colors">
                <Heart className="w-5 h-5 text-gray-400" />
              </button>
              <button className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-white transition-colors">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FeaturedArticle({
  article,
  onClick,
}: {
  article: typeof articles[0];
  onClick: () => void;
}) {
  return (
    <div
      className="group p-6 rounded-xl border border-gray-100 bg-white hover:shadow-xl hover:border-amber-200 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-amber-600 mb-2">{article.subtitle}</p>
          <p className="text-gray-500 mb-4 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
        <button className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
          <BookOpen className="w-4 h-4 inline mr-2" />
          阅读全文
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          <Heart className="h-4 w-4" />
        </button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function ArticleRow({
  article,
  onClick,
}: {
  article: typeof articles[0];
  onClick: () => void;
}) {
  return (
    <div
      className="group p-6 rounded-xl border border-gray-100 bg-white hover:shadow-lg hover:border-amber-200 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold group-hover:text-amber-600 transition-colors">
              {article.title}
            </h3>
            <span className="text-xs text-gray-400">{article.date}</span>
          </div>
          <p className="text-amber-600 text-sm mb-2">{article.subtitle}</p>
          <p className="text-sm text-gray-500 mb-3 line-clamp-1">{article.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  period,
  location,
  title,
  description,
}: {
  period: string;
  location: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md hover:border-amber-200 transition-all">
      <div className="text-xs text-amber-600 font-semibold mb-1">{period}</div>
      <div className="text-xs text-gray-400 mb-2">{location}</div>
      <h4 className="font-semibold mb-1 text-gray-800">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
