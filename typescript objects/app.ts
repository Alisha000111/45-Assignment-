interface item {
    name:string
    price:number
}
// create to objects
const book: item ={
   name: `ESSENCIAL TYPESCRIPT` 
   price:450
}
const mango: item ={
    name:`mango`
    price:200
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`mango name: ${mango.name}, price: $${mango.price}`)
