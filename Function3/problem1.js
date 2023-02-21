// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join
let a=['Aarti','Bharati','Pooja','Anu'];
function join(x){
  let result="";
  for(let i=0; i<x.length; i++){
    result+= x[i];//if we want space or anything b/w words he we can add
  }
  return result;
}
console.log(join(a));