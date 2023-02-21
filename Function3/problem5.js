// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function

let array =[1,5,4,9,8,6];

function include(array,target){
  let flag = false;
  for(let i=0; i<array.length; i++){
    if(array[i]===target){
      flag=true;
    }
  }
  return flag;
}

console.log(include(array,5));