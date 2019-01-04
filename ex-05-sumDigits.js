/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 **/

 // ++ YOUR CODE below 123

function sumDigits(number) {

  //Separamos cada numero volviendolo string
  var sNumber = number.toString();

  //Metemos cada número en un array
  var suma = sNumber.split("")
  //Creamos una variable para ir sumando cada número
  var result = 0;

  for (var i = 0; i < suma.length; i ++) {
    //
    result += parseInt(suma[i])
  }
  return result;
}









 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
 // *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-05');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return 6 from "123"');
console.assert(sumDigits(123) === 6)

console.log('Should return 11 from "911"');
console.assert(sumDigits(911) === 11)

console.log('Should return 12 from "8040"');
console.assert(sumDigits(8040) === 12)

console.log('Should return 15 from "173220"');
console.assert(sumDigits(173220) === 15)

console.log('\n')
