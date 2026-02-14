interface Recipe {
    name: string;
    time: string;
    slug: string;
}

interface Category {
    name: string;
    recipes: Recipe[];
}

export const mockRecipeData: Category[] = [
    {
        name: 'breakfast',
        recipes: [
            { name: 'denver omelet', time: '15 min.', slug: '#denver-omelet' },
            { name: 'chia seed pudding', time: '10 min.', slug: '#chia-seed-pudding' },
            { name: 'waffles', time: '20 min.', slug: '#waffles' },
        ],
    },
    {
        name: 'lunch',
        recipes: [{ name: 'chicken caesar salad', time: '30 min.', slug: '#chicken-caesar-salad' }],
    },
    {
        name: 'dinner',
        recipes: [{ name: 'taco rice', time: '40 min.', slug: '#taco-rice' }],
    },
    {
        name: 'dessert',
        recipes: [{ name: 'lemon bars', time: '65 min.', slug: '#lemon-bars' }],
    },
    {
        name: 'drinks',
        recipes: [
            { name: 'strawberry agua fresca', time: '10 min.', slug: '#strawberry-agua-fresca' },
        ],
    },
];
