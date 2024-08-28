let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log(employeeName, typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);

let products = ["Laptop", "Smartphone", "Tablet"];

const productDetails = {
  name: "Laptop",
  price: 999.99,
  inStock: true
};

console.log(products);
console.log(productDetails);

let accountBalance = 1000;

accountBalance += 200;  // Deposit
console.log("After deposit:", accountBalance);

accountBalance -= 150;  // Withdrawal
console.log("After withdrawal:", accountBalance);

accountBalance *= 1.05;  // Interest
console.log("After interest:", accountBalance);

accountBalance /= 2;  // Split account
console.log("After splitting:", accountBalance);

accountBalance %= 300;  // Remainder after division
console.log("Remainder after division:", accountBalance);
