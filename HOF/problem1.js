// Problem 1: Find the average of elements present at odd index of the following array.
// hint : use forEach/filter method of array in which arugument must be function


/*
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum=0;
let z= arr.forEach((value,index)=>{
  if(index%2!==0){sum +=  value}
})

console.log(sum)
*/

let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum=0; let count =0;
let z= arr.filter((value,index)=>{
  if(index%2!==0){sum +=  value; count++}
})

console.log(sum/count);