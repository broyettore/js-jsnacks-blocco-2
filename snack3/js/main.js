'use strict';

// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// Name/Surname variables 
const usersName = ["leonardo", "alessandro", "sara"];
const usersSurname = ["Monti", "Tyson", "Alba"];
const nameSurname = [];

for (let i = 0; i < 3; i++) {
    const randomName = Math.floor(Math.random() * usersName.length);
    const randomSurname = Math.floor(Math.random() * usersSurname.length);

    const fullName = `${usersSurname[randomSurname]} ${usersName[randomName]}`;
    nameSurname.push(fullName);
}

console.log(nameSurname)
