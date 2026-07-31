async function solution() {

    const main = document.getElementById('main');

    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const articles = await response.json();

    articles.forEach(article => {
        main.appendChild(createAccordion(article));
    });

    function createAccordion(article) {

        const accordion = createElement('div', null, 'accordion');

        const head = createElement('div', null, 'head');

        const title = createElement('span', article.title);

        const button = createElement('button', 'More', 'button');
        button.id = article._id;

        head.append(title, button);

        const extra = createElement('div', null, 'extra');
        extra.style.display = 'none';

        const paragraph = createElement('p');
        extra.appendChild(paragraph);

        button.addEventListener('click', async () => {

            if (button.textContent === 'More') {

                if (!paragraph.textContent) {
                    const res = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
                    const data = await res.json();

                    paragraph.textContent = data.content;
                }

                extra.style.display = 'block';
                button.textContent = 'Less';

            } else {

                extra.style.display = 'none';
                button.textContent = 'More';
            }

        });

        accordion.append(head, extra);

        return accordion;
    }

    function createElement(type, text, className) {

        const element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        if (className) {
            element.className = className;
        }

        return element;
    }
}

solution();