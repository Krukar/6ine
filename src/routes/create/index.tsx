import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/create/')({
    beforeLoad: ({ context, location }) => {
        console.log('context', context);
        // if (!context.auth.isAuthenticated) {
        //     // Auth0 handles login redirects, so just trigger login
        //     context.auth.login();
        //     return;
        // }
    },
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/create/"!</div>;
}
