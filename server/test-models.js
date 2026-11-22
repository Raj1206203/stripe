
import User from "./models/User.js";
import Product from "./models/Product.js";
import Cart from "./models/Cart.js";
import Order from "./models/Order.js";
import Payment from "./models/Payment.js";
import Refund from "./models/Refund.js";


console.log("All models loaded successfully!");

console.log("User:", User.modelName);
console.log("Product:", Product.modelName);
console.log("Cart:", Cart.modelName);
console.log("Order:", Order.modelName);
console.log("Payment:", Payment.modelName);
console.log("Refund:", Refund.modelName);
