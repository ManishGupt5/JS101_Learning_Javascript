let a= ["Lokesh", "Gopal", "gopal",'Lokesh',"lokesh", "gohan", "garima", "Pihu", "Naman"]
let a1={};
for(let i=0; i<a.length; i++){
  a1[a[i]]='unique keys properties'+i;            //value would be update but not make same keys(case sensitive)
}
console.log(a1);

//console.log(Object.keys(a1));   for printing keys in arreys (a1)!=[a1]
//for upadate key name

