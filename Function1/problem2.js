function check_prime(x){
  let a=0;
  for(let i=2; i<x; i++){
      if(x%i==0){a++;}
    }
  if(a==0){return 'Yes'}
  else{return 'No'}
  }
// check_prime(201);

//problem 2 function with modifed problem1 function
function Prime_number(y){

  for(let i=2; i<=y; i++){
    if(check_prime(i)==="Yes"){console.log(i);}
  }
}

Prime_number(23);