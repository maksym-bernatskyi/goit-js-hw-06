const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredientsList = document.querySelector('#ingredients');

const ingredientsItem = ingredients.map(ingredient => {
  const ingredientsElement = document.createElement('li');
  ingredientsElement.classList.add('ingredients__item');
  ingredientsElement.textContent = ingredient;
  
  return ingredientsElement;
});

allIngredientsList.append(...ingredientsItem);

console.log(allIngredientsList);