import { lazy, Suspense } from 'react';

const LazyPlayer = lazy(() => import('./VideoJS.tsx'));

export default function Player(props: React.ComponentProps<typeof LazyPlayer>) {
    return (
        <Suspense fallback={null}>
            <LazyPlayer {...props} />
        </Suspense>
    );
}
