class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;

        this._elements.forEach(element => {
            element.addEventListener('input', () => {
                const newValue = element.value;

                this._elements.forEach(el => {
                    if (el !== element) {
                        el.value = newValue;
                    }
                });
            });
        });
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._elements[0].value;
    }

    set value(newValue) {
        this._elements.forEach(element => {
            element.value = newValue;
        });
    }

    isValid() {
        for (const element of this._elements) {
            if (this._invalidSymbols.test(element.value)) {
                return false;
            }
        }

        return true;
    }
}