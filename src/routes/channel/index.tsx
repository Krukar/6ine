import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/channel/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <section>
            <h1>Coming Soon</h1>
        </section>
    );
}
