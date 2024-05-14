export interface Passenger {
    name        : string,
    children?   : string[],
}

const pass1 : Passenger = {
    name : 'yocito'
}

const pass2 : Passenger = {
    name : 'yono',
    children : ['ana', 'juana']
}

const printChildren = (pass : Passenger) => {
    const howMany = pass.children?.length || 0

    console.log(`${pass.name}   ${howMany}`)
    
}

printChildren(pass1)
printChildren(pass2)