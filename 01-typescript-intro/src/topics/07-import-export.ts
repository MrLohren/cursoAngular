import { Product, taxCalculation } from './06-function-destructuring'

const shoppingCart : Product[] = [
    {
        desc : 'un celu',
        price : 90
    },
    {
        desc : 'un buen celu',
        price : 290
    }
]

const [total, taxTotal] = taxCalculation({
    products : shoppingCart,
    tax : 0.19,
})

console.log(`Total: ${total}`);
console.log(`Tax: ${taxTotal}`);


export {}