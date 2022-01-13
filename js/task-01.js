const allCategoriesEl = document.querySelectorAll(".item");
const numberOfCategories = allCategoriesEl.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoryEl = allCategoriesEl.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);

    const allElementsEl = category.lastElementChild;
    const elementsQuantityEl = allElementsEl.querySelectorAll("li");
    console.log(`Elements: ${elementsQuantityEl.length}`);
});