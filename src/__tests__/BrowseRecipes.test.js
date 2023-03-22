import axios from 'axios';

// testing the api call to get recipes

jest.mock('axios');

describe('getRecipes api call', () => {
  test('it should fetch recipes from the API', async () => {
    const mockRecipes = [
      { id: 1, name: 'Recipe 1', ingredients: ['Ingredient 1', 'Ingredient 2'], instructions: 'instructions 1' },
      { id: 2, name: 'Recipe 2', ingredients: ['Ingredient 3', 'Ingredient 4'], instructions: 'instructions 2' },
      { id: 3, name: 'Recipe 3', ingredients: ['Ingredient 5', 'Ingredient 6'], instructions: 'instructions 3' },
      { id: 4, name: 'Recipe 4', ingredients: ['Ingredient 7', 'Ingredient 8'], instructions: 'instructions 4' },

    ];

    axios.get.mockResolvedValue({ data: mockRecipes });

    const result = await axios.get('http://localhost:3001/recipes');

    expect(result.data).toEqual(mockRecipes);
  });
});



