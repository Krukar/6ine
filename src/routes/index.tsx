import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

import Player from '@/components/Player/Index';
import Sines from '@/components/Sines';

function App() {
    return (
        <div>
            <section>
                <div>
                    <div className="title">6ine Of The Day</div>

                    <div>
                        <Player id="qzaqNSCB7R7q" />
                    </div>
                </div>
            </section>

            <div>
                <div className="divider divider--left-down bg-dark" />

                <div className="bg-primary text-light">
                    <section>
                        <div className="title">Doug Ford Scandals</div>

                        <p className="text-center">Coming Soon</p>
                    </section>
                </div>

                <div className="divider divider--left-up bg-dark" />
            </div>

            <section>
                <div>
                    <div className="title">Runnin Through The 6</div>

                    <Sines />
                </div>
            </section>
        </div>
    );
}
