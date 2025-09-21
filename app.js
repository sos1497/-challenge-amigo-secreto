// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo () {
    let nombreAmigo= document.getElementById("amigo").value;
    if (nombreAmigo==''){
        alert("Por favor, inserte un nombre.")
        return;
    } 
    amigos.push(nombreAmigo)
    document.querySelector('#amigo').value='';
    listaAmigo();
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

}