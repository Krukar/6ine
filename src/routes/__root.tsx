import {
    HeadContent,
    Scripts,
    createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanStackDevtools } from '@tanstack/react-devtools';

import { Auth0Wrapper } from '@/auth/auth0';
import type { Auth0ContextType } from '@/auth/auth0';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Gate from '@/components/Gate/Index';

import styles from '@/styles/index.css?url';

export const Route = createRootRouteWithContext<{
    auth: Auth0ContextType | undefined;
}>()({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: '6ine',
            },
            { name: 'description', content: 'Videos from the 6ix' },
        ],
        links: [
            {
                rel: 'stylesheet',
                href: styles,
            },
        ],
    }),
    shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <HeadContent />
            </head>

            <body>
                <Auth0Wrapper>
                    <Banner />

                    <Header />

                    <main>{children}</main>

                    <Footer />

                    <Gate />
                </Auth0Wrapper>

                <TanStackDevtools
                    config={{
                        position: 'bottom-right',
                    }}
                    plugins={[
                        {
                            name: 'Tanstack Router',
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />

                <Scripts />
            </body>
        </html>
    );
}
