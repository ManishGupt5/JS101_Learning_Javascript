let name=["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age =[32, 30, 26, 28, 44];
let details =[];
let Above30="";

for(let i=0; i<name.length; i++){
  let a={};
  a['name']=name[i]; 
  a['age']=age[i];
  details.push(a);
}
for(let i=0; i<details.length; i++){
  let temp=details[i];
  if(temp['age']>30){
    Above30 += temp['name']+" ";
  }
}


console.log(Above30);