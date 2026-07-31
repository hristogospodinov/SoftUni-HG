async function lockedProfile() {

    const main = document.getElementById('main');
    const template = document.querySelector('.profile');

    main.innerHTML = '';

    const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
    const data = await response.json();

    let index = 1;

    Object.values(data).forEach(user => {

        const profile = template.cloneNode(true);

        const radios = profile.querySelectorAll('input[type="radio"]');
        radios[0].name = `user${index}Locked`;
        radios[1].name = `user${index}Locked`;

        profile.querySelector('input[type="text"]').value = user.username;
        profile.querySelector('input[type="text"]').name = `user${index}Username`;

        profile.querySelector('input[type="email"]').value = user.email;
        profile.querySelector('input[type="email"]').name = `user${index}Email`;

        profile.querySelector('input[type="number"]').value = user.age;
        profile.querySelector('input[type="number"]').name = `user${index}Age`;

        const hiddenInfo = profile.querySelector('.user1Username');

        // Initially hide all fields
        Array.from(hiddenInfo.children).forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'LABEL') {
                el.style.display = 'none';
            }
        });

        const button = profile.querySelector('button');

        button.addEventListener('click', () => {

            if (!radios[1].checked) {
                return;
            }

            const show = button.textContent === 'Show more';

            Array.from(hiddenInfo.children).forEach(el => {
                if (el.tagName === 'INPUT' || el.tagName === 'LABEL') {
                    el.style.display = show ? 'block' : 'none';
                }
            });

            button.textContent = show ? 'Hide it' : 'Show more';
        });

        main.appendChild(profile);
        index++;
    });
}