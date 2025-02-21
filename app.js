// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; //Almacena los nombres ingresados

function agregarAmigo(){
let nombreInput = document.getElementById('amigo'); //Captura campo de entrada document.getElementByIdlll
let nombre = nombreInput.value;
console.log(nombre);
if (nombre == ""){//Valida entrada, que no esté vacío
    alert("Por favor, inserte un nombre");
}
else{
    amigos.push(nombre);//Agrega valor al array
    nombreInput.value = ''; //Limpia campo de entrada con cadena vacía
    actualizarLista();
}
}

function sortearAmigo(){
//Valida que el array amigos no esté vacío
if (amigos.length != 0){
    let indice = Math.floor(Math.random()*amigos.length); //Genera índice aleatorio
    let amigoSecreto = amigos[indice]; //Obtener nombre sorteado
    //Muestra el resultado
    console.log(amigoSecreto);
}else{
    alert("No hay amigos para sortear");
}
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    for (i = 0; i<amigos.length; i++){
        lista.innerHTML = amigos[i];
    }
}