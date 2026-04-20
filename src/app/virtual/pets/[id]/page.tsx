export const runtime = 'edge';

import { notFound } from 'next/navigation';
// ... 其他原有 import

// 删除 generateStaticParams 函数
// 删除 dynamicParams 和 dynamic 配置

// 页面组件保持不变
export default async function PetPage({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // 根据 id 动态获取宠物数据
  const pet = await getPetById(id); // 假设你有这个函数
  
  if (!pet) {
    notFound();
  }
  
  return (
    // 原有的 JSX
  );
}
