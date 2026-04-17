'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  User,
  Settings,
  Bell,
  Heart,
  Award,
  ShoppingBag,
  Camera,
  Edit,
  LogOut,
  Crown,
  Sparkles,
  Trophy,
  Star,
  BookOpen,
  Calendar,
  X,
  Save,
  Lock,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Globe,
  Shield,
  MessageSquare,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { petImages, achievementImages } from '@/lib/images';

// 用户数据类型
interface UserData {
  name: string;
  avatar: string;
  bio: string;
  vip: boolean;
  fans: number;
  following: number;
  likes: number;
  points: number;
  email: string;
  phone: string;
  birthday: string;
  location: string;
  gender: string;
}

// 默认用户数据
const defaultUserData: UserData = {
  name: '猫咪爱好者',
  avatar: petImages.chineseGardenCat,
  bio: '养宠达人，热衷于分享猫咪文化和养护知识',
  vip: true,
  fans: 1256,
  following: 89,
  likes: 5678,
  points: 2890,
  email: 'cat_lover@example.com',
  phone: '138****8888',
  birthday: '1995-06-15',
  location: '北京市朝阳区',
  gender: '女',
};

// 设置数据类型
interface SettingsData {
  notifications: {
    system: boolean;
    community: boolean;
    marketing: boolean;
  };
  privacy: {
    showProfile: boolean;
    showPets: boolean;
    showActivity: boolean;
  };
  theme: 'light' | 'dark' | 'system';
  language: 'zh-CN' | 'en-US';
}

// 默认设置数据
const defaultSettings: SettingsData = {
  notifications: {
    system: true,
    community: true,
    marketing: false,
  },
  privacy: {
    showProfile: true,
    showPets: true,
    showActivity: false,
  },
  theme: 'light',
  language: 'zh-CN',
};

export default function ProfilePage() {
  // 状态管理
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [settings, setSettings] = useState<SettingsData>(defaultSettings);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [activeSettingsTab, setActiveSettingsTab] = useState<'account' | 'notification' | 'privacy' | 'about'>('account');
  
  // 编辑表单状态
  const [editForm, setEditForm] = useState(userData);

  // 打开编辑弹窗
  const openEditModal = () => {
    setEditForm(userData);
    setShowEditModal(true);
  };

  // 保存编辑
  const saveEdit = () => {
    setUserData(editForm);
    setShowEditModal(false);
  };

  // 更新设置
  const updateNotificationSetting = (key: keyof SettingsData['notifications'], value: boolean) => {
    setSettings(prev => ({
      ...prev,
      notifications: { ...prev.notifications, [key]: value }
    }));
  };

  const updatePrivacySetting = (key: keyof SettingsData['privacy'], value: boolean) => {
    setSettings(prev => ({
      ...prev,
      privacy: { ...prev.privacy, [key]: value }
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Profile Header */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20">
                  <Image
                    src={userData.avatar}
                    alt="用户头像"
                    fill
                    className="object-cover"
                  />
                </div>
                <button 
                  onClick={openEditModal}
                  className="absolute bottom-0 right-0 p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-lg"
                >
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{userData.name}</h1>
                  {userData.vip && (
                    <span className="px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full flex items-center gap-1 shadow-sm">
                      <Crown className="h-3 w-3" />
                      VIP会员
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4">
                  {userData.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                  <StatItem label="粉丝" value={userData.fans} />
                  <StatItem label="关注" value={userData.following} />
                  <StatItem label="获赞" value={userData.likes} />
                  <StatItem label="积分" value={userData.points} />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button 
                  onClick={openEditModal}
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
                >
                  <Edit className="h-4 w-4" />
                  编辑资料
                </button>
                <button 
                  onClick={() => setShowSettingsModal(true)}
                  className="flex items-center gap-2 px-5 py-2.5 border-2 border-input bg-background hover:bg-accent rounded-xl text-sm font-medium transition-colors"
                >
                  <Settings className="h-4 w-4" />
                  设置
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard
              icon={<User className="h-6 w-6" />}
              title="我的宠物"
              value={3}
              link="/profile/pets"
            />
            <StatCard
              icon={<Calendar className="h-6 w-6" />}
              title="完成任务"
              value={56}
              link="/profile/tasks"
            />
            <StatCard
              icon={<Heart className="h-6 w-6" />}
              title="收藏"
              value={128}
              link="/profile/favorites"
            />
            <StatCard
              icon={<ShoppingBag className="h-6 w-6" />}
              title="订单"
              value={12}
              link="/profile/orders"
            />
          </div>
        </div>
      </section>

      {/* My Pets */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                我的宠物
              </h2>
              <button className="text-primary hover:underline text-sm font-medium">管理全部</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PetCard
                name="豆豆"
                species="dog"
                avatarUrl={petImages.goldenRetriever}
                breed="金毛寻回犬"
                age="3岁"
              />
              <PetCard
                name="咪咪"
                species="cat"
                avatarUrl={petImages.chineseGardenCat}
                breed="中华田园猫"
                age="2岁"
              />
              <PetCard
                name="雪球"
                species="cat"
                avatarUrl={petImages.ragdoll}
                breed="布偶猫"
                age="1岁"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Award className="h-6 w-6 text-yellow-500" />
                成就勋章
              </h2>
              <span className="text-sm text-muted-foreground">已获得 8/12</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <AchievementBadge imageUrl={achievementImages.scholar} title="学霸铲屎官" description="连续7天完成学习任务" unlocked />
              <AchievementBadge imageUrl={achievementImages.culturalMaster} title="文化达人" description="阅读100篇文化文章" unlocked />
              <AchievementBadge imageUrl={achievementImages.taskMaster} title="任务达人" description="累计完成50个任务" unlocked />
              <AchievementBadge imageUrl={achievementImages.decorationMaster} title="装扮大师" description="收集20套装扮" unlocked />
              <AchievementBadge imageUrl={achievementImages.checkInMaster} title="打卡达人" description="完成50次文化打卡" unlocked />
              <AchievementBadge imageUrl={achievementImages.traveler} title="徐霞客" description="打卡10个不同城市" unlocked />
              <AchievementBadge imageUrl={achievementImages.culturalAmbassador} title="国风使者" description="参与国风挑战赛" unlocked />
              <AchievementBadge imageUrl={achievementImages.angel} title="爱心天使" description="捐赠10次" unlocked />
              <AchievementBadge imageUrl={achievementImages.perfectionist} title="完美主义者" description="任务完成率100%" unlocked={false} />
              <AchievementBadge imageUrl={achievementImages.pioneer} title="创作达人" description="发布50篇帖子" unlocked={false} />
              <AchievementBadge imageUrl={achievementImages.socialStar} title="社区领袖" description="粉丝超过1000" unlocked={false} />
              <AchievementBadge imageUrl={achievementImages.volunteer} title="季节收藏家" description="收集全部节气装扮" unlocked={false} />
            </div>
          </div>
        </div>
      </section>

      {/* Activity Stats */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-purple-500" />
              活动统计
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border bg-card hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  挑战赛参与
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">参与次数</span>
                    <span className="font-semibold">8次</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">获奖次数</span>
                    <span className="font-semibold">3次</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">最高名次</span>
                    <span className="font-semibold text-yellow-500 flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      第1名
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl border bg-card hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  学习记录
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">阅读文章</span>
                    <span className="font-semibold">156篇</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">观看视频</span>
                    <span className="font-semibold">42个</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">学习时长</span>
                    <span className="font-semibold">48小时</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl border bg-card divide-y overflow-hidden">
              <MenuItem icon={<Bell className="h-5 w-5" />} title="消息通知" description="查看系统消息、社区互动提醒" link="/profile/notifications" />
              <MenuItem icon={<Heart className="h-5 w-5" />} title="我的收藏" description="收藏的文章、商品、帖子" link="/profile/favorites" />
              <MenuItem icon={<Camera className="h-5 w-5" />} title="我的相册" description="宠物照片和视频" link="/profile/album" />
              <MenuItem icon={<ShoppingBag className="h-5 w-5" />} title="我的订单" description="商品订单和服务预约记录" link="/profile/orders" />
              <MenuItem icon={<Award className="h-5 w-5" />} title="积分兑换" description="使用积分兑换虚拟装扮和优惠券" link="/profile/points" />
              <button 
                onClick={() => setShowSettingsModal(true)}
                className="w-full flex items-center gap-4 p-4 hover:bg-accent transition-colors text-left"
              >
                <div className="text-primary"><Settings className="h-5 w-5" /></div>
                <div className="flex-1">
                  <h3 className="font-semibold">账号设置</h3>
                  <p className="text-sm text-muted-foreground">修改密码、隐私设置、意见反馈</p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>

            <div className="mt-6">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-red-200 text-red-500 rounded-xl font-medium hover:bg-red-50 transition-colors">
                <LogOut className="h-5 w-5" />
                退出登录
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 编辑资料弹窗 */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowEditModal(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            {/* 弹窗头部 */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">编辑资料</h2>
              <button onClick={() => setShowEditModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* 表单内容 */}
            <div className="p-6 space-y-6">
              {/* 头像 */}
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/20 mb-3">
                  <Image src={editForm.avatar} alt="头像" fill className="object-cover" />
                </div>
                <button className="text-sm text-primary font-medium hover:underline">更换头像</button>
              </div>

              {/* 昵称 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">昵称</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="请输入昵称"
                />
              </div>

              {/* 性别 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">性别</label>
                <div className="flex gap-3">
                  {['男', '女', '保密'].map(g => (
                    <button
                      key={g}
                      onClick={() => setEditForm({ ...editForm, gender: g })}
                      className={`px-4 py-2 rounded-xl border-2 transition-colors ${
                        editForm.gender === g
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* 生日 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">生日</label>
                <input
                  type="date"
                  value={editForm.birthday}
                  onChange={e => setEditForm({ ...editForm, birthday: e.target.value })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {/* 所在地 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">所在地</label>
                <input
                  type="text"
                  value={editForm.location}
                  onChange={e => setEditForm({ ...editForm, location: e.target.value })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="请输入所在城市"
                />
              </div>

              {/* 个人简介 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">个人简介</label>
                <textarea
                  value={editForm.bio}
                  onChange={e => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  rows={3}
                  placeholder="介绍一下自己吧"
                />
                <p className="text-xs text-gray-400 mt-1 text-right">{editForm.bio.length}/100</p>
              </div>

              {/* 联系方式 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">邮箱</label>
                  <input
                    type="email"
                    value={editForm.email}
                    onChange={e => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="请输入邮箱"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">手机号</label>
                  <input
                    type="text"
                    value={editForm.phone}
                    onChange={e => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30"
                    placeholder="请输入手机号"
                  />
                </div>
              </div>
            </div>

            {/* 底部按钮 */}
            <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex gap-3">
              <button
                onClick={() => setShowEditModal(false)}
                className="flex-1 py-3 border rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={saveEdit}
                className="flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="h-4 w-4" />
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 设置弹窗 */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowSettingsModal(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            {/* 弹窗头部 */}
            <div className="bg-white border-b px-6 py-4 flex items-center justify-between flex-shrink-0">
              <h2 className="text-xl font-bold">设置</h2>
              <button onClick={() => setShowSettingsModal(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* 左侧标签页 */}
              <div className="w-48 bg-gray-50 border-r p-3 space-y-1 flex-shrink-0">
                {[
                  { key: 'account', icon: User, label: '账号安全' },
                  { key: 'notification', icon: Bell, label: '消息通知' },
                  { key: 'privacy', icon: Shield, label: '隐私设置' },
                  { key: 'about', icon: HelpCircle, label: '关于我们' },
                ].map(tab => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveSettingsTab(tab.key as typeof activeSettingsTab)}
                    className={`w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-left transition-colors ${
                      activeSettingsTab === tab.key
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* 右侧内容 */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* 账号安全 */}
                {activeSettingsTab === 'account' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">账号安全</h3>
                    
                    {/* 修改密码 */}
                    <div className="p-4 border rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Lock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">登录密码</h4>
                            <p className="text-sm text-gray-500">定期修改密码可以保护账号安全</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                          修改
                        </button>
                      </div>
                    </div>

                    {/* 绑定手机 */}
                    <div className="p-4 border rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <Shield className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">绑定手机</h4>
                            <p className="text-sm text-gray-500">已绑定：{userData.phone}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                          更换
                        </button>
                      </div>
                    </div>

                    {/* 绑定邮箱 */}
                    <div className="p-4 border rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Globe className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-medium">绑定邮箱</h4>
                            <p className="text-sm text-gray-500">已绑定：{userData.email}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                          更换
                        </button>
                      </div>
                    </div>

                    {/* 注销账号 */}
                    <div className="p-4 border border-red-200 rounded-xl bg-red-50/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-red-100 rounded-lg">
                            <LogOut className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <h4 className="font-medium text-red-600">注销账号</h4>
                            <p className="text-sm text-gray-500">注销后数据将无法恢复</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 border border-red-300 text-red-500 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                          申请注销
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 消息通知 */}
                {activeSettingsTab === 'notification' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">消息通知</h3>
                    
                    <div className="space-y-4">
                      <ToggleSetting
                        title="系统通知"
                        description="接收系统公告、活动提醒等重要消息"
                        value={settings.notifications.system}
                        onChange={(v) => updateNotificationSetting('system', v)}
                      />
                      <ToggleSetting
                        title="社区互动"
                        description="有人点赞、评论、关注时通知我"
                        value={settings.notifications.community}
                        onChange={(v) => updateNotificationSetting('community', v)}
                      />
                      <ToggleSetting
                        title="营销推送"
                        description="接收优惠活动、新品上架等推广消息"
                        value={settings.notifications.marketing}
                        onChange={(v) => updateNotificationSetting('marketing', v)}
                      />
                    </div>
                  </div>
                )}

                {/* 隐私设置 */}
                {activeSettingsTab === 'privacy' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">隐私设置</h3>
                    
                    <div className="space-y-4">
                      <ToggleSetting
                        title="公开个人主页"
                        description="其他用户可以查看您的个人资料"
                        value={settings.privacy.showProfile}
                        onChange={(v) => updatePrivacySetting('showProfile', v)}
                      />
                      <ToggleSetting
                        title="公开我的宠物"
                        description="其他用户可以查看您养的宠物"
                        value={settings.privacy.showPets}
                        onChange={(v) => updatePrivacySetting('showPets', v)}
                      />
                      <ToggleSetting
                        title="公开活动记录"
                        description="其他用户可以查看您的学习、任务记录"
                        value={settings.privacy.showActivity}
                        onChange={(v) => updatePrivacySetting('showActivity', v)}
                      />
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-3">黑名单管理</h4>
                      <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                        管理黑名单用户
                      </button>
                    </div>
                  </div>
                )}

                {/* 关于我们 */}
                {activeSettingsTab === 'about' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold mb-4">关于我们</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 border rounded-xl">
                        <h4 className="font-medium mb-1">猫狗物语</h4>
                        <p className="text-sm text-gray-500">版本 1.0.0</p>
                      </div>

                      <div className="p-4 border rounded-xl">
                        <h4 className="font-medium mb-1">用户协议</h4>
                        <p className="text-sm text-gray-500">查看我们的用户服务协议</p>
                      </div>

                      <div className="p-4 border rounded-xl">
                        <h4 className="font-medium mb-1">隐私政策</h4>
                        <p className="text-sm text-gray-500">了解我们如何保护您的隐私</p>
                      </div>

                      <div className="p-4 border rounded-xl">
                        <div className="flex items-center gap-3">
                          <MessageSquare className="h-5 w-5 text-primary" />
                          <div>
                            <h4 className="font-medium">意见反馈</h4>
                            <p className="text-sm text-gray-500">帮助我们做得更好</p>
                          </div>
                        </div>
                        <textarea
                          className="w-full mt-3 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                          rows={3}
                          placeholder="请输入您的建议或问题..."
                        />
                        <button className="mt-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                          提交反馈
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 组件函数
function StatItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value.toLocaleString()}</span>
    </div>
  );
}

function StatCard({ icon, title, value, link }: { icon: React.ReactNode; title: string; value: number; link: string }) {
  return (
    <a href={link} className="p-4 rounded-xl border bg-card hover:shadow-md hover:border-primary/20 transition-all">
      <div className="text-primary mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
    </a>
  );
}

function PetCard({ name, species, avatarUrl, breed, age }: { name: string; species: 'dog' | 'cat'; avatarUrl: string; breed: string; age: string }) {
  return (
    <div className="p-4 rounded-xl border bg-card hover:shadow-md hover:border-primary/20 transition-all cursor-pointer">
      <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
        <Image src={avatarUrl} alt={name} fill className="object-cover" />
      </div>
      <h3 className="font-semibold mb-1">{name}</h3>
      <div className="text-sm text-muted-foreground space-y-1">
        <div>{breed}</div>
        <div>{age}</div>
      </div>
    </div>
  );
}

function AchievementBadge({ imageUrl, title, description, unlocked }: { imageUrl: string; title: string; description: string; unlocked: boolean }) {
  return (
    <div className={`p-4 rounded-xl border ${unlocked ? 'bg-card hover:shadow-md' : 'bg-muted/30 opacity-50'} transition-all cursor-pointer`}>
      <div className="relative w-full h-16 rounded-lg overflow-hidden mb-2 bg-amber-50">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <h4 className="font-semibold mb-1 text-sm">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
      {unlocked && (
        <div className="mt-2 flex items-center gap-1 text-xs text-green-500">
          <Sparkles className="h-3 w-3" />
          已获得
        </div>
      )}
    </div>
  );
}

function MenuItem({ icon, title, description, link }: { icon: React.ReactNode; title: string; description: string; link: string }) {
  return (
    <a href={link} className="flex items-center gap-4 p-4 hover:bg-accent transition-colors cursor-pointer">
      <div className="text-primary">{icon}</div>
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground" />
    </a>
  );
}

function ToggleSetting({ title, description, value, onChange }: { title: string; description: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-xl">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative w-12 h-7 rounded-full transition-colors ${value ? 'bg-primary' : 'bg-gray-300'}`}
      >
        <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform ${value ? 'left-6' : 'left-1'}`} />
      </button>
    </div>
  );
}
