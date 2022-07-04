/**
 *
 * Rangkuman Materi
Pada modul ini kita telah mempelajari konsep asynchronous process pada JavaScript.
Prinsip umumnya adalah beberapa kode atau proses yang bisa berjalan bersamaan.
Pada modul ini juga kita mengenal Promise dan implementasinya untuk menangani proses asynchronous.
 * Beberapa hal yang telah kita pelajari, antara lain:
 * Menangani proses asynchronous dengan callback.
 * Menangani proses asynchronous dengan Promise.
  */
function fetchUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('JSUser');
    }, 3000);
  })
}

console.log("Fetching username...");
fetchUsername().then((value) => {
  console.log(`You are logged in as ${value}`);
})
  .finally(() => {
    console.log("Welcome!");
  })
