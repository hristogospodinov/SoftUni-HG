function dayOfMonth(month, year) {
    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth);
} 

dayOfMonth(1, 2012);
dayOfMonth(2, 2021);
dayOfMonth(2, 2020);
dayOfMonth(4, 2021);
dayOfMonth(12, 2021);