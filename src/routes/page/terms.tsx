import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/page/terms')({
    component: Terms,
});

function Terms() {
    return (
        <div>
            <section className="py-9">
                <div>
                    <h1>Terms & Conditions</h1>

                    <p>Terms goes here</p>
                </div>
            </section>
        </div>
    );
}
