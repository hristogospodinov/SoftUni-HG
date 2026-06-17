function createSortedList() {
    let collection = [];

    return {
        add(element) {
            collection.push(element);
            collection.sort((a, b) => a - b);
        },

        remove(index) {
            collection.splice(index, 1);
        },

        get(index) {
            return collection[index];
        },

        size() {
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
console.log(list.size())
