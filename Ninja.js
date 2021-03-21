class Ninja {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(Ninja.name);
    }
    drinksake(){
        this.health += 10;
        console.log(`You received ${ this.health } health!`);
    }
    showStats(){
        console.log(`You are ${ this.name }`);
        console.log(`You have ${ this.health } health!`);
        console.log(`You have ${ this.speed } speed!`);
        console.log(`You have ${ this.strength } strength!`);
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
            this.name = name;
            this.wisdom = 10;
            this.health = 200;
            this.strength = 10;
            this.speed = 10;
        }
    speakWisdom(){
        super.drinksake();
        var wisdom = "What one programmer can do in one month, two programmers can do in two months.";
        console.log(wisdom);
    }
    showStats(){
        console.log(`You are ${ this.name }`);
        console.log(`You have ${ this.health } health!`);
        console.log(`You have ${ this.speed } speed!`);
        console.log(`You have ${ this.strength } strength!`);
    }
    // drinksake(){
    //     health += 10;
    //     console.log(`You received ${ health } health!`);
    // }
}

const superSensei = new Sensei("Master Splinter");
console.log(superSensei.speakWisdom());
console.log(superSensei.showStats());
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();