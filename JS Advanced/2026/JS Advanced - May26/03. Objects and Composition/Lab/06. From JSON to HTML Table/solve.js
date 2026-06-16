function table(input) {
    let data = JSON.parse(input);

    let result = '<table>\n';

    // Header
    result += '   <tr>';
    for (let key of Object.keys(data[0])) {
        result += `<th>${key}</th>`;
    }
    result += '</tr>\n';

    // Rows
    for (let obj of data) {
        result += `   <tr>`;
        for (let value of Object.values(obj)) {
            result += `<td>${escapeHtml(String(value))}</td>`;
        }
        result += '</tr>\n';
    }

    result += "</table>";

    console.log(result);

    function escapeHtml(text) {
    return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
    
}



table(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`
)

console.log('-'.repeat(10));

table(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
)
