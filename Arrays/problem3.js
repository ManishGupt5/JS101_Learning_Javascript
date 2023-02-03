let a= [1,1,15,14,12,24,68,88,52,64,85,98,104];
let sum=0;
for(let i=0; i<a.length;i++){
  if(a[i]%2===0){
    sum = sum +a[i];
  }
}
console.log(sum/(a.length));