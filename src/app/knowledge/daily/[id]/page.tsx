import { Clock, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from '@/components/footer';

// 科普文章数据
const dailyArticles = {
  '1': {
    id: '1',
    title: '春季猫咪护理要点',
    category: '养护知识',
    readTime: '3分钟',
    publishDate: '2024-03-15',
    author: '宠物医疗专家',
    content: `
      <h2 class="text-2xl font-bold mb-4">春季是猫咪换毛的高峰期</h2>
      <p class="mb-4">随着气温逐渐回升，猫咪开始进入换毛期。这个时期，猫咪会大量掉毛，需要主人特别关注护理。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">1. 增加梳毛频率</h3>
      <p class="mb-4">每天梳毛2-3次，使用适合的长毛猫梳子，可以：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>减少家中毛发散落</li>
        <li>预防毛球症</li>
        <li>促进血液循环</li>
        <li>增进与猫咪的感情</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. 注意皮肤护理</h3>
      <p class="mb-4">春季猫咪皮肤容易干燥，建议：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>定期检查皮肤状态</li>
        <li>如出现红肿、脱毛，及时就医</li>
        <li>保持室内湿度在40%-60%</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">3. 调整饮食结构</h3>
      <p class="mb-4">换毛期需要额外营养支持：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>增加蛋白质摄入</li>
        <li>补充Omega-3脂肪酸</li>
        <li>提供充足维生素</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">4. 加强环境清洁</h3>
      <p class="mb-4">春季也是细菌滋生的季节，注意：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>定期清洁猫砂盆</li>
        <li>清洗猫咪用品</li>
        <li>保持室内通风</li>
      </ul>
    `
  },
  '2': {
    id: '2',
    title: '为什么狗狗摇尾巴？',
    category: '习性研究',
    readTime: '5分钟',
    publishDate: '2024-03-14',
    author: '行为学专家',
    content: `
      <h2 class="text-2xl font-bold mb-4">狗狗摇尾巴的丰富含义</h2>
      <p class="mb-4">很多人认为狗狗摇尾巴就代表开心，但实际上，摇尾巴的含义远比我们想象的要复杂。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">1. 位置很重要</h3>
      <p class="mb-4">尾巴的位置传达不同的情绪：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>高高举起</strong>：自信、兴奋</li>
        <li><strong>水平位置</strong>：放松、友好</li>
        <li><strong>夹在两腿之间</strong>：恐惧、顺从</li>
        <li><strong>僵硬竖直</strong>：警惕、可能攻击</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. 摇动的方向</h3>
      <p class="mb-4">研究表明，摇尾的方向也传递信息：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>向右摇</strong>：积极情绪，如见到主人</li>
        <li><strong>向左摇</strong>：消极情绪，如见到陌生狗</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">3. 摇动的速度</h3>
      <p class="mb-4">摇尾速度反映兴奋程度：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>快速摇动</strong>：高度兴奋</li>
        <li><strong>缓慢摆动</strong>：不确定、犹豫</li>
        <li><strong>几乎不动</strong>：警惕或关注</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">4. 结合其他信号</h3>
      <p class="mb-4">要准确判断狗狗情绪，需要综合观察：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>耳朵的姿态</li>
        <li>身体语言</li>
        <li>面部表情</li>
        <li>叫声类型</li>
      </ul>
    `
  },
  '3': {
    id: '3',
    title: '中华田园犬的前世今生',
    category: '文化故事',
    readTime: '8分钟',
    publishDate: '2024-03-13',
    author: '文化研究专家',
    content: `
      <h2 class="text-2xl font-bold mb-4">中华田园犬的历史渊源</h2>
      <p class="mb-4">中华田园犬，又称土狗，是中国本土犬种的统称。它们有着悠久的历史和深厚的文化底蕴。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">1. 古代文献记载</h3>
      <p class="mb-4">早在《诗经》、《尔雅》等古籍中，就有关于犬的记载：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>《诗经》："卢令令，其人美且仁"</li>
        <li>古代犬类用于狩猎、看家、牧羊</li>
        <li>是六畜之一，具有重要地位</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. 农耕文化的守护者</h3>
      <p class="mb-4">在中国传统农业社会中：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>看家护院，保护家畜</li>
        <li>陪伴农民，是家庭的忠实伙伴</li>
        <li>适应性强，能在各种环境中生存</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">3. 现代变迁与挑战</h3>
      <p class="mb-4">随着社会发展，中华田园犬面临：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>城市化进程中的生存空间缩减</li>
        <li>外来犬种的冲击</li>
        <li>数量减少，部分品种濒临消失</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">4. 文化保护与传承</h3>
      <p class="mb-4">近年来，越来越多的人开始重视：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>中华田园犬的文化价值</li>
        <li>开展品种保护工作</li>
        <li>提高公众认知和爱护意识</li>
      </ul>
    `
  },
  '4': {
    id: '4',
    title: '猫咪需要多少睡眠？',
    category: '习性研究',
    readTime: '4分钟',
    publishDate: '2024-03-12',
    author: '宠物行为专家',
    content: `
      <h2 class="text-2xl font-bold mb-4">猫咪的睡眠习惯</h2>
      <p class="mb-4">猫咪是著名的"睡眠专家"，它们每天需要大量的睡眠时间。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">1. 睡眠时间</h3>
      <p class="mb-4">不同年龄的猫咪睡眠需求不同：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>幼猫</strong>：每天睡16-20小时</li>
        <li><strong>成年猫</strong>：每天睡12-16小时</li>
        <li><strong>老年猫</strong>：每天睡18-20小时</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. 睡眠模式</h3>
      <p class="mb-4">猫咪的睡眠分为两种模式：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>浅睡眠</strong>：约占总睡眠的75%，随时可醒来</li>
        <li><strong>深睡眠</strong>：约占总睡眠的25%，会做梦</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">3. 为什么睡这么多？</h3>
      <p class="mb-4">猫咪需要大量睡眠的原因：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>保存能量，为捕猎做准备</li>
        <li>消化食物，促进新陈代谢</li>
        <li>大脑发育和维护</li>
        <li>恢复体力，保持警觉</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">4. 如何判断猫咪睡眠质量</h3>
      <p class="mb-4">健康的猫咪睡眠表现为：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>有规律的作息时间</li>
        <li>能够快速进入深睡眠</li>
        <li>睡眠中身体放松</li>
        <li>醒后精神饱满</li>
      </ul>
    `
  },
  '5': {
    id: '5',
    title: '狗狗社交化训练',
    category: '训练技巧',
    readTime: '6分钟',
    publishDate: '2024-03-11',
    author: '训犬师',
    content: `
      <h2 class="text-2xl font-bold mb-4">什么是社交化训练？</h2>
      <p class="mb-4">社交化训练是指让狗狗在不同环境、接触不同事物和人的过程中，学会适应和表现良好。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">1. 最佳训练时期</h3>
      <p class="mb-4">社交化的黄金时期：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>3-14周</strong>：最关键的社会化期</li>
        <li><strong>3-6个月</strong>：继续巩固社交能力</li>
        <li><strong>成年后</strong>：仍可改善，但需要更多耐心</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. 社交化内容</h3>
      <p class="mb-4">需要让狗狗接触：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>不同年龄、性别、品种的狗狗</li>
        <li>不同类型的人（儿童、老人、戴帽子的人等）</li>
        <li>各种环境（城市、公园、交通工具等）</li>
        <li>不同声音和气味</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">3. 训练原则</h3>
      <p class="mb-4">社交化训练的关键原则：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>循序渐进，不要强迫</li>
        <li>保持积极，用奖励强化</li>
        <li>观察狗狗反应，及时调整</li>
        <li>耐心坚持，持续训练</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">4. 常见问题</h3>
      <p class="mb-4">训练中可能遇到的问题：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>恐惧反应：降低难度，增加正向激励</li>
        <li>过度兴奋：引导冷静，学习自控</li>
        <li>攻击行为：寻求专业帮助</li>
      </ul>
    `
  },
  '6': {
    id: '6',
    title: '猫咪零食选择指南',
    category: '营养知识',
    readTime: '5分钟',
    publishDate: '2024-03-10',
    author: '宠物营养师',
    content: `
      <h2 class="text-2xl font-bold mb-4">如何选择健康的猫咪零食</h2>
      <p class="mb-4">零食是猫咪生活中的重要调剂，但选择不当可能带来健康风险。</p>

      <h3 class="text-xl font-semibold mb-3 mt-6">1. 零食的作用</h3>
      <p class="mb-4">合理的零食可以：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>增进与猫咪的感情</li>
        <li>用于训练奖励</li>
        <li>补充营养</li>
        <li>提供娱乐和刺激</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">2. 选择标准</h3>
      <p class="mb-4">优质猫咪零食应符合：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>成分表</strong>：以肉类为主，避免人工添加剂</li>
        <li><strong>蛋白质含量</strong>：应高于40%</li>
        <li><strong>无有害成分</strong>：不含洋葱、大蒜、巧克力等</li>
        <li><strong>适合年龄</strong>：根据猫咪年龄选择</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">3. 零食类型</h3>
      <p class="mb-4">常见的猫咪零食类型：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>冻干零食</strong>：营养保留好，易储存</li>
        <li><strong>肉条/肉干</strong>：口感好，猫咪喜欢</li>
        <li><strong>猫草</strong>：助消化，提供纤维</li>
        <li><strong>猫薄荷</strong>：放松心情，适量使用</li>
      </ul>

      <h3 class="text-xl font-semibold mb-3 mt-6">4. 喂食原则</h3>
      <p class="mb-4">正确喂食零食的要点：</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>零食不超过日常热量的10%</li>
        <li>不要用零食替代正餐</li>
        <li>定时定量，避免过量</li>
        <li>观察猫咪反应，如有不适立即停止</li>
      </ul>
    `
  }
};

export default async function DailyArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = dailyArticles[id as keyof typeof dailyArticles];

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">文章未找到</h1>
          <Link
            href="/knowledge"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            返回科普百科
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/knowledge"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            返回科普百科
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {article.publishDate}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime}
              </div>
              <div>作者: {article.author}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link
              href="/knowledge/daily"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              查看更多科普文章
              <BookOpen className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
