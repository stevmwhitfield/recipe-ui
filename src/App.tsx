import './App.css';
import { mockRecipeData } from './data/recipes';

function App() {
    return (
        <main id="page">
            <h1>Recipes</h1>
            {mockRecipeData.map((c) => (
                <div key={c.name} className="category">
                    <h2>{c.name}</h2>
                    {c.recipes.map((r) => (
                        <div key={r.name} className="recipe">
                            <a href={r.slug} className="name">
                                {r.name}
                            </a>
                            <span className="time">{r.time}</span>
                        </div>
                    ))}
                </div>
            ))}
        </main>
    );
}

export default App;
