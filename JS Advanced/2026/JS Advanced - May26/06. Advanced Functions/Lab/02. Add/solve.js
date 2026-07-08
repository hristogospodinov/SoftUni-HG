function solution(outerNum) {
    return function(innerNum) {
        return outerNum + innerNum;
    }
}


let add5 = solution(5);



console.log(add5(2)); // 7
console.log(add5(3)); // 8