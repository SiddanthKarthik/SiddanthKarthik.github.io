var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Nosotros preferimos la natacion más que el baloncesto, porque la natacion es muy difícil, pero es muy divertido. Más estudiantes de Edgemont les gusta ver la natacion, porque es muy competetivo.") {
        document.getElementById("changer").innerHTML = "Nosotros conocemos Michael Phelps. Es un muy bien jugador de Estados Unidos. Para los jugadores de natacion, Michael Phelps es un inspiración."
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos la natacion más que el baloncesto, porque la natacion es muy difícil, pero es muy divertido. Más estudiantes de Edgemont les gusta ver la natacion, porque es muy competetivo."
    }
}