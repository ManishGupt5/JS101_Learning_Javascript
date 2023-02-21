function char_check(x){
  
  if(x===x.toLowerCase()){
    return "Small character";
  }
  else{
    return "Capital character";
  }
}
let A="A";

console.log(  char_check(A)  );