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

const gridCoffeeBeans = () => {
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

function makeEspresso() {
  checkAvailability()
    .then((value) => {
      console.log(value);
      return checkStock();
    })
    .then(value => {
      console.log(value);
      const promises = [boilWater(), gridCoffeeBeans()]
      return Promise.all(promises);
    })
    .then((value) => {
      console.log(value);
      return brewCoffee();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((rejectedReason) => {
      console.log(rejectedReason);
    })
}

makeEspresso();
