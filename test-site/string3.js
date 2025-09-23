/* 
    Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
    In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
    There is one more small fix to do — add a period to the end of the quote, and save the final version in a variable called finalQuote.
*/
const quote = "I dO nOT lIke gREen eGgS anD HAM";

// Don't edit the code above here!

// Add your code here
let fixedQuote = quote.toLowerCase();
const letter1 = fixedQuote.slice(0, 1);
fixedQuote = fixedQuote.replace(letter1, letter1.toUpperCase());
fixedQuote = fixedQuote.replace("green eggs and ham", "oatmush");
finalQuote = `${fixedQuote}.`;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);