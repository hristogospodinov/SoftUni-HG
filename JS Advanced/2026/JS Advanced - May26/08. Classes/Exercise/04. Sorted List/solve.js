class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(num) {
        this.list.push(num);
        this.list.sort((a,b) => a- b);
        this.size++;
        return this;
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index,1);
            this.size--;
        }        
        return this;
    }

    get(index) {
        return this.list[index];
    }
}

const list = new List();
console.log(list.add(10).add(20).add(30));
console.log(list.remove(-1));

console.log(list.get(-1));
console.log(list.size);