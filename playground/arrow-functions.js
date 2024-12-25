// function getData(x) {
//   return x * x;
// }

// console.log(getData(5)); // 25

// let getSquare = function (x) {
//   return x * x;
// };

//For single return we don't need to use curly brackets and return keyword
let getSquare = (x) => {
  return x * x;
};
// let getSquare = (x) => x * x;
console.log(getSquare(4)); // 16

//⭐️For object method best use normal function⭐️
// const object = {
//     name: "John",
//     getName: function () {
//       console.log("The name  is " + this.name);
//     },
//   };
//   object.getName(); // The name is John

//⭐️For best practive dont use function keyword  ⭐️
const object1 = {
  name: "John from object 1",
  getName() {
    console.log("The name is " + this.name);
  },
};
object1.getName(); // The name is John

const object = {
  name: "John",
  visitors: ["visitor1", "visitor2", "visitor3"],
  getName() {
    const that = this;
    console.log("The name is " + this.name);
    //Using normal function
    this.visitors.forEach(function (visitor) {
      // Here this refer to window object and there is no object in the lexical scope
      console.log(`${that.name} invites ${visitor}`);
    });
  },
  getNameUsingArrowFunc() {
    console.log("The name is " + this.name);
    //Using arrow function
    //And this refer to the object so that we can directly access the this value inside forEach
    this.visitors.forEach((visitor) => {
      // Here this refer to the object
      console.log(`${this.name} invites ${visitor}`);
    });
  },
};
object.getName(); // Object method should be normal function
object.getNameUsingArrowFunc(); // but in the nested method function we can use arrow function
