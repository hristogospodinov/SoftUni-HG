document.querySelector('form').addEventListener('submit', onRegister);

async function onRegister(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const { email, password, rePass } = data;

    if (!email || !password) {
        alert('All fields are required!');
        return;
    }

    if (password != rePass) {
        alert('Passwords don\'t match!');
        return;
    }

    const user = { email, password };

    try {
        const res = await fetch('http://localhost:3030/users/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        });

        if (!res.ok) {
            const err = await res.json();
            throw err;
        }
        const data = await res.json();

        console.log(data);
        
    }
    catch(err) {
        alert(err.message);
    }
    


    
}