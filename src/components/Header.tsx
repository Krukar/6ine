import { Link } from '@tanstack/react-router';

// import { useAuth0Context } from '@/auth/auth0';

export default function Header() {
    // const auth = useAuth0Context();

    // TODO: If logged in then show home or create button!@!!

    return (
        <header className="bg-primary text-light">
            <section className="flex justify-between items-center py-5">
                <div>
                    <Link className="drake" to="/">
                        <img
                            alt="Drake's head"
                            className="h-9 w-9"
                            src="/img/drake.png"
                        />
                    </Link>
                </div>

                <div>
                    <Link className="button--light" to="/">
                        Login
                    </Link>
                </div>
            </section>
        </header>
    );
}
