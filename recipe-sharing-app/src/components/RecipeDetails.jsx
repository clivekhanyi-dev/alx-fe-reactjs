import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const FavoriteButton = ({ id }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(id);

  return (
    <button onClick={() => (isFavorite ? removeFavorite(id) : addFavorite(id))}>
      {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
};

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <FavoriteButton id={recipe.id} />
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
