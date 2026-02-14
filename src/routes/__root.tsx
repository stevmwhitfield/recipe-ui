import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import type { Category, Recipe } from '../data/recipes';
import './__root.css';

interface RouterContext {
    recipes: Category[];
    recipeMap: Map<string, { recipe: Recipe; categoryName: string }>;
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
    errorComponent: ({ error }) => {
        return (
            <>
                <main id="page">
                    <h1>Error</h1>
                    <p>{error.message}</p>
                    <Link to="/">View all recipes</Link>
                </main>
            </>
        );
    },
    notFoundComponent: () => {
        return (
            <>
                <h1>404 Not Found</h1>
                <Link to="/">Return to home</Link>
            </>
        );
    },
});
