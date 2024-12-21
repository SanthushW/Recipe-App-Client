import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Adds custom matchers
import RecipeDetails from '../components/RecipeDetails'; // Adjust the import path as needed

describe('RecipeDetails Component', () => {
  const mockRecipe = {
    title: 'Spaghetti Carbonara',
    ingredients: [
      { name: 'Spaghetti', measurement: '200g' },
      { name: 'Bacon', measurement: '100g' },
      { name: 'Eggs', measurement: '2' },
      { name: 'Parmesan Cheese', measurement: '50g' },
    ],
    steps: [
      'Cook the spaghetti according to package instructions.',
      'Fry the bacon until crispy.',
      'Whisk eggs and cheese together.',
      'Combine everything and serve.',
    ],
  };

  it('displays the recipe title', () => {
    render(<RecipeDetails recipe={mockRecipe} />);
    expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
  });

  it('displays all ingredients with measurements', () => {
    render(<RecipeDetails recipe={mockRecipe} />);
    mockRecipe.ingredients.forEach((ingredient) => {
      expect(
        screen.getByText(`${ingredient.name} - ${ingredient.measurement}`)
      ).toBeInTheDocument();
    });
  });

  it('displays steps in sequential order', () => {
    render(<RecipeDetails recipe={mockRecipe} />);
    mockRecipe.steps.forEach((step, index) => {
      const stepElement = screen.getByText(`${index + 1}. ${step}`);
      expect(stepElement).toBeInTheDocument();
    });
  });
});
