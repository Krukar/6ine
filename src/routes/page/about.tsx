import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/page/about')({
    component: About,
});

function About() {
    return (
        <section>
            <h1>About</h1>

            <p>Vine but for Toronto.</p>
        </section>
    );
}
