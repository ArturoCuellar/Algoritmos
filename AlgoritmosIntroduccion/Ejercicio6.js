let tareasEntregadas = prompt("Cuantas tareas entregaste");

puntuacion(tareasEntregadas);

function puntuacion(tEntregadas){
    if(tEntregadas>=0&&tEntregadas<=15){
        if(tEntregadas<=6){
            alert("Fallaste");
        }
        if(tEntregadas>6&&tEntregadas<=9){
            alert("Insuficiente");
        }
        if(tEntregadas>9&&tEntregadas<=14){
            alert("Bueno");
        }
        if(tEntregadas==15){
            alert("Excelente");
        }
    }else{
        alert("Error")
    }
}