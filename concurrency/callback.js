// Syncronous

/*
const orderCoffee = () => {
  console.log("Sedang membuat kopi, silakan tunggu....");
  let coffee = null;
  setTimeout(() => {
    coffee = "Kopi sudah jadi!"
  }, 300);
  return coffee;
}
*/

const coffee = orderCoffee();
console.log(coffee);

// Asynchronous

const pesanKopi = callback => {
  let kopi = null;
  console.log("Membuat kopi, silakan tunggu....");
  setTimeout(() => {
    kopi = "Kopi sudah jadi !";
    callback(kopi);
  }, 3000);
}

pesanKopi(kopi => {
  console.log(kopi);
})
