function solve() {
    let task = document.getElementById('task');
    let descr = document.getElementById('description');
    let dueDate = document.getElementById('date');

    let btnAdd = document.getElementById('add');
    btnAdd.addEventListener('click', addTask);

    let [ sectionForm, sectionOpen, sectionInProgress, sectionComplete ] = document.querySelectorAll('section div:nth-child(2)');

    function addTask(event) {
        event.preventDefault();

        if (!(task.value && descr.value && dueDate.value)) {
            return;
        }
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = task.value;
        const p1 = document.createElement('p');
        p1.textContent = `Description: ${descr.value}`;
        const p2 = document.createElement('p');
        p2.textContent = `Due Date: ${dueDate.value}`;
        const div = document.createElement('div');
        div.classList.add('flex');
        const btnStart = document.createElement('button');
        btnStart.textContent = 'Start';
        btnStart.classList.add('green');
        btnStart.addEventListener('click', startTask);
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.classList.add('red');
        btnDelete.addEventListener('click', removeTask);
        div.appendChild(btnStart);
        div.appendChild(btnDelete);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);
        sectionOpen.appendChild(article);
        task.value = '';
        descr.value = '';
        dueDate.value = '';
    }

    function startTask(event) {
        const btnContainer = event.target.parentElement;
        const article = btnContainer.parentElement;
        sectionInProgress.appendChild(article);
        event.target.remove();
        const btnFinish = document.createElement('button');
        btnFinish.textContent = 'Finish';
        btnFinish.classList.add('orange');
        btnFinish.addEventListener('click', finishTask);
        btnContainer.appendChild(btnFinish);
    }

    function finishTask(event) {
        const btnContainer = event.target.parentElement;
        const article = btnContainer.parentElement;
        sectionComplete.appendChild(article);
        btnContainer.remove();
    }

    function removeTask(event) {
        event.target.parentElement.parentElement.remove();
    }
}