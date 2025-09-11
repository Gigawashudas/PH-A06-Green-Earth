#### 1) What is the difference between var, let, and const?
Answer: The var keyword is function-scoped. It allows both redeclaration and reassignment.
The let keyword is block-scoped. let allows reassignment but does not allow redeclaration in the same scope.
The const keyword is also block-scoped. A const variable must be initialized at the time of declaration and cannot be reassigned or redeclared.
#### 2) What is the difference between map(), forEach(), and filter()? 
Answer: forEach() iterates over an array and executes a function for each element but does not return a new array.
map() iterates over an array, applies a function to each element, and returns a new array with the transformed values.
filter() iterates over an array, applies a condition, and returns a new array containing only elements that satisfy the condition.
#### 3) What are arrow functions in ES6?
Answer: Arrow functions in ES6 are a concise syntax for writing functions using the => (arrow) notation.
#### 4) How does destructuring assignment work in ES6?
Answer: 
Array destructuring:
const numbers = [1, 2, 3];
const [a, b] = numbers; 
console.log(a, b);

Object destructuring:
const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name, age);
#### 5) Explain template literals in ES6. How are they different from string concatenation?
Answer: Template literals in ES6 are a way to create strings using backticks (``) instead of quotes. They allow embedded expressions, multi-line strings, and string interpolation, making string creation more readable and convenient.