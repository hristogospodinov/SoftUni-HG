function solve() {

    // ability to cast
    function castMagic(hero) {
        hero.cast = function(spell) {
            this.mana--;
            console.log(`${this.name} cast ${spell}`);  
        };
    }

    // ability to fight
    function doAttack(hero) {
        hero.fight = function() {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`);
        };
    }

    // creating the mage (caster)
    function mage(name) {
        let hero = {
            name,
            health: 100,
            mana: 100
        };

        castMagic(hero);

        return hero;
    }

    // creating the fighter 
    function fighter(name) {
        let hero = {
            name,
            health: 100,
            stamina: 100
        };

        doAttack(hero);

        return hero;
    }

    return {
        mage,
        fighter
    };    
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
