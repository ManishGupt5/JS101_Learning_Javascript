function isOdd(x){
  if(x%2!==0){return true;}
  else{return false;}
}

let a=15;//given value
for(let i=0; i<=a; i++){
  if(isOdd(i)==true){console.log(i);}
}