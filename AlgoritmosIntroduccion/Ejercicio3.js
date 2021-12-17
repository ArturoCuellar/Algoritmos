let cadena = prompt("Una palabra:");
cadenaVacia(cadena);
function cadenaVacia(a){
    if(a!=""){
        alert("No esta vacia\nLa palabra es: "+ a);
        alert("El primer caracter es: "+a.charAt(0));
    }else{
        alert("Esta vacia")
    }
}