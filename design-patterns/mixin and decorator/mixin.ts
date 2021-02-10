//Mixing together an object with other objects to add properties we need. Think of it like add-ons that can give your object additional properties, but these individual properties are not really subclasses themselves.

import { offsetLines } from "fuse-box/utils/utils";

//A more accurate description is that a mixin works as factory where new a subclass object is returned. 
//Through this whole process there is no definition of the subclass anywhere.

//A more C++ analogy would be to compare them to abstract classes with virtual functions, allowing them to be inherited by other subclasses.

export function Main()
{
    class Hero
    {
        private name:string;
        private level:number;
        public foo:string="foobar";
        
        public get Name() : string 
        {
            return this.name;
        }

        public set Name(value:string)
        {
            this.name = value;
        }
        
        constructor(name:string,level:number) 
        {
            this.name = name;
            this.level = level;
        }
        private Secret()
        {
            console.log(`Shhh... It's a secret to everybody`);
        }
        public Greet()
        {
            console.log(`Hi I am Lv ${this.level} ~ ${this.name}`)
        }
    }

    let skills =
    {
        Attack()
        {
            console.log(`${this.name} attacks!`);
        }
    }

    function Pass()
    {
        console.log(`${this.name} passes. See you next turn!`);
    }
    
    // Mixins use or extended an already made Object.
    let offensiveHero = Object.assign(Hero.prototype,skills);
    offensiveHero.Name="Naito";
    offensiveHero.Attack();

    //However Decorators, are a new object that USE inside another object to extend functionality.
    //Mixins doesn't seem to get along much with typescript, as assigning on the fly things is more of an 
    //"interpreted" thing, they are calcualted during execution.
    //Hence, decorators seem to get more along with Typescript.
    //At least given these 2 examples in: 'mixin.ts' and 'decorator.ts'
    
    

}



Main();














//Theory source: https://www.digitalocean.com/community/tutorials/js-using-js-mixins