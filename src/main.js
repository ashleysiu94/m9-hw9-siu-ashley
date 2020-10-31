//Create a class called Desserts and pass it two properties called "type" and "calories"
class Desserts {
  constructor (type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

//Create a subclass called IceCream that extends Desserts
class IceCream extends Desserts {
//Inside of IceCream, pass in the two parent properties, as well as two new properties called "flavor" and "scoops"
  constructor (type, calories, flavor, scoops) {
    super(type);
    super(calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }
//In the subclass IceCream, also include method called "includeSpoon"
  includeSpoon() {
//In this method, log the string 'Here is your spoon!' to the console
    console.log("Here is your spoon!");
  }
}

//At the bottom of your file, create a new instance of IceCream called vanillaIceCream passing in the values "Ice Cream", 340, "Vanilla", and 3
let vanillaIceCream = new IceCream ("Ice Cream", 340, "Vanilla", 3);
//Console.log the new object vanillaIceCream
console.log(vanillaIceCream);
//On a new line, call the includeSpoon() method on vanillaIceCream
vanillaIceCream.includeSpoon();
