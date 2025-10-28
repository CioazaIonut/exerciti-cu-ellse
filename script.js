// Verifică dacă un număr este par sau impar:

let numar = parseInt(prompt("Introdu un număr:"));

if (numar % 2 === 0) {
  console.log("Numărul este par");
} else {
  console.log("Numărul este impar");
}

// Verifică dacă un utilizator are peste 21 de ani pentru
// a putea intra într-un club:

let varsta = parseInt(prompt("Introduceți vârsta:"));

if (varsta >= 21) {
  console.log("Poți intra");
} else {
  console.log("Nu poți intra");
}

// Verifică dacă un cuvânt are mai mult de 5 caractere:

let cuvant = prompt("Scrie un cuvânt:");

if (cuvant.length > 5) {
  console.log("Cuvântul are mai mult de 5 caractere");
} else {
  console.log("Cuvântul are 5 sau mai puține caractere");
}

// Verifică dacă un utilizator are suficient credit pentru o achiziție:

let credit = parseFloat(prompt("Cât credit ai?"));
let pret = 50;

if (credit >= pret) {
  console.log("Poți face achiziția");
} else {
  console.log("Nu ai credit suficient");
}

// Verifică dacă o persoană este adult sau minor:
let varstaOm = parseInt(prompt("Introdu vârsta:"));

if (varstaOm >= 18) {
  console.log("Este adult");
} else {
  console.log("Este minor");
}
