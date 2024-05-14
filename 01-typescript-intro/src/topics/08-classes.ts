export class Person {
    constructor (public name : string, public address : string = 'por ahi') {
        this.name = name
        this.address = address
    }
}

export class Hero extends Person{
    constructor (
        public alterEgo : string,
        public age : number,
        public realName : string
    ) {
        super(realName, 'mi ksita')
    }
}

const yocito = new Hero('Lohren', 27, 'pipe')

console.log(yocito);
