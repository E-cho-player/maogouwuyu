import PetClient from './PetClient';

// 预生成静态路径
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function VirtualPetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <PetClient params={params} />;
}
