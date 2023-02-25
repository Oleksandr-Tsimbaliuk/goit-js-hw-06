// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>)
//  и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// 1--------------------------
// const categories = document.querySelectorAll(".item")
// console.log(`Number of categories: ${categories.length}`);

// categories.forEach((category) => {
//     // console.log(category);

//     const categoryHeader = category.querySelector("h2")
//     const liElement = category.querySelectorAll("li")

//     console.log(`Category: ${categoryHeader.textContent}`);
//     console.log(`Element: ${liElement.length}`);
// })


// 2------------------------
categories.forEach(category =>{
    // console.log(category);
    const categoryHeader = category.firstElementChild.textContent;
    const liElement = category.querySelector("ul").children.length;

    console.log(`Category: ${categoryHeader}`);
    console.log(category.querySelector("ul").children.length);
    
})



// 3---------------------------
// categories.forEach(element => {
//     const titleEl = element.firstElementChild;
//     const innerLiEl = element.lastElementChild.children;

//     console.log(`Category: ${titleEl.textContent}`);
//     console.log(`Elements: ${innerLiEl.length}`);
//   });



// -----------------------
// categories.forEach(category =>{
//     // console.log(category);
//     category.firstElementChild.textContent;
//     category.querySelector("ul").children.length;

//     console.log(category.firstElementChild.textContent);
//     console.log(category.querySelector("ul").children.length);
    
// })
// const categories = document.querySelectorAll('.item');
// console.log(`Namber of categories: ${categories.length}`);

// // categories.forEach(category =>{
// //     // console.log(category);
// //     const categoryHeader=category.querySelector("h2");
// //     const liEl= category.querySelectorAll('li');
// //     console.log(`Category: ${categoryHeader.textContent}`);
// //     console.log(`Elements: ${liEl.length}`);
// // })
 



// categories.forEach(category =>{
   
//     const categoryHeader = category.firstElementChild.textContent;
//     const liEl = category.querySelector("ul").children.length;

//     console.log(`Category: ${categoryHeader}`);
//     console.log(`Elements: ${liEl}`);
    
// })


// categories.forEach(element => {
//     const titleEl = element.firstElementChild;
//     const innerLiEl = element.lastElementChild.children;
//     console.log(`Category: ${titleEl.textContent}`);
//     console.log(`Elements: ${innerLiEl.length}`);
//   });