'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function VirtualChoosePage() {
  const router = useRouter();

  useEffect(() => {
    // 监听来自iframe的消息
    const handleMessage = (event: MessageEvent) => {
      // 安全检查：确保消息来自正确的来源
      if (event.data && event.data.type === 'selectPet') {
        const pet = event.data.pet;
        // 根据选择的宠物跳转到对应的详情页
        const petMap: Record<string, number> = {
          'shiba': 1,    // 柴犬
          'border': 2,   // 边牧
          'maltese': 3,  // 马尔泰犬
          'american': 4, // 美短虎斑
          'british': 5,  // 英短蓝猫
          'siamese': 6   // 暹罗猫
        };

        const petId = petMap[pet];
        if (petId) {
          router.push(`/virtual/pets/${petId}`);
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Main Content - 原始HTML界面 */}
      <div className="flex-1">
        <iframe
          src="/choose-pet.html"
          className="w-full h-[calc(100vh-64px)] border-0"
          title="选择宠物"
        />
      </div>

      <Footer />
    </div>
  );
}
