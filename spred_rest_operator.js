// rest and spread operator (' ... ')

////////////////////////////////with array/////////////////////////////////////
// rest operator " ... "   use to combine array into single

// function addNumbers(a, b, ...other) {
//   console.log(other);
//   return a + b;
// }

const addNumbers = (a, b, ...other) => {
  //   console.log(other);
  return a + b;
};

const resl = addNumbers(2, 3, 4, 5);
// console.log(resl);

// spread operator '...' used to cut combined array into pices.

let arr = ["pravin", "raj", "mayur", "kunal"];

// rest and spread used at same time
function displayname(a, b, c, ...other) {
  console.log(other);
  console.log(a, b, c);
}

// displayname(...arr);
//////////////////////////////////////////////////array end///////////////////////////

//////////////////////////////////////with object////////////////////////////////////

//rest operator
const obj = {
  n: "pravin",
  age: 23,
  hobbies: ["coding", "web series"],
};

const { n, age, hobbies } = obj;
const { ...arr1 } = obj;

// console.log(n, age, hobbies);
// console.log(arr1.n);

// spread operator

const newobj = {
  ...obj,
  age: 24,
  hobbies: "name",
};

console.log(newobj);
