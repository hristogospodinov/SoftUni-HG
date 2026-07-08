function solve(input) {
    const objects = {};

    const commands = {
        create(name, parentName) {
            if (parentName) {
                objects[name] = Object.create(objects[parentName]);
            } else {
                objects[name] = {};
            }
        },

        set(name, key, value) {
            objects[name][key] = value;
        },

        print(name) {
            const result = [];

            for (const key in objects[name]) {
                result.push(`${key}:${objects[name][key]}`);
            }

            console.log(result.join(','));
        }
    };

    input.forEach(line => {
        const tokens = line.split(' ');

        if (tokens[0] === 'create') {
            const name = tokens[1];

            if (tokens.length === 2) {
                commands.create(name);
            } else {
                const parentName = tokens[3];
                commands.create(name, parentName);
            }
        } else if (tokens[0] === 'set') {
            const [, name, key, value] = tokens;
            commands.set(name, key, value);
        } else if (tokens[0] === 'print') {
            commands.print(tokens[1]);
        }
    });
}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);