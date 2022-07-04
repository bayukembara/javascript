// CallBack
function makeACake(...rawIngredients) {
  const ingredients = collectIngredients(rawIngredients);
  dough = makeTheDough(ingredients);
  poredDough = pourDough(dough);
  cake = bakeACake(pouredDough);
  console.log(cake);
}
// Callback Hell terlalu berbelit dan untuk continuity is bad
function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients, function (ingredients) {
    makeTheDough(ingredients, function (dough) {
      pourDough(dough, function (pouredDough) {
        bakeAcake(pouredDough, function (cake) {
          console.log(cake);
        })
      })
    })
  })
}

// Promise untuk menghidari dari call Hell
function makeACake(...rawIngredients) {
  collectIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log);
}

/**Promise
Promise merupakan salah satu fitur penting dari ES6. Promise ini dapat menggantikan peran callback dengan menggunakan ciri khas fungsi .then-nya. Namun, mengapa fitur ini dinamakan dengan “Promise” alias “Janji”?

Fitur ini berfungsi seperti namanya, yaitu untuk membuat janji. Mari kita analogikan kembali dalam dunia nyata. Ketika kita memesan kopi kepada pelayan, maka secara tidak langsung pelayan tersebut berjanji kepada kita untuk membuatkan kopi dan menyajikannya pada kita. Namun janji bisa hanya tinggal janji. Dalam dunia nyata pun, janji juga bisa tidak terpenuhi, entah itu karena kopi pesanan kita sedang kosong, atau mesin pembuat kopi sedang rusak.

Nah, Promise memiliki perilaku yang sama dengan analogi di atas. Promise memiliki tiga kondisi, yaitu:

Pending (Janji sedang dalam proses)
Fulfilled (Janji terpenuhi)
Rejected (Janji gagal terpenuhi)
Lantas bagaimana cara membuat janji (Promise) di JavaScript? */
