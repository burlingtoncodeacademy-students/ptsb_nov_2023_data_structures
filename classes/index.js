/*  
? Classes 
    - Introduced in 2015
    - A function that allows us to create objects
    - Define a category of objects

    - Think of them as a cookie cutter
*/

/*
? Base Structure
    class NameOfClass {
        constructor (parameter/s){
            this.key = parameter
        }
    }

    method(){
        ... code block
    }
*/

// class NameOfClass {
//   constructor(parameter) {
//     this.key = parameter;
//   }

//   methodName() {
//     console.log("Hey im inside of the method within the class");
//   }
// }

class NewObject {
  static name = "name default";
  desc = "desc default";
}

let newObj = new NewObject();

// console.log(newObj.desc);
newObj.name = "sample";

// console.log(newObj);
// console.log(typeof newObj);

// 1   2
class Item {
  // 3              //4
  constructor(name, desc, price) {
    //5  6      7
    this.name = name;
    this.desc = desc;
    this.price = price;
    // this.defaultKey = "default value";
  }
}

/*
    1. Keyword to establish type of function this is
    2. The name of our class. Should be PascalCased
    3. Keyword - is automatically run when the class is instantiated
    4. The parameters for our constructed object. Est. Values of the new object
    5. Keyword - Refers to "this" specific object being created
    6. The name of the key to our new object
    7. The value for those keys being created (set by our parameters)
*/

let itemZero = new Item(); //! Broken item
// console.log(itemZero); // Empty values, no args provided when instantiated

let itemOne = new Item("Beans", "Canned", 0.89);
let itemTwo = new Item("Peas", "Canned", 0.69);

// console.log(itemOne);
// console.log(itemTwo);

let iType = "tomato soup";
let iDesc = "canned";
let iCost = 1.29;

function processItem(i, d, c) {
  return new Item(i, d, c);
}

let useFunction = processItem(iType, iDesc, iCost);

// console.log(useFunction);

class DeptInventory {
  constructor(dept) {
    this.department = dept;
    this.items = [];
  }

  addToInventory(newItem) {
    this.items.push(newItem);
  }
}

let dryFoods = new DeptInventory("Dry Goods");

let itemThree = new Item("corn", "canned", 0.79);
let itemFour = new Item("spaghetti-os", "canned", 0.99);

dryFoods.addToInventory(itemThree);
dryFoods.addToInventory(itemFour);

// console.log(dryFoods);

class Expense {
  static addUpchargeForProfit(wholesale, upchargePercent) {
    let upcharge = wholesale + wholesale * upchargePercent;
    return new Expense(wholesale, upcharge);
  }

  constructor(w, s) {
    this.purchased_price = w;
    this.sell_at = s;
    this.sales_tax;
  }

  addTax(per) {
    let percentage = per;
    let sellingAtCost = this.sell_at;
    this.sales_tax = Number(
      (sellingAtCost + sellingAtCost * percentage).toFixed(2)
    );
  }
}

// let itemToSell = new Expense(5, 7);
let itemToSell = Expense.addUpchargeForProfit(5, 0.4);
let itemToSell2 = Expense.addUpchargeForProfit(1, 0.2);
let itemToSell3 = Expense.addUpchargeForProfit(5, 0.5);

// console.log(itemToSell)s;
itemToSell3.addTax(0.09);

// console.log(itemToSell3);

// console.log(
//   `Price Paid: $${itemToSell3.purchased_price.toFixed(2)}\n
//   Selling Price: $${itemToSell3.sell_at.toFixed(2)}
//   Profit: $${(itemToSell3.sell_at - itemToSell3.purchased_price).toFixed(2)}
// `
// );

// ? Inheritance

class Car {
  constructor(brand) {
    this.brandName = brand;
  }
  present() {
    return `I have a ${this.brandName}`;
  }
}

class Model extends Car {
  constructor(brandName, mod) {
    super(brandName);
    this.model = mod;
  }

  show() {
    return `${this.present()} and it is a ${this.model}`;
  }
}

let myCar1 = new Model("Ford", "Fiesta");
let myCar2 = new Model("Tesla", "Cybertruck");

console.log(myCar1.show());
console.log(myCar2.show());
