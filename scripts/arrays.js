"use strict";

/*
    Author: Sahara Krompel 
    Date: 1 June 2025
    Filename: arrays.js
    Purpose: Assess ability to apply arrays, implement looping, and evaluate code based on conditional statements
    Citations: https://www.w3schools.com/jsref/met_document_createelement.asp, 
               https://www.w3schools.com/js/js_array_sort.asp

*/

// Part 1: Declare, Initialize and Display Arrays

let family = ["Vicente", "Palmira", "Jenny", "Ethan", "Nadija", "Chris", "Vella"];
let relationships = ["Grandfather", "Grandmother", "Mother", "Brother", "Sister", "Uncle", "Aunt"];

let tableHTML = "<table>"
tableHTML += "<tr><th>Name</th><th>Relationship</th></tr>";

for (let i = 0; i < family.length; i++) {
    tableHTML += "<tr>";
    tableHTML += "<td>" + family[i] + "</td>";
    tableHTML += "<td>" + relationships[i] + "</td>";
    tableHTML += "</tr>";
}

tableHTML += "</table>";

document.getElementById("family").innerHTML = tableHTML;

// Part 2: Select Items From an Array

let colors = [];
colors.push("red", "green", "purple", "brown", "yellow", "pink", "blue", "orange");

// https://www.w3schools.com/jsref/met_document_createelement.asp
let allColorsUl = document.createElement("ul");

for (let i = 0; i < colors.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = colors[i];
    allColorsUl.appendChild(li);
}

document.getElementById("allColors").appendChild(allColorsUl);

let pColorsUl = document.createElement("ul");

for (let i = 0; i < colors.length; i++) {
    if (colors[i][0] === "p") {
        let li = document.createElement("li");
        li.innerHTML = colors[i];
        pColorsUl.appendChild(li);
    }
}

document.getElementById("pColors").appendChild(pColorsUl);

let nonBUl = document.createElement("ul");

for (let i = 0; i < colors.length; i++) {
    if (colors[i][0] != "b") {
        let li = document.createElement("li");
        li.innerHTML = colors[i];
        nonBUl.appendChild(li);
    }
}

document.getElementById("nonBColors").appendChild(nonBUl);

let hasNUl = document.createElement("ul");

for (let i = 0; i < colors.length; i++) {
    if (colors[i].includes("n")) {
        let li = document.createElement("li");
        li.innerHTML = colors[i];
        hasNUl.appendChild(li);
    }
}

document.getElementById("filterColors").appendChild(hasNUl);

// Part 3: Sorting Arrays

// Two, Un-Sorted Arrays

let strings = ["November", "Whiskey", "Victor", "Foxtrot", "Sierra"];
let numbers = [11, 5, -9, 26, 13];

let stringsUl = document.createElement("ul");

for (let i = 0; i < strings.length; i++) {
    let li = document.createElement("li");
    li.textContent = strings[i];
    stringsUl.appendChild(li);
}

document.getElementById("twoArrays").appendChild(stringsUl);

let numbersUl = document.createElement("ul");

for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement("li");
    li.textContent = numbers[i];
    numbersUl.appendChild(li);
}

document.getElementById("twoArrays").appendChild(numbersUl);

// Sorted Arrays

// https://www.w3schools.com/js/js_array_sort.asp
strings.sort();
numbers.sort();

let stringsPara = document.createElement("p");
stringsPara.textContent = strings;

let numbersPara = document.createElement("p");
numbersPara.textContent = numbers;

document.getElementById("sortedArrays").appendChild(stringsPara);
document.getElementById("sortedArrays").appendChild(numbersPara);

// Sorted Number Array

// https://www.w3schools.com/js/js_array_sort.asp
numbers.sort((a, b) => a - b);

let sortedNumberPara = document.createElement("p");
sortedNumberPara.textContent = numbers;

document.getElementById("sortedNumberArray").appendChild(sortedNumberPara);

// Part 4: Add Dates to the Footer Section

let lastModified = document.lastModified;
let currentDate = new Date();

let lastModifiedH4 = document.createElement("h4");
let currentDateH4 = document.createElement("h4");

lastModifiedH4.textContent = lastModified;
currentDateH4.textContent = currentDate;

document.getElementById("dates").appendChild(lastModifiedH4);
document.getElementById("dates").appendChild(currentDateH4);