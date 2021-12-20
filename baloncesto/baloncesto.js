var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Yo prefiero el futbol que el futbol americano, porque el futbol americano es muy peligroso. Pero el futbol y el futbol americano es muy divertido. Yo pienso el futbol es mas interesante que el baloncesto, pero mas estudiantes piensan el baloncesto es mas interesante.") {
        document.getElementById("changer").innerHTML = "HELLO"
    }else {
        document.getElementById("changer").innerHTML= "Yo prefiero el futbol que el futbol americano, porque el futbol americano es muy peligroso. Pero el futbol y el futbol americano es muy divertido. Yo pienso el futbol es mas interesante que el baloncesto, pero mas estudiantes piensan el baloncesto es mas interesante."
    }
}