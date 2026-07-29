start()

function start() {
    fetch('http://localhost:3030/jsonstore/cookbook/recipes')
        .then(res => res.json())
        .then(showRecipes);
}

function showRecipes(data) {
    const main = document.querySelector('main');

    const recipes = Object.values(data);
    
    main.replaceChildren(...recipes.map(createPreview));
}

function createPreview(recipe) {
    const result = document.createElement('article');
    result.className = "preview";

    const div1 = document.createElement('div');
    div1.className = "title";
    const h2 = document.createElement('h2');
    h2.textContent = recipe.name;
    div1.appendChild(h2);

    const div2 = document.createElement('div');
    div2.className = "small";
    const img = document.createElement('img');
    img.src = recipe.img;
    div2.appendChild(img);

    result.appendChild(div1);
    result.appendChild(div2);

    return result;
}