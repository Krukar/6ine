import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

import Sines from '#/components/Sines';

import data from '@/data/sines.json';

function App() {
    return (
        <div>
            <section>
                <div className="py-9 text-center">
                    <h1>Runnin Through The 6ine</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-7 md:gap-9 max-w-7xl mx-auto">
                    <div>
                        <h2 className="mb-5">Staff Picks</h2>

                        <Sines items={data.slice(0, 4)} />
                    </div>

                    <div>
                        <h2 className="mb-5">Recently Added</h2>

                        <Sines items={data.slice(4, 8)} />
                    </div>

                    <div>
                        <h2 className="mb-5">Top Viewed Today</h2>

                        <Sines items={data.slice(8, 12)} />
                    </div>

                    <div>
                        <h2 className="mb-5">Top Viewed All Time</h2>

                        <Sines items={data.slice(12, 16)} />
                    </div>
                </div>
            </section>
        </div>
    );
}
