let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log(employeeName, typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);


let products = ["iPhone", "Samsung", "Nokia"];
const productDetails = {
    name: "iPhone",
    price: 999.99,
    inStock: true
};

console.log(products);
console.log(productDetails);


let accountBalance = 2000;

accountBalance += 600;  // Deposit
console.log(accountBalance);

accountBalance -= 300;  // Withdrawal
console.log(accountBalance);

accountBalance *= 2.05; // Interest
console.log(accountBalance);

accountBalance /= 2;    // Split into two accounts
console.log(accountBalance);

accountBalance %= 400;  // Remainder after an expense
console.log(accountBalance);
