function arrRotate(arr, steps) {
    for (let i = 0; i < steps; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}

arrRotate(['1', 
'2', 
'3', 
'4'], 
2
)

arrRotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)