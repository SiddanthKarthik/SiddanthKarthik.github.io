var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Nosotros preferimos esquiar más que practicar el voleibol, porque esquiar es más interesante. Tambien nos gusta esquiar porque es poco difícil, pero es muy divertido. Y más estudiantes esquiar que jugar al golf.") {
        document.getElementById("changer").innerHTML = ""
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos esquiar más que practicar el voleibol, porque esquiar es más interesante. Tambien nos gusta esquiar porque es poco difícil, pero es muy divertido. Y más estudiantes esquiar que jugar al golf."
    }
}