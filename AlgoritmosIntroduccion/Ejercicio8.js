var numUno = parseInt(prompt("Precio del articulo uno"));

var numDos = parseInt(prompt("Precio del articulo uno"));

var numTres = parseInt(prompt("Precio del articulo uno"));

soloDosArticulos(numUno,numDos,numTres);

function soloDosArticulos(a,b,c){
    if(a<c&&b<c){
        alert("Solo te alcanza para:"+
        "\nArticulo uno, precio: $"+a+
        "\nArticulo dos, precio: $"+b
        );
    }
    if(b<a&&c<a){
        alert("Solo te alcanza para:"+
        "\nArticulo uno, precio: $"+b+
        "\nArticulo dos, precio: $"+c
        );
    }
    if(a<b&&c<b){
        alert("Solo te alcanza para:"+
        "\nArticulo uno, precio: $"+a+
        "\nArticulo dos, precio: $"+c
        );
    }
}