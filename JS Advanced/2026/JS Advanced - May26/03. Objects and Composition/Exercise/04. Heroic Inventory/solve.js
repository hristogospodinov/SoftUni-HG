function heroInventory(heroes) {
    let heroRegister = [];

    for (const hero of heroes) {
        if (!hero.trim()) {continue;}
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        
        heroRegister.push({ name, level, items}); 
    }
    
    console.log(JSON.stringify(heroRegister));
    

}

heroInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)