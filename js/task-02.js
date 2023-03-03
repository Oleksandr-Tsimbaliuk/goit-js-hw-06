const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const ingredientsList  = document.querySelector("#ingredients")
 
  ingredients.forEach(ingredient => {
 
  const elementLi = document.createElement("Li")
  elementLi.textContent = ingredient
  elementLi.classList.add("item")
  ingredientsList.append(elementLi)
});


// 2.
// const ingredientsList = document.querySelector("#ingredients")
// // console.log(ingredientsList);
// const arrayItems = []

// ingredients.forEach(ingredient => {
//   // console.log(ingredient);
//   const elementLi = document.createElement("li")
//   // console.log(elementLi);
//   elementLi.textContent = ingredient
//   elementLi.classList.add("item")

//   arrayItems.push(elementLi)
// })

// console.log(arrayItems);
// ingredientsList.append(...arrayItems)


// 3.
// const ingredientsList = document.querySelector('#ingredients');

// const items = ingredients.map(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('item');
//   listItem.textContent = ingredient;

//   return listItem;
// });
// console.log(items);

// ingredientsList.append(...items);


// 4.
// const ingredientsList = document.querySelector('#ingredients');

// const items = ingredients.map(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('item');
//   listItem.textContent = ingredient;

//   return listItem;
// });
// console.log(items);

// ingredientsList.append(...items);