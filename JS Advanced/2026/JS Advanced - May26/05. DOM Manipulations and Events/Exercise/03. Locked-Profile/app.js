function lockedProfile() {
    let buttons = document.querySelectorAll('.profile button');

    for(let button of buttons) {
        button.addEventListener('click', showMore);
    }

    function showMore(event) {
        let profile = event.target.parentElement;
        if (profile.querySelector('[value="unlock"]').checked) {
            let hidden = profile.querySelector('div');
            if (event.target.textContent === "Show more") {
                hidden.style.display = "block";
                event.target.textContent = "Hide it";
            } else {
                hidden.style.display = "none";
                event.target.textContent = "Show more";
            }
        }
    }
}