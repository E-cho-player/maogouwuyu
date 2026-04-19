import GrowthTrackClient from './GrowthTrackClient';

export const dynamic = 'force-static';

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
  return <GrowthTrackClient params={params} />;
}
