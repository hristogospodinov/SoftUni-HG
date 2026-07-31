document.querySelector('form').addEventListener('submit', onLogin);

async function onLogin(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new formData(form);
    const data = Object.fromEntries(formData.entries());

    const { email, password } = data;
    
    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            const err = await res.json();
            throw err;
        }
    } catch (err) {
        alert(err.message);
    }
}