function change_case(x){
  if(x===x.toLowerCase()){
    return x;
  }
  else{return x.toLowerCase();}
}

let a="Masai School"
console.log(change_case(a));

let b=["RATAN", "ANU", "SAI", "VIRAT"];
let b1=[];
for(let i=0; i<b.length; i++){
  b1.push(change_case(b[i]));
}
console.log(b1);