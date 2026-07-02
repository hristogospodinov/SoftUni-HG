function attachEventsListeners() {
    let btn = document.getElementById('convert');
    btn.addEventListener('click', doConversion);
    
    let outputField = document.getElementById('outputDistance');

    let conversionRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    }

    function doConversion() {
        let originMeasure = document.getElementById('inputUnits').value;
        let targetMeasure = document.getElementById('outputUnits').value;
        let originDistance = document.getElementById('inputDistance').value;

        let resultInMeters = conversionRates[originMeasure] * Number(originDistance);
        let result = resultInMeters / conversionRates[targetMeasure];
        outputField.value = result;
    }
}