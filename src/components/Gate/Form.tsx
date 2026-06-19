export default function Form({
    handle_submit,
    is_loading,
}: {
    handle_submit: React.FormEventHandler<HTMLFormElement>;
    is_loading: boolean;
}) {
    return (
        <form onSubmit={handle_submit}>
            <fieldset className="fieldset">
                <label className="label" htmlFor="code">
                    What's this building called?
                    <input
                        aria-required="true"
                        autoFocus
                        className="input"
                        id="code"
                        maxLength={32}
                        name="attempt"
                        placeholder="The name of the building"
                        required={true}
                    />
                </label>
            </fieldset>

            <button
                className="button--primary"
                disabled={is_loading}
                type="submit"
            >
                Unlock
            </button>
        </form>
    );
}
