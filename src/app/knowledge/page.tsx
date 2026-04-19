'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Globe,
  Clock,
  Search,
  Filter,
  Dog,
  Cat,
  Map,
  History,
  Sparkles,
  X,
  ArrowRight,
  Heart,
  Star,
  Home,
  Calendar,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import { petImages, cultureHistoryImages } from '@/lib/images';

// 所有可搜索的数据
const allBreeds: Array<{
  id: string;
  type: 'breed';
  name: string;
  species: 'dog' | 'cat';
  origin: string;
  traits: string;
  culture: string;
  imageUrl: string;
}> = [
  { id: 'breed-1', type: 'breed', name: '中华田园犬', species: 'dog', origin: '中国', traits: '忠诚、聪明、适应力强', culture: '中国农耕文化的看家护院伙伴', imageUrl: petImages.chineseFieldDog },
  { id: 'breed-2', type: 'breed', name: '日本柴犬', species: 'dog', origin: '日本', traits: '忠诚、独立、警惕', culture: '江户时代的狩猎与陪伴伴侣', imageUrl: petImages.shibaInu },
  { id: 'breed-3', type: 'breed', name: '金毛寻回犬', species: 'dog', origin: '英国', traits: '温顺、友好、聪明', culture: '英国贵族的狩猎伴侣', imageUrl: petImages.goldenRetriever },
  { id: 'breed-4', type: 'breed', name: '边境牧羊犬', species: 'dog', origin: '英国', traits: '聪明、敏捷、忠诚', culture: '苏格兰牧场的得力助手', imageUrl: petImages.borderCollie },
  { id: 'breed-5', type: 'breed', name: '拉布拉多犬', species: 'dog', origin: '加拿大', traits: '友善、活泼、易训练', culture: '最受欢迎的家庭伴侣犬', imageUrl: petImages.labrador },
  { id: 'breed-6', type: 'breed', name: '柯基犬', species: 'dog', origin: '英国', traits: '活泼、勇敢、友好', culture: '英国皇室最爱的犬种', imageUrl: petImages.corgi },
  { id: 'breed-7', type: 'breed', name: '苏格兰折耳猫', species: 'cat', origin: '苏格兰', traits: '温顺、聪明、安静', culture: '苏格兰田园文化的代表', imageUrl: petImages.scottishFold },
  { id: 'breed-8', type: 'breed', name: '埃及猫', species: 'cat', origin: '埃及', traits: '聪明、活泼、忠诚', culture: '古埃及奉为神猫的典故', imageUrl: petImages.egyptianCat },
  { id: 'breed-9', type: 'breed', name: '布偶猫', species: 'cat', origin: '美国', traits: '温顺、粘人、优雅', culture: '被称为仙女猫的理想伴侣', imageUrl: petImages.ragdoll },
  { id: 'breed-10', type: 'breed', name: '中华田园猫', species: 'cat', origin: '中国', traits: '独立、聪明、灵活', culture: '中国传统文化中的捕鼠能手', imageUrl: petImages.chineseGardenCat },
  { id: 'breed-11', type: 'breed', name: '波斯猫', species: 'cat', origin: '伊朗', traits: '优雅、安静、高贵', culture: '古代贵族的尊贵象征', imageUrl: petImages.persian },
  { id: 'breed-12', type: 'breed', name: '缅因猫', species: 'cat', origin: '美国', traits: '友善、聪明、大体型', culture: '被称为温柔的巨人', imageUrl: petImages.maineCoon },
  { id: 'breed-13', type: 'breed', name: '德国牧羊犬', species: 'dog', origin: '德国', traits: '勇敢、聪明、忠诚', culture: '军警犬的代表性品种', imageUrl: petImages.germanShepherd },
  { id: 'breed-14', type: 'breed', name: '法国斗牛犬', species: 'dog', origin: '法国', traits: '友善、聪明、安静', culture: '城市家庭的理想伴侣', imageUrl: petImages.frenchBulldog },
  { id: 'breed-15', type: 'breed', name: '英短', species: 'cat', origin: '英国', traits: '安静、友善、适应力强', culture: '英国绅士般的风度', imageUrl: petImages.britishShorthair },
  { id: 'breed-16', type: 'breed', name: '美短', species: 'cat', origin: '美国', traits: '活泼、聪明、友善', culture: '美国最受欢迎的家猫品种', imageUrl: petImages.americanShorthair },
];

const cultureArticles = [
  { id: 'culture-1', type: 'culture', title: '紫禁城御猫', subtitle: '中国皇室猫咪文化', excerpt: '探究清朝皇室中猫咪的地位与作用，了解它们在紫禁城的日常生活', tags: ['中国古代', '皇室', '猫咪'], imageUrl: cultureHistoryImages.forbiddenCity },
  { id: 'culture-2', type: 'culture', title: '欧洲中世纪猫', subtitle: '猎巫运动中的猫', excerpt: '了解欧洲中世纪时期猫咪与宗教的关联，以及猎巫运动对猫的影响', tags: ['欧洲历史', '宗教', '猫咪'], imageUrl: cultureHistoryImages.medievalEurope },
  { id: 'culture-3', type: 'culture', title: '忠犬八公', subtitle: '真实故事背后的文化', excerpt: '深入探讨八公故事的文化意义，了解它在日本文化中的地位', tags: ['日本', '忠犬', '感人故事'], imageUrl: cultureHistoryImages.hachiko },
  { id: 'culture-4', type: 'culture', title: '狸猫换太子', subtitle: '中国成语典故解析', excerpt: '解析狸猫换太子的历史背景与文化含义，了解中国文学中的猫形象', tags: ['中国古代', '成语', '文化典故'], imageUrl: cultureHistoryImages.liMaoHuanTaiZi },
  { id: 'culture-5', type: 'culture', title: '古埃及猫神崇拜', subtitle: '从贝斯特神到家庭伴侣', excerpt: '探索古埃及文明中猫咪的神圣地位，贝斯特女神的崇拜仪式', tags: ['古埃及', '猫神', '文化', '宗教'], imageUrl: cultureHistoryImages.egyptianBastet },
  { id: 'culture-6', type: 'culture', title: '中国古代犬文化', subtitle: '从狩猎到看家护院', excerpt: '追溯中国历史上犬的角色演变，了解犬在中国文化中的意义', tags: ['中国古代', '犬文化', '历史', '民俗'], imageUrl: cultureHistoryImages.ancientChineseDog },
];

const dailyArticles = [
  { id: 'daily-1', type: 'daily', title: '春季猫咪护理要点', category: '养护知识', readTime: '3分钟', excerpt: '春季猫咪换毛期的护理方法，帮助猫咪顺利度过换毛期', tags: ['猫咪', '护理', '换毛'],
    content: `春季是猫咪换毛的季节，以下护理要点需要特别注意：

## 一、换毛期护理

春季猫咪会褪去厚厚的冬毛，迎来轻盈的春装。这个时期需要每天为猫咪梳毛，至少早晚各一次，可以有效去除死毛，减少毛球症的发生。

## 二、洗澡注意事项

- 水温控制在38-40度左右
- 使用专用的猫咪洗护产品
- 洗澡后彻底吹干毛发
- 换毛期不要过于频繁洗澡

## 三、营养补充

换毛期间猫咪需要更多的蛋白质和维生素来支持新毛的生长，可以适当增加一些美毛食品，如鱼油、卵磷脂等。

## 四、环境清洁

春季气温回升，细菌容易滋生，要加强猫咪生活环境的清洁消毒工作，定期清洗猫窝、玩具等用品。

## 五、预防皮肤病

换毛期猫咪皮肤较为敏感，要注意观察是否有皮肤红肿、瘙痒等异常情况，如有发现及时就医。` },
  { id: 'daily-2', type: 'daily', title: '为什么狗狗摇尾巴？', category: '习性研究', readTime: '5分钟', excerpt: '深入了解狗狗摇尾巴的含义，它们情绪的信号解读', tags: ['狗狗', '习性', '行为'],
    content: `狗狗摇尾巴是最常见的行为之一，但其中蕴含着丰富的情绪信息。

## 一、摇尾巴的方向

研究表明，狗狗摇尾巴的方向能反映它们的情绪状态：
- **向右摇**：通常表示积极情绪，狗狗感到高兴或兴奋
- **向左摇**：可能表示焦虑、紧张或负面情绪

## 二、摇尾巴的高度

- **高高翘起**：自信、充满活力
- **水平伸展**：警觉、关注周围环境
- **低垂夹紧**：恐惧、不安或顺从

## 三、摇尾巴的速度

- **快速摇摆**：兴奋、期待
- **缓慢摇摆**：放松、舒适
- **僵硬小幅摇摆**：警惕、谨慎

## 四、与其他肢体语言的配合

观察狗狗的整体肢体语言很重要：
- 摇尾巴+放松的身体=开心
- 摇尾巴+僵硬的身体+耳朵后贴=紧张害怕
- 摇尾巴+舔嘴唇+打哈欠=压力或不安

## 五、注意事项

并非所有摇尾巴都是友好的，有些狗狗可能在感到威胁时也会摇尾巴，这时要结合其他信号判断。` },
  { id: 'daily-3', type: 'daily', title: '中华田园犬的前世今生', category: '文化故事', readTime: '8分钟', excerpt: '从古代到现代，中华田园犬的历史变迁与文化价值', tags: ['中华田园犬', '历史', '文化'],
    content: `中华田园犬是中国本土最古老的犬种之一，承载着数千年的历史文化。

## 一、历史起源

中华田园犬起源于中国，距今已有数千年的历史。它们是原始社会人类驯化狼而形成的犬类，在农耕社会中扮演着看家护院的重要角色。

## 二、古代地位

在古代，中华田园犬被称为"柴犬"或"土狗"，是普通百姓家庭最常见的伙伴。它们不仅是家庭的守护者，也是狩猎的助手，在诗词歌赋中经常出现。

## 三、文化象征

- **忠诚护主**：田园犬以其忠诚著称，常有义犬救主的感人故事
- **吉祥寓意**：在中国传统文化中，狗象征着忠诚和财富
- **民间艺术**：剪纸、年画中常见田园犬形象

## 四、现代处境

然而在现代，中华田园犬面临着身份认同危机：
- 被误认为"土狗"而受到歧视
- 纯种数量逐年减少
- 缺乏官方保护和品种认证

## 五、保护意义

保护中华田园犬不仅是保护生物多样性，更是保护中国传统文化的的重要组成部分。我们应该：
- 正确认识田园犬的价值
- 提倡领养代替购买
- 为田园犬建立基因库` },
  { id: 'daily-4', type: 'daily', title: '猫咪需要多少睡眠？', category: '习性研究', readTime: '4分钟', excerpt: '了解猫咪的睡眠习惯，它们为什么那么爱睡觉', tags: ['猫咪', '习性', '睡眠'],
    content: `猫咪以其嗜睡而闻名，让我们来了解一下它们的睡眠习性。

## 一、睡眠时长

成年猫咪每天需要睡眠12-16小时，幼猫和老猫可能需要更多。猫咪是典型的晨昏动物，在清晨和黄昏最为活跃。

## 二、睡眠阶段

猫咪的睡眠分为两个阶段：
- **浅睡眠（约30分钟）**：猫咪保持警觉，容易被唤醒
- **深睡眠（约5-10分钟）**：真正的休息，身体得到恢复

## 三、睡眠习惯的特点

1. **碎片化睡眠**：猫咪不会连续睡很长时间，而是多次小睡
2. **假寐状态**：即使在睡眠中，猫咪也能保持对周围环境的警觉
3. **高处睡眠**：猫咪喜欢在较高的地方睡觉，这是野生祖先留下的习性

## 四、为什么需要这么多睡眠？

- **节省能量**：野外的猫科动物需要为狩猎保存能量
- **身体发育**：幼猫在睡眠中分泌生长激素
- **身体恢复**：睡眠有助于身体修复和免疫力提升

## 五、睡眠异常信号

如果猫咪突然改变睡眠习惯，可能是健康问题的信号：
- 过度嗜睡
- 失眠
- 睡眠时呼吸异常` },
  { id: 'daily-5', type: 'daily', title: '狗狗社交化训练', category: '训练技巧', readTime: '6分钟', excerpt: '如何帮助狗狗建立良好的社交能力', tags: ['狗狗', '训练', '社交'],
    content: `社交化训练是狗狗成长过程中非常重要的一环，良好的社交能力能让狗狗更快乐、更安全。

## 一、社交化的最佳时期

幼犬的社交化黄金期是3-14周龄，这个时期狗狗对新鲜事物的接受度最高。

## 二、社交化的内容

### 1. 与人接触
- 接触不同年龄、性别、体型的人
- 触摸狗狗的各个部位（耳朵、脚掌、嘴巴等）
- 正常的梳毛、剪指甲等护理

### 2. 与其他狗狗互动
- 安全的犬类社交场所
- 温和友好的成年犬
- 各种体型和品种的狗

### 3. 环境适应
- 不同的地面材质
- 各种声响（鞭炮、汽车等）
- 不同的环境（公园、街道、宠物店）

## 三、社交化训练方法

1. **循序渐进**：从简单到复杂，从熟悉到陌生
2. **正向强化**：用零食和表扬奖励勇敢行为
3. **观察反应**：注意狗狗的压力信号，及时调整
4. **持续进行**：社交化是终身学习的过程

## 四、常见问题处理

- **恐惧期**：狗狗在特定阶段会出现恐惧反应，要有耐心
- **过度兴奋**：教会狗狗冷静，保持适度兴奋
- **攻击行为**：及时寻求专业训犬师帮助` },
  { id: 'daily-6', type: 'daily', title: '猫咪零食选择指南', category: '营养知识', readTime: '5分钟', excerpt: '如何选择健康、安全的猫咪零食', tags: ['猫咪', '营养', '零食'],
    content: `给猫咪选择零食是增强人猫感情的好方法，但选择不当可能影响猫咪健康。

## 一、猫咪零食的类型

### 1. 肉干类
- 鸡胸肉干、鱼干、鸭肉干等
- 选择无添加、低盐的产品
- 注意查看配料表

### 2. 猫罐头/猫条
- 作为零食或拌饭使用
- 注意查看蛋白质含量
- 选择无谷物的更佳

### 3. 营养膏
- 快速补充能量
- 适合挑食或生病的猫咪
- 不要过度依赖

### 4. 冻干类
- 保存营养较多
- 价格相对较高
- 复水后喂食

## 二、选择零食的原则

1. **安全第一**：无添加剂、防腐剂、色素
2. **成分简单**：肉类为主，谷物尽量少
3. **适量喂食**：零食不能超过每日摄入量的10%
4. **因猫制宜**：根据猫咪年龄、健康状况选择

## 三、不能给猫咪吃的零食

- 巧克力（含可可碱）
- 洋葱、大蒜（引起贫血）
- 葡萄、葡萄干（肾损伤）
- 木糖醇（低血糖）
- 酒精类

## 四、健康喂食建议

- 作为训练奖励使用
- 配合正餐喂食
- 固定喂食时间
- 保持口腔清洁` },
  { id: 'daily-7', type: 'daily', title: '狗狗疫苗接种指南', category: '健康知识', readTime: '6分钟', excerpt: '了解狗狗需要接种哪些疫苗，接种时间和注意事项', tags: ['狗狗', '健康', '疫苗'],
    content: `疫苗接种是保护狗狗健康的重要措施，以下是详细的疫苗接种指南。

## 一、核心疫苗（必打）

### 1. 狂犬疫苗
- 首次接种：3月龄以上
- 加强针：每年一次
- 法律要求必打

### 2. 犬瘟热疫苗
- 首次接种：6-8周龄
- 加强针：11-12周龄、15-16周龄
- 之后每1-3年加强

### 3. 犬细小病毒疫苗
- 预防犬细小病毒肠炎
- 接种程序同犬瘟热

### 4. 犬腺病毒疫苗
- 预防传染性肝炎和呼吸道疾病

## 二、非核心疫苗（可选）

根据狗狗的生活环境选择：
- 钩端螺旋体疫苗
- 犬窝咳疫苗
- 莱姆病疫苗

## 三、接种时间表

| 年龄 | 疫苗 |
|------|------|
| 6-8周 | 第一针核心疫苗 |
| 10-12周 | 第二针核心疫苗 |
| 14-16周 | 第三针核心疫苗+狂犬 |
| 1岁 | 加强针 |

## 四、注意事项

1. **健康状态下接种**：生病时不打疫苗
2. **观察30分钟**：预防过敏反应
3. **避免洗澡**：接种后一周内不要洗澡
4. **减少外出**：免疫形成期避免接触其他动物

## 五、接种后反应

正常的轻微反应：
- 注射部位轻微肿胀
- 轻度嗜睡
- 食欲减退

需要就医的情况：
- 严重肿胀
- 呕吐、腹泻
- 呼吸困难` },
  { id: 'daily-8', type: 'daily', title: '猫咪驱虫全攻略', category: '健康知识', readTime: '5分钟', excerpt: '猫咪体内外驱虫的方法、频率和注意事项', tags: ['猫咪', '健康', '驱虫'],
    content: `驱虫是猫咪健康管理的重要环节，以下是全面的驱虫指南。

## 一、寄生虫类型

### 体内寄生虫
- 蛔虫、绦虫、钩虫
- 鞭毛虫、球虫
- 心丝虫

### 体外寄生虫
- 跳蚤、虱子
- 蜱虫
- 耳螨、疥螨

## 二、驱虫频率

| 猫咪类型 | 建议频率 |
|----------|----------|
| 室内猫 | 每3-6个月一次体内 |
| 室外猫 | 每月一次体内外 |
| 幼猫 | 2周龄开始，每2周一次至3月龄 |

## 三、驱虫药类型

### 口服类
- 体内驱虫药片
- 口味好，易喂食
- 需要猫咪主动吃下

### 外用滴剂
- 体内外同驱
- 滴在脖颈处
- 使用方便

### 喷剂
- 快速杀灭体外寄生虫
- 可用于环境消毒
- 需要避免猫咪舔舐

## 四、驱虫注意事项

1. **按体重选择剂量**：过量可能导致中毒
2. **查看说明书**：不同药物使用方式不同
3. **观察反应**：用药后注意猫咪状态
4. **环境清洁**：同时消毒猫咪生活环境

## 五、驱虫误区

- ❌ 室内猫不需要驱虫
- ❌ 驱虫一次就够了
- ❌ 驱虫药越贵越好
- ✅ 选择正规品牌，按说明使用

## 六、特殊情况

- 怀孕猫咪：咨询兽医后使用安全药物
- 生病猫咪：康复后再驱虫
- 刚领养的猫咪：先体检，再制定驱虫计划` },
];

export default function KnowledgePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState<typeof allBreeds[0] | null>(null);
  const [selectedDaily, setSelectedDaily] = useState<typeof dailyArticles[0] | null>(null);
  const [showAllDaily, setShowAllDaily] = useState(false);

  // 搜索结果
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;

    const query = searchQuery.toLowerCase().trim();
    const results: any[] = [];

    // 搜索品种
    allBreeds.forEach(breed => {
      if (
        breed.name.toLowerCase().includes(query) ||
        breed.origin.toLowerCase().includes(query) ||
        breed.traits.toLowerCase().includes(query) ||
        breed.culture.toLowerCase().includes(query) ||
        (breed.species === 'dog' && '犬 狗 狗狗'.includes(query)) ||
        (breed.species === 'cat' && '猫 猫咪'.includes(query))
      ) {
        results.push(breed);
      }
    });

    // 搜索文化文章
    cultureArticles.forEach(article => {
      if (
        article.title.toLowerCase().includes(query) ||
        article.subtitle.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      ) {
        results.push(article);
      }
    });

    // 搜索每日科普
    dailyArticles.forEach(article => {
      if (
        article.title.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query))
      ) {
        results.push(article);
      }
    });

    return results;
  }, [searchQuery]);

  // 执行搜索
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
    }
  };

  // 清除搜索
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              科普百科
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              探索犬猫世界，了解品种文化
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.trim()) {
                      setIsSearching(true);
                    }
                  }}
                  placeholder="搜索品种、文化故事、养护知识..."
                  className="w-full pl-12 pr-24 py-4 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none bg-background text-lg"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-24 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                )}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  搜索
                </button>
              </form>
              
              {/* 热门搜索 */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="text-sm text-muted-foreground">热门搜索：</span>
                {['柴犬', '布偶猫', '猫咪护理', '狗狗训练'].map(keyword => (
                  <button
                    key={keyword}
                    onClick={() => {
                      setSearchQuery(keyword);
                      setIsSearching(true);
                    }}
                    className="px-3 py-1 text-sm bg-muted hover:bg-muted/80 rounded-full transition-colors"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 搜索结果 */}
      {isSearching && searchResults !== null && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  搜索结果
                  <span className="text-lg font-normal text-muted-foreground ml-2">
                    共 {searchResults.length} 条
                  </span>
                </h2>
                <button
                  onClick={clearSearch}
                  className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="h-4 w-4" />
                  清除搜索
                </button>
              </div>

              {searchResults.length === 0 ? (
                <div className="text-center py-16">
                  <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground mb-2">未找到相关内容</p>
                  <p className="text-sm text-muted-foreground">换个关键词试试？</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* 品种结果 */}
                  {searchResults.filter(r => r.type === 'breed').length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Dog className="h-5 w-5 text-primary" />
                        品种
                        <span className="text-sm font-normal text-muted-foreground">
                          ({searchResults.filter(r => r.type === 'breed').length})
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {searchResults.filter(r => r.type === 'breed').map((breed) => (
                          <SearchResultCard
                            key={breed.id}
                            type="breed"
                            title={breed.name}
                            subtitle={`${breed.species === 'dog' ? '犬' : '猫'} · ${breed.origin}`}
                            description={breed.traits}
                            imageUrl={breed.imageUrl}
                            href={`/knowledge/breeds/${breed.name}`}
                            onClose={clearSearch}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 文化文章结果 */}
                  {searchResults.filter(r => r.type === 'culture').length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <History className="h-5 w-5 text-primary" />
                        文化史专栏
                        <span className="text-sm font-normal text-muted-foreground">
                          ({searchResults.filter(r => r.type === 'culture').length})
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {searchResults.filter(r => r.type === 'culture').map((article) => (
                          <SearchResultCard
                            key={article.id}
                            type="culture"
                            title={article.title}
                            subtitle={article.subtitle}
                            description={article.excerpt}
                            imageUrl={article.imageUrl}
                            tags={article.tags}
                            href="/knowledge/culture"
                            onClose={clearSearch}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 每日科普结果 */}
                  {searchResults.filter(r => r.type === 'daily').length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        每日科普
                        <span className="text-sm font-normal text-muted-foreground">
                          ({searchResults.filter(r => r.type === 'daily').length})
                        </span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {searchResults.filter(r => r.type === 'daily').map((article) => (
                          <SearchResultCard
                            key={article.id}
                            type="daily"
                            title={article.title}
                            subtitle={article.category}
                            description={article.excerpt}
                            readTime={article.readTime}
                            href={`/knowledge/daily/${article.id}`}
                            onClose={clearSearch}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 正常内容（未搜索时显示） */}
      {!isSearching && (
        <>
          {/* Quick Access */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <QuickLink href="/knowledge/breeds?species=dog" icon={<Dog className="h-6 w-6" />} title="犬类品种" />
                <QuickLink href="/knowledge/breeds?species=cat" icon={<Cat className="h-6 w-6" />} title="猫类品种" />
                <QuickLink href="/knowledge/culture" icon={<History className="h-6 w-6" />} title="文化史专栏" />
                <QuickLink href="/knowledge/evolution" icon={<Map className="h-6 w-6" />} title="演化图谱" />
              </div>
            </div>
          </section>

          {/* Breed Library */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">品种库</h2>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <select className="px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>全部</option>
                    <option>大型犬</option>
                    <option>中型犬</option>
                    <option>小型犬</option>
                    <option>长毛猫</option>
                    <option>短毛猫</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allBreeds.slice(0, 12).map((breed) => (
                  <BreedCard
                    key={breed.id}
                    {...breed}
                    onClick={() => setSelectedBreed(breed)}
                  />
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/knowledge/breeds"
                  className="inline-flex items-center px-6 py-3 border border-input bg-background hover:bg-accent rounded-lg font-medium transition-colors"
                >
                  查看更多品种
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Culture History */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">猫狗文化史专栏</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  梳理中外历史中猫狗的角色演变，探索它们在人类文明中的足迹
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cultureArticles.slice(0, 4).map((article) => (
                  <CultureArticle key={article.id} {...article} />
                ))}
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/knowledge/culture"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  浏览更多文化文章
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Daily Knowledge */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  <Clock className="inline h-8 w-8 mr-2 text-primary" />
                  每日科普
                </h2>
                <span className="text-sm text-muted-foreground">根据您的兴趣推送</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(showAllDaily ? dailyArticles : dailyArticles.slice(0, 6)).map((article) => (
                  <DailyCard
                    key={article.id}
                    {...article}
                    onClick={() => setSelectedDaily(article)}
                  />
                ))}
              </div>
              {dailyArticles.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAllDaily(!showAllDaily)}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    {showAllDaily ? (
                      <>
                        <X className="h-4 w-4" />
                        收起文章
                      </>
                    ) : (
                      <>
                        <ArrowRight className="h-4 w-4" />
                        查看更多文章 ({dailyArticles.length - 6}篇)
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* 品种详情弹窗 */}
      {selectedBreed && (
        <BreedDetailModal
          breed={selectedBreed}
          onClose={() => setSelectedBreed(null)}
        />
      )}

      {/* 每日科普详情弹窗 */}
      {selectedDaily && (
        <DailyDetailModal
          article={selectedDaily}
          onClose={() => setSelectedDaily(null)}
        />
      )}

      <ChatWidget />
      <Footer />
    </div>
  );
}

// 搜索结果卡片
function SearchResultCard({
  type,
  title,
  subtitle,
  description,
  imageUrl,
  tags,
  readTime,
  href,
  onClose,
}: {
  type: 'breed' | 'culture' | 'daily';
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  readTime?: string;
  href: string;
  onClose: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="group block p-5 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
    >
      <div className="flex gap-4">
        {imageUrl && (
          <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
            <Image src={imageUrl} alt={title} fill className="object-cover" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors truncate">
            {title}
          </h4>
          <p className="text-sm text-primary mb-2">{subtitle}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="px-2 py-0.5 text-xs bg-muted rounded-full text-muted-foreground">
                  #{tag}
                </span>
              ))}
            </div>
          )}
          {readTime && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
              <Clock className="h-3 w-3" />
              {readTime}
            </div>
          )}
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
      </div>
    </Link>
  );
}

function QuickLink({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-3 p-4 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all group"
    >
      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <span className="font-medium">{title}</span>
    </Link>
  );
}

function BreedCard({
  name,
  species,
  origin,
  traits,
  culture,
  imageUrl,
  onClick,
}: {
  name: string;
  species: 'dog' | 'cat';
  origin: string;
  traits: string;
  culture: string;
  imageUrl: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group block w-full text-left p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
          <Image src={imageUrl} alt={name} fill className="object-cover" />
        </div>
        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
          {species === 'dog' ? '犬' : '猫'}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground mb-2">原产地: {origin}</p>
      <p className="text-sm text-muted-foreground mb-3">性格: {traits}</p>
      <div className="pt-3 border-t">
        <p className="text-sm font-medium text-primary flex items-center">
          <Globe className="h-4 w-4 mr-1" />
          {culture}
        </p>
      </div>
    </button>
  );
}

function CultureArticle({
  title,
  subtitle,
  excerpt,
  tags,
  imageUrl,
}: {
  title: string;
  subtitle: string;
  excerpt: string;
  tags: string[];
  imageUrl: string;
}) {
  return (
    <Link
      href="/knowledge/culture"
      className="group block p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
    >
      <div className="flex gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-primary mb-3">{subtitle}</p>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function DailyCard({
  id,
  title,
  category,
  readTime,
  excerpt,
  content,
  onClick,
}: {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group block w-full text-left p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
          {category}
        </span>
        <span className="text-xs text-muted-foreground">{readTime}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-muted-foreground">{excerpt}</p>
    </button>
  );
}

// 品种详情弹窗
function BreedDetailModal({
  breed,
  onClose,
}: {
  breed: typeof allBreeds[0];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold">{breed.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex gap-6 mb-6">
            <div className="relative w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
              <Image src={breed.imageUrl} alt={breed.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                  {breed.species === 'dog' ? '犬类' : '猫类'}
                </span>
                <span className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full">
                  {breed.origin}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">原产地：{breed.origin}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">性格特点：{breed.traits}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">文化寓意：{breed.culture}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              品种介绍
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">{breed.name}</strong> 是一种源自{breed.origin}的{breed.species === 'dog' ? '犬类' : '猫类'}品种。
                它们以其独特的{breed.traits}等特点而受到人们的喜爱。
              </p>
              <p>
                在文化层面，{breed.name}有着深厚的文化底蕴。{breed.culture}，
                这也是它们能够在历史长河中延续至今的重要原因。
              </p>
              <p>
                无论是作为{breed.species === 'dog' ? '忠诚的伙伴' : '优雅的陪伴'}，
                {breed.name}都是{breed.origin}留给世界的珍贵礼物。
              </p>
            </div>
          </div>
          <div className="border-t pt-6 mt-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              养护小贴士
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                定期进行健康检查，保持良好的生活习惯
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                提供均衡的营养饮食，注意{breed.species === 'dog' ? '狗粮' : '猫粮'}的品质
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                保持生活环境清洁卫生，定期驱虫和疫苗接种
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                {breed.species === 'dog' ? '每天定时散步，保持适量运动' : '提供猫爬架等玩具，满足其攀爬习性'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// 每日科普详情弹窗
function DailyDetailModal({
  article,
  onClose,
}: {
  article: typeof dailyArticles[0];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
              {article.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
          <p className="text-muted-foreground mb-6">{article.excerpt}</p>
          <div className="prose prose-sm max-w-none">
            {article.content?.split('\n').map((line, index) => {
              if (line.startsWith('## ')) {
                return <h2 key={index} className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={index} className="text-lg font-semibold mt-4 mb-2">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={index} className="ml-4 mb-1 text-muted-foreground">{line.replace('- ', '')}</li>;
              }
              if (line.match(/^[0-9]+\. /)) {
                return <li key={index} className="ml-4 mb-1 text-muted-foreground">{line.replace(/^[0-9]+\. /, '')}</li>;
              }
              if (line.match(/\|.*\|/)) {
                return <p key={index} className="text-sm text-muted-foreground font-mono my-2">{line}</p>;
              }
              if (line.trim() && !line.startsWith('#')) {
                const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                return <p key={index} className="mb-3 text-muted-foreground" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
              }
              return null;
            })}
          </div>
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t">
            {article.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between mt-6 pt-6 border-t text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date().toLocaleDateString('zh-CN')}</span>
            </div>
            <span>猫狗物语 · 每日科普</span>
          </div>
        </div>
      </div>
    </div>
  );
}
