import recipeStore from './recipeStore';

function RecipeList() {
  const recipes = recipeStore((state) => state.recipes);

  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  );
}

export default RecipeList;
