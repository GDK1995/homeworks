function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c;

  if (d === 0){
    arr.push( -b / (2 * a) );
  } else if (d > 0){
    let root_1 = ( -b + Math.sqrt(d) ) / (2 * a);
    let root_2 = ( -b - Math.sqrt(d) ) / (2 * a);
    arr.push(root_1, root_2);
  } 
  return arr; // array
}


// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
