const myNums=[1,2,3]

const initailValue=0
// const myTotal=myNums.reduce(function (acc, currval){
//     console.log(`acc :${acc} and currval :${currval}`);
//     return acc+currval
// },initailValue)


const myTotal=myNums.reduce( (acc,curr)=> acc+curr,initailValue )
console.log(myTotal);

const shoppingCart=[
    {
        itemName:'Js Course',
        price:299
    },
    {
        itemName:'Python Course',
        price:199
    },
    {
        itemName:'Mobile dev Course',
        price:5999
    },
    {
        itemName:'Data Science Course',
        price:1299
    }
]

const priceToPay=shoppingCart.reduce( (acc,item)=> acc+item.price,0)
console.log(priceToPay);