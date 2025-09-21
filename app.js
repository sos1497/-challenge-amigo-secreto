// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo () {
    let nombreAmigo= document.getElementById("amigo").value;
    if (nombreAmigo==''){
        alert("Por favor, inserte un nombre.")
    } else if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya esta agregado, ingrese un nombre distinto")
        document.querySelector('#amigo').value='';
    } else {
    amigos.push(nombreAmigo)
    document.querySelector('#amigo').value='';
    listaAmigo();
    }
}

function listaAmigo () {
    let listaAmigo=document.getElementById("listaAmigos");
        listaAmigo.innerHTML=""
    for (let i=0; i<amigos.length; i++) {
        let amigo= document.createElement("li");
        amigo.textContent = amigos[i];
        listaAmigo.appendChild(amigo);
    }
    
}

function sortearAmigo () {
    if (amigos.length==0){
        alert("No hay amigos agregados")
        return;
    }
    let amigoSecreto=amigos[Math.floor(Math.random()*amigos.length)]
    document.getElementById("resultado").innerHTML= `El amigo secreto es: ${amigoSecreto}`
}