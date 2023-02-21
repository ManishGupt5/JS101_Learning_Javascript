// # Problem 2

// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input
// ["Rice", "Dal", "Salt"]
// [2, 3, 1]
// [60, 50, 20]

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

let obj ={
  data:[],
  input:function(name,quantity,price){
    for(let i=0; i<name.length; i++){
    let a ={name:null, quantity:null, price:null};
    a.name=name[i]
      a.quantity =quantity[i]
      a.price=price[i]
      this.data.push(a)
    }
  },
total:function(){
  
    let b = ((this.data[0].quantity) * (this.data[0].price)) +
       ((this.data[1].quantity) * (this.data[1].price)) +
       ((this.data[2].quantity) * (this.data[2].price)) 
    console.log(b)
  }
}
obj.input(["Rice", "Dal", "Salt"],[2, 3, 1],[60, 50, 20])
//console.log(obj.data);
obj.total()
