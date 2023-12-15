class Circle {
  static createCircleUsingDiameterInfo(diameter) {
    return new Circle(diameter / 2);
  }

  constructor(radius) {
    this.circleRadius = radius;
  }

  getArea() {
    return (Math.PI * this.circleRadius ** 2).toFixed(2);
  }

  getCircumference() {
    return (2 * Math.PI * this.circleRadius).toFixed(2);
  }
}

let circle1 = new Circle(2);

// circle1 .createCircleUsingDiameterInfo(); //! Error, static methods cant be used on new instances

let circle2 = Circle.createCircleUsingDiameterInfo(4);

console.log(circle2);
console.log(circle1);

// console.log(circle1.getCircumference());
// console.log(circle1.getArea());
