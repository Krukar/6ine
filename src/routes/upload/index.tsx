import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/upload/')({
    beforeLoad: ({ context }) => {
        /*========== 
            If the auth is loading then return and wait for the next cycle
        ==========*/
        if (!context.auth || context.auth.isLoading) return;

        /*========== 
            If they are not logged in send them to the login page
        ==========*/
        if (!context.auth.isAuthenticated) {
            context.auth.login();

            return;
        }
    },
    component: RouteComponent,
});

import Form from '@/components/Upload/Index';

function RouteComponent() {
    return (
        <section>
            <h1>Create Your 6ine</h1>

            <div>
                <Form />
            </div>
        </section>
    );
}
