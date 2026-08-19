function tickets(data, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const tickets = [];
    for (const entry of data) {
        let [destination, price, status] = entry.split("|");
        price = Number(price);
        let ticket = new Ticket(destination,price,status);
        tickets.push(ticket);
    }

    return tickets.sort((a,b) => {
        if (criteria === "destination") {return a.destination.localeCompare(b.destination)}
        else if (criteria === "price") {return a.price - b.price}
        else if (criteria === "status") {return a.status.localeCompare(b.status)}
    });
}

console.log(tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'
));
console.log('-'.repeat(20));
console.log(tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'
));
