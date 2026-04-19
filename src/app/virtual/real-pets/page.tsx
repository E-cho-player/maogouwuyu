'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Calendar,
  Camera,
  PawPrint,
  Cake,
  MapPin,
  Weight,
  Scale,
  Heart,
  Activity,
  FileText,
  X,
  ImagePlus,
  Eye,
  Clock,
  Utensils,
  Scissors,
  Stethoscope,
  Gamepad2,
  Sparkles,
} from 'lucide-react';
import { petImages } from '@/lib/images';
import { Footer } from '@/components/footer';

// 记录类型
const recordTypes = [
  { id: 'feed', label: '喂食', icon: Utensils, color: 'bg-orange-500' },
  { id: 'walk', label: '散步', icon: Activity, color: 'bg-green-500' },
  { id: 'groom', label: '美容', icon: Scissors, color: 'bg-pink-500' },
  { id: 'health', label: '健康', icon: Stethoscope, color: 'bg-blue-500' },
  { id: 'play', label: '玩耍', icon: Gamepad2, color: 'bg-purple-500' },
  { id: 'other', label: '其他', icon: Sparkles, color: 'bg-gray-500' },
];

// 真实宠物数据
const initialPets = [
  {
    id: '1',
    name: '豆豆',
    species: 'dog' as const,
    breed: '金毛寻回犬',
    age: 3,
    ageText: '3岁',
    weight: 28,
    gender: '公',
    birthday: '2021-03-15',
    birthplace: '北京',
    avatarUrl: petImages.goldenRetriever,
    records: 24,
    lastRecord: '2025-03-10',
    notes: '性格温顺，喜欢游泳，对食物很热情',
    health: {
      status: 'healthy',
      lastCheckup: '2025-02-20',
      vaccines: ['狂犬疫苗', '六联疫苗', '驱虫药'],
      allergies: ['无'],
    },
  },
  {
    id: '2',
    name: '雪球',
    species: 'cat' as const,
    breed: '布偶猫',
    age: 2,
    ageText: '2岁',
    weight: 5,
    gender: '母',
    birthday: '2022-05-10',
    birthplace: '上海',
    avatarUrl: petImages.ragdoll,
    records: 18,
    lastRecord: '2025-03-09',
    notes: '粘人，喜欢被抱着，晚上比较活跃',
    health: {
      status: 'healthy',
      lastCheckup: '2025-01-15',
      vaccines: ['猫三联疫苗', '驱虫药'],
      allergies: ['无'],
    },
  },
];

// 初始记录数据 - 更真实的内容
const initialRecords: Record<string, Array<{
  id: string;
  date: string;
  type: string;
  typeLabel: string;
  note: string;
  photos: string[];
  createdAt: string;
}>> = {
  '1': [
    { 
      id: 'r1', 
      date: '2025-03-10', 
      type: 'feed', 
      typeLabel: '喂食', 
      note: '今天早餐吃了满满一碗狗粮，胃口超好！加了点鸡肉干，吃得干干净净，碗都舔得锃亮 🐕', 
      photos: [], 
      createdAt: '08:30' 
    },
    { 
      id: 'r2', 
      date: '2025-03-09', 
      type: 'walk', 
      typeLabel: '散步', 
      note: '下午去公园遛弯，遇到了隔壁小区的金毛"大黄"和边牧"小黑"，三个小伙伴一起玩了好久，回家路上累得直喘气 😄', 
      photos: [], 
      createdAt: '16:45' 
    },
    { 
      id: 'r3', 
      date: '2025-03-08', 
      type: 'groom', 
      typeLabel: '美容', 
      note: '今天带豆豆去洗澡美容，洗完香喷喷的，毛色更亮了。美容师说它的毛发状态很好，要继续保持日常梳毛~', 
      photos: [], 
      createdAt: '14:20' 
    },
    { 
      id: 'r4', 
      date: '2025-03-07', 
      type: 'health', 
      typeLabel: '健康', 
      note: '年度体检完成！医生说一切指标正常，体重28kg很标准，牙齿也很健康。接下来继续每年打一次狂犬疫苗就好 📋', 
      photos: [], 
      createdAt: '10:15' 
    },
    { 
      id: 'r5', 
      date: '2025-03-06', 
      type: 'play', 
      typeLabel: '玩耍', 
      note: '在院子里玩接飞盘，豆豆今天状态超好，连续接了10次！玩了一个小时才肯休息，晚上睡得很香 🎾', 
      photos: [], 
      createdAt: '17:00' 
    },
    { 
      id: 'r5-1', 
      date: '2025-03-05', 
      type: 'feed', 
      typeLabel: '喂食', 
      note: '今天尝试了新品牌的狗粮，豆豆似乎很喜欢，吃得比平时还多，看来要换这个牌子了 🦴', 
      photos: [], 
      createdAt: '19:00' 
    },
    { 
      id: 'r5-2', 
      date: '2025-03-04', 
      type: 'walk', 
      typeLabel: '散步', 
      note: '早晨在小区里散步，遇到了几个老朋友，豆豆跟大家都很亲热，被摸头的时候尾巴摇得像小风扇 🌳', 
      photos: [], 
      createdAt: '07:30' 
    },
  ],
  '2': [
    { 
      id: 'r6', 
      date: '2025-03-10', 
      type: 'feed', 
      typeLabel: '喂食', 
      note: '今天给雪球开了个三文鱼罐头，吃得可香了，吃完还意犹未尽地舔爪子 😺', 
      photos: [], 
      createdAt: '08:00' 
    },
    { 
      id: 'r7', 
      date: '2025-03-09', 
      type: 'play', 
      typeLabel: '玩耍', 
      note: '晚上用逗猫棒陪雪球玩了好久，它跳来跳去的样子太可爱了，玩累了就趴在我腿上呼噜呼噜 🧶', 
      photos: [], 
      createdAt: '20:30' 
    },
    { 
      id: 'r8', 
      date: '2025-03-08', 
      type: 'groom', 
      typeLabel: '美容', 
      note: '给雪球梳毛，它舒服得直打呼噜。布偶猫的毛长，每天都要认真梳，不然容易打结 ✨', 
      photos: [], 
      createdAt: '21:00' 
    },
    { 
      id: 'r9', 
      date: '2025-03-07', 
      type: 'health', 
      typeLabel: '健康', 
      note: '今天带雪球去体检，体重5kg，医生说很健康！就是有点胖，要控制饮食多运动 💪', 
      photos: [], 
      createdAt: '15:30' 
    },
    { 
      id: 'r10', 
      date: '2025-03-06', 
      type: 'play', 
      typeLabel: '玩耍', 
      note: '给雪球买了个新的猫爬架，它可喜欢了，爬上去就不想下来，在上面睡了整整一下午 😴', 
      photos: [], 
      createdAt: '14:00' 
    },
    { 
      id: 'r11', 
      date: '2025-03-05', 
      type: 'feed', 
      typeLabel: '喂食', 
      note: '今天雪球不太想吃猫粮，换了点冻干零食才肯吃，可能是天气热没胃口 🍽️', 
      photos: [], 
      createdAt: '19:30' 
    },
  ],
};

export default function RealPetsPage() {
  const [selectedPet, setSelectedPet] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAddRecordModal, setShowAddRecordModal] = useState(false);
  const [records, setRecords] = useState(initialRecords);
  const [selectedRecord, setSelectedRecord] = useState<typeof initialRecords['1'][0] | null>(null);
  const [pets] = useState(initialPets);

  // 添加新记录
  const addRecord = (petId: string, record: typeof initialRecords['1'][0]) => {
    setRecords(prev => ({
      ...prev,
      [petId]: [record, ...(prev[petId] || [])],
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500/10 via-background to-green-500/10 py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/virtual"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回虚实养宠
          </Link>

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">真实宠物管理</h1>
              <p className="text-muted-foreground">记录您的宠物成长，留下美好回忆</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              <Plus className="mr-2 h-5 w-5" />
              添加宠物
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard icon={<PawPrint className="h-8 w-8 text-primary" />} label="宠物数量" value={pets.length} />
            <StatCard icon={<FileText className="h-8 w-8 text-green-500" />} label="总记录数" value={Object.values(records).flat().length} />
            <StatCard icon={<Camera className="h-8 w-8 text-orange-500" />} label="照片数量" value={Object.values(records).flat().reduce((acc, r) => acc + r.photos.length, 0)} />
          </div>
        </div>
      </div>

      {/* Pet List */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {showAddForm && (
            <AddPetForm onClose={() => setShowAddForm(false)} />
          )}

          {!selectedPet ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pets.map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={pet}
                  records={records[pet.id] || []}
                  onClick={() => setSelectedPet(pet.id)}
                  onAddRecord={() => {
                    setSelectedPet(pet.id);
                    setShowAddRecordModal(true);
                  }}
                />
              ))}
            </div>
          ) : (
            <PetDetail
              pet={pets.find((p) => p.id === selectedPet)!}
              records={records[selectedPet] || []}
              onBack={() => setSelectedPet(null)}
              onAddRecord={() => setShowAddRecordModal(true)}
              onViewRecord={setSelectedRecord}
            />
          )}
        </div>
      </div>

      <Footer />

      {/* 添加记录弹窗 */}
      {showAddRecordModal && selectedPet && (
        <AddRecordModal
          petId={selectedPet}
          petName={pets.find(p => p.id === selectedPet)?.name || ''}
          onClose={() => setShowAddRecordModal(false)}
          onSave={(record) => {
            addRecord(selectedPet, record);
            setShowAddRecordModal(false);
          }}
        />
      )}

      {/* 查看记录详情弹窗 */}
      {selectedRecord && (
        <RecordDetailModal
          record={selectedRecord}
          onClose={() => setSelectedRecord(null)}
        />
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="bg-card p-6 rounded-xl border hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}

function PetCard({
  pet,
  records,
  onClick,
  onAddRecord,
}: {
  pet: any;
  records: any[];
  onClick: () => void;
  onAddRecord: () => void;
}) {
  const recentPhotos = records.slice(0, 3).flatMap(r => r.photos).slice(0, 4);
  const totalPhotos = records.reduce((acc, r) => acc + r.photos.length, 0);

  return (
    <div className="bg-card rounded-xl border hover:shadow-lg transition-all overflow-hidden group">
      <div onClick={onClick} className="cursor-pointer">
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-primary/10">
              <Image
                src={pet.avatarUrl}
                alt={pet.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">{pet.name}</h3>
              <p className="text-muted-foreground mb-2">{pet.breed}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Cake className="h-4 w-4" />
                  {pet.ageText}
                </span>
                <span className="flex items-center gap-1">
                  <Scale className="h-4 w-4" />
                  {pet.weight}kg
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 最近照片 */}
        {recentPhotos.length > 0 && (
          <div className="px-6 pb-4">
            <p className="text-sm text-muted-foreground mb-2">最近照片</p>
            <div className="grid grid-cols-4 gap-2">
              {recentPhotos.map((photo: string, index: number) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src={photo} alt="照片" fill className="object-cover" />
                  {index === 3 && totalPhotos > 4 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium">
                      +{totalPhotos - 3}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-0 border-t">
          <div className="text-center py-4 border-r">
            <div className="text-2xl font-bold text-primary">{records.length}</div>
            <div className="text-xs text-muted-foreground">成长记录</div>
          </div>
          <div className="text-center py-4">
            <div className="text-2xl font-bold text-green-500">{totalPhotos}</div>
            <div className="text-xs text-muted-foreground">照片</div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 p-4 border-t bg-gray-50/50">
        <button 
          onClick={(e) => { e.stopPropagation(); onAddRecord(); }}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Camera className="h-4 w-4" />
          添加记录
        </button>
        <button 
          onClick={onClick}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 border rounded-xl text-sm font-medium hover:bg-white transition-colors"
        >
          <Eye className="h-4 w-4" />
          查看详情
        </button>
      </div>
    </div>
  );
}

function PetDetail({
  pet,
  records,
  onBack,
  onAddRecord,
  onViewRecord,
}: {
  pet: any;
  records: any[];
  onBack: () => void;
  onAddRecord: () => void;
  onViewRecord: (record: any) => void;
}) {
  const [activeTab, setActiveTab] = useState<'info' | 'records' | 'health'>('records');

  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        返回列表
      </button>

      {/* Pet Header */}
      <div className="bg-card p-8 rounded-xl border mb-6">
        <div className="flex items-start gap-8">
          <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-background shadow-lg">
            <Image
              src={pet.avatarUrl}
              alt={pet.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{pet.name}</h1>
                <p className="text-muted-foreground text-lg">{pet.breed}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border rounded-lg hover:bg-accent transition-colors">
                  <Edit className="h-5 w-5" />
                </button>
                <button className="p-2 border rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <InfoItem icon={<Cake className="h-5 w-5" />} label="年龄" value={pet.ageText} />
              <InfoItem icon={<Scale className="h-5 w-5" />} label="体重" value={`${pet.weight}kg`} />
              <InfoItem icon={<Heart className="h-5 w-5" />} label="性别" value={pet.gender} />
              <InfoItem icon={<MapPin className="h-5 w-5" />} label="出生地" value={pet.birthplace} />
            </div>

            <div className="mt-4 p-3 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">{pet.notes}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-3 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'info'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            基本信息
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`py-3 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'records'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            成长记录 ({records.length})
          </button>
          <button
            onClick={() => setActiveTab('health')}
            className={`py-3 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'health'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            健康档案
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-card p-6 rounded-xl border">
        {activeTab === 'info' && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-muted-foreground">生日</label>
                <div className="font-medium">{pet.birthday}</div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">品种</label>
                <div className="font-medium">{pet.breed}</div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">性别</label>
                <div className="font-medium">{pet.gender}</div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">体重</label>
                <div className="font-medium">{pet.weight}kg</div>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-muted-foreground">备注</label>
                <div className="font-medium">{pet.notes}</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'records' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">成长记录</h3>
              <button 
                onClick={onAddRecord}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                <Plus className="h-4 w-4" />
                添加记录
              </button>
            </div>

            {records.length === 0 ? (
              <div className="text-center py-12">
                <Camera className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">暂无记录，点击上方按钮添加第一条记录吧~</p>
              </div>
            ) : (
              <div className="space-y-4">
                {records.map((record) => {
                  const typeInfo = recordTypes.find(t => t.id === record.type) || recordTypes[5];
                  const TypeIcon = typeInfo.icon;
                  return (
                    <div 
                      key={record.id} 
                      onClick={() => onViewRecord(record)}
                      className="p-5 bg-muted/30 rounded-xl border hover:shadow-md transition-all cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        {/* 照片预览 */}
                        {record.photos.length > 0 && (
                          <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden">
                            <Image src={record.photos[0]} alt="记录照片" fill className="object-cover" />
                            {record.photos.length > 1 && (
                              <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                                +{record.photos.length - 1}
                              </div>
                            )}
                          </div>
                        )}
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-white rounded-full ${typeInfo.color}`}>
                              <TypeIcon className="h-3 w-3" />
                              {record.typeLabel}
                            </span>
                            <span className="text-sm text-muted-foreground">{record.date} {record.createdAt}</span>
                          </div>
                          <p className="text-gray-700 line-clamp-2">{record.note}</p>
                        </div>

                        <div className="flex-shrink-0 flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                          <Eye className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === 'health' && (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">健康状态</h4>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="text-2xl">✅</span>
                <div>
                  <div className="font-medium text-green-800">健康</div>
                  <div className="text-sm text-green-600">宠物状态良好，无需特别关注</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">上次体检</h4>
              <div className="text-muted-foreground">{pet.health.lastCheckup}</div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">疫苗接种记录</h4>
              <div className="space-y-2">
                {pet.health.vaccines.map((vaccine: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                    <span className="text-primary">💉</span>
                    <span>{vaccine}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">过敏信息</h4>
              <div className="flex items-center gap-2 p-2 bg-muted/30 rounded">
                <span>{pet.health.allergies[0]}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
        {icon}
        {label}
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

function AddPetForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-card p-6 rounded-xl border mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">添加新宠物</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-accent rounded-lg transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">宠物名称</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="例如：豆豆"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">种类</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>狗狗</option>
              <option>猫咪</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">品种</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="例如：金毛寻回犬"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">性别</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>公</option>
              <option>母</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">生日</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">体重 (kg)</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="例如：25"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">出生地</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="例如：北京"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">备注</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              placeholder="例如：性格温顺，喜欢游泳..."
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            保存宠物
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border rounded-lg font-medium hover:bg-accent transition-colors"
          >
            取消
          </button>
        </div>
      </form>
    </div>
  );
}

// 添加记录弹窗
function AddRecordModal({
  petId,
  petName,
  onClose,
  onSave,
}: {
  petId: string;
  petName: string;
  onClose: () => void;
  onSave: (record: any) => void;
}) {
  const [selectedType, setSelectedType] = useState('feed');
  const [note, setNote] = useState('');
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 点击上传区域触发文件选择
  const handleSelectPhoto = () => {
    fileInputRef.current?.click();
  };

  // 处理文件选择
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    // 处理每个选中的文件
    Array.from(files).forEach(file => {
      // 验证文件类型
      if (!file.type.startsWith('image/')) {
        alert('请选择图片文件');
        return;
      }

      // 验证文件大小（最大 10MB）
      if (file.size > 10 * 1024 * 1024) {
        alert('图片大小不能超过 10MB');
        return;
      }

      // 使用 FileReader 读取文件并转为 base64
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setSelectedPhotos(prev => [...prev, base64]);
        setIsUploading(false);
      };
      reader.onerror = () => {
        alert('读取图片失败，请重试');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    });

    // 清空 input 以便重复选择同一文件
    e.target.value = '';
  };

  // 移除照片
  const removePhoto = (index: number) => {
    setSelectedPhotos(selectedPhotos.filter((_, i) => i !== index));
  };

  // 保存记录
  const handleSave = () => {
    const typeInfo = recordTypes.find(t => t.id === selectedType);
    const newRecord = {
      id: `r${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: selectedType,
      typeLabel: typeInfo?.label || '其他',
      note,
      photos: selectedPhotos,
      createdAt: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    };
    onSave(newRecord);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        {/* 头部 */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">为 {petName} 添加记录</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* 内容 */}
        <div className="p-6 space-y-6">
          {/* 记录类型 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">记录类型</label>
            <div className="grid grid-cols-3 gap-2">
              {recordTypes.map(type => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 transition-all ${
                      selectedType === type.id
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 照片上传 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              添加照片
              <span className="text-gray-400 font-normal ml-2">（可选）</span>
            </label>
            
            {/* 已选照片 */}
            {selectedPhotos.length > 0 && (
              <div className="grid grid-cols-4 gap-2 mb-3">
                {selectedPhotos.map((photo, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                    <Image src={photo} alt="照片" fill className="object-cover" />
                    <button
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* 上传按钮 */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={handleSelectPhoto}
              disabled={isUploading}
              className="w-full py-8 border-2 border-dashed border-gray-300 rounded-xl hover:border-primary hover:bg-primary/5 transition-colors flex flex-col items-center gap-2 disabled:opacity-50"
            >
              {isUploading ? (
                <>
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm text-gray-500">上传中...</span>
                </>
              ) : (
                <>
                  <ImagePlus className="h-8 w-8 text-gray-400" />
                  <span className="text-sm text-gray-500">点击上传照片</span>
                  <span className="text-xs text-gray-400">支持 JPG、PNG、GIF，单个文件最大 10MB</span>
                </>
              )}
            </button>
            <p className="text-xs text-gray-400 mt-2 text-center">
              已选择 {selectedPhotos.length} 张照片
            </p>
          </div>

          {/* 备注 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">记录内容</label>
            <textarea
              value={note}
              onChange={e => setNote(e.target.value)}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              rows={4}
              placeholder="记录一下今天发生了什么..."
            />
            <p className="text-xs text-gray-400 mt-1 text-right">{note.length}/200</p>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 border rounded-xl font-medium hover:bg-gray-50 transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={!note.trim() && selectedPhotos.length === 0}
            className="flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            保存记录
          </button>
        </div>
      </div>
    </div>
  );
}

// 记录详情弹窗
function RecordDetailModal({
  record,
  onClose,
}: {
  record: any;
  onClose: () => void;
}) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const typeInfo = recordTypes.find(t => t.id === record.type) || recordTypes[5];
  const TypeIcon = typeInfo.icon;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
        {/* 头部 */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white rounded-full ${typeInfo.color}`}>
              <TypeIcon className="h-4 w-4" />
              {record.typeLabel}
            </span>
            <div>
              <h2 className="font-semibold">{record.date}</h2>
              <p className="text-sm text-gray-500">{record.createdAt}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* 照片展示 */}
        {record.photos.length > 0 && (
          <div className="relative bg-black flex-shrink-0">
            <div className="relative h-80">
              <Image
                src={record.photos[currentPhotoIndex]}
                alt="记录照片"
                fill
                className="object-contain"
              />
            </div>
            
            {/* 照片导航 */}
            {record.photos.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentPhotoIndex(prev => (prev - 1 + record.photos.length) % record.photos.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentPhotoIndex(prev => (prev + 1) % record.photos.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  →
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentPhotoIndex + 1} / {record.photos.length}
                </div>
              </>
            )}
          </div>
        )}

        {/* 照片缩略图 */}
        {record.photos.length > 1 && (
          <div className="flex gap-2 p-4 bg-gray-50 overflow-x-auto">
            {record.photos.map((photo: string, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentPhotoIndex(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 ${
                  currentPhotoIndex === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <Image src={photo} alt="缩略图" fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* 内容 */}
        <div className="p-6 flex-1">
          <p className="text-gray-700 leading-relaxed">{record.note}</p>
        </div>

        {/* 底部 */}
        <div className="border-t px-6 py-4 flex justify-end gap-3 flex-shrink-0">
          <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors">
            <Edit className="h-4 w-4" />
          </button>
          <button className="px-4 py-2 text-red-500 hover:text-red-600 transition-colors">
            <Trash2 className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}
