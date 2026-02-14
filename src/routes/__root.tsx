import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import './__root.css';
import type { Category } from '../data/recipes';

interface RouterContext {
    recipes: Category[];
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: () => {
        return (
            <>
                <main id="page">
                    <Outlet />
                </main>
                <TanStackRouterDevtools />
            </>
        );
    },
});
