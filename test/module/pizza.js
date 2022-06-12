function makePizza(size, ...toppings) {
  console.log(`\nMaking a ${size}-inch pizza with the following toppings:`);
  for (topping of toppings) {
    console.log("- " + topping);
  }
}

module.exports = {
  makePizza: makePizza,
};
