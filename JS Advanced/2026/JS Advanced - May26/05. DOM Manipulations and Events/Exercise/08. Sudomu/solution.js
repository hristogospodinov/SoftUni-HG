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
            let inputs = [...row.querySelectorAll('input')].map(a => Number(a.value));
            if (new Set(inputs).size != 3) {
                isValid = false;
            }
            for (let i = 0; i < inputs.length; i++) {
                cols[i].add(inputs[i]);
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
        resultStyle("0px","","");
    }

    function resultStyle(borderColor, message, textColor) {
        document.querySelector('table').style.border = `${borderColor}`;
        document.querySelector('#check p').textContent = `${message}`;
        document.querySelector('#check p').style.color = `${textColor}`;        
    }
}