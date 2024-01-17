const faker = require("faker");
const fs  =require("fs");

const product = [];


for (let i = 0; i < 10; i++) {
    const products = {
        id:i,
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        description : faker.commerce.productDescription()
    }
    product.push(products);
}


const customers = [];


for (let i = 0; i < 10; i++) {
    const customer = {
        id:i+1,
        name : faker.name.findName(),
        email : faker.internet.email(),
        password : faker.internet.password(),
        country : faker.address.country()
    }
    customers.push(customer);
}


console.log(product);
console.log(customers);

fs.writeFileSync('commerce.json',JSON.stringify({product,customers}));