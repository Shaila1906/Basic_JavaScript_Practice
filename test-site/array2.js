/*
    Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
    Store the length of the array in a variable called arrayLength.
    Store the last item in the array in a variable called lastItem.
*/
const myString = "Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri";

// Add your code here
let myArray = myString.split("+");
let arrayLength = myArray.length;
let lastItem = myArray[arrayLength - 1];

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${myArray}`;
const para2 = document.createElement("p");
para2.textContent = `The length of the array is ${arrayLength}.`;
const para3 = document.createElement("p");
para3.textContent = `The last item in the array is "${lastItem}".`;
section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);