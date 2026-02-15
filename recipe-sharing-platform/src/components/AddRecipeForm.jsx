import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please enter at least two ingredients separated by commas.");
      return;
    }

    setError("");

    alert("Recipe submitted successfully! (Mock submission)");

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
        <Link to="/" className="text-blue-500 underline">
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-6 mt-2">
          Add New Recipe 🍲
        </h1>

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-semibold mb-1">
              Ingredients (comma separated)
            </label>
            <textarea
              className="w-full border rounded-lg p-2"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>

          {/* Steps */}
          <div>
            <label className="block font-semibold mb-1">
              Preparation Steps
            </label>
            <textarea
              className="w-full border rounded-lg p-2"
              rows="4"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
