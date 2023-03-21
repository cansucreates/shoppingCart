/*Shopping Cart Manager
Create a program that simulates a shopping cart. Each item in the cart should have a name, price, and quantity. Use an object to represent each item, and store all the items in an array. Use functions to add an item, update the quantity of an item, and calculate the total price of all the items in the cart.

Notes:
If you get stuck on a challenge please search it online and try to find resources If you are really stuck, please ask your Instructors.

Examples
The Functions you need to create: addItem, updateQuantity, calculateTotalPrice

Example Input:
// Add some sample items to the cart addItem("Shoes", 50, 2);

// Update the quantity of the shoes: updateQuantity("Shoes", 1);

// Calculate total price of the cart: calculateTotalPrice()*/

const shoppingCartArr = [];
pushingObject(shoppingCartArr);

function pushingObject() {
    const shoppingCart = {
        name:"Shoes",
        price:50,
        quantity:2,
    }
    return shoppingCartArr.push(shoppingCart);
}

function updateQuantity(array, index, newQuantity) {
array[index].quantity = newQuantity;
}
//updateQuantity(shoppingCartArr,0,1);

function calculateTotalPrice(array) {
    let totalPrice = 0;
    for (let i = 0; i < array.length; i++) {
    totalPrice = array[i].price * array[i].quantity;
    }
    return totalPrice;
}
const totalPrice = calculateTotalPrice(shoppingCartArr);
console.log(totalPrice);