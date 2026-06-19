import { createPlayer } from '@videojs/react';
import { MinimalVideoSkin, Video, videoFeatures } from '@videojs/react/video';

const Player = createPlayer({ features: videoFeatures });

interface PlayerProps {
    id: string;
}

export default function Component({ id }: PlayerProps) {
    const src = `${import.meta.env.VITE_CDN_URL}/videos/${id}.mp4`;

    return (
        <Player.Provider>
            <MinimalVideoSkin>
                <Video src={src} loop playsInline autoPlay muted />
            </MinimalVideoSkin>
        </Player.Provider>
    );
}
