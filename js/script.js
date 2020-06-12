// Unsecure Password Generator JS

// Richiesta del nome all'utente
var nomeUtente = prompt("Qual è il tuo nome?");
console.log(nomeUtente);
// Richiesta del cognome all'utente
var cognomeUtente = prompt("Qual è il tuo cognome?");
console.log(cognomeUtente);
// Richiesta colore preferito
var coloreUtente = prompt("Qual è il tuo colore preferito?");
console.log(coloreUtente);

const luckyNumber = 19;

document.getElementById('title').innerHTML = "La tua password insicura è: " + nomeUtente + cognomeUtente + coloreUtente + luckyNumber;
