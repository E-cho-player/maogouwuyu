import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import {
  Camera,
  Calendar,
  FileText,
  Plus,
  Bell,
  Clock,
  Heart,
  Share2,
  Search,
  Filter,
  Download,
} from 'lucide-react';

export const metadata = {
  title: '管理工具 | 猫狗物语',
  description: '内置宠物相册、定时喂食提醒、电子健康档案、多宠物管理，轻松管理养宠日常',
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-500/10 via-background to-indigo-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Bell className="h-16 w-16 text-purple-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              便捷管理工具
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              轻松管理养宠日常，记录美好时光
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
              宠物相册记录成长瞬间，定时提醒不错过重要事项，
              电子健康档案随时查阅，多宠物管理井井有条
            </p>
          </div>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ToolCard
              title="宠物相册"
              description="云存储宠物照片，创建相册，添加标签，轻松分享"
              icon={<Camera className="h-10 w-10" />}
              color="bg-blue-500/10 text-blue-500"
              link="/tools/album"
            />
            <ToolCard
              title="定时提醒"
              description="设置喂食、驱虫、疫苗、遛狗等提醒，支持自定义时间"
              icon={<Calendar className="h-10 w-10" />}
              color="bg-green-500/10 text-green-500"
              link="/tools/reminders"
            />
            <ToolCard
              title="健康档案"
              description="存储疫苗本、驱虫记录、就诊病历，可导出或分享"
              icon={<FileText className="h-10 w-10" />}
              color="bg-red-500/10 text-red-500"
              link="/tools/health"
            />
            <ToolCard
              title="多宠管理"
              description="一个账号管理多只宠物，分别管理记录和提醒"
              icon={<Heart className="h-10 w-10" />}
              color="bg-pink-500/10 text-pink-500"
              link="/tools/multiple"
            />
          </div>
        </div>
      </section>

      {/* Pet Album Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">我的宠物相册</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              <Plus className="h-4 w-4" />
              上传照片
            </button>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="搜索照片..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <select className="px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                <option>全部</option>
                <option>豆豆</option>
                <option>咪咪</option>
                <option>雪球</option>
              </select>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(12)].map((_, i) => (
              <PhotoCard
                key={i}
                pet="豆豆"
                date="2025-03-10"
                likes={Math.floor(Math.random() * 50) + 10}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-3 border border-input bg-background hover:bg-accent rounded-lg font-medium transition-colors">
              加载更多
            </button>
          </div>
        </div>
      </section>

      {/* Reminders Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">定时提醒</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              <Plus className="h-4 w-4" />
              新建提醒
            </button>
          </div>

          <div className="space-y-4">
            <ReminderCard
              title="喂食 - 豆豆"
              time="08:00"
              type="喂食"
              frequency="每天"
              pet="豆豆"
              status="active"
            />
            <ReminderCard
              title="遛狗 - 豆豆"
              time="18:30"
              type="遛狗"
              frequency="每天"
              pet="豆豆"
              status="active"
            />
            <ReminderCard
              title="驱虫 - 全部宠物"
              time="09:00"
              type="驱虫"
              frequency="每月1日"
              pet="全部"
              status="pending"
            />
            <ReminderCard
              title="疫苗接种 - 豆豆"
              time="14:00"
              type="疫苗"
              frequency="2025-04-15"
              pet="豆豆"
              status="upcoming"
            />
          </div>
        </div>
      </section>

      {/* Health Records Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">健康档案</h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent rounded-lg text-sm font-medium transition-colors">
              <Download className="h-4 w-4" />
              导出档案
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <HealthRecordCard
              petName="豆豆"
              species="dog"
              breed="金毛寻回犬"
              age="3岁"
              weight="28kg"
              nextVaccine="2025-04-15"
              lastDeworming="2025-02-28"
            />
            <HealthRecordCard
              petName="雪球"
              species="cat"
              breed="布偶猫"
              age="2岁"
              weight="5.2kg"
              nextVaccine="2025-03-20"
              lastDeworming="2025-02-20"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ToolCard({
  title,
  description,
  icon,
  color,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all group">
      <div className={`inline-flex p-3 rounded-lg ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <button className="text-primary hover:underline text-sm font-medium">
        立即使用 →
      </button>
    </div>
  );
}

function PhotoCard({
  pet,
  date,
  likes,
}: {
  pet: string;
  date: string;
  likes: number;
}) {
  return (
    <div className="relative group overflow-hidden rounded-lg bg-muted aspect-square flex items-center justify-center">
      <div className="text-6xl">🐕</div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <div className="text-sm font-semibold">{pet}</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs">{date}</span>
            <div className="flex items-center gap-1 text-xs">
              <Heart className="h-3 w-3" />
              {likes}
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2">
          <button className="p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <Share2 className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ReminderCard({
  title,
  time,
  type,
  frequency,
  pet,
  status,
}: {
  title: string;
  time: string;
  type: string;
  frequency: string;
  pet: string;
  status: 'active' | 'pending' | 'upcoming';
}) {
  const statusConfig = {
    active: { bg: 'bg-green-500/10', text: 'text-green-500', label: '已激活' },
    pending: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', label: '待激活' },
    upcoming: { bg: 'bg-blue-500/10', text: 'text-blue-500', label: '即将到来' },
  };

  const config = statusConfig[status];

  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{type} • {pet}</p>
          </div>
        </div>
        <span className={`px-3 py-1 text-xs rounded-full ${config.bg} ${config.text}`}>
          {config.label}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{frequency}</span>
          </div>
        </div>
        <button className="text-primary hover:underline text-sm">编辑</button>
      </div>
    </div>
  );
}

function HealthRecordCard({
  petName,
  species,
  breed,
  age,
  weight,
  nextVaccine,
  lastDeworming,
}: {
  petName: string;
  species: 'dog' | 'cat';
  breed: string;
  age: string;
  weight: string;
  nextVaccine: string;
  lastDeworming: string;
}) {
  return (
    <div className="p-6 rounded-xl border bg-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{species === 'dog' ? '🐕' : '🐈'}</div>
          <div>
            <h3 className="text-xl font-semibold">{petName}</h3>
            <p className="text-sm text-muted-foreground">{breed}</p>
          </div>
        </div>
        <button className="text-primary hover:underline text-sm">查看全部</button>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
        <div>
          <div className="text-sm text-muted-foreground">年龄</div>
          <div className="font-semibold">{age}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">体重</div>
          <div className="font-semibold">{weight}</div>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">下次疫苗</span>
          <span className="text-sm font-medium">{nextVaccine}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">上次驱虫</span>
          <span className="text-sm font-medium">{lastDeworming}</span>
        </div>
      </div>
    </div>
  );
}
