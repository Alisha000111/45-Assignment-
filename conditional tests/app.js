var cars = 'subaru';
// Test 1: Equality comparison (True)
console.log("Is car == 'subaru'? I Predict True.");
console.log(cars == 'subaru'); // True
// Test 2: Strict equality comparison (True)
console.log("Is car === 'subaru'? I Predict True.");
console.log(cars == 'subaru'); // True
// Test 3: Inequality comparison (False)
console.log("Is car != 'subaru'? I Predict False.");
console.log(cars != 'subaru'); // False
// Test 4: Strick inequality comparison (False)
console.log("Is car !== 'subaru'? I Predict False.");
console.log(cars !== 'subaru'); // False
// Test 5: less than comparison (False)
console.log("Is car < 'subaru'? I Predict False.");
console.log(cars < 'subaru'); // False (lexicographic comparison)
// Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I Predict False.");
console.log(cars > 'subaru'); // False (lexicographic comparison)
// Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I Predict True.");
console.log(cars <= 'subaru'); // True
// Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I Predict True.");
console.log(cars >= 'subaru'); // True
// Test 9: Checking truthiness (True)
console.log("Is !cars? I Predict True.");
console.log(!cars); // True (non-empty string is truthy)
// Test 10: Checking falsiness (False)
console.log("Is !cars? I Predict False.");
console.log(!cars); // False (nagation of a truthy value)
