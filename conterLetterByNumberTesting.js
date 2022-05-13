var  string;

//function counter letter whitout no metter its potition.

function counterLetters(str){
  var result = [];
  var count = 1;
  str = str.split('');
  str.sort();

  for(i=1; i <= str.length; i++){
    if(str[i] === str[i - 1]){
      count++;
    } else {
      result.push(str[i -1] + count);
      count = 1;
    }
  }

  result = result.join('');
  return result  
}


//here counter letter according its number.

function counterNumberOfLetters(str){
var result = '';
  
  for(i=1; i < str.length; i++){
    var numberOfLetter = str[i];
    for(j = 0; j < numberOfLetter; j++){
      result += str[i - 1];
    }
  }
  
  return result
}


function testing(fn, data, output, testTextOkay, testTextBad){
  console.log(fn(data) === output ? testTextOkay : testTextBad)
}


var  string = 'abcdabcdaadd';
testing(counterLetters, string, 'a4b2c2d4', 'The test #1 is correct, the function counterLetters return the hoped.', 'The function counterLetters is worng, dont return the hoped');

var  string = 'eemurcielagoee';
testing(counterLetters, string, 'a1c1e5g1i1l1m1o1r1u1', 'The test #2 is correct, the function counterLetters return the hoped.', 'The function counterLetters is worng, dont return the hoped');

var  string = 'zzzzzzzz';
testing(counterLetters, string, 'z8', 'The test #3 is correct, the function counterLetters return the hoped.', 'The function counterLetters is worng, dont return the hoped');

//here count letters according to his number.

var  string = 'a2b3c4d1';
testing(counterNumberOfLetters, string, 'aabbbccccd', '-Test #1. The function counterNumberOfLetters is correct.', 'The return is worng, diferent to hoped("aabbbccccd").')

var  string = 'z4p9s2h6';
testing(counterNumberOfLetters, string, 'zzzzpppppppppsshhhhhh', '-Test #2. The function counterNumberOfLetters is correct.', 'The return is worng, diferent to hoped("aabbbccccd").')

var  string = 'a4j1s2n3m4';
testing(counterNumberOfLetters, string, 'aaaajssnnnmmmm', '-Test #3. The function counterNumberOfLetters is correct.', 'The return is worng, diferent to hoped("aabbbccccd").')