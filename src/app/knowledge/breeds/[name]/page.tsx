export const runtime = 'edge';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Calendar, Globe, MapPin, Scale, Activity } from 'lucide-react';
import { petImages } from '@/lib/images';
import { Footer } from '@/components/footer';

// 品种详细数据
const breedDetails: Record<string, any> = {
  '中华田园犬': {
    name: '中华田园犬',
    species: 'dog',
    origin: '中国',
    size: '中型犬',
    weight: '15-25kg',
    height: '40-55cm',
    lifeSpan: '12-15年',
    temperament: ['忠诚', '聪明', '适应力强', '护主性强'],
    characteristics: [
      '身体结实，肌肉发达',
      '耳朵直立，眼神警觉',
      '尾巴自然卷曲或下垂',
      '毛色多样，以黄黑为主'
    ],
    care: [
      '需要充足的运动空间',
      '定期梳理毛发',
      '按时疫苗接种',
      '注意社交化训练'
    ],
    health: [
      '髋关节发育不良',
      '皮肤病',
      '寄生虫感染',
      '消化道疾病'
    ],
    history: '中华田园犬是中国本土犬种的统称，有着数千年的饲养历史。它们在中国传统农业社会中扮演着重要的角色，是农民的忠实伙伴，负责看家护院、保护家畜。',
    culture: '在中国传统文化中，中华田园犬象征着忠诚和守护。它们不仅是实用的工作犬，也是许多家庭的重要成员，承载着深厚的情感寄托。',
    imageUrl: petImages.chineseFieldDog
  },
  '日本柴犬': {
    name: '日本柴犬',
    species: 'dog',
    origin: '日本',
    size: '小型犬',
    weight: '8-10kg',
    height: '35-43cm',
    lifeSpan: '13-16年',
    temperament: ['忠诚', '独立', '警惕', '活泼'],
    characteristics: [
      '体型匀称，身体紧凑',
      '三角形耳朵，直立',
      '卷曲的尾巴',
      '赤色、黑褐色或白色'
    ],
    care: [
      '每天适量运动',
      '定期清洁耳朵',
      '注意口腔卫生',
      '避免过度喂食'
    ],
    health: [
      '过敏性皮炎',
      '膝关节脱位',
      '白内障',
      '髋关节发育不良'
    ],
    history: '柴犬是日本最古老的犬种之一，起源于江户时代。最初用于狩猎小型动物，后来成为受欢迎的伴侣犬。',
    culture: '柴犬在日本文化中占有重要地位，代表着忠诚和坚韧。柴犬表情包在网络上广受欢迎，展现了它们可爱的个性。',
    imageUrl: petImages.shibaInu
  },
  '金毛寻回犬': {
    name: '金毛寻回犬',
    species: 'dog',
    origin: '英国',
    size: '大型犬',
    weight: '25-34kg',
    height: '51-61cm',
    lifeSpan: '10-12年',
    temperament: ['温顺', '友善', '聪明', '耐心'],
    characteristics: [
      '体型健壮，肌肉发达',
      '金色或奶油色长毛',
      '下垂的耳朵',
      '友好的表情'
    ],
    care: [
      '每天大量运动',
      '频繁梳理毛发',
      '定期检查耳朵',
      '控制饮食防止肥胖'
    ],
    health: [
      '髋关节发育不良',
      '癌症',
      '心脏病',
      '眼部疾病'
    ],
    history: '金毛寻回犬起源于19世纪的苏格兰，由寻回犬培育而成，用于狩猎时寻回鸟类。',
    culture: '金毛寻回犬是最受欢迎的家庭犬之一，也是优秀的服务犬和治疗犬。它们的温顺性格使它们成为理想的伴侣。',
    imageUrl: petImages.goldenRetriever
  },
  '苏格兰折耳猫': {
    name: '苏格兰折耳猫',
    species: 'cat',
    origin: '苏格兰',
    size: '中型猫',
    weight: '2.5-6kg',
    lifeSpan: '12-15年',
    temperament: ['温顺', '聪明', '安静', '粘人'],
    characteristics: [
      '圆脸大眼',
      '向前折叠的耳朵',
      '中等长度毛发',
      '圆润的身体'
    ],
    care: [
      '定期检查耳部健康',
      '温和梳理毛发',
      '提供攀爬空间',
      '注意关节保护'
    ],
    health: [
      '软骨发育异常',
      '心脏疾病',
      '肾脏疾病',
      '肥厚性心肌病'
    ],
    history: '苏格兰折耳猫起源于1961年的苏格兰，一只叫Susie的猫发生了自然基因突变，导致耳朵折叠。',
    culture: '苏格兰折耳猫以其独特的外观和温和的性格深受喜爱。它们的折叠耳朵赋予它们一种独特、可爱的外观。',
    imageUrl: petImages.scottishFold
  },
  '埃及猫': {
    name: '埃及猫',
    species: 'cat',
    origin: '埃及',
    size: '中型猫',
    weight: '2.5-5kg',
    lifeSpan: '12-15年',
    temperament: ['聪明', '活泼', '忠诚', '社交'],
    characteristics: [
      '修长的身体',
      '额头上的M形斑纹',
      '大而竖立的耳朵',
      '斑点状被毛'
    ],
    care: [
      '提供足够的活动空间',
      '定期梳理',
      '提供互动玩具',
      '注意饮食均衡'
    ],
    health: [
      '肥厚性心肌病',
      '肾脏疾病',
      '哮喘',
      '牙齿问题'
    ],
    history: '埃及猫是世界上最古老的猫种之一，可追溯到古埃及时期。古埃及人奉猫为神灵，埃及猫在他们的文化中占有特殊地位。',
    culture: '埃及猫在古埃及被视为神圣的动物，与女神Bastet相关联。它们的斑点花纹被认为是美丽的象征。',
    imageUrl: petImages.egyptianCat
  },
  '布偶猫': {
    name: '布偶猫',
    species: 'cat',
    origin: '美国',
    size: '大型猫',
    weight: '4.5-9kg',
    lifeSpan: '12-17年',
    temperament: ['温顺', '粘人', '优雅', '友善'],
    characteristics: [
      '大型且结实',
      '蓝色眼睛',
      '长而柔软的毛发',
      '颜色点状花纹'
    ],
    care: [
      '每天梳理毛发',
      '定期清洁眼睛',
      '提供舒适的休息环境',
      '注意体重控制'
    ],
    health: [
      '肥厚性心肌病',
      '肾脏疾病',
      '多囊肾病',
      '牙龈疾病'
    ],
    history: '布偶猫于1960年代在美国加利福尼亚培育而成，由安·贝克创建。它们因其被抱起时会放松而得名"布偶猫"。',
    culture: '布偶猫因其温和的性格和美丽的外表而广受欢迎。它们是理想的家庭宠物，特别适合有儿童的家庭。',
    imageUrl: petImages.ragdoll
  }
};

export default async function BreedDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const breed = breedDetails[name];

  if (!breed) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">品种未找到</h1>
          <Link
            href="/knowledge/breeds"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            返回品种库
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/knowledge/breeds"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            ← 返回品种库
          </Link>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={breed.imageUrl}
                  alt={breed.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full">
                    {breed.species === 'dog' ? '🐕 犬类' : '🐱 猫类'}
                  </span>
                  <span className="px-3 py-1 text-sm bg-muted rounded-full">
                    {breed.size}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {breed.name}
                </h1>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">原产地: {breed.origin}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm">寿命: {breed.lifeSpan}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    <span className="text-sm">体重: {breed.weight}</span>
                  </div>
                  {breed.height && (
                    <div className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <span className="text-sm">身高: {breed.height}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    性格特点
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {breed.temperament.map((trait: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Appearance */}
          <section>
            <h2 className="text-2xl font-bold mb-4">外观特征</h2>
            <ul className="space-y-2">
              {breed.characteristics.map((char: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{char}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* History */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              历史渊源
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {breed.history}
            </p>
          </section>

          {/* Culture */}
          <section>
            <h2 className="text-2xl font-bold mb-4">文化价值</h2>
            <p className="text-muted-foreground leading-relaxed">
              {breed.culture}
            </p>
          </section>

          {/* Care */}
          <section>
            <h2 className="text-2xl font-bold mb-4">饲养要点</h2>
            <ul className="space-y-2">
              {breed.care.map((tip: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Health */}
          <section>
            <h2 className="text-2xl font-bold mb-4">健康注意事项</h2>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 mb-3">
                ⚠️ 该品种可能易患以下疾病，建议定期体检并购买宠物保险
              </p>
              <ul className="space-y-1">
                {breed.health.map((disease: string, index: number) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    • {disease}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
