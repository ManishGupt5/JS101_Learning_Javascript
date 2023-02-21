// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function
// creatin substring using 2nd method of function making

let substring= function(string,start,end){
  if(start==NaN){start=0;}
  if(end==NaN){end=0;}
  if(start>end){let a=end;end=start;start=a;}

  if(start==undefined){start=0;end=string.length;}
  if(end==undefined){end=str.length;}
 
  if(start==end){start=0;end=0;}
  

  if(start<0){start=0;}
  if(end<0){end=0;}
  if(start>string.length){start=string.length}
  if(end>string.length){end=string.length;}

let result="";
  for(let i=start; i<end; i++){
    result+= string[i];
  }

  return result;
}

let str = 'Masai School';
console.log(  substring(str) );
//Tested with others all possible arguments