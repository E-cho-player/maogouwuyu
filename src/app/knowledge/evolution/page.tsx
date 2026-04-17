'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Dog, Cat, Clock, ArrowRight, Calendar } from 'lucide-react';
import { evolutionImages } from '@/lib/images';
import { Footer } from '@/components/footer';

// 演化时间线数据
const evolutionTimeline = [
  {
    id: '1',
    period: '约15,000年前',
    era: '新石器时代',
    title: '犬类的驯化起源',
    species: 'dog',
    description: '人类开始驯化狼，最早的犬类祖先出现。它们帮助人类狩猎、看家，成为人类的忠实伙伴。',
    highlight: '第一个被人类驯化的动物',
    image: evolutionImages.ancientWolf,
    location: '欧亚大陆',
  },
  {
    id: '2',
    period: '约9,000年前',
    era: '新石器时代',
    title: '猫类与人类共存',
    species: 'cat',
    description: '猫类开始与人类在农业定居点中共存，帮助控制粮食储存中的鼠害。',
    highlight: '猫类进入人类聚居地',
    image: evolutionImages.ancientChina,
    location: '近东地区',
  },
  {
    id: '3',
    period: '约4,000年前',
    era: '古文明时期',
    title: '古埃及的神圣猫咪',
    species: 'cat',
    description: '古埃及人将猫奉为神圣的动物，与女神Bastet相关联。猫咪享有至高无上的地位。',
    highlight: '猫被尊为神灵',
    image: evolutionImages.ancientEgypt,
    location: '古埃及',
  },
  {
    id: '4',
    period: '约2,500年前',
    era: '古典时期',
    title: '中国古代田园犬',
    species: 'dog',
    description: '中国田园犬在农耕文化中扮演重要角色，成为看家护院的得力助手。',
    highlight: '中华田园犬的祖先',
    image: evolutionImages.ancientChina,
    location: '中国',
  },
  {
    id: '5',
    period: '约1,500年前',
    era: '中世纪',
    title: '欧洲中世纪的犬猫',
    species: 'both',
    description: '犬类用于狩猎、守护，猫类在城镇中控制鼠害。宗教文化对两者产生了复杂影响。',
    highlight: '功能化养殖开始',
    image: evolutionImages.medievalEurope,
    location: '欧洲',
  },
  {
    id: '6',
    period: '约200年前',
    era: '近代',
    title: '品种培育兴起',
    species: 'both',
    description: '19世纪开始系统性的品种培育，出现了许多现代犬猫品种。犬展和猫展开始流行。',
    highlight: '现代品种诞生',
    image: evolutionImages.ancientWolf,
    location: '英国/欧洲',
  },
  {
    id: '7',
    period: '现代',
    era: '当代',
    title: '家庭伴侣时代',
    species: 'both',
    description: '猫狗成为全球最受欢迎的家庭宠物。科技的发展改善了它们的健康和生活质量。',
    highlight: '宠物文化全球化',
    image: evolutionImages.modernPets,
    location: '全球',
  },
];

export default function EvolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Clock className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              🐕🐱 犬猫演化图谱
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              探索猫狗从野性到文明的奇妙旅程
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Dog className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">犬类演化</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Cat className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">猫类演化</span>
              </div>
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              从15,000年前人类与犬类的首次相遇，到如今猫狗成为全球最受欢迎的家庭伴侣，
              这是一部跨越万年的共生故事。
            </p>
          </div>
        </div>
      </div>

      {/* Evolution Timeline */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">演化时间线</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block" />

            {evolutionTimeline.map((event, index) => (
              <div
                key={event.id}
                className={`relative mb-16 md:mb-0 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className={`md:pl-8 ${index % 2 === 1 ? 'md:pr-8' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  {/* Content */}
                  <Link
                    href={`/knowledge/evolution/${event.id}`}
                    className="group block"
                  >
                    <div className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                      {/* Time Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">
                          {event.period}
                        </span>
                        <span className="px-2 py-1 text-xs bg-muted rounded-full">
                          {event.era}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span>📍</span>
                        <span>{event.location}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{event.description}</p>

                      {/* Highlight */}
                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                        <p className="text-sm font-medium text-primary">
                          💡 {event.highlight}
                        </p>
                      </div>

                      {/* Species Tags */}
                      <div className="flex gap-2 mt-4">
                        {event.species === 'dog' && (
                          <span className="flex items-center gap-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                            <Dog className="h-3 w-3" />
                            犬类
                          </span>
                        )}
                        {event.species === 'cat' && (
                          <span className="flex items-center gap-1 px-3 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                            <Cat className="h-3 w-3" />
                            猫类
                          </span>
                        )}
                        {event.species === 'both' && (
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

                      {/* Read More Hint */}
                      <div className="mt-4 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        点击查看详情
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">演化趣闻</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl border">
                <div className="text-4xl mb-4">🐺</div>
                <h3 className="text-lg font-semibold mb-2">犬类的祖先</h3>
                <p className="text-sm text-muted-foreground">
                  现代犬类的祖先是灰狼，通过数万年的选择和繁育，形成了400多个不同品种。
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="text-4xl mb-4">🐱</div>
                <h3 className="text-lg font-semibold mb-2">猫类的独立</h3>
                <p className="text-sm text-muted-foreground">
                  猫类从未被完全驯化，它们保留了许多野生祖先的本能和行为特征。
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-semibold mb-2">全球分布</h3>
                <p className="text-sm text-muted-foreground">
                  犬类和猫类在全球几乎所有地区都有分布，是人类最普遍的宠物选择。
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="text-4xl mb-4">🧬</div>
                <h3 className="text-lg font-semibold mb-2">基因相似</h3>
                <p className="text-sm text-muted-foreground">
                  现代犬类与灰狼的基因相似度高达99.9%，它们的DNA几乎没有差异。
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="text-4xl mb-4">🏺</div>
                <h3 className="text-lg font-semibold mb-2">古埃及的崇拜</h3>
                <p className="text-sm text-muted-foreground">
                  古埃及人甚至将猫制成木乃伊，认为这样可以让它们在来世继续陪伴主人。
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold mb-2">功能分化</h3>
                <p className="text-sm text-muted-foreground">
                  通过选择性繁育，犬类发展出狩猎、牧羊、护卫、救援等多种功能。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">想了解更多？</h2>
          <p className="text-muted-foreground mb-8">
            探索更多关于品种、文化和养护的知识
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/knowledge/breeds"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              浏览品种库
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/knowledge/culture"
              className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background hover:bg-accent rounded-lg transition-colors font-medium"
            >
              查看文化史专栏
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
