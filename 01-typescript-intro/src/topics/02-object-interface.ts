const skills: string[] = ['Bash', 'Counter', 'Healing']

interface Chara {
    name : string,
    hp : number,
    skills : string[],
    hometown? : string
}

const strider:Chara = {
    name : 'Strider',
    hp : 100,
    skills : ['Bash', 'Counter', 'Healing'],
}

strider.hometown = 'valdivia'

console.log(strider);


export {}