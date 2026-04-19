export const runtime = 'edge';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, MapPin, ArrowLeft, Dog, Cat } from 'lucide-react';
import { evolutionImages } from '@/lib/images';
import { Footer } from '@/components/footer';

// 演化文章详细数据
const evolutionArticles: Record<string, any> = {
  '1': {
    id: '1',
    period: '约15,000年前',
    era: '新石器时代',
    title: '犬类的驯化起源',
    species: 'dog',
    description: '人类开始驯化狼，最早的犬类祖先出现。',
    highlight: '第一个被人类驯化的动物',
    image: evolutionImages.ancientWolf,
    location: '欧亚大陆',
    content: `
      <h2 class="text-2xl font-bold mb-4">人类与犬的首次相遇</h2>
      <p class="mb-4">约15,000年前，在欧亚大陆的狩猎采集社会中，人类与灰狼开始了他们历史的第一次相遇。这次相遇改变了两个物种的命运。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">驯化的原因</h3>
      <p class="mb-4">科学家认为，狼驯化的开始可能是互惠互利的结果：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>狼被人类营地的食物残渣吸引</li>
        <li>不那么警惕的狼更容易接近人类</li>
        <li>人类发现狼可以提供警报和帮助狩猎</li>
        <li>双方逐渐形成共生关系</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">早期犬类的特征</h3>
      <p class="mb-4">最初的驯化犬类与现代犬类有很大不同：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>体型较小，更适应与人类共存</li>
        <li>颜色多样性增加</li>
        <li>攻击性降低，更善于社交</li>
        <li>消化系统适应人类食物</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">考古证据</h3>
      <p class="mb-4">世界各地都发现了早期犬类的化石证据：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>德国（约14,000年前）</li>
        <li>俄罗斯西伯利亚（约15,000年前）</li>
        <li>比利时（约13,000年前）</li>
        <li>中国河北（约12,000年前）</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">对人类文明的影响</h3>
      <p class="mb-4">犬类的驯化对人类文明产生了深远影响：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>提高狩猎成功率</li>
        <li>提供保护和警报</li>
        <li>帮助运输物资</li>
        <li>成为人类最早的伙伴</li>
      </ul>
    `
  },
  '2': {
    id: '2',
    period: '约9,000年前',
    era: '新石器时代',
    title: '猫类与人类共存',
    species: 'cat',
    description: '猫类开始与人类在农业定居点中共存。',
    highlight: '猫类进入人类聚居地',
    image: evolutionImages.ancientChina,
    location: '近东地区',
    content: `
      <h2 class="text-2xl font-bold mb-4">农业革命带来的相遇</h2>
      <p class="mb-4">约9,000年前，人类从狩猎采集转向农业定居，这一变革为猫类进入人类社会创造了条件。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">猫类被吸引的原因</h3>
      <p class="mb-4">农业定居点为猫类提供了理想的环境：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>粮食储存吸引了大量鼠类</li>
        <li>稳定的食物来源</li>
        <li>相对安全的栖息地</li>
        <li>人类对猫类的容忍</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">互惠互利的关系</h3>
      <p class="mb-4">猫类与人类的关系建立在实用价值上：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>猫类控制鼠害，保护粮食</li>
        <li>人类提供庇护和食物残渣</li>
        <li>双方都从这种关系中受益</li>
        <li>猫类保持相对独立</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">野生祖先</h3>
      <p class="mb-4">现代家猫的祖先主要有两种：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>非洲野猫（Felis lybica）</li>
        <li>欧洲野猫（Felis silvestris）</li>
        <li>基因研究表明，非洲野猫是主要祖先</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">早期分布</h3>
      <p class="mb-4">猫类从近东地区逐渐扩散到世界各地：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>近东（新月沃土）</li>
        <li>地中海沿岸</li>
        <li>欧洲</li>
        <li>亚洲</li>
      </ul>
    `
  },
  '3': {
    id: '3',
    period: '约4,000年前',
    era: '古文明时期',
    title: '古埃及的神圣猫咪',
    species: 'cat',
    description: '古埃及人将猫奉为神圣的动物。',
    highlight: '猫被尊为神灵',
    image: evolutionImages.ancientEgypt,
    location: '古埃及',
    content: `
      <h2 class="text-2xl font-bold mb-4">古埃及的猫崇拜</h2>
      <p class="mb-4">在古埃及，猫的地位达到了历史巅峰，它们被视为神圣的动物，与宗教和神灵紧密相连。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">猫与女神Bastet</h3>
      <p class="mb-4">猫与古埃及的女神Bastet密切相关：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Bastet是家庭、保护和生育女神</li>
        <li>常被描绘成猫头人身的形象</li>
        <li>猫被视为女神的化身</li>
        <li>伤害猫被视为对神灵的亵渎</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">猫的特权地位</h3>
      <p class="mb-4">在古埃及社会，猫享有特殊待遇：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>家庭成员去世时，猫会被剃掉眉毛表示哀悼</li>
        <li>猫死亡时，全家会剃掉眉毛</li>
        <li>制作猫的木乃伊，希望在来世继续陪伴</li>
        <li>杀害猫是严重的犯罪</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">猫的实用价值</h3>
      <p class="mb-4">除了宗教意义，猫也有实用价值：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>控制尼罗河谷的鼠患</li>
        <li>保护粮食储存</li>
        <li>捕杀蛇类和其他害虫</li>
        <li>在农业社会中扮演重要角色</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">文化影响</h3>
      <p class="mb-4">古埃及的猫崇拜对后世产生了深远影响：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>猫的形象在艺术和建筑中广泛应用</li>
        <li>猫的珠宝和护身符</li>
        <li>猫的地位影响了周边文化</li>
        <li>为猫在现代社会的地位奠定基础</li>
      </ul>
    `
  },
  '4': {
    id: '4',
    period: '约2,500年前',
    era: '古典时期',
    title: '中国古代田园犬',
    species: 'dog',
    description: '中国田园犬在农耕文化中扮演重要角色。',
    highlight: '中华田园犬的祖先',
    image: evolutionImages.ancientChina,
    location: '中国',
    content: `
      <h2 class="text-2xl font-bold mb-4">中华田园犬的历史渊源</h2>
      <p class="mb-4">中国田园犬是中国本土犬种的统称，有着数千年的饲养历史，在中国传统农业社会中扮演着重要角色。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">文献记载</h3>
      <p class="mb-4">中国古代文献中有大量关于犬的记载：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>《诗经》："卢令令，其人美且仁"</li>
        <li>《尔雅》：详细记载了犬的分类</li>
        <li>古代犬类用于狩猎、看家、牧羊</li>
        <li>是六畜之一，具有重要地位</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">农耕文化的守护者</h3>
      <p class="mb-4">在中国传统农业社会中，田园犬的作用：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>看家护院，保护家畜</li>
        <li>陪伴农民，是家庭的忠实伙伴</li>
        <li>适应性强，能在各种环境中生存</li>
        <li>与农民生活密不可分</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">品种特征</h3>
      <p class="mb-4">中国田园犬具有典型的本土特征：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>身体结实，适应性强</li>
        <li>警惕性高，忠诚护主</li>
        <li>毛色多样，以黄黑为主</li>
        <li>聪明，易于训练</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">文化意义</h3>
      <p class="mb-4">田园犬在中国文化中的象征意义：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>忠诚和守护的象征</li>
        <li>中国传统文化的重要组成部分</li>
        <li>承载着深厚的情感寄托</li>
        <li>是许多家庭的重要成员</li>
      </ul>
    `
  },
  '5': {
    id: '5',
    period: '约1,500年前',
    era: '中世纪',
    title: '欧洲中世纪的犬猫',
    species: 'both',
    description: '犬类用于狩猎、守护，猫类在城镇中控制鼠害。',
    highlight: '功能化养殖开始',
    image: evolutionImages.medievalEurope,
    location: '欧洲',
    content: `
      <h2 class="text-2xl font-bold mb-4">中世纪的犬猫角色</h2>
      <p class="mb-4">在中世纪的欧洲，犬类和猫类都发挥着重要作用，但它们的地位和待遇却大相径庭。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">犬类的角色</h3>
      <p class="mb-4">中世纪的犬类主要有几种功能：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>狩猎犬：贵族的狩猎伙伴</li>
        <li>牧羊犬：管理牲畜</li>
        <li>护卫犬：保护城堡和领地</li>
        <li>陪伴犬：贵族家庭的宠物</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">猫类的困境</h3>
      <p class="mb-4">中世纪对猫类态度复杂：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>城镇中需要猫控制鼠害</li>
        <li>宗教文化对猫产生负面看法</li>
        <li>与女巫迷信相关联</li>
        <li>猎巫运动中猫成为受害者</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">社会阶层差异</h3>
      <p class="mb-4">不同社会阶层对犬猫的态度：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>贵族：拥有专门的犬类</li>
        <li>农民：需要犬猫的实用功能</li>
        <li>教会：对猫持复杂态度</li>
        <li>城镇居民：依赖猫控制鼠害</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">品种发展</h3>
      <p class="mb-4">中世纪时期犬猫品种的发展：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>犬类按功能分化</li>
        <li>出现早期品种特征</li>
        <li>猫类品种相对单一</li>
        <li>为现代品种培育奠定基础</li>
      </ul>
    `
  },
  '6': {
    id: '6',
    period: '约200年前',
    era: '近代',
    title: '品种培育兴起',
    species: 'both',
    description: '19世纪开始系统性的品种培育，出现了许多现代犬猫品种。',
    highlight: '现代品种诞生',
    image: evolutionImages.ancientWolf,
    location: '英国/欧洲',
    content: `
      <h2 class="text-2xl font-bold mb-4">品种培育的黄金时代</h2>
      <p class="mb-4">19世纪，随着工业革命和社会变革，犬猫的品种培育进入了系统化、科学化的时代。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">品种培育的兴起</h3>
      <p class="mb-4">19世纪品种培育的特点：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>系统性的选择性繁育</li>
        <li>建立品种标准</li>
        <li>成立犬类和猫类协会</li>
        <li>举办犬展和猫展</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">重要品种的诞生</h3>
      <p class="mb-4">这一时期诞生了许多现代品种：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>金毛寻回犬（英国，1860年代）</li>
        <li>边境牧羊犬（英国，19世纪）</li>
        <li>波斯猫（英国，19世纪）</li>
        <li>缅因猫（美国，19世纪）</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">犬猫文化的发展</h3>
      <p class="mb-4">品种培育推动了犬猫文化的发展：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>犬展和猫展的流行</li>
        <li>品种标准的建立</li>
        <li>犬猫杂志和书籍的出版</li>
        <li>公众对犬猫兴趣的增加</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">科学影响</h3>
      <p class="mb-4">科学发展对品种培育的影响：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>遗传学理论的应用</li>
        <li>科学繁育方法的推广</li>
        <li>对品种稳定性的重视</li>
        <li>对健康问题的关注</li>
      </ul>
    `
  },
  '7': {
    id: '7',
    period: '现代',
    era: '当代',
    title: '家庭伴侣时代',
    species: 'both',
    description: '猫狗成为全球最受欢迎的家庭宠物。',
    highlight: '宠物文化全球化',
    image: evolutionImages.modernPets,
    location: '全球',
    content: `
      <h2 class="text-2xl font-bold mb-4">现代宠物文化</h2>
      <p class="mb-4">在当代社会，犬类和猫类已经从功能动物转变为家庭伴侣，宠物文化在全球范围内蓬勃发展。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">伴侣角色的转变</h3>
      <p class="mb-4">犬猫角色的根本变化：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>从工作动物到情感伴侣</li>
        <li>家庭成员地位的提升</li>
        <li>情感支持和心理治疗</li>
        <li>现代生活方式的重要组成部分</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">科技的影响</h3>
      <p class="mb-4">科技的发展改善了犬猫的生活：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>兽医医学的进步</li>
        <li>营养科学的改善</li>
        <li>智能宠物用品的普及</li>
        <li>宠物保险的发展</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">宠物产业的发展</h3>
      <p class="mb-4">宠物产业成为重要经济部门：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>宠物食品和用品</li>
        <li>宠物医疗和保健</li>
        <li>宠物服务和娱乐</li>
        <li>宠物保险和金融服务</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">全球宠物文化</h3>
      <p class="mb-4">宠物文化的全球化趋势：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>跨国宠物交流</li>
        <li>国际犬展和猫展</li>
        <li>宠物保护意识的提升</li>
        <li>宠物福利法律的完善</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">未来展望</h3>
      <p class="mb-4">宠物文化的未来发展方向：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>更注重宠物健康和福利</li>
        <li>科技与宠物的深度融合</li>
        <li>可持续宠物产品</li>
        <li>宠物与人类和谐共生</li>
      </ul>
    `
  }
};

export default async function EvolutionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = evolutionArticles[id as keyof typeof evolutionArticles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
          <Link
            href="/knowledge/evolution"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            返回演化图谱
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/knowledge/evolution"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回演化图谱
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                {article.era}
              </span>
              {article.species === 'dog' && (
                <span className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                  <Dog className="h-3 w-3" />
                  犬类
                </span>
              )}
              {article.species === 'cat' && (
                <span className="flex items-center gap-1 px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                  <Cat className="h-3 w-3" />
                  猫类
                </span>
              )}
              {article.species === 'both' && (
                <>
                  <span className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                    <Dog className="h-3 w-3" />
                    犬类
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                    <Cat className="h-3 w-3" />
                    猫类
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {article.period}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {article.location}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 mb-8">
              <p className="font-medium text-primary flex items-center gap-2">
                <Clock className="h-5 w-5" />
                {article.highlight}
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              {article.description}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link
              href="/knowledge/evolution"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              查看完整演化时间线
              <Clock className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
