function Pizza() {
  this.toppings = [];
  this.size = "";
  this.price = 0;
}

Pizza.prototype.addToppings = function(topping) { 
  this.toppings.push(topping);
}

Pizza.prototype.baseCost = function(size) {
    this.size = size;
    if (this.size === "8-inch") {
        this.price = 6;
    } else if (this.size === "12-inch") {
        this.price = 8;
    } else {
      alert("Opps! Something went wrong!");
    }
    return this.price;
  };


Pizza.prototype.totalCost = function(size) {
  let numOfToppings = this.toppings.length;
  this.price = pizza.baseCost(size) + (.5 * numOfToppings);
}

/* let pizza = new Pizza();
pizza.toppings = ["cheese", "pepperoni"];
console.log(pizza.baseCost("8-inch"));
pizza.totalCost(); */

let pizza = new Pizza();
$(document).ready(function() { 
  $("#pizza").submit(function(event) {
    event.preventDefault(); 
    let size_choice = $("input[name='size']:checked").val();
    $.each($("input[name='topping']:checked"), function(){
      pizza.addToppings($(this).val());
    });
    pizza.totalCost(size_choice);
  });   
});
