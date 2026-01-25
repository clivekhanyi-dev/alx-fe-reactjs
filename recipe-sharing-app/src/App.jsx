import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <AddRecipeForm />
      <RecipeList />

      <Routes>
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </div>
  );
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App;
