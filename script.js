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

// Verifică dacă o persoană are permisul de conducere
// (vârsta minimă 18 ani):

let varstaPermis = parseInt(prompt("Introdu vârsta ta:"));

if (varstaPermis >= 18) {
  console.log("Poți conduce");
} else {
  console.log("Nu poți conduce încă");
}

// Verifică dacă un număr este pozitiv sau negativ:

let numarDiferit = parseFloat(prompt("Introdu un număr:"));

if (numarDiferit >= 0) {
  console.log("Numărul este pozitiv");
} else {
  console.log("Numărul este negativ");
}

// Verifică dacă o literă este vocală sau consoană:

let litera = prompt("Scrie o literă:").toLowerCase();

if (
  litera === "a" ||
  litera === "e" ||
  litera === "i" ||
  litera === "o" ||
  litera === "u"
) {
  console.log("Litera este vocală");
} else {
  console.log("Litera este consoană");
}

// Verifică dacă un număr se încadrează într-un interval:

let scor = parseInt(prompt("Introdu scorul tău (0-100):"));

if (scor >= 50) {
  console.log("Ai trecut examenul");
} else {
  console.log("Nu ai trecut examenul");
}

// Verifică dacă utilizatorul are dreptul sa acceseze o
// secțiune restricționată:

let parola = prompt("Introdu parola:");

if (parola === "admin123") {
  console.log("Acces permis");
} else {
  console.log("Acces interzis");
}
