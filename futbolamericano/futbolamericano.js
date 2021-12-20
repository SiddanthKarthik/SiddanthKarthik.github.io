

var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Yo prefiero el fútbol americano más que el baloncesto, porque el fútbol americano es más interesante. Pero no me gusta jugar al fútbol porque es poco peligroso. Los estudiantes de Edgemont piensan que viendo el fútbol americano de Edgemont es muy divertido.") {
        document.getElementById("changer").innerHTML = "Nosotros sabemos jugar fútbol americano muy bien. Nosotros no conocemos las reglas de fútbol, pero nosotros conocemos los equipos de fútbol. Rohan conoce a muchos jugadores famosos. A Rohan le gusta los packers y conoce muchos jugadores en los packers."
    }else {
        document.getElementById("changer").innerHTML= "Yo prefiero el fútbol americano más que el baloncesto, porque el fútbol americano es más interesante. Pero no me gusta jugar al fútbol porque es poco peligroso. Los estudiantes de Edgemont piensan que viendo el fútbol americano de Edgemont es muy divertido."
    }
}