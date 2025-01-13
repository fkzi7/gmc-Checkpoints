class fighter{
    constructor(Name, health, attackpower,) {
    this.Name = Name;
    this.health = health;
    this.attackpower = attackpower; 
    }

    attack(opponent){
        console.log(`${this.name}attacks ${opponent.name}!`);
        opponent.takedamage(this.attackpower);
    }

takedamage(damage){
    attackpower -= damage;  
    console.log(`${this.name} has ${this.health} health remaining.`);
    if (this.health <= 0){
        console.log(`${this.name} has been defeated!`);
    }
}

isAlive(){
    return this.health > 0; 
}
}


class warrior extends fighter{ 
    role = "warrior";
    constructor(Name, health, attackpower, defense){
        super(Name, health, attackpower);
        this.defense = defense;
    }

    takedamage(damage){
        damage -= this.defense;
        super.takedamage(damage);
    }

}

class mage extends fighter{
    role = "mage";
    constructor(Name, health, attackpower, mana){
        super(Name, health, attackpower);
        this.mana = mana;
    }

    attack(opponent){
     console.log(`${this.name} cast spell on ${opponent.name}!`);
opponent.takedamage(this.attackpower*2
);
this.takedamage(this.health/10)
    }}

    class referee {
        startMatch(fighter1, fighter2){
            console.log(`the fight between ${fighter1.name} and ${fighter2.name} has begun!`);
            let turn = 0 ;
            while(fighter1.isAlive() && fighter2.isAlive()){
                fighter1.attack(fighter2);
                console.log(`${fighter1.name} has attacked ${fighter2.name}!`);
                turn ++;
                fighter2.attack(fighter1);
                console.log(`${fighter2.name} has attacked ${fighter1.name}!`);
            }
            if(fighter1.isAlive()){
                console.log(`${fighter1.name} is the winner!`);
            
        }
    }}