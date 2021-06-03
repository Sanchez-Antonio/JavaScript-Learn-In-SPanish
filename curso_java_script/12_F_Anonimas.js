"use strict"

function sumar (n1,n2,multiplicar){
var n3 = n1 + n2
multiplicar(n3);
return n3;
}


sumar(5,5,function(dato){
    console.log("la suma es "+dato);
    console.log("la multiplicacion es " + dato *2 )
})