function classDecorator( constructor : any ) {
        return class extends constructor {
            newProperty = 'New Property'
            hello = 'override'
        }
}

@classDecorator
class SuperClass {
    
    public myProperty : string = 'Abc123'

    print(){
        console.log('Hola Mundo');
        
    }
}

const myClass = new SuperClass()

console.log(myClass);
