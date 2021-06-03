"use strict"
//function normal
 function namef(n1,n2){

    var n3 = n1+' '+n2;
    
    return n3;
 }
/////function  argument optional
 function live_or_dead(a1,a2=false){
    if(a2==false){
        console.log(a1+" people is dead :C")
    }
    else{
        console.log(a1+" people is live :D")
    }
 }

 //var n1 = prompt("name","your name here");
 //var n2 = prompt("last name","your last name here");

 //var resultado=namef(n1,n2);   

//console.log(resultado)


var people = prompt("name people? ","here")

live_or_dead(people,true)

