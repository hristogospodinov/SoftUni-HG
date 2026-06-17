function createSortedList() {
    let collection = [];

    function isValid(index) {
    return index >= 0 && index < collection.length;
}

    return {
        add(element) {
            collection.push(element);
            collection.sort((a, b) => a - b);
        },

        remove(index) {
            if (isValid(index)) {
                collection.splice(index, 1);
            }
        },

        get(index) {
            if (isValid(index)) {
                return collection[index];
            }
        },

        get size() {
            return collection.length;
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

var myList = result();
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
