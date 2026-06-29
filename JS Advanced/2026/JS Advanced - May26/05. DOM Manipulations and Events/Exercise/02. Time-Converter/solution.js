function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let buttons = document.querySelectorAll('[type="button"]');

    for(let button of buttons) {
        button.addEventListener('click', convert);
    }

    function convert(event) {
        let clicked = event.target.id;
        if (clicked === 'daysBtn') {
            let target = Number(days.value);
            fixFields(target);
        } else if (clicked === 'hoursBtn') {
            let target = Number(hours.value) / 24;
            fixFields(target);
        } else if (clicked === 'minutesBtn') {
            let target = Number(minutes.value) / 1440;
            fixFields(target);
        } else if (clicked === 'secondsBtn') {
            let target = Number(seconds.value) / 86400;
            fixFields(target);
        }
    }

    function fixFields(daysValue) {
        days.value = daysValue;
        hours.value = daysValue * 24;
        minutes.value = daysValue * 1440;
        seconds.value = daysValue * 86400;
    }
}