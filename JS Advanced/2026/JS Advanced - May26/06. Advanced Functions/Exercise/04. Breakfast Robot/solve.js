function solution() {
    let storage = {
        protein: 0,
        carbohydrate: 0,        
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10        
        }
    };

    return function(command) {
        let [action, item, quantity] = command.split(" ");
        quantity = Number(quantity);
        if (action === "restock") {
            storage[item] += quantity;
            return 'Success';            
        } else if (action === "prepare") {
            let recipe = recipes[item];
            for (let ingredient in recipe) {
                if (storage[ingredient] < (recipe[ingredient] * quantity)) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }
            for (let ingredient in recipe) {
                storage[ingredient] -= (recipe[ingredient] * quantity);
            }
            return 'Success';
        } else {
            return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }
    }
}

let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock


// console.log(manager("restock flavour 50 "));
// console.log(manager("prepare lemonade 4 "));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
