function walkingTime(steps, lenFootprintMetres, speed) {
    let distance = steps * lenFootprintMetres; // meters
    let speedInMM = speed / 3.6;

    let walkingTime = distance/speedInMM;
    let breaks = Math.floor(distance / 500) * 60;

    let totalTime = Math.round(walkingTime + breaks);

    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime % 3600) / 60);
    let seconds = totalTime % 60;

    function format(num) {
        return num < 10 ? '0' + num : num;
    }
    
    console.log(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
}

walkingTime(4000, 0.6, 5);