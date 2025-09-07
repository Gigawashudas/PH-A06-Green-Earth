const categoryBtn = document.getElementById("category-buttons");

const loadCategory = () => {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
        .then(res => res.json())
        .then(data => {

            category(data.categories)
        })
}

const category = categories => {
    categories.forEach(category => {
        const li = document.createElement("li");
        li.innerHTML = `<button id="all-trees" class="text-left">${category.category_name}</button>`;
        categoryBtn.appendChild(li);
    });
}

loadCategory();