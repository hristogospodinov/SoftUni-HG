function prevDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;    
}

// Tests
console.log(prevDay(2016, 9, 30));      
console.log(prevDay(2015, 5, 10));