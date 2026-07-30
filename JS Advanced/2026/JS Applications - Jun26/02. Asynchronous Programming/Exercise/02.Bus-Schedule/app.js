function solve() {

    let nextStopId = 'depot';
    let currentStopName = "";

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let result = document.querySelector('.info');
    

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`;
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error();
            }

            const data = await response.json();
            nextStopId = data.next;
            currentStopName = data.name;  

            departBtn.disabled = true;
            arriveBtn.disabled = false;
            result.textContent = `Next stop ${currentStopName}`;


        }
        catch (err) {
            result.textContent = "Error";
            departBtn.disabled = true;
            arriveBtn.disabled = true;            
        }
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        result.textContent = `Arriving at ${currentStopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();