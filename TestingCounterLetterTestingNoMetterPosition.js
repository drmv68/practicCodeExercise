var input;


function letterCounter(toCount){
  
  var container = [];
  var counter = 0;
  
  if(typeof(toCount) !== 'string'){
    return null;
  };
    
  var converter = toCount.split('');  
  
    for(i=0; i < converter.length; i++){
      
      for(j=0; j < converter.length; j++){
        
            if(converter[i] === converter[j]){
              counter++;
            };
        };
  
    var letterMoreNumber = converter[i]+counter;
      
    if(container.indexOf(letterMoreNumber)===-1){
      
      container.push(letterMoreNumber);
    };

      
    counter = 0;
    j = 0;
  };
  
  container = container.join('');
  return container;
};

function test(data, expectedResult, messageOk, messageBad){
  console.log(letterCounter(data) === expectedResult ? messageOk : messageBad)
}


var input = 'aaadttqqqa';
test(input, 'a4d1t2q3', 'The function Is Correct', 'The function is incorrect');

var input = 'dddtttcc';
test(input, 'd3t3c2', 'The function Is Correct', 'The function is incorrect');

var input = 'bcaspnxddd';
test(input, 'b1c1a1s1p1n1x1d3', 'The function Is Correct', 'The function is incorrect');

var input = null;
test(input, null, 'The "null" is read', 'Error "null" is not read');

var input = 1;
test(input, null, 'The value is not a string', 'The value is a string');