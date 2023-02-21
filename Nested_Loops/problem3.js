// Nested Loop
// Where put variable
let R = 10;
let C = 10;
for (let r = 1; r <= R; r++) {
  let a = "";
  for (let c = 1; c <= C; c++) {
    if (r == 1 || r == R) { a = a + "*";}
    else if (c == 1 || c == C) { a = a + "*"; }
    else {
      a = a + " ";
    }
  } console.log(a);
}
