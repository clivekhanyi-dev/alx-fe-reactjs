import create from 'zustand';

const recipeStore = create((set) => ({
  recipes: [],
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export default recipeStore;
