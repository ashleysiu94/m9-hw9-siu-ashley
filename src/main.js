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
