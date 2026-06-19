import { Link } from '@tanstack/react-router';

import type { Sine } from '@/types/global';

import data from '@/data/sines.json';

const List = ({ items }: { items: Sine[] }) => (
    <ul className="divide-y divide-neutral">
        {items.map(({ id, title, user }) => (
            <li key={id} className="flex items-center space-x-5 py-5">
                <div>
                    <Link
                        className="link--opacity"
                        to="/profile/$userId"
                        params={{
                            userId: user.id,
                        }}
                    >
                        <img
                            alt={user.avatar.alt}
                            className="h-8 w-8 rounded-full shadow-md"
                            src={user.avatar.src}
                        />
                    </Link>
                </div>

                <div>
                    <Link
                        className="link--primary"
                        to="/player/$videoId"
                        params={{
                            videoId: id,
                        }}
                    >
                        <strong>{title}</strong>
                    </Link>
                </div>
            </li>
        ))}
    </ul>
);

export default function Component() {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-9">
            <div>
                <h2 className="mb-5 text-xl md:text-3xl">Old Toronto</h2>

                <List items={data.slice(0, 4)} />
            </div>

            <div>
                <h2 className="mb-5 text-xl md:text-3xl">Etobicoke</h2>

                <List items={data.slice(12, 16)} />
            </div>

            <div>
                <h2 className="mb-5 text-xl md:text-3xl">Scarborough</h2>

                <List items={data.slice(12, 16)} />
            </div>

            <div>
                <h2 className="mb-5 text-xl md:text-3xl">York</h2>

                <List items={data.slice(4, 8)} />
            </div>

            <div>
                <h2 className="mb-5 text-xl md:text-3xl">North York</h2>

                <List items={data.slice(8, 12)} />
            </div>

            <div>
                <h2 className="mb-5 text-xl md:text-3xl">East York</h2>

                <List items={data.slice(12, 16)} />
            </div>
        </div>
    );
}
