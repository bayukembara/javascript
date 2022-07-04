// Import module from everywhere
// const { coffeeStock, isCoffeeMachineReady } = require('./state');

/**
 * and for import module we can code like
 * import coffeeStock from "./state.js";
 * and when we using export default we can change the variable name as much as u like and easy
 */

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// const makeCoffee = (type, miligram) => {
//   if (coffeeStock[type] >= miligram) {
//     console.log("Kopi Berhasil dibuat");
//   } else {
//     console.log("Biji kopi habis");
//   }
// }

// makeCoffee("liberica", 80)

// ES 6 MODULE
import stockCoffee from "./state.js";
import stockCoffee from "./state.js";

const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}

displayStock(stockCoffee);

