// reduce() method

const myNum = [1, 2, 3, 4, 5]

const newNum = myNum.reduce(function (accumulator,currentvalue) {
    console.log('acc : '+ accumulator +' and curval : ' +currentvalue );
    return accumulator + currentvalue
},0)

console.log(newNum);

// we can also use foreach loops ,functions .

// write it in smart way

const newNumb = myNum.reduce( (accumulator,currentvalue) => accumulator + currentvalue ,0)

console.log(newNumb);

// Example

const courses = [
    {
        itemname:"web dev",
        price: 4999
    },
    {
        itemname:"python",
        price: 999
    },
    {
        itemname:"data scientist",
        price: 5999
    },
]

const priceToPay = courses.reduce( (acc,item) => acc + item.price ,0)

console.log(priceToPay);