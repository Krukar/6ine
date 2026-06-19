import Districts from '@/data/districts.json';

export default function Form({
    handle_submit,
    is_loading,
}: {
    handle_submit: React.FormEventHandler<HTMLFormElement>;
    is_loading: boolean;
}) {
    return (
        <form className="form" onSubmit={handle_submit}>
            <fieldset className="fieldset">
                <label className="label" htmlFor="title">
                    What is your 6ine called?
                    <input
                        aria-required="true"
                        className="input"
                        id="title"
                        name="title"
                        placeholder="Underground Kings"
                        required={true}
                    />
                </label>

                <label className="label" htmlFor="file">
                    Please select a video file
                    <input
                        accept="video/*"
                        aria-required="true"
                        className="border-b-2 border-neutral"
                        id="file"
                        name="file"
                        required={true}
                        type="file"
                    />
                </label>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="legend">Please select your hood</legend>

                <div className="grid grid-cols-2 lg:grid-cols-6">
                    {Districts.map(({ key, value }) => (
                        <label className="radio" htmlFor={key} key={key}>
                            <span>{value}</span>

                            <input
                                defaultChecked={key === 'old_toronto'}
                                id={key}
                                type="radio"
                                name="district"
                                required
                                value={value}
                            />
                        </label>
                    ))}
                </div>
            </fieldset>

            <fieldset className="fieldset">
                <legend className="legend">Tag your 6ine</legend>

                <div className="grid grid-cols-2 lg:grid-cols-6">
                    {['art', 'events', 'politics', 'random'].map((e) => (
                        <label className="checkbox" htmlFor={e} key={e}>
                            <span>{e}</span>

                            <input
                                id={e}
                                type="checkbox"
                                name="tags"
                                value={e}
                            />
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="mt-8">
                <button
                    className="button--primary"
                    disabled={is_loading}
                    type="submit"
                >
                    Upload
                </button>
            </div>
        </form>
    );
}
