/*
    Create an array of three items, and store it in a variable called myArray. The items can be anything you want — how about your favorite foods or bands?
    Next, modify the first two items in the array using bracket notation and assignment.
    Finally, add a new item to the beginning of the array.
*/
// Add your code here
const rightNow = ["Right", "Now", "I", "Am", "Exhausted"];
rightNow[0]= "What";
rightNow[1]= "!";
rightNow.unshift("Guess");

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Array: ${rightNow}`;
section.appendChild(para1);