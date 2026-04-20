export const runtime = 'edge';

import GrowthTrackClient from './GrowthTrackClient';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    return <GrowthTrackClient params={params} />;
}
