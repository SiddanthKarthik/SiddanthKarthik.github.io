

var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;

    if(currentState == "Nosotros preferimos el fútbol más que el fútbol americano, porque el fútbol americano es muy peligroso. Pero el fútbol y el fútbol americano son muy divertidos. Nosotros pensamos el fútbol es más interesante que el baloncesto, pero más estudiantes piensan que el baloncesto es más interesante.") {
        document.getElementById("changer").innerHTML = "Nosotros sabemos jugar f&uacutetbol muy bien. Nosotros conocemos las reglas, y los equipos de f&uacutetbol. Nosotros conocemos a muchos jugadores famosos."
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos el f&uacutetbol m&aacutes que el f&uacutetbol americano, porque el f&uacutetbol americano es muy peligroso. Pero el f&uacutetbol y el fútbol americano son muy divertidos. Nosotros pensamos el f&uacutetbol es m&aacutes interesante que el baloncesto, pero m&aacutes estudiantes piensan que el baloncesto es m&aacutes interesante."
    }
}