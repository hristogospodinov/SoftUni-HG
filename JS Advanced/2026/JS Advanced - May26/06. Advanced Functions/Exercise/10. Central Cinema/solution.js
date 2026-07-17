function solve() {
    let [ movieName, hall, ticketPrice ] = document.querySelectorAll('#container input');
    let btnOnScreen = document.querySelector('#container button');
    btnOnScreen.addEventListener('click', onScreen);
    let moviesOnScreen = document.querySelector('#movies ul');
    let moviesArchive = document.querySelector('#archive ul');
    let btnClear = document.querySelector('#archive button');
    btnClear.addEventListener('click', clear);

    function onScreen(event) {
        event.preventDefault();

        const price = Number(ticketPrice.value);
        if (!movieName.value || 
            !hall.value || 
            !ticketPrice.value || 
            isNaN(price)
        ) {
            return;
        }   

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = movieName.value;
        const strong1 = document.createElement('strong');
        strong1.textContent = `Hall: ${hall.value}`;
        
        const div = document.createElement('div');
        const strong2 = document.createElement('strong');
        strong2.textContent = `${price.toFixed(2)}`;        
        const input = document.createElement('input');
        input.placeholder = "Tickets Sold";        
        const btnArchive = document.createElement('button');
        btnArchive.textContent = 'Archive';
        btnArchive.addEventListener('click', archive);
        div.append(strong2,input,btnArchive);

        li.append(span,strong1,div);
        moviesOnScreen.appendChild(li);

        movieName.value = '';
        hall.value = '';
        ticketPrice.value = '';
    }


    function archive(event) {
        let btnContainer = event.currentTarget.parentElement;

        const ticketsInput = btnContainer.children[1];
        if (!ticketsInput.value || isNaN(Number(ticketsInput.value))) {
            return;
        }
        
        const ticketCount = Number(ticketsInput.value);

        const price = Number(btnContainer.children[0].textContent);
        const totalPrice = ticketCount * price;

        let movieTitle = btnContainer.parentElement.children[0].textContent;

        btnContainer.parentElement.remove();

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = movieTitle;
        li.appendChild(span);
        const strong = document.createElement('strong');
        strong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;
        li.appendChild(strong);

        let btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnDelete.addEventListener('click', deleteRecord);
        li.appendChild(btnDelete);

        moviesArchive.appendChild(li);
    }

    function deleteRecord(event) {
        let btnContainer = event.currentTarget.parentElement;
        btnContainer.remove();

    }
    function clear(event) {
        moviesArchive.innerHTML = '';
    }
}