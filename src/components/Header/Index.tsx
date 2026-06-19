import { Link } from '@tanstack/react-router';

import Banner from './Banner';
import Actions from './Actions';

export default function Component() {
    return (
        <div className="bg-dark">
            <Banner />

            <header className="bg-primary text-light shadow-lg">
                <div className="flex justify-between items-center py-6">
                    <div className="flex-1 flex translate-y-5">
                        <Link className="header__icon" to="/channel">
                            <img
                                alt="Drake's head"
                                className="h-lue w-lue"
                                src="/img/drake.png"
                            />
                        </Link>
                    </div>

                    <div>
                        <div className="translate-y-3">
                            <Link
                                className="heading text-xl lg:text-4xl tracking-widest link--dark"
                                to="/"
                            >
                                6INE
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-end">
                        <Actions />
                    </div>
                </div>
            </header>

            <div className="divider divider--right-up bg-primary" />
        </div>
    );
}
