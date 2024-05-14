export function whatsMyType<T>( arg : T ) : T {
    return arg
}

let amIString = whatsMyType<string>('niuna wea')
let amINumber = whatsMyType<number>(232342)

console.log(amIString.split(' '));
console.log(amINumber.toFixed(2));
