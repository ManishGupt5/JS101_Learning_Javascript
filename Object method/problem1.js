let rectangle ={
  length:14, width:7 ,
  area:function(){
    return (this.length*this.width);
  },
  perimeter:function(){
  console.log( 2*(this.length+this.width) );
  }
}

console.log(rectangle.area());
rectangle.perimeter();