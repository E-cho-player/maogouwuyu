import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Heart,
  Trophy,
  Plus,
  MessageCircle,
  Share2,
  MapPin,
  Calendar,
  Search,
  Filter,
  Sparkles,
  Globe,
} from 'lucide-react';
import { petImages, culturalImages, userAvatars, communityUserAvatars, communityPostImages, dialectPetImages } from '@/lib/images';

export const metadata = {
  title: '社区救助 | 猫狗物语',
  description: '搭建养宠用户交流社区，文化养宠挑战赛，流浪猫狗救助公益',
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-500/10 via-background to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Users className="h-16 w-16 text-orange-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              社区与救助
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              分享养宠生活，传递爱心温暖
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              猫狗文化圈话题交流，文化养宠挑战赛，流浪猫狗救助公益，
              让每一只毛孩子都能找到温暖的家
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <CommunityTab active>全部</CommunityTab>
              <CommunityTab>猫狗文化圈</CommunityTab>
              <CommunityTab>挑战赛</CommunityTab>
              <CommunityTab>流浪救助</CommunityTab>
              <CommunityTab>公益义卖</CommunityTab>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Circle - Topics */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <Globe className="h-6 w-6 mr-2 text-blue-500" />
              猫狗文化圈
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              <Plus className="h-4 w-4" />
              发布话题
            </button>
          </div>

          {/* Hot Topics */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">热门话题</h3>
            <div className="flex flex-wrap gap-2">
              <TopicTag name="#方言里的猫狗" count={1256} />
              <TopicTag name="#本土品种守护者" count={892} />
              <TopicTag name="#国风宠物穿搭" count={675} />
              <TopicTag name="#宠物与非遗合影" count={543} />
              <TopicTag name="#猫庙故事" count={421} />
              <TopicTag name="#犬神信仰" count={312} />
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            <PostCard
              author="猫咪爱好者"
              avatarUrl={communityUserAvatars.catLover}
              title="分享我们家猫咪的庙会照片"
              topic="#宠物与民俗"
              content="周末带猫咪去了当地的庙会，它对舞狮表演特别感兴趣，还穿上了传统服饰，和红灯笼合影太可爱了！"
              likes={234}
              comments={45}
              time="2小时前"
              images={[communityPostImages.templeCat, communityPostImages.festivalPets]}
            />
            <PostCard
              author="田园犬守护者"
              avatarUrl={communityUserAvatars.dogLover}
              title="中华田园犬的故事"
              topic="#本土品种守护者"
              content="中华田园犬是我们中国的本土品种，它们忠诚、聪明，是农耕文化的重要组成部分。这是我家那只陪伴我多年的中华田园犬..."
              likes={567}
              comments={89}
              time="5小时前"
              images={[communityPostImages.nativeDog, communityPostImages.runningDog]}
            />
            <PostCard
              author="文化达人"
              avatarUrl={communityUserAvatars.culturalExpert}
              title="方言里猫狗的有趣称呼"
              topic="#方言里的猫狗"
              content="整理了全国各地对猫狗的不同称呼，有的真的很有意思！比如上海话里的喵汪，广东话的猫猫狗狗，闽南语的咪咪旺旺..."
              likes={890}
              comments={156}
              time="1天前"
              images={[dialectPetImages.radioCat, dialectPetImages.dialectMap, dialectPetImages.grandpaCat]}
            />
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Trophy className="h-12 w-12 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">文化养宠挑战赛</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              参与主题挑战，展示您的文化与创意，赢取丰厚奖励
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChallengeCard
              title="国风宠物穿搭大赛"
              status="进行中"
              participants={1256}
              endDate="2025-03-31"
              prize="一等奖：国风宠物装扮全套 + 非遗好物大礼包"
              imageUrl={culturalImages.traditionalOutfit}
            />
            <ChallengeCard
              title="宠物与非遗合影大赛"
              status="进行中"
              participants={890}
              endDate="2025-04-15"
              prize="一等奖：专业摄影服务 + 宠物写真套系"
              imageUrl={culturalImages.petPhotography}
            />
            <ChallengeCard
              title="本土品种守护故事"
              status="即将开始"
              participants={0}
              endDate="2025-04-01"
              prize="一等奖：定制非遗项圈 + 宠物基金"
              imageUrl={culturalImages.handmadeCollar}
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/community/challenges"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Trophy className="mr-2 h-4 w-4" />
              查看所有挑战赛
            </Link>
          </div>
        </div>
      </section>

      {/* Rescue Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold flex items-center">
              <Heart className="h-6 w-6 mr-2 text-red-500" />
              流浪救助
            </h2>
            <div className="flex gap-2">
              <Link
                href="/community/rescue/adopt"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                <Plus className="h-4 w-4" />
                发布救助
              </Link>
            </div>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索流浪动物..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select className="px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                <option>全部</option>
                <option>待领养</option>
                <option>已领养</option>
                <option>救助中</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RescueCard
              name="小黑"
              species="dog"
              age="约1岁"
              location="北京市朝阳区"
              status="待领养"
              description="在小区流浪被发现，性格温顺，已完成疫苗接种"
              imageUrl={petImages.chineseFieldDog}
              urgent={true}
            />
            <RescueCard
              name="小花"
              species="cat"
              age="约6个月"
              location="北京市海淀区"
              status="救助中"
              description="被发现时受伤严重，正在康复中，预计两周后可领养"
              imageUrl={petImages.chineseGardenCat}
              urgent={false}
            />
            <RescueCard
              name="大黄"
              species="dog"
              age="约2岁"
              location="北京市丰台区"
              status="待领养"
              description="忠诚的田园犬，看家护院的好帮手，已绝育"
              imageUrl={petImages.borderCollie}
              urgent={false}
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/community/rescue"
              className="inline-flex items-center px-6 py-3 border border-input bg-background hover:bg-accent rounded-lg font-medium transition-colors"
            >
              查看更多救助信息
              <Sparkles className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Charity Sale */}
      <section className="py-12 bg-gradient-to-br from-red-500/10 via-background to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 mx-auto mb-4 text-red-500" />
            <h2 className="text-3xl font-bold mb-4">公益义卖</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              非遗好物销售所得部分收入将捐赠给救助组织
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <CharityItem
              name="手工编织项圈"
              price="¥128"
              donated="¥64"
              craftsman="王师傅"
            />
            <CharityItem
              name="传统印染窝垫"
              price="¥288"
              donated="¥144"
              craftsman="蓝染工坊"
            />
            <CharityItem
              name="中药驱虫香囊"
              price="¥68"
              donated="¥34"
              craftsman="李医师"
            />
          </div>

          <div className="max-w-2xl mx-auto p-6 rounded-xl border bg-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">累计捐赠金额</h3>
              <span className="text-2xl font-bold text-red-500">¥128,450</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              已帮助 523 只流浪动物
            </p>
            <button className="w-full py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
              查看捐赠记录
            </button>
          </div>
        </div>
      </section>

      <Footer />

      <ChatWidget />
    </div>
  );
}

function CommunityTab({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
      }`}
    >
      {children}
    </button>
  );
}

function TopicTag({ name, count }: { name: string; count: number }) {
  return (
    <button className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
      {name} <span className="text-xs opacity-75">{count}</span>
    </button>
  );
}

function PostCard({
  author,
  avatar,
  avatarUrl,
  title,
  topic,
  content,
  likes,
  comments,
  time,
  images,
}: {
  author: string;
  avatar?: string;
  avatarUrl?: string;
  title: string;
  topic: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
  images: string[];
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
      <div className="flex items-start gap-4 mb-4">
        {avatarUrl ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={avatarUrl}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="text-3xl">{avatar}</div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold">{author}</span>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <button className="text-sm text-primary hover:underline">{topic}</button>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{content}</p>

      {images.length > 0 && (
        <div className="flex gap-2 mb-4">
          {images.map((imageUrl, i) => (
            <div key={i} className="w-24 h-24 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={`${title} ${i + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <Heart className="h-4 w-4" />
            {likes}
          </button>
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
            <MessageCircle className="h-4 w-4" />
            {comments}
          </button>
        </div>
        <button className="text-sm text-muted-foreground hover:text-primary">
          <Share2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function ChallengeCard({
  title,
  status,
  participants,
  endDate,
  prize,
  imageUrl,
}: {
  title: string;
  status: '进行中' | '即将开始' | '已结束';
  participants: number;
  endDate: string;
  prize: string;
  imageUrl: string;
}) {
  const statusConfig = {
    进行中: { bg: 'bg-green-500/10', text: 'text-green-500' },
    即将开始: { bg: 'bg-blue-500/10', text: 'text-blue-500' },
    已结束: { bg: 'bg-gray-500/10', text: 'text-gray-500' },
  };

  const config = statusConfig[status];

  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
      <div className="relative w-16 h-16 mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <span className={`inline-block px-3 py-1 text-xs rounded-full ${config.bg} ${config.text} mb-4`}>
        {status}
      </span>
      <div className="space-y-2 text-sm mb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-4 w-4" />
          <span>{participants} 人参与</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>截止: {endDate}</span>
        </div>
      </div>
      <div className="pt-4 border-t">
        <p className="text-sm text-muted-foreground mb-2">奖品</p>
        <p className="text-sm font-medium text-primary">{prize}</p>
      </div>
    </div>
  );
}

function RescueCard({
  name,
  species,
  age,
  location,
  status,
  description,
  imageUrl,
  urgent,
}: {
  name: string;
  species: 'dog' | 'cat';
  age: string;
  location: string;
  status: string;
  description: string;
  imageUrl: string;
  urgent: boolean;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all relative">
      {urgent && (
        <div className="absolute top-4 right-4 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
          紧急
        </div>
      )}
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
        <span>{species === 'dog' ? '狗狗' : '猫咪'}</span>
        <span>•</span>
        <span>{age}</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
        <MapPin className="h-4 w-4" />
        <span>{location}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
          {status}
        </span>
        <button className="text-sm text-primary hover:underline">查看详情</button>
      </div>
    </div>
  );
}

function CharityItem({
  name,
  price,
  donated,
  craftsman,
}: {
  name: string;
  price: string;
  donated: string;
  craftsman: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <p className="text-sm text-muted-foreground mb-2">匠人: {craftsman}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-bold">{price}</span>
        <span className="text-sm text-red-500">已捐赠 {donated}</span>
      </div>
      <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
        立即购买
      </button>
    </div>
  );
}
