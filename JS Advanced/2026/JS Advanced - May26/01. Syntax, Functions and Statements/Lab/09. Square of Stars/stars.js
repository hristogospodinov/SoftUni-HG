function stars(size =5) {
    function printStars(count = 5) {
        console.log("* ".repeat(count));    
    }
    for(let i = 0; i < size; i++) {
        printStars(size);
    }
}




stars();
stars(2);
stars(5);
stars(9);
