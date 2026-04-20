import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
    return (
        <div>
            <section>
                <div className="py-8">
                    <h1>6ine</h1>
                </div>
            </section>
        </div>
    );
}
