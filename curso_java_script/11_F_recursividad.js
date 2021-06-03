//recursividad
"use strict"

function bomba(n){
    console.log(n)
    n--
    if(n==0){
            console.log("PUM");
    }
    else {
        bomba(n)
    }
 }

 console.log(bomba(10));


