import { Link } from '@tanstack/react-router';

export default function Footer() {
    return (
        <footer className="bg-primary text-light">
            <section className="flex justify-between py-7 text-sm">
                <div>
                    <ul className="flex space-x-8">
                        {[
                            {
                                to: '/page/about',
                                text: 'About',
                            },
                            {
                                to: '/page/terms',
                                text: 'Terms & Conditions',
                            },
                            {
                                to: '/page/privacy',
                                text: 'Privacy Policy',
                            },
                        ].map(({ to, text }) => (
                            <li key={to}>
                                <Link className="link--opacity" to={to}>
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex space-x-5">
                    <div>Fuck AI</div>

                    <div className="text-neutral">|</div>

                    <div>
                        <a
                            className="link--opacity"
                            href="mailto:help@6ix.video"
                        >
                            contact@6ix.video
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
}
