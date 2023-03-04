const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);

categories.forEach(el => {
    const elTitle = el.firstElementChild
    const elLiList = el.lastElementChild.children
    
    console.log(`Category: ${elTitle.textContent}`);
    console.log(`Elements: ${elLiList.length}`);
});



