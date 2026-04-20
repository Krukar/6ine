import { useEffect, useState } from 'react';

import Form from './Form';

export default function SkyDome() {
    const [show, set_show] = useState<boolean>(true);

    useEffect(() => {
        const access = JSON.parse(localStorage.getItem('access') ?? 'false');

        if (access) {
            set_show(false);
        }
    }, []);

    if (!show) return null;

    const handle_hide = () => {
        localStorage.setItem('access', JSON.stringify(true));

        set_show(false);
    };

    return (
        <div className="fixed inset-0 z-50 bg-light">
            <div className="h-full flex justify-center items-center">
                <div className="gutter space-y-8">
                    <img
                        alt="A picture of the Skydome on opening day June 3, 1989"
                        className="max-w-180 mx-auto"
                        src="/img/skydome.jpg"
                    />

                    <Form handle_hide={handle_hide} />
                </div>
            </div>
        </div>
    );
}
