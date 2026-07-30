start()

async function start() {
    const res = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const data = await res.json();

    showRecipes(data);
}

function showRecipes(data) {
    const main = document.querySelector('main');

    const recipes = Object.values(data);
    
    main.replaceChildren(...recipes.map(createPreview));
}

function createPreview(recipe) {
    const result = createEl('article',null,'preview');
    
    const div1 = createEl('div',null,"title");
    const h2 = createEl('h2',recipe.name);
    div1.appendChild(h2);

    const div2 = createEl('div',null,"small");
    const img = createEl('img');
    img.src = recipe.img;
    div2.appendChild(img);

    result.appendChild(div1);
    result.appendChild(div2);

    result.addEventListener('click', async () => {
        const url = `http://localhost:3030/jsonstore/cookbook/details/${recipe._id}`;
               
        const res = await fetch(url);
        const data = await res.json();

        result.replaceWith(createRecipe(data));
    })

    return result;
}

function createRecipe(recipe) {
    // Create the full recipe elements
    const article = createEl('article');
    article.appendChild(createEl('h2', recipe.name));

    const band = createEl('div',null,'band');

    const thumb = createEl('div',null,'thumb');
    const img = createEl('img');
    img.src = recipe.img;
    thumb.appendChild(img);
    band.appendChild(thumb);


    const ingredients = createEl('div',null,'ingredients');
    ingredients.appendChild(createEl('h3','Ingredients:'));

    const ul = createEl('ul');
    recipe.ingredients.forEach( ingr => {
        ul.appendChild(createEl('li',ingr));
    })
    ingredients.appendChild(ul);
    band.appendChild(ingredients);

    const description = createEl('div',null,'description');
    description.appendChild(createEl('h3','Preparation:'));
    recipe.steps.forEach(step => {
        description.appendChild(createEl('p',step));
    })
    
    article.append(band,description);

    article.addEventListener('click', () => {
        article.replaceWith(createPreview(recipe));
    });

    return article;
}

function createEl(type, content, className) {
    const element = document.createElement(type);

    if (content) {
        element.textContent = content;
    }

    if (className) {
        element.className = className;
    }

    return element;
}