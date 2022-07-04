// let json = '{"name":"Yoda","age":"23"}';
// let json = "{BAD JSON}"
let jon = '{"age":"20"}';

// try {
//   let user = JSON.parse(jon);

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }
// undifined pada name akan menyebabkan bug dalam program maka kita harus menggunakan throw

//!let jin = '{"age":"23"}';

// try {
//   let user = JSON.parse(jin);

//   if (!user.name) {
//     throw new SyntaxError('Name is required');
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(`JSON Error: ${error.message}`);
// }

// Bagaimana jika semua ada tapi masih tetap error
let json = '{ "name": "Yoda", "age": 20 }';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(user.name); // Yoda
  console.log(user.age);  // 20
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof SyntaxError) {
    HTMLFormControlsCollection.log(error.message);
  } else {
    console.log(error.stack)
  }
}


