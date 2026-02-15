import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load recipes when component mounts
  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Recipe Sharing Platform 🍲
      </h1>

      {/* Recipe Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-2xl shadow-md overflow-hidden 
                       hover:shadow-xl hover:scale-105 transition duration-300"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Recipe Info */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {recipe.summary}
              </p>

              <p className="mt-3 text-blue-500 font-medium">
                View Recipe →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
