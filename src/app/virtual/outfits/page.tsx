'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Wand2, Filter, Heart, CheckCircle, Sparkles } from 'lucide-react';
import { virtualOutfitDetailImages } from '@/lib/images';
import { useState } from 'react';

export default function OutfitsPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedOutfits, setSelectedOutfits] = useState<string[]>([]);

  const categories = ['全部', '国风系列', '地域特色', '节日限定'];

  const outfits = [
    // 国风系列
    {
      id: 'red-hanfu',
      name: '红色汉服',
      description: '经典汉服设计，展现东方美韵',
      category: '国风系列',
      imageUrl: virtualOutfitDetailImages.redHanfu,
      price: 0,
      unlocked: true,
      rarity: 'common',
    },
    {
      id: 'blue-porcelain',
      name: '青花瓷纹',
      description: '精美青花图案，传统工艺之美',
      category: '国风系列',
      imageUrl: virtualOutfitDetailImages.bluePorcelain,
      price: 100,
      unlocked: false,
      rarity: 'rare',
    },
    {
      id: 'tang-suit',
      name: '唐装马褂',
      description: '华丽金色刺绣，尽显皇家气派',
      category: '国风系列',
      imageUrl: virtualOutfitDetailImages.tangSuit,
      price: 150,
      unlocked: false,
      rarity: 'rare',
    },
    {
      id: 'qipao',
      name: '旗袍花纹',
      description: '优雅粉色丝绸，婉约动人',
      category: '国风系列',
      imageUrl: virtualOutfitDetailImages.qipao,
      price: 120,
      unlocked: false,
      rarity: 'rare',
    },

    // 地域特色
    {
      id: 'kimono',
      name: '和服',
      description: '传统日本服饰，樱花主题',
      category: '地域特色',
      imageUrl: virtualOutfitDetailImages.kimono,
      price: 80,
      unlocked: false,
      rarity: 'common',
    },
    {
      id: 'scotland-plaid',
      name: '苏格兰格纹',
      description: '经典红绿格子，英伦风情',
      category: '地域特色',
      imageUrl: virtualOutfitDetailImages.scotlandPlaid,
      price: 90,
      unlocked: false,
      rarity: 'common',
    },
    {
      id: 'mexican-poncho',
      name: '墨西哥披风',
      description: '鲜艳色彩图案，热情奔放',
      category: '地域特色',
      imageUrl: virtualOutfitDetailImages.mexicanPoncho,
      price: 110,
      unlocked: false,
      rarity: 'rare',
    },
    {
      id: 'indian-sari',
      name: '印度纱丽',
      description: '华丽金线刺绣，异域风情',
      category: '地域特色',
      imageUrl: virtualOutfitDetailImages.indianSari,
      price: 180,
      unlocked: false,
      rarity: 'epic',
    },

    // 节日限定
    {
      id: 'spring-tiger-hat',
      name: '春节虎头帽',
      description: '吉祥虎头图案，喜庆祝福',
      category: '节日限定',
      imageUrl: virtualOutfitDetailImages.springTigerHat,
      price: 0,
      unlocked: true,
      rarity: 'limited',
    },
    {
      id: 'mid-autumn-rabbit',
      name: '中秋玉兔装',
      description: '月兔主题，团圆美好',
      category: '节日限定',
      imageUrl: virtualOutfitDetailImages.midAutumnRabbit,
      price: 200,
      unlocked: false,
      rarity: 'limited',
    },
    {
      id: 'dragon-boat',
      name: '端午龙舟装',
      description: '龙纹图案，祈求安康',
      category: '节日限定',
      imageUrl: virtualOutfitDetailImages.dragonBoat,
      price: 160,
      unlocked: false,
      rarity: 'limited',
    },
    {
      id: 'christmas-reindeer',
      name: '圣诞驯鹿装',
      description: '温馨圣诞主题，欢乐节日',
      category: '节日限定',
      imageUrl: virtualOutfitDetailImages.christmasReindeer,
      price: 140,
      unlocked: false,
      rarity: 'limited',
    },
  ];

  const filteredOutfits =
    selectedCategory === '全部'
      ? outfits
      : outfits.filter((outfit) => outfit.category === selectedCategory);

  const toggleOutfit = (id: string) => {
    setSelectedOutfits((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
      case 'rare':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'epic':
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
      case 'limited':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative py-12 bg-gradient-to-br from-red-500/10 via-background to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/virtual"
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Wand2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">文化装扮工坊</h1>
                <p className="text-muted-foreground">
                  选择装扮，让您的宠物化身文化使者
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Outfits Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOutfits.map((outfit) => (
              <OutfitCard
                key={outfit.id}
                outfit={outfit}
                isSelected={selectedOutfits.includes(outfit.id)}
                onToggle={() => toggleOutfit(outfit.id)}
                getRarityColor={getRarityColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selection Summary */}
      {selectedOutfits.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur p-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">已选择 {selectedOutfits.length} 件装扮</p>
                  <p className="text-sm text-muted-foreground">
                    装扮您的宠物，展示文化风采
                  </p>
                </div>
              </div>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                应用装扮
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function OutfitCard({
  outfit,
  isSelected,
  onToggle,
  getRarityColor,
}: {
  outfit: {
    id: string;
    name: string;
    description: string;
    category: string;
    imageUrl: string;
    price: number;
    unlocked: boolean;
    rarity: string;
  };
  isSelected: boolean;
  onToggle: () => void;
  getRarityColor: (rarity: string) => string;
}) {
  return (
    <div
      className={`group p-4 rounded-xl border bg-card hover:shadow-lg transition-all cursor-pointer ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onToggle}
    >
      {/* Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src={outfit.imageUrl}
          alt={outfit.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isSelected && (
          <div className="absolute top-2 right-2 p-1.5 bg-primary rounded-full">
            <CheckCircle className="h-4 w-4 text-white" />
          </div>
        )}
        {!outfit.unlocked && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <LockIcon />
              <p className="text-white text-sm mt-2">需要解锁</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold mb-1">{outfit.name}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {outfit.description}
            </p>
          </div>
          <button
            className="p-2 hover:bg-accent rounded-lg transition-colors flex-shrink-0"
            onClick={(e) => {
              e.stopPropagation();
              // Toggle favorite
            }}
          >
            <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`px-2 py-1 text-xs rounded-full border ${getRarityColor(
              outfit.rarity
            )}`}
          >
            {outfit.rarity === 'common' && '普通'}
            {outfit.rarity === 'rare' && '稀有'}
            {outfit.rarity === 'epic' && '史诗'}
            {outfit.rarity === 'limited' && '限定'}
          </span>
          <span className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground">
            {outfit.category}
          </span>
        </div>

        {/* Price */}
        {outfit.price > 0 && (
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-semibold text-yellow-600">
              {outfit.price} 积分
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      className="h-6 w-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}
