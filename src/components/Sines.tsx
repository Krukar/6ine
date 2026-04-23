import { Link } from '@tanstack/react-router';

import type { Sine } from '@/types/global';

export default function Videos({ items }: { items: Sine[] }) {
    return (
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
}
