class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'Validation Error'
  }
}

let json = '{"age" : 30}';

try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new ValidationError('Name is required');
  }
  if (!user.age) {
    throw new ValidationError('Age is required');
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON parse error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message)
  }
  else {
    console.log(error.stack);
  }
}
