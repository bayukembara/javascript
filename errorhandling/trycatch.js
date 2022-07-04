
// try {
//   console.log("Awal blok Try");
//   errorCode;
//   console.log("Akhir blok Try");
// } catch (error) {
//   console.log(error.name); //Properti error
//   console.log(error.message); //Properti error
//   console.log(error.stack);  //Properti error
// }

try {
  console.log("Awal blok Try");
  console.log("Akhir blok Try");
} catch (error) {
  console.log("Baris ini akan diabaikan");
} finally {
  console.log("Ini akan tetap dieksekusi")
}
