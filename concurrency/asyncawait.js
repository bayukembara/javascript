// //  synchronous
// function makeCoffee() {
//   const coffee = getCoffee();
//   console.log(coffee);
// }

// // Asynchronous Promise
// function makeCoffee() {
//   getCoffee().then(coffee => {
//     console.log(coffee);
//   })
// }
// // Asynchronous Callbacks
// function makeCoffee() {
//   getCoffee(function (coffee) {
//     console.log(coffee);
//   })
// }
// makeCoffee();

// const getCoffee = () => {
//   return new Promise((resolve, reject) => {
//     const seeds = 100;
//     setTimeout(() => {
//       if (seeds >= 10) {
//         resolve("Kopi di dapatkan");
//       } else {
//         reject("Biji kopi habis!");
//       }
//     }, 1000);
//   })
// }

const state = {
  stock: {
    coffeeBeans: 250,
    water: 1000,
  },
  isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!state.isCoffeeMachineBusy) {
        resolve("Mesin kopi siap digunakan.");
      } else {
        reject("Maaf, mesin sedang sibut.");
      }
    }, 1000);
  })
}

const checkStock = () => {
  return new Promise((resolve, reject) => {
    state.isCoffeeMachineBusy = true;
    setTimeout(() => {
      if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
        resolve("Stock Cukup. Bisa Membuat Kopi");
      } else {
        reject("Stock tidak cukup!");
      }
    }, 1500);
  })
}

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Memanaskan air....");
    setTimeout(() => {
      resolve("Air panas sudah siap");
    })
  })
}

const grindCoffeeBeans = () => {
  return new Promise((resolve, reject) => {
    console.log("Menggiling biji kopi....");
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 1000);
  })
}


const brewCoffee = () => {
  console.log("Membuat kopi anda...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kopi sudah siap!");
    }, 2000);
  })
}

// async function makeEspresso() {
//   try {
//     await checkAvailability();
//     await checkStock();
//     const coffee = await brewCoffee();
//     console.log(coffee);
//   } catch (rejectedReason) {
//     console.log(rejectedReason);
//   }
// }

// cara menjalankan promise secara bersamaan atau promise all
async function makeEspresso() {
  try {
    await checkAvailability();
    await checkStock();
    await Promise.all([boilWater(), grindCoffeeBeans()]);
    const coffee = await brewCoffee();
    console.log(coffee);
  } catch (rejectedReason) {
    console.log(rejectedReason);
  }
}

makeEspresso();
