'use client';
export const runtime = 'edge';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Camera, MapPin, ArrowLeft, X, Upload, Search } from 'lucide-react';

// 宠物数据映射
const petData: Record<string, { name: string; image: string }> = {
  '1': { name: '柴犬', image: '/image/柴犬.jpg' },
  '2': { name: '边牧', image: '/image/边牧.jpg' },
  '3': { name: '马尔泰犬', image: '/image/马尔泰.jpg' },
  '4': { name: '美短虎斑', image: '/image/美短虎斑.jpg' },
  '5': { name: '英短蓝猫', image: '/image/英短蓝猫.jpg' },
  '6': { name: '暹罗猫', image: '/image/暹罗猫.jpg' },
};

export default function GrowthTrackPage() {
  const params = useParams();
  const router = useRouter();
  const petId = params.id as string;
  const currentPet = petData[petId] || petData['1'];

  // 状态管理
  const [activeTab, setActiveTab] = useState<'album' | 'track'>('album');
  const [showSettingModal, setShowSettingModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  // 个人信息状态
  const [userInfo, setUserInfo] = useState({
    avatar: '/image/未登录.png',
    nickname: '游客',
    petName: '未命名',
    petGender: '',
    petBirthday: '',
    dewormingRecord: '',
    vaccineRecord: '',
  });
  
  // 临时编辑状态
  const [editInfo, setEditInfo] = useState({ ...userInfo });
  const [avatarFile, setAvatarFile] = useState<string | null>(null);

  // 相册状态
  const [albums, setAlbums] = useState<{ id: number; images: string[] }[]>([]);

  // 保存编辑
  const handleSaveEdit = () => {
    setUserInfo({
      ...editInfo,
      avatar: avatarFile || userInfo.avatar,
    });
    setShowSettingModal(false);
  };

  // 处理头像上传
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarFile(url);
    }
  };

  // 创建相册
  const handleCreateAlbum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const images = Array.from(files).map(file => URL.createObjectURL(file));
      setAlbums([...albums, { id: Date.now(), images }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* 左侧导航栏 */}
      <div className="fixed left-0 top-0 h-full w-[70px] bg-white flex flex-col items-center py-4 z-50 shadow-sm">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/image/猫狗图标.png"
            alt="猫狗物语"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>
        
        {/* 相册按钮 */}
        <button
          onClick={() => setActiveTab('album')}
          className={`mb-5 p-2 rounded-lg transition-all ${
            activeTab === 'album' ? 'bg-green-100' : ''
          }`}
        >
          <Image
            src={activeTab === 'album' ? '/image/相册1.png' : '/image/相册.png'}
            alt="相册"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </button>
        
        {/* 轨迹按钮 */}
        <button
          onClick={() => setActiveTab('track')}
          className={`mb-5 p-2 rounded-lg transition-all ${
            activeTab === 'track' ? 'bg-green-100' : ''
          }`}
        >
          <Image
            src={activeTab === 'track' ? '/image/轨迹1.png' : '/image/轨迹.png'}
            alt="轨迹"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </button>
        
        {/* 返回按钮 */}
        <button
          onClick={() => router.push(`/virtual/pets/${petId}`)}
          className="mt-auto mb-8 p-2 rounded-lg hover:bg-gray-100 transition-all"
          onMouseEnter={(e) => e.currentTarget.querySelector('img')?.setAttribute('src', '/image/推出1.png')}
          onMouseLeave={(e) => e.currentTarget.querySelector('img')?.setAttribute('src', '/image/退出.png')}
        >
          <Image
            src="/image/退出.png"
            alt="返回"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* 顶部栏 */}
      <div className="fixed left-[70px] top-0 right-0 h-[60px] bg-white flex items-center px-6 z-40 shadow-sm">
        <h3 className="text-lg font-bold text-gray-800">猫狗物语</h3>
        <h3 className="ml-3 text-lg text-gray-400">成长轨迹</h3>
        
        {/* 搜索框 */}
        <div className="ml-auto flex items-center bg-gray-100 rounded-full px-4 py-2 w-[300px]">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none flex-1 text-sm"
          />
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        
        {/* 个人信息按钮 */}
        <button
          onClick={() => setShowSettingModal(true)}
          className="ml-6 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
        >
          个人信息
        </button>
      </div>

      {/* 右侧个人信息栏 */}
      <div className="fixed right-0 top-[60px] w-[240px] h-[140px] bg-white flex items-center justify-center gap-6 border-b border-gray-200 z-40">
        <div
          className="w-[80px] h-[80px] rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-500 transition-all"
          onClick={() => setShowInfoModal(true)}
        >
          <Image
            src={avatarFile || userInfo.avatar}
            alt="头像"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-gray-800 font-medium">你好，{userInfo.nickname}!</div>
          <span className="text-gray-500 text-sm mt-1">{userInfo.petName}的主人</span>
        </div>
      </div>

      {/* 主内容区 */}
      <div className="ml-[70px] mt-[60px] mr-[240px] flex-1 p-6 overflow-y-auto h-screen">
        {activeTab === 'album' && (
          <div className="space-y-6">
            {/* 创建相册按钮 */}
            {albums.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center">
                <p className="text-gray-500 mb-4">还没有相册，快来创建吧！</p>
                <label className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-600 transition-colors">
                  <Camera className="w-4 h-4 mr-2" />
                  创建相册
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleCreateAlbum}
                  />
                </label>
              </div>
            ) : (
              albums.map((album, index) => (
                <div key={album.id} className="bg-white rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-800">相册 {index + 1}</h3>
                    <label className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-lg text-sm cursor-pointer hover:bg-green-600 transition-colors">
                      <Upload className="w-3 h-3 mr-1" />
                      添加照片
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files) {
                            const newImages = Array.from(files).map(f => URL.createObjectURL(f));
                            const updatedAlbums = [...albums];
                            updatedAlbums[index].images = [...album.images, ...newImages];
                            setAlbums(updatedAlbums);
                          }
                        }}
                      />
                    </label>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {album.images.map((img, imgIndex) => (
                      <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`照片 ${imgIndex + 1}`}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
            
            {/* 添加新相册 */}
            {albums.length > 0 && (
              <label className="block bg-white rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">创建新相册</p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleCreateAlbum}
                />
              </label>
            )}
          </div>
        )}

        {activeTab === 'track' && (
          <div className="space-y-4">
            {[
              { days: '1天', title: '初遇' },
              { days: '7天', title: '第一次玩耍' },
              { days: '30天', title: '学会新技能' },
              { days: '60天', title: '疫苗接种' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 flex items-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-[100px] h-[100px] rounded-lg overflow-hidden">
                  <Image
                    src={currentPet.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-6 text-center">
                  <div className="text-2xl font-bold text-gray-800">{item.days}</div>
                  <div className="text-gray-400 mt-1">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 个人信息设置弹窗 */}
      {showSettingModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[400px] max-w-[90%]">
            <h3 className="text-lg font-bold text-center mb-6">设置个人信息</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">上传头像</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  onChange={handleAvatarChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">你的昵称</label>
                <input
                  type="text"
                  placeholder="请输入你的昵称"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editInfo.nickname}
                  onChange={(e) => setEditInfo({ ...editInfo, nickname: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">宠物名字</label>
                <input
                  type="text"
                  placeholder="请为你的宠物取个名字吧"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editInfo.petName}
                  onChange={(e) => setEditInfo({ ...editInfo, petName: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">宠物性别</label>
                <input
                  type="text"
                  placeholder="公/母/已绝育"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editInfo.petGender}
                  onChange={(e) => setEditInfo({ ...editInfo, petGender: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">宠物生日</label>
                <input
                  type="text"
                  placeholder="请输入宠物的生日"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editInfo.petBirthday}
                  onChange={(e) => setEditInfo({ ...editInfo, petBirthday: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">驱虫记录</label>
                <input
                  type="text"
                  placeholder="体内/体外驱虫日期及药品名称"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editInfo.dewormingRecord}
                  onChange={(e) => setEditInfo({ ...editInfo, dewormingRecord: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">疫苗记录</label>
                <input
                  type="text"
                  placeholder="接种疫苗名称及接种时间"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={editInfo.vaccineRecord}
                  onChange={(e) => setEditInfo({ ...editInfo, vaccineRecord: e.target.value })}
                />
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowSettingModal(false)}
                className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                取消
              </button>
              <button
                onClick={handleSaveEdit}
                className="flex-1 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                确定
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 个人详情弹窗 */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[400px] max-w-[90%]">
            <h3 className="text-lg font-bold text-center mb-6">个人详情</h3>
            
            <div className="flex justify-center mb-6">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                <Image
                  src={avatarFile || userInfo.avatar}
                  alt="头像"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm">
                <span className="text-gray-500">昵称：</span>
                <span className="text-gray-800">{userInfo.nickname}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">已有宠物：</span>
                <span className="text-gray-800">{userInfo.petName}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">宠物性别：</span>
                <span className="text-gray-800">{userInfo.petGender || '-'}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">宠物生日：</span>
                <span className="text-gray-800">{userInfo.petBirthday || '-'}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">驱虫记录：</span>
                <span className="text-gray-800">{userInfo.dewormingRecord || '-'}</span>
              </div>
              <div className="text-sm">
                <span className="text-gray-500">疫苗记录：</span>
                <span className="text-gray-800">{userInfo.vaccineRecord || '-'}</span>
              </div>
            </div>
            
            <button
              onClick={() => setShowInfoModal(false)}
              className="w-full mt-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
