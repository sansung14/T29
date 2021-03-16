function lanzamiento() {
    var array= {};
    var suma = 0;
    for(var i=0;i<36000;i++){
        var dado1 = parseInt(6*Math.random()+1);
        var dado2 = parseInt(6*Math.random()+1);
        suma=dado1+dado2;
        if(suma in array){
            calculo = array[suma] +1;
            array[suma]=calculo;  
            
        }else{
            array[suma]=1;
        }
    }
    console.log(array);
    var resuelto = "La suma 2 salio "+array[2] +" veces\n"+
                    "La suma 3 salio "+array[3] +" veces\n"+
                    "La suma 4 salio "+array[4] +" veces\n"+
                    "La suma 5 salio "+array[5] +" veces\n"+
                    "La suma 6 salio "+array[6] +" veces\n"+
                    "La suma 7 salio "+array[7] +" veces\n"+
                    "La suma 8 salio "+array[8] +" veces\n"+
                    "La suma 9 salio "+array[9] +" veces\n"+
                    "La suma 10 salio "+array[10] +" veces\n"+
                    "La suma 11 salio "+array[11] +" veces\n"+
                    "La suma 12 salio "+array[12] +" veces\n";

    return resuelto;
}

alert(lanzamiento());