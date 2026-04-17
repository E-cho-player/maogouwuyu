import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChatWidget } from '@/components/chat-widget';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingBag,
  MapPin,
  Calendar,
  Scissors,
  Star,
  Search,
  Sparkles,
  Heart,
  Award,
  Cloud,
  Sun,
  Snowflake,
} from 'lucide-react';
import { culturalImages } from '@/lib/images';

export const metadata = {
  title: '养宠服务 | 猫狗物语',
  description: '整合动物医院查询、宠物食品推荐、非遗好物购物、美容服务预约等实用功能',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-green-500/10 via-background to-teal-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <ShoppingBag className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              养宠服务
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              一站式养宠服务，满足所有需求
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              整合动物医院查询、宠物用品商城、美容服务预约等实用功能，
              特别推出非遗好物板块，让传统文化融入养宠生活
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              <ServiceButton active>全部服务</ServiceButton>
              <ServiceButton>医院查询</ServiceButton>
              <ServiceButton>宠物商城</ServiceButton>
              <ServiceButton>美容预约</ServiceButton>
              <ServiceButton>非遗好物</ServiceButton>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Search */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-red-500" />
              附近动物医院
            </h2>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索医院名称、地址..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="space-y-4">
              <HospitalCard
                name="爱心宠物医院"
                address="北京市朝阳区建国路88号"
                distance="1.2km"
                rating={4.8}
                services={['诊疗', '疫苗接种', '美容', '寄养']}
              />
              <HospitalCard
                name="瑞鹏宠物医院"
                address="北京市朝阳区望京SOHO"
                distance="2.5km"
                rating={4.9}
                services={['急诊', '手术', '专科诊疗']}
              />
              <HospitalCard
                name="萌宠动物医院"
                address="北京市朝阳区三里屯太古里"
                distance="3.8km"
                rating={4.7}
                services={['常规检查', '疫苗接种', '宠物用品']}
              />
            </div>

            <div className="text-center mt-6">
              <Link
                href="/services/hospitals"
                className="inline-flex items-center px-6 py-3 border border-input bg-background hover:bg-accent rounded-lg font-medium transition-colors"
              >
                查看更多医院
                <Sparkles className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pet Shop */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2 text-blue-500" />
              宠物用品商城
            </h2>
            <Link
              href="/services/shop"
              className="text-primary hover:underline text-sm"
            >
              查看全部 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <CategoryCard
              title="食品"
              imageUrl={culturalImages.petFood}
              items={['主粮', '零食', '营养品']}
            />
            <CategoryCard
              title="玩具"
              imageUrl={culturalImages.petToy}
              items={['球类', '咬胶', '益智玩具']}
            />
            <CategoryCard
              title="用品"
              imageUrl={culturalImages.petBed}
              items={['窝垫', '牵引绳', '美容工具']}
            />
          </div>

          {/* Heritage Goodies */}
          <div className="mt-12 p-8 rounded-xl border bg-gradient-to-br from-amber-500/5 to-orange-500/5">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-amber-500" />
              <div>
                <h3 className="text-xl font-bold">非遗宠物好物</h3>
                <p className="text-sm text-muted-foreground">传统工艺，匠心制作</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HeritageItem
                name="手工编织项圈"
                craftsman="王师傅"
                story="传承300年的编织技艺，每一件都是独一无二的艺术品"
                price="¥128"
                icon="🧶"
              />
              <HeritageItem
                name="传统印染宠物窝垫"
                craftsman="蓝染工坊"
                story="天然植物染料，环保健康，让宠物享受传统之美"
                price="¥288"
                icon="🎨"
              />
              <HeritageItem
                name="中药配方驱虫香囊"
                craftsman="李医师"
                story="古方配比，天然草本，温和驱虫无副作用"
                price="¥68"
                icon="🌿"
              />
            </div>

            <div className="text-center mt-8">
              <Link
                href="/services/shop/heritage"
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-colors"
              >
                探索更多非遗好物
                <Sparkles className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Beauty Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Scissors className="h-6 w-6 mr-2 text-purple-500" />
            美容服务预约
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BeautyService
              name="基础美容"
              price="¥68起"
              features={['洗澡吹干', '指甲修剪', '耳部清洁']}
            />
            <BeautyService
              name="造型美容"
              price="¥128起"
              features={['基础美容', '毛发修剪', '造型设计']}
            />
            <BeautyService
              name="SPA护理"
              price="¥268起"
              features={['造型美容', '精油护理', '按摩放松']}
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services/beauty"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Calendar className="mr-2 h-4 w-4" />
              立即预约
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Care Tips */}
      <section className="py-12 bg-gradient-to-br from-blue-500/10 via-background to-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">地域养护知识</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              根据您的所在地，推送适合的养护技巧
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <RegionalTip
              icon={<Cloud className="h-8 w-8" />}
              region="南方地区"
              title="潮湿环境护理"
              tips={[
                '定期清理宠物窝垫，防止潮湿',
                '注意预防皮肤真菌感染',
                '使用除湿设备保持环境干燥',
              ]}
              color="text-blue-500"
            />
            <RegionalTip
              icon={<Sun className="h-8 w-8" />}
              region="北方地区"
              title="干燥环境护理"
              tips={[
                '适当增加宠物饮水量',
                '使用加湿器保持室内湿度',
                '注意宠物毛发静电问题',
              ]}
              color="text-orange-500"
            />
            <RegionalTip
              icon={<Snowflake className="h-8 w-8" />}
              region="高寒地区"
              title="冬季保暖指南"
              tips={[
                '为宠物准备温暖的窝垫',
                '外出时注意防寒保暖',
                '定期检查爪部冻伤情况',
              ]}
              color="text-cyan-500"
            />
            <RegionalTip
              icon={<Heart className="h-8 w-8" />}
              region="热带地区"
              title="高温防暑指南"
              tips={[
                '避免在高温时段遛狗',
                '提供充足的饮水',
                '注意预防中暑和热射病',
              ]}
              color="text-red-500"
            />
          </div>
        </div>
      </section>

      <ChatWidget />
      <Footer />
    </div>
  );
}

function ServiceButton({ children, active }: { children: React.ReactNode; active?: boolean }) {
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

function HospitalCard({
  name,
  address,
  distance,
  rating,
  services,
}: {
  name: string;
  address: string;
  distance: string;
  rating: number;
  services: string[];
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{address}</p>
        </div>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="h-5 w-5 fill-current" />
          <span className="font-semibold">{rating}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <MapPin className="h-4 w-4" />
        <span>距离 {distance}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {services.map((service, index) => (
          <span key={index} className="px-2 py-1 text-xs bg-muted rounded-full">
            {service}
          </span>
        ))}
      </div>

      <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
        查看详情
      </button>
    </div>
  );
}

function CategoryCard({
  title,
  imageUrl,
  items,
}: {
  title: string;
  imageUrl: string;
  items: string[];
}) {
  return (
    <Link
      href="/services/shop"
      className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all group"
    >
      <div className="relative w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}

function HeritageItem({
  name,
  craftsman,
  story,
  price,
  icon,
}: {
  name: string;
  craftsman: string;
  story: string;
  price: string;
  icon: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h4 className="text-lg font-semibold mb-2">{name}</h4>
      <p className="text-sm text-primary mb-2">匠人: {craftsman}</p>
      <p className="text-sm text-muted-foreground mb-4">{story}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-amber-600">{price}</span>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          查看详情
        </button>
      </div>
    </div>
  );
}

function BeautyService({
  name,
  price,
  features,
}: {
  name: string;
  price: string;
  features: string[];
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-2xl font-bold text-primary mb-4">{price}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
      <button className="w-full py-2 border border-input bg-background hover:bg-accent rounded-lg font-medium transition-colors">
        立即预约
      </button>
    </div>
  );
}

function RegionalTip({
  icon,
  region,
  title,
  tips,
  color,
}: {
  icon: React.ReactNode;
  region: string;
  title: string;
  tips: string[];
  color: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card">
      <div className={`flex items-center gap-3 mb-4 ${color}`}>
        {icon}
        <div>
          <div className="text-sm text-muted-foreground">{region}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
