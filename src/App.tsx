import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { mockRecipeData } from './data/recipes';

const router = createRouter({ routeTree, context: { recipes: mockRecipeData } });

export default function App() {
    return <RouterProvider router={router} />;
}
