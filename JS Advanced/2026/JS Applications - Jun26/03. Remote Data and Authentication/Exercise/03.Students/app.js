const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

const tbody = document.querySelector('#results tbody');
const form = document.getElementById('form');

form.addEventListener('submit', onSubmit);

loadStudents();

async function loadStudents() {
    tbody.innerHTML = '';

    const response = await fetch(baseUrl);
    const data = await response.json();

    Object.values(data).forEach(student => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
        `;

        tbody.appendChild(tr);
    });
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const firstName = formData.get('firstName').trim();
    const lastName = formData.get('lastName').trim();
    const facultyNumber = formData.get('facultyNumber').trim();
    const grade = formData.get('grade').trim();

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName,
            facultyNumber,
            grade
        })
    });

    form.reset();

    loadStudents();
}