function generateReport() {
    const headers = document.querySelectorAll('th input');

    let selectedColumns = [];

    headers.forEach((header, index) => {
        if(header.checked) {
            selectedColumns.push({
                name: header.name,
                index
            });
        }
    });

    const rows = document.querySelectorAll('tbody tr');

    const result = [];

    for (const row of rows) {
        const cells = row.querySelectorAll('td');
        const currentRow = {};

        for (const column of selectedColumns) {
            currentRow[column.name] = cells[column.index].textContent;
        }
        result.push(currentRow);
    }

    document.getElementById('output').value = JSON.stringify(result);
}