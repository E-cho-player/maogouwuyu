import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  Heart,
  ShoppingBag,
  Users,
  Calendar,
  PawPrint,
  Sparkles,
  MapPin,
  Award,
  Camera,
} from 'lucide-react';
import { culturalImages } from '@/lib/images';

export const metadata = {
  title: '猫狗物语 - 探索猫狗文化，温暖养宠生活',
  description: '集科普知识库、虚拟养成、真实记录、养宠服务、社交救助于一体的综合性养宠平台',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <PawPrint className="h-20 w-20 text-primary animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              猫狗物语
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              探索猫狗文化，温暖养宠生活
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              集猫狗科普、宠物互动、养宠管理、社交救助于一体的综合性养宠服务平台。
              从品种百科到文化史专栏，从虚拟养成到真实记录，让每一次养宠都充满文化韵味。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/knowledge"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                开始探索
                <Sparkles className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/virtual"
                className="inline-flex items-center justify-center px-8 py-3 border border-input bg-background hover:bg-accent rounded-lg font-medium transition-colors"
              >
                虚拟养宠
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">核心功能</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              五大核心模块，全方位满足您的养宠需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Knowledge */}
            <FeatureCard
              href="/knowledge"
              icon={<BookOpen className="h-10 w-10" />}
              title="科普百科"
              description="提供犬猫品种、习性、养护、健康等全维度科普内容，增强地域文化标签，开设猫狗文化史专栏"
              features={['品种库', '文化史专栏', '演化图谱', '每日科普']}
              color="bg-blue-500/10 text-blue-500"
            />

            {/* Virtual */}
            <FeatureCard
              href="/virtual"
              icon={<Heart className="h-10 w-10" />}
              title="虚实养宠"
              description="支持虚拟猫狗养成互动，文化限定装扮，记录真实宠物成长轨迹，契约任务系统助你养成好习惯"
              features={['虚拟养成', '文化装扮', '真实记录', '任务系统']}
              color="bg-red-500/10 text-red-500"
            />

            {/* Services */}
            <FeatureCard
              href="/services"
              icon={<ShoppingBag className="h-10 w-10" />}
              title="养宠服务"
              description="整合动物医院查询、宠物食品推荐、非遗好物推荐购物、美容服务预约等实用功能"
              features={['医院查询', '非遗好物', '地域养护', '节气养生']}
              color="bg-green-500/10 text-green-500"
            />

            {/* Tools */}
            <FeatureCard
              href="/services#tools"
              icon={<Calendar className="h-10 w-10" />}
              title="管理工具"
              description="内置宠物相册、定时喂食提醒、电子健康档案、多宠物管理，轻松管理养宠日常"
              features={['宠物相册', '定时提醒', '健康档案', '多宠管理']}
              color="bg-purple-500/10 text-purple-500"
            />

            {/* Community */}
            <FeatureCard
              href="/community"
              icon={<Users className="h-10 w-10" />}
              title="社区救助"
              description="搭建养宠用户交流社区，猫狗文化圈话题，文化养宠挑战赛，流浪猫狗救助公益"
              features={['文化圈', '挑战赛', '流浪救助', '公益义卖']}
              color="bg-orange-500/10 text-orange-500"
            />

            {/* Cultural */}
            <FeatureCard
              href="/knowledge/culture"
              icon={<Camera className="h-10 w-10" />}
              title="文化打卡"
              description="上传宠物与地标合影，生成专属文化纪念册，AR合拍功能，让宠物与传统文化亲密接触"
              features={['地标打卡', '文化纪念册', 'AR合拍', '成就勋章']}
              color="bg-yellow-500/10 text-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">文化特色</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              深度融合传统文化元素，让养宠更具文化韵味
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CulturalCard
              title="国风装扮"
              imageUrl={culturalImages.traditionalOutfit}
              description="汉服、唐装等传统服饰，让您的宠物成为文化使者"
            />
            <CulturalCard
              title="非遗好物"
              imageUrl={culturalImages.handmadeCollar}
              description="手工编织项圈、传统印染窝垫、中药配方香囊"
            />
            <CulturalCard
              title="地域文化"
              imageUrl={culturalImages.culturalMap}
              description="各地宠物文化史、方言称呼、本土品种守护"
            />
            <CulturalCard
              title="节气养生"
              imageUrl={culturalImages.seasonalSolarTerm}
              description="结合二十四节气推送当季宠物养护要点"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12">
            <Award className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              契约任务系统
            </h2>
            <p className="text-muted-foreground mb-8">
              创建学习/工作任务清单，完成后解锁虚拟宠物装扮、互动游戏，获得「学霸铲屎官」专属勋章
            </p>
            <Link
              href="/virtual/tasks"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              创建任务
              <MapPin className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({
  href,
  icon,
  title,
  description,
  features,
  color,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}) {
  return (
    <Link
      href={href}
      className="group block p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300"
    >
      <div className={`inline-flex p-3 rounded-lg ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
          >
            {feature}
          </span>
        ))}
      </div>
    </Link>
  );
}

function CulturalCard({
  title,
  imageUrl,
  description,
}: {
  title: string;
  imageUrl: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 rounded-xl bg-card border">
      <div className="relative w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
