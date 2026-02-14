import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/recipes/$recipeName')({
    loader: ({ params, context }) => {
        const entry = context.recipeMap.get(params.recipeName);
        const category = entry?.categoryName ?? '';

        const recipe = entry?.recipe;
        if (!recipe) throw new Error(`Recipe "${params.recipeName}" not found.`);

        const allRecipes = context.recipes.flatMap((c) => c.recipes);
        const currentIndex = allRecipes.findIndex((r) => r.slug === params.recipeName);

        const nextRecipe =
            currentIndex < allRecipes.length - 1 ? allRecipes[currentIndex + 1] : null;
        const previousRecipe = currentIndex > 0 ? allRecipes[currentIndex - 1] : null;

        return { recipe, category, nextRecipe, previousRecipe };
    },
    component: Recipe,
});

export default function Recipe() {
    const { recipe, category, nextRecipe, previousRecipe } = Route.useLoaderData();

    return (
        <>
            <h1>{recipe.name}</h1>
            <p>Category: {category}</p>
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
