import { useEffect, useState } from 'react';

import Form from './Form';

import { verify_code } from '@/actions/verify_code';

const Wrapper = ({ handle_hide }: { handle_hide: Function }) => {
    const [error, set_error] = useState<string | null>(null);
    const [is_loading, set_is_loading] = useState<boolean>(false);

    const handle_submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            set_is_loading(true);

            const data = new FormData(e.currentTarget);

            const { success } = await verify_code({ data });

            set_is_loading(false);

            if (!success) {
                set_error("Wrong. You're not from Toronto.");

                return;
            }

            handle_hide();
        } catch (err) {
            if (import.meta.env.DEV) console.log(err);

            if (err instanceof Error) {
                set_error(err.message);
            }

            set_is_loading(false);
        }
    };

    let error_class_name = 'error';

    error_class_name += error ? ' opacity-100' : ' opacity-0';

    return (
        <div className="space-y-6">
            <Form handle_submit={handle_submit} is_loading={is_loading} />

            <div className={error_class_name}>
                <div>{error}</div>
            </div>
        </div>
    );
};

export default function Component() {
    const [show_gate, set_show_gate] = useState<boolean>(false); // By default hide the gate to not annoy people

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
                <div className="gutter">
                    <div className="mb-8 lg:mb-9">
                        <img
                            alt="A picture of a building in Toronto, Canada"
                            className="max-w-180 mx-auto"
                            src="/img/building.jpg"
                        />
                    </div>

                    <Wrapper handle_hide={handle_hide} />
                </div>
            </div>
        </div>
    );
}
