
interface Character
{
    name:string
    skills:string[]
}

const database:Character[] =
[
    {
        name:'Naito',
        skills:['Fire','Darkness','Sword','Hammer','Dual Wield']
    },
    {
        name:'Tsundoku',
        skills: ['Ice','Reading','Sword','Shield','Thunder']
    },
    {
        name: 'Yuu',
        skills: ['Water','Ice','Thunder','Witchcraft','Healing']
    },
    {
        name: 'Akaru',
        skills:['Fire','Darkness','Sword','Hammer','Dual Wield','Thunder']
    },
    {
        name: 'Glitch',
        skills:[]
    }
]
//1.If Empty => 404 Code


//2. If Fire,Darkness in DB.
//Then Ask for: ['Darkness','Ice','Thunder']
//But only Naito in DB => Should return Naito



//3. If we have:
// [Water,Ice,Thunder,Healing] : Yuu
// [Water,Reading]  : Tsundoku

//But ask for: [Reading,Ice,Thunder] Must return Ameko
//Most number of skills

//----- Easy to pick up
const naito = database[0];
const readman = database[1];
const yui = database[2];
const darkman = database[3];
//
function Find(neededSkills:string[])
{
    let resultSet = []
    
    function method1()
    {
        database.forEach((character)=>
        {
            let skillData=
            {
                name:character.name,
                fulfilled:0,
                needed: neededSkills.length,
                total:character.skills.length
            }
            neededSkills.forEach(skill=>
            {
                if(character.skills.includes(skill))
                {
                    skillData.fulfilled++
                }
            })
            resultSet.push(skillData)
        })
        
        const sorted = resultSet.sort((a,b)=>b.fulfilled-a.fulfilled);
        //
        console.log(sorted);
        const index = sorted.findIndex(character=>character.needed>=character.fulfilled)
        console.log(index);
        return database.find(current=>current.name==sorted[index].name);
    }
    
    function method2()
    {
        const resultSet = []
        database.forEach(character=>
        {
            resultSet.push(character.skills.every(skill=>neededSkills.includes(skill)))
        })
        return resultSet;
    }
    
    return method1();
}


const bestCharacter = Find(['Thunder','Healing']);

console.log(bestCharacter);