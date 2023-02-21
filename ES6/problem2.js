// Problem 2
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
// Do this Problem using Arrow Function
let array = [1,2,3,4,5]
let sum=0;
let count=0;
let z = array.forEach(value=>{sum+= value; count++})

let average = (sum,count,array=0)=>{
  return array.length===0 ? 0 : sum/count}

console.log(average(sum,count,array))
  

