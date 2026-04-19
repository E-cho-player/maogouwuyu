'use client';
export const runtime = 'edge';

import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PawPrint, TrendingUp, Target, ArrowLeft, X, RefreshCw } from 'lucide-react';

// 背景列表
const backgrounds = [
  '/image/樱下木屋.jpg',
  '/image/背景二.jpg',
  '/image/背景三.jpg',
  '/image/海畔晴沙.jpg',
  '/image/樱蝶草地.jpg',
  '/image/日系田间治愈.jpg',
];

// 服装分类
type OutfitCategory = '全部' | '特色' | '帽子' | '领子';

// 换装选项 - 带分类（使用单独的衣服图片用于面板显示）
const outfitOptions = [
  { id: 1, name: '珍珠领饰', thumbImage: '/image/衣服1.jpg', category: '领子' as OutfitCategory },
  { id: 2, name: '中式武打服', thumbImage: '/image/衣服2.jpg', category: '特色' as OutfitCategory },
  { id: 3, name: '日式和服', thumbImage: '/image/衣服3.jpg', category: '特色' as OutfitCategory },
  { id: 4, name: '格纹背带裙', thumbImage: '/image/衣服4.jpg', category: '领子' as OutfitCategory },
  { id: 5, name: '醒狮头套', thumbImage: '/image/衣服5.jpg', category: '帽子' as OutfitCategory },
  { id: 6, name: '花卉上衣', thumbImage: '/image/衣服6.jpg', category: '特色' as OutfitCategory },
  { id: 7, name: '碎花连衣裙', thumbImage: '/image/衣服7.jpg', category: '特色' as OutfitCategory },
  { id: 8, name: '牛仔背带', thumbImage: '/image/衣服8.jpg', category: '领子' as OutfitCategory },
];

// 虚拟宠物数据 - 使用 PNG 格式的透明背景图片
const virtualPets = {
  '1': { id: '1', name: '柴犬', species: 'dog', breed: '柴犬', avatarUrl: '/image/柴犬1.png', outfitMap: '柴犬' },
  '2': { id: '2', name: '边牧', species: 'dog', breed: '边牧', avatarUrl: '/image/边牧1.png', outfitMap: '边牧' },
  '3': { id: '3', name: '马尔泰犬', species: 'dog', breed: '马尔泰犬', avatarUrl: '/image/马尔泰犬1.png', outfitMap: '马尔泰' },
  '4': { id: '4', name: '美短虎斑', species: 'cat', breed: '美短虎斑', avatarUrl: '/image/美短虎斑1.png', outfitMap: '虎斑' },
  '5': { id: '5', name: '英短蓝猫', species: 'cat', breed: '英短蓝猫', avatarUrl: '/image/英短蓝猫1.png', outfitMap: '蓝猫' },
  '6': { id: '6', name: '暹罗猫', species: 'cat', breed: '暹罗猫', avatarUrl: '/image/暹罗猫1.png', outfitMap: '暹罗' },
};

export default function VirtualPetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const petId = resolvedParams.id;
  const pet = virtualPets[petId as keyof typeof virtualPets];

  // 状态管理
  const [selectedTab, setSelectedTab] = useState<'outfit' | 'growth' | 'tasks'>('outfit');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [selectedOutfit, setSelectedOutfit] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<OutfitCategory>('全部');
  const [showSidebar, setShowSidebar] = useState(true); // 控制功能栏显示

  // 如果找不到宠物，显示错误信息
  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">宠物未找到</h1>
          <Link href="/virtual" className="text-green-600 hover:underline">
            返回虚实养宠
          </Link>
        </div>
      </div>
    );
  }

  // 切换背景
  const toggleBackground = () => {
    setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
  };

  // 获取当前宠物对应的装扮图片
  const getOutfitImage = (outfitId: number) => {
    return `/image/衣服${outfitId}${pet.outfitMap}.png`;
  };

  // 根据分类筛选服装
  const filteredOutfits = selectedCategory === '全部'
    ? outfitOptions
    : outfitOptions.filter(outfit => outfit.category === selectedCategory);

  // 分类标签
  const categories: OutfitCategory[] = ['全部', '特色', '帽子', '领子'];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 背景层 */}
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
      />

      {/* 左侧导航栏 - 可隐藏 */}
      <div className={`fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-green-600/95 to-green-700/95 backdrop-blur-sm flex flex-col z-50 shadow-2xl transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Logo/标题 */}
        <div className="pt-6 pb-8 px-2 text-center border-b border-white/20">
          <h1 className="text-white text-lg font-bold leading-tight">猫狗物语</h1>
        </div>

        {/* 导航菜单 */}
        <nav className="flex flex-col gap-3 flex-1 px-2 py-6">
          <button
            onClick={() => setSelectedTab('outfit')}
            className={`px-3 py-3 rounded-xl transition-all ${
              selectedTab === 'outfit'
                ? 'bg-green-800/90 text-white font-bold shadow-lg transform scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <PawPrint className="w-6 h-6" />
              <span className="text-xs">宠物换装</span>
            </div>
          </button>

          <button
            onClick={() => {
              // 直接跳转到成长轨迹页面
              window.location.href = `/virtual/pets/${petId}/growth-track`;
            }}
            className={`px-3 py-3 rounded-xl transition-all ${
              selectedTab === 'growth'
                ? 'bg-green-800/90 text-white font-bold shadow-lg transform scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs">成长轨迹</span>
            </div>
          </button>

          <button
            onClick={() => setSelectedTab('tasks')}
            className={`px-3 py-3 rounded-xl transition-all ${
              selectedTab === 'tasks'
                ? 'bg-green-800/90 text-white font-bold shadow-lg transform scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <Target className="w-6 h-6" />
              <span className="text-xs">任务创建</span>
            </div>
          </button>
        </nav>

        {/* 返回按钮 */}
        <div className="px-2 py-6 border-t border-white/20">
          <Link
            href="/virtual"
            className="px-3 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all flex flex-col items-center gap-1"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-xs">返回主页</span>
          </Link>
        </div>
      </div>

      {/* 右上角按钮组 */}
      <div className="fixed top-4 right-4 z-50 flex flex-col items-center gap-2">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-12 h-12 bg-white/95 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center group"
        >
          <X className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
        </button>
        <button
          onClick={toggleBackground}
          className="text-sm text-white font-medium drop-shadow-lg hover:text-white/80 transition-colors"
        >
          切换背景
        </button>
      </div>

      {/* 宠物展示区 - 站在道路上 */}
      <div className="fixed inset-0 flex items-end justify-center pb-16 pointer-events-none">
        <div className="relative w-72 h-72 pointer-events-auto">
          {/* 有装扮时显示穿好衣服的宠物图片 */}
          {selectedOutfit ? (
            <Image
              src={getOutfitImage(selectedOutfit)}
              alt={`${pet.name}穿着装扮`}
              fill
              className="object-contain"
              priority
              style={{ background: 'transparent' }}
            />
          ) : (
            /* 无装扮时显示宠物本体 */
            <Image
              src={pet.avatarUrl}
              alt={pet.name}
              fill
              className="object-contain"
              priority
              style={{ background: 'transparent' }}
            />
          )}
        </div>
      </div>

      {/* 左上服饰选择面板 - 仅在换装模式且功能栏显示时显示 */}
      {selectedTab === 'outfit' && showSidebar && (
        <div className="fixed left-24 top-20 z-40 w-72">
          <div className="bg-green-700/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            {/* 分类标签栏 */}
            <div className="flex gap-1 p-2 bg-green-800/50">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-white/95 text-green-700 shadow-md'
                      : 'bg-green-700/50 text-white hover:bg-green-600/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* 服饰展示区 */}
            <div className="p-3 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-2">
                {/* 无装扮选项 */}
                <button
                  onClick={() => setSelectedOutfit(null)}
                  className={`p-2 rounded-xl border-2 transition-all ${
                    selectedOutfit === null
                      ? 'border-white bg-white/20 scale-105'
                      : 'border-white/20 hover:border-white/50'
                  }`}
                >
                  <div className="aspect-square flex items-center justify-center">
                    <span className="text-3xl">🐾</span>
                  </div>
                  <p className="text-xs mt-1 text-center text-white font-medium">无装扮</p>
                </button>

                {/* 装扮选项 - 显示单独的衣服图片 */}
                {filteredOutfits.map((outfit) => (
                  <button
                    key={outfit.id}
                    onClick={() => setSelectedOutfit(outfit.id)}
                    className={`p-2 rounded-xl border-2 transition-all ${
                      selectedOutfit === outfit.id
                        ? 'border-white bg-white/20 scale-105'
                        : 'border-white/20 hover:border-white/50'
                    }`}
                  >
                    <div className="aspect-square relative bg-white/10 rounded-lg overflow-hidden">
                      <Image
                        src={outfit.thumbImage}
                        alt={outfit.name}
                        fill
                        className="object-contain"
                        style={{ background: 'transparent' }}
                      />
                    </div>
                    <p className="text-xs mt-1 text-center text-white font-medium truncate">
                      {outfit.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 成长轨迹面板 */}
      {selectedTab === 'growth' && showSidebar && (
        <div className="fixed left-24 bottom-20 z-40 w-96">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                成长轨迹
              </h3>
              <Link
                href={`/virtual/pets/${petId}/growth-track`}
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                查看详情 →
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-xl p-4 border border-pink-200">
                <div className="text-2xl font-bold text-pink-600">Lv.15</div>
                <div className="text-xs text-gray-600 mt-1">当前等级</div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">75%</div>
                <div className="text-xs text-gray-600 mt-1">经验进度</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl p-4 border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-600">3</div>
                <div className="text-xs text-gray-600 mt-1">已达成成就</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 任务创建面板 */}
      {selectedTab === 'tasks' && showSidebar && (
        <div className="fixed left-24 bottom-20 z-40 w-96">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              任务创建
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors cursor-pointer">
                <span className="text-2xl">🎯</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">完成日常任务</div>
                  <div className="text-xs text-gray-600">喂食、遛弯、训练</div>
                </div>
                <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-xs hover:bg-green-600 transition-colors">
                  开始
                </button>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer">
                <span className="text-2xl">🏃</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">运动互动</div>
                  <div className="text-xs text-gray-600">互动游戏、散步</div>
                </div>
                <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600 transition-colors">
                  开始
                </button>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer">
                <span className="text-2xl">📚</span>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">学习成长</div>
                  <div className="text-xs text-gray-600">技能训练、知识学习</div>
                </div>
                <button className="px-3 py-1 bg-purple-500 text-white rounded-lg text-xs hover:bg-purple-600 transition-colors">
                  开始
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
