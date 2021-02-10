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
    class SuperHero
    {
        private hero:Hero;
        constructor(hero:Hero)
        {
            this.hero=hero;
        }

        public Greet()
        {
            console.log(`Greetings! I am ${this.hero.Name}`);
        }
    }

    let naito = new Hero('Naito',5);
    let superNaito = new SuperHero(naito);
    
    let heroes = [naito,superNaito];
    heroes.forEach(hero=>hero.Greet());
    
    

}



Main();