var a = parseInt(prompt("Dame el primer numero:"));
var b = parseInt(prompt("Dame el primer numero:"));
var c = parseInt(prompt("Dame el primer numero:"));
var d = parseInt(prompt("Dame el primer numero:"));
var e = parseInt(prompt("Dame el primer numero:"));

comparar(a,b,c,d,e);

function comparar(a,b,c,d,e){
    if(a>b && a>c && a>d && a>e){
        alert(a);
    }
    if(b>a && b>c && b>d && b>e){
        alert(b);
    }
    if(c>a && c>b && c>d && c>e){
        alert(c);
    }
    if(d>a && d>b && d>c && d>e){
        alert(d);
    }
    if(e>a && e>b && e>c && e>d){
        alert(e);
    }
}