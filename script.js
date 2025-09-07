const categoryBtn = document.getElementById("category-buttons");
const cardContainer = document.getElementById("cards");
const allTreesBtn = document.getElementById("all-trees");

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
        li.innerHTML = `<button id="all-trees" class="category-btn text-left px-1.5 py-1 cursor-pointer">${category.category_name}</button>`;
        categoryBtn.appendChild(li);

        document.querySelectorAll(".category-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                // console.log(e);
                loadTreesWithCategoryId(category.id)
            })
        })
    });
}

const loadTreesWithCategoryId = categoryId => {
    const url = `https://openapi.programming-hero.com/api/category/${categoryId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showTrees(data.plants)
        });
}

const loadTrees = () => {
    const url = `https://openapi.programming-hero.com/api/plants`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showTrees(data.plants);
        });
}

allTreesBtn.addEventListener("click", () => {
    loadTrees();
})

const showTrees = plants => {
    cardContainer.innerHTML = "";

    if (!plants || plants.length === 0) {
        cardContainer.innerHTML = `<p class="col-span-3 text-center text-gray-500">No trees available in this category.</p>`;
        return;
    }

    plants.forEach(plant => {
        // console.log(plant);
        const card = document.createElement("div");
        card.classList.add("card", "flex", "flex-col", "gap-2", "bg-white", "p-2", "rounded");
        card.innerHTML = `<img class="w-full h-40 object-cover rounded"" src=${plant.image} alt="" />
              <div class="plant-description flex flex-col gap-2">
                <h4 class="text-[14px] font-semibold">${plant.name}</h4>
                <p class="text-[12px] min-h-23">${plant.description}</p>
                <div class="category-price flex justify-between items-center">
                  <p class="text-[14px] font-medium py-1 px-3 bg-[#dcfce7] rounded-2xl text-[#15803d]">${plant.category}</p>
                  <p>৳<span>${plant.price}</span></p>
                </div>
              </div>
              <button class="bg-[#15803d] text-white py-3 w-full rounded-3xl">Add To Cart</button>`;
        cardContainer.appendChild(card);
    })
}

loadTrees();
loadCategory();