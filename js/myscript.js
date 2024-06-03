// Chiedi all’utente il suo nome
let userName = prompt("Inserisci il tuo nome")
// Chiedi il suo cognome
let userSurname = prompt("Inserisci il tuo cognome")
// Chiedi il suo colore preferito
let userColor = prompt("Inserisci il tuo colore preferito")
// Scrivi sulla pagina nomecognomecolorepreferito23
let risultato = ` ${userName}${userSurname}${userColor}23`

console.log(risultato);

document.getElementById("password").innerHTML = risultato;