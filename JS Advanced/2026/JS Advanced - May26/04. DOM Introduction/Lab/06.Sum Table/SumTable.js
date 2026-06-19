function sumTable() {
    let table = document.querySelectorAll('table tr');
    let totalField = document.getElementById('sum');
    let total = 0;

    

    for(let i = 1; i < table.length - 1; i++) {
        total += Number(table[i].children[table[i].children.length - 1].textContent);
    }

    totalField.textContent = total;
}