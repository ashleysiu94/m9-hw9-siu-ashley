//Create a class called Desserts and pass it two properties called "type" and "calories"

class Desserts {
  constructor (type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

//Create a subclass called IceCream that extends Desserts
class IceCream extends Desserts {
  constructor (flavor, scoops) {
    super(type);
    super(calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }
}
