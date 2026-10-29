// creat an object named user with properties name, email,addess, and an order history array with at least 3 orders. Each order should be an object with properties orderId, product, and price.
const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, City, State 12345",
    orderHistory: [
        {
            orderId: "001",
            product: "Laptop",
            price: 999.99
        },
        {
            orderId: "002",
            product: "Mouse",
            price: 29.99
        },
        {
            orderId: "003",
            product: "Keyboard",
            price: 79.99
        }
    ]
};
const userJson = JSON.stringify(user);
console.log(userJson);
const parsedUser = JSON.parse(userJson);
console.log(parsedUser);
