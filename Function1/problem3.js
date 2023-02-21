function check_prime(x){
  let a=0;
  for(let i=2; i<x; i++){
      if(x%i==0){a++;}
    }
  if(a==0){return 'Yes'}
  else{return 'No'}
  }
// check_prime(201);

function Prime_number(y){

  for(let i=2; i<=y; i++){
    if(check_prime(i)==="No"){console.log(i);}//1 is non prime & non complex
  }
}

Prime_number(23);