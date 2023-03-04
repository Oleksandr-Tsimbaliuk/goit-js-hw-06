const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const ingredientsList  = document.querySelector("#ingredients")
  const arrayItems = []

  ingredients.forEach(ingredient => {
  const elementLi = document.createElement("Li")
 
  elementLi.textContent = ingredient
  elementLi.classList.add("item")
  arrayItems.push(elementLi)
});
  ingredientsList.append(...arrayItems)


