var switcher = document.getElementById("switchButton");
var changer = document.getElementById("changer");
var currentState = "";

function switcheroo() {
    currentState = document.getElementById("changer").innerHTML;
    if(currentState == "Nosotros preferimos el baloncesto más que el béisbol, porque el baloncesto es muy interesante. Muy estudiantes de Edgemont piensan ver y jugar al baloncesto es muy divertido. Tambien el baloncesto es menos peligroso que el fútbol americano, y no es muy difícil.") {
        document.getElementById("changer").innerHTML = "Nosotros no conocemos las reglas de baloncesto, pero Rohan piensa ver el baloncesto es poco divertido. "
    }else {
        document.getElementById("changer").innerHTML= "Nosotros preferimos el baloncesto más que el béisbol, porque el baloncesto es muy interesante. Muy estudiantes de Edgemont piensan ver y jugar al baloncesto es muy divertido. Tambien el baloncesto es menos peligroso que el fútbol americano, y no es muy difícil."
    }
}