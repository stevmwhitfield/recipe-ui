import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { mockRecipeData } from './data/recipes';

const recipeMap = new Map();
mockRecipeData.forEach((category) => {
    category.recipes.forEach((recipe) => {
        recipeMap.set(recipe.slug, { recipe, categoryName: category.name });
    });
});

const router = createRouter({ routeTree, context: { recipes: mockRecipeData, recipeMap } });

export default function App() {
    return <RouterProvider router={router} />;
}
