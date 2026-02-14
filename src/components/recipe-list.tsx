import { Link } from '@tanstack/react-router';
import { type Category } from '../data/recipes';
import './recipe-list.css';

interface RecipeListProps {
    categories: Category[];
}

export default function RecipeList({ categories }: RecipeListProps) {
    return (
        <>
            <h1>Recipes</h1>
            {categories ? (
                categories.map((c) => (
                    <div key={c.name} className="category">
                        <h2>{c.name}</h2>
                        {c.recipes.map((r) => (
                            <div key={r.name} className="recipe">
                                <Link
                                    to="/recipes/$recipeName"
                                    params={{ recipeName: r.slug }}
                                    className="name"
                                >
                                    {r.name}
                                </Link>
                                <span className="time">{r.time}</span>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </>
    );
}
