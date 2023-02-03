let a = "Manish (987)";
let b = a.length;
let space =0;
for(let i = 0; i < b; i++){
  if(a[i]===" "){
    space++;
  }
  
}
console.log(b-space);