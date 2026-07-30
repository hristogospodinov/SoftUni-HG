async function getInfo() {
    let busStopInput = document.getElementById('stopId');
    let busStop = busStopInput.value;

    let stopName = document.getElementById('stopName');
    let resultBuses = document.getElementById('buses');

    stopName.textContent = '';
    resultBuses.replaceChildren();

    const url = `http://localhost:3030/jsonstore/bus/businfo/${busStop}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error();
        }

        const data = await response.json();

        console.log(data);
        stopName.textContent = data.name;
        console.log(data.buses);
        
        for (let bus in data.buses) {
            resultBuses.appendChild(createEl('li',`Bus ${bus} arrives in ${data.buses[bus]} minutes`));
        }
    }
    catch (error) {
        stopName.textContent = "Error";        
    }
    
    busStopInput.value = '';
}


function createEl(type,content,className) {
    const element = document.createElement(type);

    if(content) {
        element.textContent = content;
    }

    if (className) {
        element.className = className;
    }
    
    return element;
}