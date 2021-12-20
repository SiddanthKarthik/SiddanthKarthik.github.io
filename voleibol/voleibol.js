var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Nosotros pensamos que el voleibol es muy aburrido. Nosotros preferimos el voleibol menos que los otros deportes porque a nosotros no nos gusta el voleibol. Nosotros pensamos que el béisbol es tan divertido como el voleibol.") {
        document.getElementById("changer").innerHTML = "Nosotros no sabemos las reglas del voleibol. Nosotros no conocemos a famosos jugadores en los equipos de voleibol. Nosotros sabemos que el voleibol es un deporte en los olímpicos."
    }else {
        document.getElementById("changer").innerHTML= "Nosotros pensamos que el voleibol es muy aburrido. Nosotros preferimos el voleibol menos que los otros deportes porque a nosotros no nos gusta el voleibol. Nosotros pensamos que el béisbol es tan divertido como el voleibol."
    }
}