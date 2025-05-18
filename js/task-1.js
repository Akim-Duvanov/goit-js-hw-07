const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
for (const elem of categories) {
    console.log(`Category: ${elem.querySelector("h2").textContent}`);
    console.log(`Elements: ${elem.querySelectorAll("li").length}`);
}