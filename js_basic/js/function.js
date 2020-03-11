// function getRectanle(height, width){
//   return height * width;
// }

// console.log(getRectanle(3, 5));

// var getRectanle = function(height, width){
//   return height * width;
// };

// console.log(getRectanle(3, 5));

var getRectanle = new Function('height', 'width', 'return height * width' );
console.log(getRectanle(3, 5));