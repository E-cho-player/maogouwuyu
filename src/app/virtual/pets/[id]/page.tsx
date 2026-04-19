import PetClient from './PetClient';
export const dynamicParams = false;
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

export default function VirtualPetDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <PetClient params={params} />;
}
