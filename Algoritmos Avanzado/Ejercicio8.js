var people = ["Maria", "Dani", "Luis", "Juan", "Camila"]; //Se define el arreglo
function exercise5(){
console.log("La lista es: "+people);
console.log("El elemneto fuera de la lista es: "+people.splice(1,1)+"\nLa nueva lista es: "+people); //Se elimina el elemento en el indice 1, Dani de la lista.
console.log("El elemneto fuera de la lista es: "+people.splice(2,1)+"\nLa nueva lista es: "+people); //Se elimina el elemento en el indice 2, Juan. De la nueva lista
aux = people.splice(1,1); //Se elimina el elemento en el indice 1, Luis. De la nueva lista y se almacena en la variable auxiliar
people.unshift(aux); //Se inserta Luis al inicio de la lista
console.log("El elemneto fuera de la lista es: "+aux+"\nLa nueva lista es: "+people);
people.push(prompt("Por favor, ingresa tu nombre:")); //Se inserta al final de la lista el nombre del usuario
console.log("La nueva lista es: "+people);
console.log("El indice de Maria es: "+people.indexOf('Maria')); //Se imprime el indice donde se encuentra Maria en la lista
return;
}
exercise5();