// Problem 1
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)
// Do this using Arrow Function

let isOdd = (x)=>{
  return (x%2!==0 ? true : false)
}
console.log(isOdd(4));
console.log(isOdd(7))
