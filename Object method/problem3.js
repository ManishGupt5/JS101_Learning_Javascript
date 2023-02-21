var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

let obj ={
data:sales,

  ///////////
  calculateSalesTotals: function(){
    let result =[];
    for(let i=0; i<this.data.length; i++){
      let result1 ={};
      if(this.data[i].discount===undefined){
        result1.item= this.data[i].item;
        result1.original= this.data[i].original;
        result1.sale= this.data[i].original;
        result1.stock= this.data[i].stock;
        result1.item= this.data[i].item;
        result1.total= this.data[i].original * this.data[i].stock
        result.push(result1);
      }
      else{
        result1.discount= this.data[i].discount;
        result1.item= this.data[i].item;
        result1.original= this.data[i].original;
        result1.sale= this.data[i].original - (this.data[i].original*this.data[i].discount);
        result1.stock= this.data[i].stock ;
        result1.item= this.data[i].item;
        result1.total= (this.data[i].original - (this.data[i].original*this.data[i].discount))* (this.data[i].stock );
        result.push(result1);
      }
    }
    console.log(result);
  }
  
}
////////
obj.calculateSalesTotals();