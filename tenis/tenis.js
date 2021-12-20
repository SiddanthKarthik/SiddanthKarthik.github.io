

var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;

    if(currentState == "Nosotros preferimos el tenis tanto como el futbol, pero preferimos el tenis más que el baloncesto. Los estudiantes les gusta el tenis porque es muy fascinante, pero es muy cansante.") {
        document.getElementById("changer").innerHTML = "Nosotros conocemos que hay diferentes tipos de canchas, pero Edgemont tiene la cancha de cemento. Nos gusta la cancha de cemento porque correr en la cancha de cemento es muy f&aacutecil."
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos el tenis tanto como el futbol, pero preferimos el tenis más que el baloncesto. Los estudiantes les gusta el tenis porque es muy fascinante, pero es muy cansante."
    }
}