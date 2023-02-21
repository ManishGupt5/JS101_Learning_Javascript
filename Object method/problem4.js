let details = {
   result : [], /*this is how we can make arrey in object*/
  addStudent : function(name,rollNumber,...marks){
    let studentId = {};
    studentId.name = name;
    studentId.rollNumber = rollNumber;
    studentId.marks = marks;
    this.result.push(studentId);
  } ,
  print : function(){console.log(this.result)},//function for student details
  least: function(){
    let min = Infinity;
    let lowStudent = null;

    for(let i=0; i<this.result.length; i++){
      let total = this.result[i].marks[0] + this.result[i].marks[1] +this.result[i].marks[2];
      if(total<min){
        min = total;
        lowStudent = this.result[i].name;
      }
    }
    console.log(lowStudent,":",min);
  },//function for lowest total mark student details
  maximum:function(){
let max = -Infinity;
    let topStudent = null;

    for(let i=0; i<this.result.length; i++){
      let total = this.result[i].marks[0] + this.result[i].marks[1] +this.result[i].marks[2];
      if(total>max){
        max = total;
        topStudent = this.result[i].name;
      }
    }
    console.log(topStudent,":",max); 
  }//function for topper student name and total obtain marks
}

  details.addStudent('Manish',1,15,10,12);
details.addStudent('Ram',2,25,8,42);
details.addStudent('Raju',3,25,30,45);
details.print();
details.least();//for min total marks student name and total
details.maximum();
