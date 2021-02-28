function Pizza() {
  this.toppings = [];
  this.size = "";
  this.price = 0;
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


Pizza.prototype.totalCost = function() {
  let numOfToppings = this.toppings.length;
  this.price = pizza.baseCost("8-inch") + (.5 * numOfToppings);
  console.log(this.price);
}

let pizza = new Pizza();
pizza.toppings = ["cheese", "pepperoni"];
console.log(pizza.baseCost("8-inch"));
pizza.totalCost();


  /* console.log(pizza.toppings);
  console.log(pizza.price); */

/* let pizza = new Pizza();
pizza.cost("something else");
console.log(pizza.price); */

Pizza.prototype.addToppings = function(topping) { 
    this.toppings.push(topping);
  }

