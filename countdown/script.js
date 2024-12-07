"use strict";
let a = parseInt(prompt("Enter count value"), 10);
if(isNaN(a)){
    document.getElementById("final").style.color = "red";
    document.getElementById("final").innerHTML = "Null Input !";
}
else{
    for(let i=0; i<a; i++){
        setTimeout( () =>{
            document.getElementById("but").innerHTML= a-i;
        },i*1000);
    }
    setTimeout(() => {
        document.getElementById("final").style.color = " dimgrey";
        document.getElementById("final").style.width = "300px";
        document.getElementById("final").innerHTML = "Done!";
    }, a * 1000);
}