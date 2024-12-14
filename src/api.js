import axios from 'axios';

const apiKey = '8c3117801a314e77a8bc302098c119f2';

export const fetchRecipes = async (query = 'chicken', number = 20) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}&number=${number}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};