var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Nosotros preferimos el hockey más que el voleibol porque el voleibol es menos interesante. Los estudiantes de Edgemont les gusta ver la hockey más que ver el otro deportes porque el hockey es más divertido.") {
        document.getElementById("changer").innerHTML = "Nosotros conocemos los tipos de hockey, pero Edgemont tiene el equipo de hockey sobre hielo."
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos el hockey más que el voleibol porque el voleibol es menos interesante. Los estudiantes de Edgemont les gusta ver la hockey más que ver el otro deportes porque el hockey es más divertido."
    }
}