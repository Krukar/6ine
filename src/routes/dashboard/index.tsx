import { createFileRoute } from '@tanstack/react-router';

import { useAuth0Context } from '@/auth/auth0';

export const Route = createFileRoute('/dashboard/')({
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

function RouteComponent() {
    // const { logout } = useAuth0Context();

    return (
        <div>
            <section>
                <div>
                    <div className="title">Welcome Insert Name Here</div>

                    <div>foobar</div>
                </div>
            </section>

            <section>update user info form</section>

            <section>delete & logout</section>
            {/* <div className="bg-red-500 mt-20">
                <button onClick={() => logout()}>Logout</button>
            </div> */}
        </div>
    );
}
