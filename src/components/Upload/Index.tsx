import { useState } from 'react';

import Form from './Form';

import { process_video } from '#/actions/process_video';

export default function Component() {
    const [error, set_error] = useState<string | null>(null);
    const [is_loading, set_is_loading] = useState<boolean>(false);

    const handle_submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            set_is_loading(true);

            set_error(null);

            const data = new FormData(e.currentTarget);

            const res = await process_video({ data });

            console.log('res', res);

            set_is_loading(false);

            // if (res.id) {
            //     // redirect to video/id
            //     console.log('handle success');

            //     return;
            // }

            // set_error('Something went wrong. Please Try again.');
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
        <div>
            <Form handle_submit={handle_submit} is_loading={is_loading} />

            <div className={error_class_name}>{error}</div>
        </div>
    );
}
