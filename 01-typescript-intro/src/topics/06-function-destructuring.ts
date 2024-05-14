export interface Product {
    desc : string,
    price : number,
}

interface TaxCalculationOptions {
    tax : number,
    products : Product[]
}

export function taxCalculation ( {tax, products} : TaxCalculationOptions ) : [number, number] {
    let total = 0

    products.forEach(product => {
        total += product.price
    })

    return [total, total * tax]
}