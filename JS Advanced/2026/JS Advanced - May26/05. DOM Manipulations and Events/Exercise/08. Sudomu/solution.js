function solve() {
    let [checkBtn, clearBtn] = document.querySelectorAll("tfoot button");
    checkBtn.addEventListener('click', quickCheck);
    clearBtn.addEventListener('click', clearFields);

    function quickCheck() {
        let rows = document.querySelectorAll('tbody tr');
        let cols = [
            new Set(),
            new Set(),
            new Set()
        ]
        let isValid = true;
        for(let row of rows) {
            let inputs = [...row.querySelectorAll('input')];

            if (inputs.some(a => a.value === "")) {
                isValid = false;
                continue;
            }

            let values = inputs.map(a => Number(a.value));

            if (
                new Set(values).size != 3 ||
                !values.every(value => value >= 1 && value <= 3)
                ) {
                isValid = false;
                continue;
            }
            for (let i = 0; i < values.length; i++) {
                cols[i].add(values[i]);
            }            
        }
        for(let col of cols) {
            if (col.size != 3) {
                isValid = false;
            }
        }

        if (isValid) {
            resultStyle("2px solid green","You solve it! Congratulations!","green");
        } else {
            resultStyle("2px solid red","NOP! You are not done yet...","red");
        }
    }
    function clearFields() {
        let allInputs = document.querySelectorAll('tbody input');
        for (let inputField of allInputs) {
            inputField.value = "";
        }
        resultStyle("","","");
    }

    function resultStyle(borderColor, message, textColor) {
        document.querySelector('table').style.border = `${borderColor}`;
        document.querySelector('#check p').textContent = `${message}`;
        document.querySelector('#check p').style.color = `${textColor}`;        
    }
}