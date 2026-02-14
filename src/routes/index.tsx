import { createFileRoute } from '@tanstack/react-router';
import RecipeList from '../components/recipe-list';

export const Route = createFileRoute('/')({
    loader: ({ context }) => context.recipes,
    component: () => <RecipeList categories={Route.useLoaderData()} />,
});
