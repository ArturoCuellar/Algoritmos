//Ejercicio 1
function maxnumber(){
    let numbers=[3,5,7,1,6];
   
    var Max= Math.max.apply(null,numbers);
    console.log(Max);
}

maxnumber()