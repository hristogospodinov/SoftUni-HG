function equalArrays(arr1, arr2){
    for (let i = 0; i < arr1.length; i++){
        arr1[i] = Number(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++){
        arr2[i] = Number(arr2[i]);
    }
    let areEqual = true;
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    let sum = 0;
    if (areEqual){
        for (let i = 0; i < arr1.length; i++) {
            sum += arr1[i];            
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}