function solve(year,month,day){
    let myDate = new Date(year, month - 1, day);
    myDate.setDate(myDate.getDate() - 1)
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
}

solve(2016, 10, 1)