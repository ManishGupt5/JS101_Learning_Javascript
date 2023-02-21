let a= [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];


for(let i=0; i<a.length; i++){
  let str=""
str += a[i].grade + "-";
  let a1=0;let a2=0; 
for(let j=0; j<1; j++){ //1 because it double my a1,a2 values  ...a[i].students.length
  a[i]['students'][1]['marks'].map((a)=>{a2 += a})
  a[i]['students'][0]['marks'].map((a)=>{a1 += a})
}
  if(a1>=a2){str += a[i]['students'][0]['name'] +"-"+a1;}
  else{str += a[i]['students'][1]['name'] +"-"+a2;}
    console.log(str)
  // console.log(a[i].students.length)

}
// V-Prateek-90
// VI-Albert-90
// VII-Sandhya-90
