/*
Finding Prime number within given value
*/
let a = 200;
for (let i = 2; i <= a; i++) {
  let flag = false;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = true; break;
    }
  }
  if (flag == false) { console.log(i); }
  else { flag = false; }
}
