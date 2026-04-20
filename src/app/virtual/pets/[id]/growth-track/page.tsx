export const runtime = 'edge';

import { notFound } from 'next/navigation';
// ... 其他原有 import

// 删除 generateStaticParams 函数
// 删除 dynamicParams 和 dynamic 配置

export default async function GrowthTrackPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // 动态获取数据
  const pet = await getPetById(id);
  
  if (!pet) {
    notFound();
  }
  
  return (
    // 原有的 JSX
  );
}
