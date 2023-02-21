function arrey_sum(x){
  let a=0;
  for(let i=0; i<x.length; i++){
    a+=x[i];
  }
  return a;
}

let a=[];
//console.log(arrey_sum(a));//testing purpose
let b=[10,15,0,2,3];
console.log(arrey_sum(b)/b.length);