function solve(input) {
    let result = [];
    const commands = {
        add(string) {
            result.push(string);
        },
        remove(string) {
            result = result.filter(x => x !== string);
        },
        print() {
            console.log(result.join(','));
            
        }
    }
    input.forEach((element) => {
        let [command, value] = element.split(" ");
        commands[command](value);
    })    
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);