function intOrFloat(n1,n2,n3){
    let sum = n1 + n2 + n3;

    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum);
}

intOrFloat(100, 200, 303)