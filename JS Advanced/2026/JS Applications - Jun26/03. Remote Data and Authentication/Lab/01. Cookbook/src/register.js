document.querySelector('form').addEventListener('submit', onRegister);

fetch('http://localhost:3030/data/recipes', {
    method: 'get',
    headers: { 'X-Authorization': 'd901476dfbf067dd9da7c52cbc4b27e0bb733273c2d5e340f60e2452362a2ebc' } 
});


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

        const { accessToken } = data;

        sessionStorage.setItem('accessToken', accessToken);

        window.location = '/01.%20Cookbook/';

        console.log(data);
        
    }
    catch(err) {
        alert(err.message);
    }
    


    
}