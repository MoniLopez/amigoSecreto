// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //Almacena los nombres ingresados

function agregarAmigo(){
let nombreInput = document.getElementById('amigo'); //Captura campo de entrada document.getElementByIdlll
let nombre = nombreInput.value;
if (nombre == ""){//Valida entrada, que no esté vacío
    alert("Por favor, inserte un nombre");
}
else{
    amigos.push(nombre);//Agrega valor al array
    actualizarLista();
    nombreInput.value = ''; //Limpia campo de entrada con cadena vacía
    
}
}

function sortearAmigo(){
//Valida que el array amigos no esté vacío
if (amigos.length != 0){
    let indice = Math.floor(Math.random()*amigos.length); //Genera índice aleatorio
    let amigoSecreto = amigos[indice]; //Obtener nombre sorteado
    //Muestra el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSecreto; //Muestra el resultado
}else{
    alert("No hay amigos para sortear");
}
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");//crea elemento li
    for (i = 0; i<amigos.length; i++){
        li.textContent = amigos[i]; //asigna el nombre como texto de li
        lista.appendChild(li);
    }
}