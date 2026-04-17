import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import Link from 'next/link';
import Image from 'next/image';
import {
  Heart,
  Plus,
  Camera,
  Calendar,
  Award,
  Wand2,
  Dog,
  Cat,
  Sparkles,
  CheckCircle,
  Target,
  Crown,
} from 'lucide-react';
import { petImages, virtualOutfitImages, virtualPetAvatars } from '@/lib/images';

export const metadata = {
  title: '虚实养宠 | 猫狗物语',
  description: '支持虚拟猫狗养成互动，记录真实宠物成长轨迹，契约任务系统助你养成好习惯',
};

export default function VirtualPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-red-500/10 via-background to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Heart className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              虚实养宠
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              虚拟养成乐趣，真实记录生活
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              创建您的虚拟宠物，通过完成任务解锁文化装扮；同时记录真实宠物的成长轨迹，
              体验虚实结合的养宠乐趣
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/virtual/choose"
                className="inline-flex items-center justify-center px-8 py-3 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors"
              >
                <Dog className="mr-2 h-4 w-4" />
                选择宠物
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Pets Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">我的虚拟宠物</h2>
            <Link
              href="/virtual/create"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus className="mr-2 h-4 w-4" />
              添加宠物
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VirtualPetCard
              id="1"
              name="小旺"
              species="dog"
              level={15}
              exp={75}
              outfit="红色汉服"
              avatarUrl={virtualPetAvatars.goldenRetrieverVirtual}
            />
            <VirtualPetCard
              id="2"
              name="咪咪"
              species="cat"
              level={12}
              exp={88}
              outfit="樱花和服"
              avatarUrl={virtualPetAvatars.ragdollVirtual}
            />
            <AddNewCard />
          </div>
        </div>
      </section>

      {/* Cultural Outfits */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">文化装扮工坊</h2>
            <p className="text-muted-foreground">完成任务解锁限定装扮，让您的宠物化身文化使者</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OutfitCategory
              title="国风系列"
              icon=""
              imageUrl={virtualOutfitImages.chineseStyle}
              description="汉服、唐装、旗袍等传统服饰"
              items={['红色汉服', '青花瓷纹', '唐装马褂', '旗袍花纹']}
              color="bg-red-500/10 text-red-500"
            />
            <OutfitCategory
              title="地域特色"
              icon=""
              imageUrl={virtualOutfitImages.regionalStyle}
              description="世界各地特色服装"
              items={['和服', '苏格兰格纹', '墨西哥披风', '印度纱丽']}
              color="bg-blue-500/10 text-blue-500"
            />
            <OutfitCategory
              title="节日限定"
              icon=""
              imageUrl={virtualOutfitImages.festivalStyle}
              description="传统节日主题装扮"
              items={['春节虎头帽', '中秋玉兔装', '端午龙舟装', '圣诞驯鹿装']}
              color="bg-yellow-500/10 text-yellow-500"
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/virtual/outfits"
              className="inline-flex items-center px-6 py-3 border border-input bg-background hover:bg-accent rounded-lg font-medium transition-colors"
            >
              <Wand2 className="mr-2 h-4 w-4" />
              浏览更多装扮
            </Link>
          </div>
        </div>
      </section>

      {/* Real Pet Records */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">真实宠物记录</h2>
            <Link
              href="/virtual/real-pets"
              className="inline-flex items-center px-4 py-2 border border-input bg-background hover:bg-accent rounded-lg text-sm font-medium transition-colors"
            >
              管理真实宠物
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RealPetCard
              name="豆豆"
              species="dog"
              age={3}
              breed="金毛寻回犬"
              records={24}
              lastRecord="2025-03-10"
              imageUrl={petImages.goldenRetriever}
            />
            <RealPetCard
              name="雪球"
              species="cat"
              age={2}
              breed="布偶猫"
              records={18}
              lastRecord="2025-03-09"
              imageUrl={petImages.ragdoll}
            />
          </div>
        </div>
      </section>

      {/* Task System */}
      <section className="py-12 bg-gradient-to-br from-purple-500/10 via-background to-pink-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-purple-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">契约任务系统</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              创建学习/工作任务，完成后解锁虚拟装扮、互动游戏，获得成就勋章
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <TaskStatsCard
                icon={<CheckCircle className="h-8 w-8" />}
                title="今日完成"
                value={5}
                color="text-green-500"
              />
              <TaskStatsCard
                icon={<Award className="h-8 w-8" />}
                title="累计成就"
                value={12}
                color="text-yellow-500"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">今日任务</h3>
              <TaskCard
                title="背单词30分钟"
                duration="30分钟"
                completed={true}
                reward="解锁青花瓷纹装扮"
              />
              <TaskCard
                title="完成工作报告"
                duration="60分钟"
                completed={false}
                reward="获得+10积分"
              />
              <TaskCard
                title="带宠物散步20分钟"
                duration="20分钟"
                completed={false}
                reward="解锁中秋玉兔装"
              />
            </div>

            <div className="text-center mt-8">
              <Link
                href="/virtual/tasks"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Target className="mr-2 h-4 w-4" />
                管理任务
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">成就勋章墙</h2>
            <p className="text-muted-foreground">展示您获得的所有文化主题勋章</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <AchievementBadge icon="📚" title="学霸铲屎官" unlocked />
            <AchievementBadge icon="🏆" title="文化达人" unlocked />
            <AchievementBadge icon="🌟" title="任务达人" unlocked />
            <AchievementBadge icon="🎨" title="装扮大师" unlocked />
            <AchievementBadge icon="📷" title="打卡达人" unlocked />
            <AchievementBadge icon="🌍" title="徐霞客" unlocked />
            <AchievementBadge icon="🎭" title="国风使者" unlocked={false} />
            <AchievementBadge icon="💝" title="爱心天使" unlocked={false} />
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </div>
  );
}

function VirtualPetCard({
  id,
  name,
  species,
  level,
  exp,
  outfit,
  avatarUrl,
}: {
  id: string;
  name: string;
  species: 'dog' | 'cat';
  level: number;
  exp: number;
  outfit: string;
  avatarUrl: string;
}) {
  return (
    <Link href={`/virtual/pets/${id}`} className="block">
      <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Lv.{level}</span>
              <span>•</span>
              <span>{species === 'dog' ? '狗狗' : '猫咪'}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">经验值</span>
            <span>{exp}/100</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${exp}%` }} />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Wand2 className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">当前装扮:</span>
            <span className="font-medium">{outfit}</span>
          </div>
          <span className="text-sm text-primary hover:underline">查看详情 →</span>
        </div>
      </div>
    </Link>
  );
}

function AddNewCard() {
  return (
    <Link
      href="/virtual/create"
      className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed bg-muted/30 hover:bg-muted/50 transition-all min-h-[200px]"
    >
      <Plus className="h-12 w-12 text-muted-foreground mb-2" />
      <span className="text-muted-foreground font-medium">添加新宠物</span>
    </Link>
  );
}

function OutfitCategory({
  title,
  icon,
  imageUrl,
  description,
  items,
  color,
}: {
  title: string;
  icon: string;
  imageUrl?: string;
  description: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card">
      {imageUrl ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className={`inline-flex p-3 rounded-lg ${color} mb-4`}>
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RealPetCard({
  name,
  species,
  age,
  breed,
  records,
  lastRecord,
  imageUrl,
}: {
  name: string;
  species: 'dog' | 'cat';
  age: number;
  breed: string;
  records: number;
  lastRecord: string;
  imageUrl: string;
}) {
  return (
    <Link href="/virtual/real-pets" className="block">
      <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{breed}</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{age}岁</span>
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{records}</div>
            <div className="text-xs text-muted-foreground">成长记录</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">{lastRecord.slice(5)}</div>
            <div className="text-xs text-muted-foreground">最近记录</div>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            <Camera className="h-4 w-4" />
            添加记录
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border rounded-lg text-sm font-medium hover:bg-accent transition-colors">
            <Calendar className="h-4 w-4" />
            查看详情 →
          </button>
        </div>
      </div>
    </Link>
  );
}

function TaskStatsCard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card">
      <div className={`flex items-center gap-3 mb-2 ${color}`}>
        {icon}
        <span className="text-sm text-muted-foreground">{title}</span>
      </div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}

function TaskCard({
  title,
  duration,
  completed,
  reward,
}: {
  title: string;
  duration: string;
  completed: boolean;
  reward: string;
}) {
  return (
    <Link href="/virtual/tasks" className="block">
      <div className="flex items-center gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-all cursor-pointer">
        <div className={`p-2 rounded-full ${completed ? 'bg-green-500/10 text-green-500' : 'bg-muted'}`}>
          <CheckCircle className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{title}</h4>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Target className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-muted-foreground mb-1">奖励</div>
          <div className="text-sm font-medium text-primary">{reward}</div>
        </div>
      </div>
    </Link>
  );
}

function AchievementBadge({
  icon,
  title,
  unlocked,
}: {
  icon: string;
  title: string;
  unlocked: boolean;
}) {
  return (
    <div className={`p-4 rounded-lg border ${unlocked ? 'bg-card' : 'bg-muted/30 opacity-50'}`}>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-xs text-center text-muted-foreground">{title}</div>
      {unlocked && <Crown className="h-4 w-4 text-yellow-500 mx-auto mt-1" />}
    </div>
  );
}
