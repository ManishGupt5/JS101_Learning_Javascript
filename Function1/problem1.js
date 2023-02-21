function check_prime(x){
  let a=0;
  for(let i=2; i<x; i++){
      if(x%i==0){a++;}
    }
  if(a==0){console.log("Prime number");}
  else{console.log("Not a prime number");}
  }
check_prime(201);