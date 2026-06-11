function piePieces(arr, start, end) {

    return arr.slice(arr.indexOf(start),arr.indexOf(end) + 1);
}

console.log(piePieces(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));
console.log('----------------');
console.log(piePieces(['Apple Crisp',
 'Mississippi Mud Pie',
 'Pot Pie',
 'Steak and Cheese Pie',
 'Butter Chicken Pie',
 'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie')
);

