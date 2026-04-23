import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/player/$videoId')({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/player/$videoId"!</div>;
}
