import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export function getRouter() {
    const router = createTanStackRouter({
        routeTree,
        scrollRestoration: true,
        defaultPreload: 'intent',
        context: {
            auth: undefined,
        },
    });

    if (typeof window !== 'undefined') {
        router.subscribe('onResolved', ({ pathChanged }) => {
            if (pathChanged) {
                (document.activeElement as HTMLElement)?.blur();
            }
        });
    }

    return router;
}

declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}
