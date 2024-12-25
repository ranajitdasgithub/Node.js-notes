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
const object = {
  name: "John",
  getName: () => {
    console.log("The name  is " + this.name);
  },
};
object.getName(); // The name is undefined
