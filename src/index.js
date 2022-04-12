import "./styles.css";

class Car {
  constructor(name) {
    this.brand = name;
  }

  drive() {
    return "Drive...";
  }
}

class Lancer extends Car {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

const car = new Lancer("Lancer", "DD5");
const data = car.drive();

document.getElementById("app").innerHTML = data;
