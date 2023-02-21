// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function
//SLICE FUNCTION
function slice(array,start,end){
  if(start==undefined){start=0;}
  if(end==undefined){end=array.length;}
  if(end==start){end=0; start=0;}
  if(start<0){start += array.length
    if(start<-array.length){start=0;}}
  if(end<0){end += array.length
    if(end<-array.length){end=0;}}
  
  if(start>=array.length){start=0; end=0;}
  if(end>=array.length){end=array.length;}

  //Now creating new array for output
  let a=[];
  for(let i=start; i<end; i++){
    a.push(array[i]);
  }
 
  return a; 
}

let array = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(slice(array));
//tested with all condition