'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Search } from 'lucide-react';
import { petImages } from '@/lib/images';
import { Footer } from '@/components/footer';

// 品种数据 - 详细版本
const breeds = [
  // 犬类
  {
    name: '中华田园犬',
    species: 'dog' as const,
    origin: '中国',
    traits: '忠诚、聪明、适应力强',
    culture: '中国农耕文化的看家护院伙伴',
    description: '中华田园犬是中国本土最古老的犬种之一，性情温和，对主人极其忠诚。它们有着极强的适应能力和生存能力，是农村家庭的忠实守护者。',
    history: '已有数千年的历史，是中国农耕文明的重要组成部分。',
    imageUrl: petImages.chineseFieldDog,
    size: '中型犬',
    lifeSpan: '12-15年',
    weight: '15-25kg',
    height: '40-55cm',
    colors: '黄色、黑色、白色、花色等',
    grooming: '容易打理，每周刷毛1-2次',
    exercise: '每天需要适量运动',
    suitable: '适合农村或有院子的家庭'
  },
  {
    name: '日本柴犬',
    species: 'dog' as const,
    origin: '日本',
    traits: '忠诚、独立、警惕',
    culture: '江户时代的狩猎与陪伴伴侣',
    description: '柴犬是日本古老的犬种，性格独立且警觉性强。它们忠诚于主人，但对陌生人保持警惕，是优秀的看家犬。',
    history: '起源于日本，最初用于狩猎小型动物，是日本天然纪念物之一。',
    imageUrl: petImages.shibaInu,
    size: '小型犬',
    lifeSpan: '13-16年',
    weight: '8-10kg',
    height: '35-41cm',
    colors: '红色、黑色、芝麻色、白色',
    grooming: '需要定期梳理，换毛期掉毛较多',
    exercise: '每天需要适量运动和散步',
    suitable: '适合有经验的养犬人士'
  },
  {
    name: '金毛寻回犬',
    species: 'dog' as const,
    origin: '英国',
    traits: '温顺、友好、聪明',
    culture: '英国贵族的狩猎伴侣',
    description: '金毛犬是世界上最受欢迎的家庭犬之一，性格温和友善，对儿童特别友好。它们聪明易训，是优秀的工作犬和家庭伴侣。',
    history: '19世纪在英国培育，用于寻回猎物，现已成为全球最受欢迎的犬种之一。',
    imageUrl: petImages.goldenRetriever,
    size: '大型犬',
    lifeSpan: '10-12年',
    weight: '25-34kg',
    height: '51-61cm',
    colors: '金色、奶油色',
    grooming: '需要定期梳理，掉毛较多',
    exercise: '需要大量运动，每天至少1-2小时',
    suitable: '适合有足够时间陪伴的家庭'
  },
  {
    name: '边境牧羊犬',
    species: 'dog' as const,
    origin: '英国',
    traits: '聪明、敏捷、忠诚',
    culture: '苏格兰牧场的得力助手',
    description: '边境牧羊犬被认为是世界上最聪明的犬种，学习能力强，善于服从指令。它们精力充沛，需要大量的精神刺激和运动。',
    history: '起源于苏格兰和英格兰边境，是牧羊犬中的佼佼者。',
    imageUrl: petImages.borderCollie,
    size: '中型犬',
    lifeSpan: '12-15年',
    weight: '14-20kg',
    height: '46-56cm',
    colors: '黑白、棕白、蓝白等',
    grooming: '需要定期梳理毛发',
    exercise: '需要大量运动和智力游戏',
    suitable: '适合活跃的家庭或有农场的主人'
  },
  {
    name: '拉布拉多犬',
    species: 'dog' as const,
    origin: '加拿大',
    traits: '友善、活泼、易训练',
    culture: '最受欢迎的家庭伴侣犬',
    description: '拉布拉多犬性格温和友善，是世界上最受欢迎的家庭犬。它们聪明易训，常被用作导盲犬、搜救犬等工作犬。',
    history: '起源于加拿大纽芬兰岛，后被带到英国培育发展。',
    imageUrl: petImages.labrador,
    size: '大型犬',
    lifeSpan: '10-14年',
    weight: '25-36kg',
    height: '54-62cm',
    colors: '黄色、黑色、巧克力色',
    grooming: '容易打理，定期刷毛即可',
    exercise: '需要大量运动，喜欢游泳',
    suitable: '适合各类家庭，特别是有孩子的家庭'
  },
  {
    name: '柯基犬',
    species: 'dog' as const,
    origin: '英国',
    traits: '活泼、勇敢、友好',
    culture: '英国皇室最爱的犬种',
    description: '柯基犬虽然腿短，但精力充沛，性格活泼可爱。它们聪明友善，是优秀的家庭伴侣犬，也是英国女王的挚爱。',
    history: '原产于威尔士，最初用于牧牛，深受英国皇室喜爱。',
    imageUrl: petImages.corgi,
    size: '小型犬',
    lifeSpan: '12-15年',
    weight: '10-14kg',
    height: '25-30cm',
    colors: '黄白、三色、红白等',
    grooming: '需要定期梳理，掉毛较多',
    exercise: '需要适量运动',
    suitable: '适合各类家庭'
  },
  {
    name: '德国牧羊犬',
    species: 'dog' as const,
    origin: '德国',
    traits: '勇敢、聪明、忠诚',
    culture: '军警犬的代表性品种',
    description: '德国牧羊犬是工作犬中的佼佼者，聪明勇敢，服从性强。它们广泛用于军警工作，也是忠诚的家庭守护者。',
    history: '19世纪末在德国培育，是现代工作犬的代表。',
    imageUrl: petImages.germanShepherd,
    size: '大型犬',
    lifeSpan: '9-13年',
    weight: '22-40kg',
    height: '55-65cm',
    colors: '黑棕色、黑色、灰色',
    grooming: '需要定期梳理毛发',
    exercise: '需要大量运动和训练',
    suitable: '适合有经验的主人'
  },
  {
    name: '法国斗牛犬',
    species: 'dog' as const,
    origin: '法国',
    traits: '友善、聪明、安静',
    culture: '城市家庭的理想伴侣',
    description: '法国斗牛犬体型小巧，性格温和，不需要大量运动，是城市家庭的理想选择。它们友善可爱，适合公寓生活。',
    history: '起源于法国，是英法斗牛犬的混血后代。',
    imageUrl: petImages.frenchBulldog,
    size: '小型犬',
    lifeSpan: '10-12年',
    weight: '8-14kg',
    height: '28-33cm',
    colors: '虎斑色、奶油色、白色等',
    grooming: '容易打理',
    exercise: '运动量需求较小',
    suitable: '适合公寓生活'
  },
  {
    name: '哈士奇',
    species: 'dog' as const,
    origin: '西伯利亚',
    traits: '友好、活泼、独立',
    culture: '极地雪橇犬的代表',
    description: '哈士奇是古老的极地雪橇犬，精力充沛，性格友善但有些倔强。它们有着独特的蓝眼睛和狼一般的外表。',
    history: '起源于西伯利亚，由楚科奇人培育用于雪橇运输。',
    imageUrl: petImages.husky,
    size: '中大型犬',
    lifeSpan: '12-14年',
    weight: '16-27kg',
    height: '51-60cm',
    colors: '黑白、灰白、红白等',
    grooming: '掉毛严重，需要经常梳理',
    exercise: '需要大量运动，喜欢奔跑',
    suitable: '适合活跃的家庭，需要有足够空间'
  },
  // 猫类
  {
    name: '苏格兰折耳猫',
    species: 'cat' as const,
    origin: '苏格兰',
    traits: '温顺、聪明、安静',
    culture: '苏格兰田园文化的代表',
    description: '苏格兰折耳猫以其独特的折叠耳朵闻名，性格温和友善，喜欢陪伴主人。它们安静乖巧，是理想的家庭宠物。',
    history: '1961年在苏格兰首次发现，因基因突变形成折耳特征。',
    imageUrl: petImages.scottishFold,
    size: '中型猫',
    lifeSpan: '12-15年',
    weight: '2.5-6kg',
    height: '20-25cm',
    colors: '多种颜色和花纹',
    grooming: '每周梳理1-2次',
    exercise: '运动量需求适中',
    suitable: '适合各类家庭'
  },
  {
    name: '埃及猫',
    species: 'cat' as const,
    origin: '埃及',
    traits: '聪明、活泼、忠诚',
    culture: '古埃及奉为神猫的典故',
    description: '埃及猫是古老的自然品种，身上有独特的豹纹斑点。它们活泼好动，对主人忠诚，是优秀的猎手。',
    history: '起源于古埃及，被视为神圣的动物，出现在古埃及壁画中。',
    imageUrl: petImages.egyptianCat,
    size: '中型猫',
    lifeSpan: '12-15年',
    weight: '2.5-5kg',
    height: '20-25cm',
    colors: '银色、青铜色、烟色斑点',
    grooming: '容易打理',
    exercise: '活跃好动，需要足够空间',
    suitable: '喜欢活跃猫咪的家庭'
  },
  {
    name: '布偶猫',
    species: 'cat' as const,
    origin: '美国',
    traits: '温顺、粘人、优雅',
    culture: '被称为仙女猫的理想伴侣',
    description: '布偶猫以其温顺的性格和优雅的外表闻名，被称为"仙女猫"。它们喜欢被人抱着，性格极其温和。',
    history: '1960年代在美国培育，是由白色长毛猫与其他品种杂交而成。',
    imageUrl: petImages.ragdoll,
    size: '大型猫',
    lifeSpan: '12-17年',
    weight: '4.5-9kg',
    height: '23-28cm',
    colors: '重点色、手套色、双色等',
    grooming: '需要定期梳理长毛',
    exercise: '运动量需求适中',
    suitable: '适合各类家庭，特别是喜欢安静宠物的'
  },
  {
    name: '中华田园猫',
    species: 'cat' as const,
    origin: '中国',
    traits: '独立、聪明、灵活',
    culture: '中国传统文化中的捕鼠能手',
    description: '中华田园猫是中国本土猫的统称，适应能力强，健康好养。它们独立聪明，是优秀的捕鼠能手。',
    history: '在中国已有数千年的历史，是本土最常见猫咪。',
    imageUrl: petImages.chineseGardenCat,
    size: '中型猫',
    lifeSpan: '12-18年',
    weight: '2.5-5.5kg',
    height: '20-25cm',
    colors: '狸花、橘猫、黑白、三花等多种',
    grooming: '容易打理',
    exercise: '活泼好动',
    suitable: '适合各类家庭'
  },
  {
    name: '橘猫',
    species: 'cat' as const,
    origin: '世界各地',
    traits: '友善、活泼、易胖',
    culture: '网络上最受欢迎的猫咪之一',
    description: '橘猫是指毛色为橘色的猫咪，通常性格友善活泼，食欲旺盛。它们是网络上最受欢迎的猫咪之一。',
    history: '橘猫是一种毛色而非特定品种，在各地都有分布。',
    imageUrl: petImages.orangeCat,
    size: '中型猫',
    lifeSpan: '12-15年',
    weight: '3-7kg',
    height: '20-25cm',
    colors: '橘色、橘白相间',
    grooming: '容易打理',
    exercise: '需要控制体重，适量运动',
    suitable: '适合各类家庭'
  },
  {
    name: '波斯猫',
    species: 'cat' as const,
    origin: '伊朗',
    traits: '优雅、安静、高贵',
    culture: '古代贵族的尊贵象征',
    description: '波斯猫以其长毛和优雅的外表闻名，性格安静温和，是世界上最古老的猫种之一。',
    history: '起源于波斯（今伊朗），16世纪传入欧洲，成为贵族宠物。',
    imageUrl: petImages.persian,
    size: '大型猫',
    lifeSpan: '10-17年',
    weight: '3-7kg',
    height: '25-30cm',
    colors: '白色、黑色、蓝色、奶油色等多种',
    grooming: '需要每天梳理长毛',
    exercise: '运动量需求较小',
    suitable: '适合喜欢安静宠物的家庭'
  },
  {
    name: '缅因猫',
    species: 'cat' as const,
    origin: '美国',
    traits: '友善、聪明、大体型',
    culture: '被称为温柔的巨人',
    description: '缅因猫是体型最大的家猫之一，性格友善温和，被称为"温柔的巨人"。它们聪明活泼，是优秀的家庭伴侣。',
    history: '起源于美国缅因州，是北美最古老的天然猫种。',
    imageUrl: petImages.maineCoon,
    size: '大型猫',
    lifeSpan: '12-15年',
    weight: '4-8kg',
    height: '25-40cm',
    colors: '多种颜色和花纹',
    grooming: '需要定期梳理',
    exercise: '活泼好动，需要空间',
    suitable: '适合有足够空间的家庭'
  },
  {
    name: '英短',
    species: 'cat' as const,
    origin: '英国',
    traits: '安静、友善、适应力强',
    culture: '英国绅士般的风度',
    description: '英国短毛猫以其圆润的外表和温和的性格闻名，安静友善，适应能力强，是最受欢迎的宠物猫之一。',
    history: '起源于英国，是罗马时期带入的猫咪后裔。',
    imageUrl: petImages.britishShorthair,
    size: '中大型猫',
    lifeSpan: '12-17年',
    weight: '3-7kg',
    height: '22-25cm',
    colors: '蓝色、银色渐层、金色渐层等多种',
    grooming: '容易打理',
    exercise: '运动量需求适中',
    suitable: '适合各类家庭'
  },
  {
    name: '美短',
    species: 'cat' as const,
    origin: '美国',
    traits: '活泼、聪明、友善',
    culture: '美国最受欢迎的家猫品种',
    description: '美国短毛猫性格活泼友善，健康好养，是优秀的家庭伴侣。它们有着漂亮的虎斑花纹。',
    history: '起源于美国，是由欧洲移民带来的猫咪培育而成。',
    imageUrl: petImages.americanShorthair,
    size: '中型猫',
    lifeSpan: '13-17年',
    weight: '3.5-6kg',
    height: '20-25cm',
    colors: '银虎斑、棕色虎斑等多种',
    grooming: '容易打理',
    exercise: '活泼好动',
    suitable: '适合各类家庭'
  },
  {
    name: '斯芬克斯猫',
    species: 'cat' as const,
    origin: '加拿大',
    traits: '聪明、粘人、独特',
    culture: '无毛猫的独特魅力',
    description: '斯芬克斯猫以其无毛的外表独特闻名，性格粘人友善，喜欢温暖。它们需要特殊的护理。',
    history: '1966年在加拿大首次培育成功，是自然基因突变的结果。',
    imageUrl: petImages.sphynx,
    size: '中型猫',
    lifeSpan: '8-14年',
    weight: '3.5-7kg',
    height: '20-25cm',
    colors: '皮肤颜色多样',
    grooming: '需要定期洗澡护理皮肤',
    exercise: '活泼好动',
    suitable: '适合对无毛猫感兴趣的主人'
  }
];

export default function BreedsPage() {
  const [speciesFilter, setSpeciesFilter] = useState<'all' | 'dog' | 'cat'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState<typeof breeds[0] | null>(null);

  const filteredBreeds = breeds.filter(breed => {
    const matchesSpecies = speciesFilter === 'all' || breed.species === speciesFilter;
    const matchesSearch = breed.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         breed.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecies && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* 返回按钮 - 固定在左上角 */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/knowledge"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-green-600"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">返回</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-4xl">🐕</span>
              <h1 className="text-4xl md:text-5xl font-bold">猫狗品种百科</h1>
              <span className="text-4xl">🐱</span>
            </div>
            <p className="text-muted-foreground text-lg">
              探索不同品种的特点、历史与文化价值
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索品种名称或原产地..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
            />
          </div>

          {/* Species Filter */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setSpeciesFilter('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                speciesFilter === 'all'
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'
              }`}
            >
              全部 ({breeds.length})
            </button>
            <button
              onClick={() => setSpeciesFilter('dog')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                speciesFilter === 'dog'
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'
              }`}
            >
              🐕 犬类 ({breeds.filter(b => b.species === 'dog').length})
            </button>
            <button
              onClick={() => setSpeciesFilter('cat')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                speciesFilter === 'cat'
                  ? 'bg-gray-800 text-white shadow-lg'
                  : 'bg-white hover:bg-gray-100 border border-gray-200 text-gray-700'
              }`}
            >
              🐱 猫类 ({breeds.filter(b => b.species === 'cat').length})
            </button>
          </div>
        </div>
      </div>

      {/* Breeds Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBreeds.map((breed) => (
              <div
                key={breed.name}
                onClick={() => setSelectedBreed(breed)}
                className="group cursor-pointer p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:border-green-200 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={breed.imageUrl}
                      alt={breed.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full block mb-2">
                      {breed.species === 'dog' ? '犬' : '猫'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {breed.size}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-green-600 transition-colors">
                  {breed.name}
                </h3>

                <div className="space-y-1.5 mb-3">
                  <p className="text-sm text-gray-600 flex">
                    <span className="text-gray-400 w-16">原产地</span>
                    <span>{breed.origin}</span>
                  </p>
                  <p className="text-sm text-gray-600 flex">
                    <span className="text-gray-400 w-16">性格</span>
                    <span>{breed.traits}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-1.5">
                  <p className="text-sm text-gray-600 flex">
                    <span className="text-gray-400 w-16">寿命</span>
                    <span>{breed.lifeSpan}</span>
                  </p>
                  <p className="text-sm text-gray-600 flex">
                    <span className="text-gray-400 w-16">体重</span>
                    <span>{breed.weight}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredBreeds.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                未找到匹配的品种
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 详情弹窗 */}
      {selectedBreed && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedBreed(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 弹窗头部 */}
            <div className="relative h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={selectedBreed.imageUrl}
                  alt={selectedBreed.name}
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={() => setSelectedBreed(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-500 text-xl">×</span>
              </button>
            </div>

            {/* 弹窗内容 */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold">{selectedBreed.name}</h2>
                <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
                  {selectedBreed.species === 'dog' ? '犬' : '猫'} · {selectedBreed.size}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{selectedBreed.description}</p>

              {/* 基本信息 */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-1">原产地</div>
                  <div className="font-medium">{selectedBreed.origin}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-1">寿命</div>
                  <div className="font-medium">{selectedBreed.lifeSpan}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-1">体重</div>
                  <div className="font-medium">{selectedBreed.weight}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-sm text-gray-400 mb-1">身高/体长</div>
                  <div className="font-medium">{selectedBreed.height}</div>
                </div>
              </div>

              {/* 详细信息 */}
              <div className="space-y-4 mb-6">
                <div className="border-b border-gray-100 pb-4">
                  <div className="text-sm text-gray-400 mb-2">性格特点</div>
                  <div className="text-gray-700">{selectedBreed.traits}</div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="text-sm text-gray-400 mb-2">毛色</div>
                  <div className="text-gray-700">{selectedBreed.colors}</div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="text-sm text-gray-400 mb-2">护理需求</div>
                  <div className="text-gray-700">{selectedBreed.grooming}</div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="text-sm text-gray-400 mb-2">运动需求</div>
                  <div className="text-gray-700">{selectedBreed.exercise}</div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="text-sm text-gray-400 mb-2">适合人群</div>
                  <div className="text-gray-700">{selectedBreed.suitable}</div>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <div className="text-sm text-gray-400 mb-2">历史文化</div>
                  <div className="text-gray-700">{selectedBreed.history}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">文化价值</div>
                  <div className="text-gray-700">{selectedBreed.culture}</div>
                </div>
              </div>

              {/* 关闭按钮 */}
              <button
                onClick={() => setSelectedBreed(null)}
                className="w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
