import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/player/$videoId')({
    component: RouteComponent,
});

import Player from '@/components/Player/Index';

import ThumbsDown from '@/svgs/ThumbsDown';
import ThumbsUp from '@/svgs/ThumbsUp';

function RouteComponent() {
    // const { videoId } = Route.useParams();

    return (
        <section>
            <h1>Underground King</h1>

            <div className="mb-8 md:mb-9">
                <Player id="qzaqNSCB7R7q" />
            </div>

            <div>
                <div className="flex justify-center space-x-8">
                    <div>
                        <button className="h-8 link--primary cursor-pointer">
                            <ThumbsDown />
                        </button>
                    </div>

                    <div>
                        <button className="h-8 link--primary cursor-pointer">
                            <ThumbsUp />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
