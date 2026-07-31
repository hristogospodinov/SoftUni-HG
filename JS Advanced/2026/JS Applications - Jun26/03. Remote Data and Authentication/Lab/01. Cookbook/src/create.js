document.querySelector('form').addEventListener('submit', onCreate);

async function onCreate(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());


    
}