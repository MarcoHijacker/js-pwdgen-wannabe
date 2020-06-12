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

// Costante numerica da inserire a fine Password
const luckyNumber = 19;

// Generazione Password Insicura
document.getElementById('genpass').innerHTML = nomeUtente + cognomeUtente + coloreUtente + luckyNumber;
