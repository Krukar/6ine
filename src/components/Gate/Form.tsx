import { useState, type ChangeEvent } from 'react';

import { useServerFn } from '@tanstack/react-start';
import { verify_code } from '#/utils/gate.functions';

export default function Gate({ handle_hide }: { handle_hide: Function }) {
    const [attempt, set_attempt] = useState<string>('');

    const submit = useServerFn(verify_code);

    const handle_submit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            const res = await submit({ data: { attempt } });

            // TODO: Handle error
            if (res.success) {
                handle_hide();
            }
        } catch (err) {
            console.log('err', err);
        }
    };

    return (
        <form onSubmit={handle_submit}>
            <fieldset className="fieldset">
                <label className="label" htmlFor="code">
                    What's this building called?
                    <input
                        aria-required="true"
                        className="input"
                        id="code"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            set_attempt(e.target.value)
                        }
                        placeholder="The name of the building"
                        required={true}
                        value={attempt}
                    />
                </label>
            </fieldset>

            <button className="button" type="submit">
                Unlock
            </button>
        </form>
    );
}
