var btn_piedra =document.getElementById('piedra') ;
var btn_papel =document.getElementById('papel') ;
var btn_tijeras =document.getElementById('tijeras') ;
var img_user =document.getElementById('user') ;
var img_cpu =document.getElementById('cpu') ;
var winner = document.getElementById('ganador').innerText;
var btn_iniciar = document.getElementById("Iniciar");
var user_point = document.getElementById('user-point').innerText;
var cpu_point = document.getElementById('cpu-point').innerText;
var user;
var cpu = num_aleatorio();
function num_aleatorio() {
    return parseInt(Math.random() * 3);
}
function qwe(opcion) {
    if (opcion == 0) {
        img_cpu.src = "./img/Piedra.png";
    } else if (opcion == 1) {
        img_cpu.src = "./img/Papel.png";
    } else {
        img_cpu.src = "./img/Tijeras.png";
    }
}
function game(user, cpu) {
    if (user != cpu) {
        if (
		(user === 0  && cpu === 2) || 
		(user === 1  && cpu === 0) || 
		(user === 2  && cpu === 1) 
        ){
            user_point++;
            document.getElementById('user-point').innerText = user_point;
            winner = "Ganador es User";
            document.getElementById('ganador').innerText = winner;
        }
        else if(user == undefined) {
            alert("Escoje una opcion")
        }
        else{
            winner = "Ganador es CPU";
            document.getElementById('ganador').innerText = winner;
            cpu_point++;
            document.getElementById('cpu-point').innerText = cpu_point;
        }
    }
    else if(user === cpu) {
        winner = "Empate";
            document.getElementById('ganador').innerText = winner;
    }
    else {
        alert("Error")
    } 
};

btn_iniciar.onclick = function() {
    cpu = num_aleatorio();
    qwe(cpu);
    game(user, cpu);
}
btn_piedra.onclick = function() {
    user = 0;
    img_user.src = "./img/Piedra.png";
}
btn_papel.onclick = function() {
    user = 1;
    img_user.src = "./img/Papel.png";
}
btn_tijeras.onclick = function() {
    user = 2;
    img_user.src = "./img/Tijeras.png";
	
}
