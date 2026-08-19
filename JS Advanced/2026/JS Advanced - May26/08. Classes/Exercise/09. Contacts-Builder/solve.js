class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;

        this._online = false;
        this._element = null;
        this._title = null;
        this._info = null;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;

        if (this._title) {
            if (value) {
                this._title.classList.add('online');
            } else {
                this._title.classList.remove('online');
            }
        }
    }

    render(id) {
        const container = document.getElementById(id);

        const article = document.createElement('article');

        const title = document.createElement('div');
        title.className = 'title';
        title.textContent = `${this.firstName} ${this.lastName}`;

        const button = document.createElement('button');
        button.innerHTML = '&#8505;';

        const info = document.createElement('div');
        info.className = 'info';
        info.style.display = 'none';

        const phone = document.createElement('span');
        phone.innerHTML = `&#9742; ${this.phone}`;

        const email = document.createElement('span');
        email.innerHTML = `&#9993; ${this.email}`;

        info.appendChild(phone);
        info.appendChild(email);

        title.appendChild(button);
        article.appendChild(title);
        article.appendChild(info);
        container.appendChild(article);

        this._element = article;
        this._title = title;
        this._info = info;

        button.addEventListener('click', () => {
            if (this._info.style.display === 'none') {
                this._info.style.display = '';
            } else {
                this._info.style.display = 'none';
            }
        });

        if (this._online) {
            this._title.classList.add('online');
        }
    }
}
