import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/page/about')({
    component: About,
});

function About() {
    return (
        <div>
            <section className="py-9">
                <div>
                    <h1>About</h1>

                    <p>Toronto vine</p>
                </div>
            </section>
        </div>
    );
}
