function cookingNumbers(number, op1, op2, op3, op4, op5) {
    number = Number(number);

    number = cooking(number,op1);
    console.log(number);    
    number = cooking(number,op2);
    console.log(number);
    number = cooking(number,op3);
    console.log(number);
    number = cooking(number,op4);
    console.log(number);
    number = cooking(number,op5);
    console.log(number);

    function cooking(num, operation) {
        if (operation === "chop") {
            return num / 2;
        } else if (operation === "dice") {
            return Math.sqrt(num);
        } else if (operation === "spice") {
            return num + 1;
        } else if (operation === "bake") {
            return num * 3;
        } else if (operation === "fillet") {
            return num * 0.8;
        }
    }
}

//cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');