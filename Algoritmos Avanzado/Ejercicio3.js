//Ejercicio 3
function maxnumber(){
    let numbersA=[3,5,7,1,6];
    let numbersB=[10,4,2,5,1];
    var maxA= Math.max.apply(null,numbersA);
    var maxB= Math.max.apply(null,numbersB);
    if (maxA > maxB){
        console.log(maxA);
    }else{
        console.log(maxB)
    }
    
}

maxnumber();