function swap_case(x){
  let a="";
  for(let i=0; i<x.length; i++){
    if(x[i]===x[i].toLowerCase()){
      a+=x[i].toUpperCase();
    }
    else{a+= x[i].toLowerCase();}
  }
  return a;
}
let a= 'tEST';
console.log(swap_case(a));