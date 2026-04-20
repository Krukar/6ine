import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/page/privacy')({
    component: Privacy,
});

function Privacy() {
    return (
        <div>
            <section className="py-9">
                <div>
                    <h1>Privacy Policy</h1>

                    <p>Privacy policy goes here</p>
                </div>
            </section>
        </div>
    );
}
