function deleteByEmail() {
    const input = document.querySelector('[name="email"]');
    const pattern = input.value;
    const result = document.getElementById('result');

    const rows = Array.from(document.querySelectorAll('tbody tr'));

    let found = false;

    for (let row of rows) {
        if (row.children[1].textContent == pattern) {
            row.remove();
            found = true;
        } 
    }   

    if (found) {
        result.textContent = "Deleted.";
        input.value = "";
    } else {
        result.textContent = "Not found.";
    }

    
}