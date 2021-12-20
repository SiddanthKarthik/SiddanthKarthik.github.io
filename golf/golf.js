var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Nosotros preferimos el golf más que el voleibol, porque el golf es muy difícil, pero es poco interesante. Los estudiantes de Edgemont no les gusta ver el golf, porque no es muy divertido, pero los estudiantes les gusta jugar al golf.") {
        document.getElementById("changer").innerHTML = "Rohan sabe las reglas de golf, pero Sid no sabe las reglas de golf. A Rohan le gusta practicar el golf porque es 'muy difícil, pero es muy interesante.'"
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos el golf más que el voleibol, porque el golf es muy difícil, pero es poco interesante. Los estudiantes de Edgemont no les gusta ver el golf, porque no es muy divertido, pero los estudiantes les gusta jugar al golf."
    }
}