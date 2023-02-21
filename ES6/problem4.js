
// Problem 4
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block
// Do not use inbuilt functions and use Arrow function to do this problem

let change_case = (x)=>{
  let a = "abcdefghijklmnopqrstuvwxyz";
  let A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let output="";
  for(let i=0; i<a.length; i++){
    if(x===a[i]){
      output = A[i];
    }
    else if(x==A[i]){
      output = a[i];
    }
  }
  return output;
}
let A ="A"
// console.log(change_case(A))

let word_revert = (y)=>{
  let a="";
  for(let i=0; i<y.length; i++){
    a += change_case(y[i])
  }
  return a;
}

let y="Test";
let y1= word_revert(y,change_case);
console.log(y1)