export const runtime = 'edge';

import PetClient from './PetClient';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return <PetClient params={params} />;
}
