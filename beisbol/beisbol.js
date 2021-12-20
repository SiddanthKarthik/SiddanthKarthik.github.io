var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Nosotros preferimos el béisbol menos que la natacíon, porque el béisbol es muy aburrido. Pero nosotros pensamos que el béisbol es más interesante que el golf pero más estudiantes piensan el béisbol es más interesante.") {
        document.getElementById("changer").innerHTML = "Nosotros conocemos las reglas de b&eacuteisbol, pero no nos gusta jugar al b&eacuteisbol. Pero Rohan conoce los equipos de b&eacuteisbol, y le gusta los Yankees."
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos el b&eacuteisbol menos que la natac&iacuteon, porque el b&eacuteisbol es muy aburrido. Pero nosotros pensamos que el b&eacuteisbol es m&aacutes interesante que el golf pero m&aacutes estudiantes piensan el b&eacuteisbol es m&aacutes interesante."
    }
}