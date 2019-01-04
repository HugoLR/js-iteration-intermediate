/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below I have baskets full of lemons

function findLongestWord(str) {
  //Convertimos nuestro string en array
  var words = str.split(" ")
  //Declaramos la variable que se retornara al final(debe de ser con la longitud más grande)
  var longestWord = ""
  //Primera iteración (por palabra)
  for (var i = 0; i < words.length; i++){
    //Segunda iteración (por letra)
    for(var j = 0; j < words[i].length; j++){
      if(words[i][j] === "'" ){
        //Si la letra es comilla simple la usamos para separar la palabra
        var newWord = words[i].split("'")
        //Unimos de nuevo el string sin la comilla simple
        words[i] = newWord.join('')
        console.log(words)
      } else if (words[i][j] === "."){
        //Si la letra es punto la usamos para separar la palabra
        var newWord = words[i].split("'")
        //Unimos de nuevo el string sin la comilla simple
        words[i] = newWord.join('')
      }
    }
    //Comparamos cada palabra con la anterior, si es mayor se guarda en longest word 
    if(words[i].length > longestWord.length){
      longestWord = words[i]
    }
  }
  return longestWord
}


// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-04');
  console.log('ex-04\n%cFunction: findLongestWord', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return "baskets" from "I have baskets full of lemons"');
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')

console.log('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')

//  punctuation should NOT be included in the evaluation for the longest word
console.log('Should return "Texas" from "don’t mess with Texas"');
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

console.log('Should return "time" from "a time to act."');
console.assert(findLongestWord('a time to act.') === 'time')

console.log('\n')
