'use strict';

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const usersName = ["leonardo", "alessandro", "sara"];
const usersSurname = ["Monti", "Tyson", "Alba"];

const randomName = Math.floor(Math.random() * usersName.length);
const randomSurname = Math.floor(Math.random() * usersSurname.length);

console.log(`Welcome ${usersSurname[randomSurname]} ${usersName[randomName]}`);