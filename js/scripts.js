function Pizza() {
  this.toppings = [];
  this.size = "";
  this.price = 0;
}

Pizza.prototype.cost = function(size) {
  this.size = size;
  if (this.size === "8-inch") {
    this.price = 6;
  } else if (this.size === "12-inch") {
    this.price = 8;
  } else {
    alert("Opps! Something went wrong!");
  }
}

let pizza = new Pizza();
pizza.cost("8-inch");
console.log(pizza.price);

/* Pizza.prototype.cost(function() {
  
}); */

//4 dollars per slice, .5 cents per topping
//choices of toppings: cheese, pepperoni, mushrooms, eggplant
/* $(document).ready(function() {
  let pizza = new Pizza();

  $("form#pizza").submit(function(event) {
    event.preventDefault();
  
   

  });
}); */