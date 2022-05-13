var arra = "aaaattadqqq";
var expresion = /[a-z]/gi;
var emparejamiento = arra.match(expresion);



var hola = function(){

    var count = 0;
    var result = [];
    for(i=0; i < emparejamiento.length; i++){
        for(j=0; j < emparejamiento.length; j++){

            if(emparejamiento[i]===emparejamiento[j]){
               count++;
            }
        }

        var letras = emparejamiento[i]+count;
        if(result.indexOf(letras)===-1){
        result.push(letras);
     
        }

        count=0;
        j=0;
    }
    
   return result
}
hola();


// if(emparejamiento[i]===emparejamiento[i+1]){
//     count++;
//   }else{
//       var result = result + emparejamiento[i] + (count+1);
//       count = 0;
//   }