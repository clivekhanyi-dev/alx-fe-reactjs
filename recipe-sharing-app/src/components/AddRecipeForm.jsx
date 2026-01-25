import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    addRecipe({ id: Date.now(), title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter recipe"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddRecipeForm;
