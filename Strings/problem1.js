let str = "My username";
let a = str.toLocaleLowerCase();
let words = 0;
let alpha = "abcdefghijklmnopqrstuvwxyz";
for(let i = 0; i < 26; i++){
  for(let j = 0; j< a.length; j++){
    if(alpha[i]===a[j]){
      words+=1;
    }
  }
}
console.log(words);