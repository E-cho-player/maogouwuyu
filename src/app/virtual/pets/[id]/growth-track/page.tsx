import GrowthTrackClient from './GrowthTrackClient';

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

export default function GrowthTrackPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <GrowthTrackPageContent params={params} />;
}

async function GrowthTrackPageContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <GrowthTrackClient petId={id} />;
}
