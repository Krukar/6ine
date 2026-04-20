import { Link } from '@tanstack/react-router';

export default function Header() {
    return (
        <header className="bg-primary text-light">
            <section className="py-5 text-sm">
                <Link className="font-spartan text-3xl link--opacity" to="/">
                    Home
                </Link>
            </section>
        </header>
    );
}
