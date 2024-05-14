function addNumbers(a : number, b : number) {
    return a + b
}

const addNumbersArrow = (a: number,b: number):string => {
    return `Resultado de ${a} y ${b}    ${a + b}`
}

function multiply(a: number,b?: number,base: number = 2){
    if(b)
    return a * base
}

// const result: number = addNumbers(1,2)
// const result2: string = addNumbersArrow(1,2)
// const multiplyResult: number = multiply(5)

// console.log({result, result2, multiplyResult});

interface Chara {
    nombre : string,
    pv : number,
    showPv : () => void
}

const strider: Chara = {
    nombre : 'Strider',
    pv : 50,
    showPv() {
        console.log(`Puntos de Vida: ${this.pv}`);
    },
}

const healChara = (character: Chara, amount: number) => {
    character.pv += amount
}

healChara(strider, 30)
healChara(strider, 30)