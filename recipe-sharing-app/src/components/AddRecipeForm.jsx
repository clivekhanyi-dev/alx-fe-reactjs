import { useState } from 'react';
import recipeStore from './recipeStore';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const recipes = recipeStore((state) => state.recipes);
  const setRecipes = recipeStore((state) => state.setRecipes);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newRecipe = { id: Date.now(), title };
    setRecipes([...recipes, newRecipe]);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddRecipeForm;
