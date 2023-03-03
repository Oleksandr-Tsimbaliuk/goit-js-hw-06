const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);

categories.forEach(el => {
    const elTitle = el.firstElementChild
    const elLiList = el.lastElementChild.children
    
    console.log(`Category: ${elTitle.textContent}`);
    console.log(`Elements: ${elLiList.length}`);
});



// 2.
// const categories = document.querySelectorAll(".item")
// console.log(`Number of categories: ${categories.length}`);

// categories.forEach((category) => {
//     // console.log(category);

//     const categoryHeader = category.querySelector("h2")
//     const liElement = category.querySelectorAll("li")

//     console.log(`Category: ${categoryHeader.textContent}`);
//     console.log(`Element: ${liElement.length}`);
// })


