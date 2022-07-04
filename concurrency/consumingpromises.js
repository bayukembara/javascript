const executorFunction = (resolve, reject) => {
  const isCoffeeMakerReady = true;
  if (isCoffeeMakerReady) {
    resolve("Kopi berhasil dibuat");
  } else {
    reject("Mesin kopi tidak bisa digunakan");
  }
}

const myPromise = new Promise(executorFunction);
myPromise.then(onFullfilled, onRejected);

const stock = {
  coffeeBeans: 250,
  water: 1000,
}

const checkStock = () => {
  return new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250) {
      resolve("Stock cukup. Bisa Membuat kopi");
    } else {
      reject("Stock tidak cukup");
    }
  })
}

const handleSuccess = resolvedValue => {
  console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
  console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure);

checkStock()
  .then(handleSuccess)
  .then(null, handleFailure);
// dari pada membingungkan lebih baik untuk reject diganti dengan catch

checkStock()
  .then(handleSuccess)
  .catch(handleFailure);
