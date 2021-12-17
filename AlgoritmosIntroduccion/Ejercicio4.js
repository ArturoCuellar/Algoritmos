//Programa 4
let str1 = prompt("Dame el texto");
let str2 = prompt("Otro texto");

function compare(str1,str2){
    if(str1.toLowerCase()===str2.toLowerCase()){
        alert(true);
    }else{
        alert(false);
    }
}
compare(str1,str2);