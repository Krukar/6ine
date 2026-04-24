import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/create/')({
    beforeLoad: ({ context }) => {
        /*========== 
            If the auth is loading then return and wait for the next cycle
        ==========*/
        if (!context.auth || context.auth.isLoading) return;

        /*========== 
            If they are not logged in send them to the login page
        ==========*/
        if (!context.auth?.isAuthenticated) {
            context.auth.login();

            return;
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/create/"!</div>;
}
