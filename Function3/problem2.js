// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
//LastindexOf
let array = ['Mohan', 'Sohan','Ravi','Viru'];
let lastIndexOf = function(array,string){
  let object={};
  for(let i=0; i<array.length; i++){
    object[array[i]]=i;
  }

  let a=0;
    if(object[string]!==undefined){a= object[string]}
    else{return -1}

  let string1 = Object.keys(object)[a];
  return (string1.length -1);
}
  

console.log(lastIndexOf(array,'mk'));
console.log(lastIndexOf(array,"Ravi"))