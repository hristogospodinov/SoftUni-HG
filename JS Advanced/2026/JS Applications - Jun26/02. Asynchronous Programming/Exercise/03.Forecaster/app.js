function attachEvents() {
    let location = document.getElementById('location');
    let btn = document.getElementById('submit');
    btn.addEventListener('click', getForecast);

    let forecast = document.getElementById('forecast');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    
    let symbols = {
        'Sunny': '☀', // ☀
        'Partly sunny': '⛅', // ⛅
        'Overcast': '☁', // ☁
        'Rain': '☂', // ☂
        'Degrees': '°'   // °
    }

    async function getForecast() {
        try {
            const oldForecast = current.querySelector('.forecasts');
            if (oldForecast) {
                oldForecast.remove();
            }
            const oldUpcoming = upcoming.querySelector('.forecast-info')
            if (oldUpcoming) {
                oldUpcoming.remove();
            }

            const baseUrl = 'http://localhost:3030/jsonstore/forecaster';
            const url = baseUrl + `/locations`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error("Query unsuccessful");
            }

            const data = await response.json();

            const city = data.find(c => c.name === location.value);

            if (!city) {
                throw new Error("No City found!");
            }

            const todayResponse = await fetch(baseUrl + `/today/${city.code}`);
            if (!todayResponse.ok) {
                throw new Error("Query unsuccessful for today forecast");
            }
            const todayData = await todayResponse.json();

            const upcomingResponse = await fetch(baseUrl + `/upcoming/${city.code}`);
            if (!upcomingResponse.ok) {
                throw new Error("Query unsuccessful for upcoming forecast");
            }
            const upcomingData = await upcomingResponse.json();

            const forecasts = createEl('div',null,'forecasts');
            const condSymbol = createEl('span',symbols[todayData.forecast.condition],'condition symbol');
            const condition = createEl('span',null,'condition');
            const conditionLine1 = createEl("span",todayData.name,"forecast-data");
            const degreesToday = `${todayData.forecast.low}${symbols.Degrees}/${todayData.forecast.high}${symbols.Degrees}`
            const conditionLine2 = createEl("span",degreesToday,"forecast-data");
            const conditionLine3 = createEl("span",todayData.forecast.condition,"forecast-data");
            condition.append(conditionLine1,conditionLine2,conditionLine3);
            forecasts.append(condSymbol,condition);
            current.appendChild(forecasts);
            forecast.style.display = "block";

            const nextForecast = createEl('div',null,'forecast-info');
            upcomingData.forecast.forEach(day => {
                const upcomingDay = createEl('span',null,'upcoming');
                const symbol = createEl('span',symbols[day.condition],'symbol');
                const degreeDay = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;
                const degrees = createEl('span',degreeDay,'forecast-data');
                const feelsLike = createEl('span',day.condition,'forecast-data');
                upcomingDay.append(symbol,degrees,feelsLike);
                nextForecast.appendChild(upcomingDay);

            })
            upcoming.appendChild(nextForecast);

            console.log(data)
        }
        catch(err) {
            forecast.style.display = 'block';

            current.replaceChildren(createEl('div', 'Error'));
            upcoming.replaceChildren();

            console.error(err);       
        }
    }   
    
    function createEl(type,text,className) {

        let result = document.createElement(type);

        if (text) {
            result.textContent = text;
        }
        if (className) {
            result.className = className;
        }

        return result;
    }
}

attachEvents();