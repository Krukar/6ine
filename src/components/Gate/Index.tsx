import { useEffect, useState } from 'react';

import Form from './Form';

export default function Gate() {
    const [show_gate, set_show_gate] = useState<boolean>(false);

    useEffect(() => {
        const hide_gate = JSON.parse(
            localStorage.getItem('hide_gate') ?? 'false',
        );

        // if hide_gate === true then they already answered correctly and you should hide it
        if (hide_gate) return;

        // if hide gate !== true then they haven't answered and you should show it
        set_show_gate(true);
    }, []);

    if (!show_gate) return null;

    const handle_hide = () => {
        localStorage.setItem('hide_gate', JSON.stringify(true));

        set_show_gate(false);
    };

    return (
        <div className="fixed inset-0 z-50 bg-light">
            <div className="h-full flex justify-center items-center">
                <div className="gutter space-y-8">
                    <img
                        alt="A picture of a building in Toronto, Canada"
                        className="max-w-180 mx-auto"
                        src="/img/building.jpg"
                    />

                    <Form handle_hide={handle_hide} />
                </div>
            </div>
        </div>
    );
}
