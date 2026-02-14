import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/recipes/$recipeName')({
    loader: ({ params, context }) => {
        let recipe;
        let categoryName = '';

        for (const category of context.recipes) {
            const found = category.recipes.find((r) => r.slug === params.recipeName);
            if (found) {
                recipe = found;
                categoryName = category.name;
                break;
            }
        }

        if (!recipe) throw new Error(`Recipe "${params.recipeName}" not found`);

        const allRecipes = context.recipes.flatMap((c) => c.recipes);
        const currentIndex = allRecipes.findIndex((r) => r.slug === params.recipeName);

        const nextRecipe =
            currentIndex < allRecipes.length - 1 ? allRecipes[currentIndex + 1] : null;
        const previousRecipe = currentIndex > 0 ? allRecipes[currentIndex - 1] : null;

        return { recipe, categoryName, nextRecipe, previousRecipe };
    },
    component: Recipe,
});

export default function Recipe() {
    const { recipe, categoryName, nextRecipe, previousRecipe } = Route.useLoaderData();

    return (
        <>
            <h1>{recipe.name}</h1>
            <p>Category: {categoryName}</p>
            <p>Time: {recipe.time}</p>

            <nav>
                {previousRecipe && (
                    <Link to="/recipes/$recipeName" params={{ recipeName: previousRecipe.slug }}>
                        Previous: {previousRecipe.name}
                    </Link>
                )}

                <Link to="/">Back to home</Link>
                {nextRecipe && (
                    <Link to="/recipes/$recipeName" params={{ recipeName: nextRecipe.slug }}>
                        Next: {nextRecipe.name}
                    </Link>
                )}
            </nav>
        </>
    );
}
