let a = "MasaiSchool";

let b = {};

for (let i = 0; i < a.length; i++) {
  if (b[a[i]] == undefined) {
    b[a[i]] = 1;
  }
  else {
    b[a[i]]++;//writing key means value of key
  }
}
console.log(b);