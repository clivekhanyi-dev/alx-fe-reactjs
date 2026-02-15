import { useState } from "react";
import { Link } from "react-router-dom";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!title) newErrors.title = "Title is required";
    if (!ingredients) newErrors.ingredients = "Ingredients are required";
    if (!steps) newErrors.steps = "Preparation steps are required";

    if (ingredients && ingredients.split(",").length < 2) {
      newErrors.ingredients = "Enter at least 2 ingredients";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Recipe submitted! (Mock)");
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <div className="max-w-2xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow">

        <Link to="/" className="text-blue-500 underline">
          ← Back to Home
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-6 mt-2">
          Add New Recipe 🍲
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
        >

          {/* Title */}
          <div>
            <label className="block font-semibold mb-1">
              Recipe Title
            </label>
            <input
              type="text"
              className="w-full border rounded-lg p-2 md:p-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-semibold mb-1">
              Ingredients
            </label>
            <textarea
              className="w-full border rounded-lg p-2 md:p-3"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            {errors.ingredients && (
              <p className="text-red-500 text-sm">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label className="block font-semibold mb-1">
              Preparation Steps
            </label>
            <textarea
              className="w-full border rounded-lg p-2 md:p-3"
              rows="4"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />
            {errors.steps && (
              <p className="text-red-500 text-sm">{errors.steps}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 md:py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
