import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const recipes = useRecipeStore((state) => state.recipes);
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newRecipe = { id: Date.now(), title };
    setRecipes([...recipes, newRecipe]);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter recipe"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddRecipeForm;
