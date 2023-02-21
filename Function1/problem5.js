function space_remover(x){
  let a="";
  for(let i=0; i<x.length; i++){
    if(x[i]!==" "){a+=x[i];}
  }
  return a;
}

let a="Ram Was A God";
console.log(space_remover(a));