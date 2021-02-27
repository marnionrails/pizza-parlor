function Pizza() {
  this.topping = [];
  this.size = 0;
}

Pizza.prototype.cost(function() {
  
});

//4 dollars per slice, .5 cents per topping
//choices of toppings: cheese, pepperoni, mushrooms, eggplant

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    

  });
});