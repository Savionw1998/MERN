class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card {
    constructor(name, cost, res, power){
        super(name, cost);
        this.res = res;
        this.power = power;
    }
    attack(target){
        if (target instanceof Unit){
            target.res -= this.power;
            target.showstat();
        } else {
            throw new Error ("Target must be a Unit!")
        }
    }
    showstat(){
        console.log(`${this.name} - cost:${this.cost}, power:${this.power}, resilience:${this.res}`);
    }
}
class Effect extends Card {
    constructor(name, cost, text, magnitude, stat){
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }
    play( target ) {
        if( target instanceof Unit ) {
            if(this.stat === "resilience"){
                target.res += this.magnitude;
            } else if (this.stat === "power"){
                target.power += this.magnitude;
            }
            target.showstat();
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}
const RedBeltNinja = new Unit("Savion", 11, 15, 25);
const BlackBeltNinja = new Unit("Ten", 9, 20, 15);
const HardAlgorithm = new Effect("Hard Algorithm", 2,"increase targets resiliance by 3", 3, "resilience" );
const UnhandeledBrokenPromises = new Effect("Unhandeled Broken Promises", 1,"decrease targets resiliance by 2", 2, "resilience" );
const PairProgramming = new Effect("Pair Programming", 3,"increase targets Power by 3", 3, "power" );

// HardAlgorithm.play(RedBeltNinja);
// HardAlgorithm.play(BlackBeltNinja);
// UnhandeledBrokenPromises.play(RedBeltNinja);
PairProgramming.play(RedBeltNinja);
// UnhandeledBrokenPromises.play(BlackBeltNinja);
// PairProgramming.play(BlackBeltNinja);

console.log(RedBeltNinja);
