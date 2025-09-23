/* 
    Retrieve the length of the quote, and store it in a variable called quoteLength.
    Find the index position where substring appears in quote, and store that value in a variable called index.
    Use a combination of the variables you have and available string properties/methods to trim down the original quote to "I do not like green eggs and ham.", and store it in a variable called revisedQuote.
*/

const quote = "I do not like green eggs and ham. I do not like them, Sam-I-Am.";
const substring = "green eggs and ham";

// Don't edit the code above here!

// Add your code here
const quoteLength = quote.length;

const index = quote.indexOf(substring);

const revisedQuote = quote.slice(0, index + substring.length + 1);
// Don't edit the code below here!

const section = document.querySelector("section");
section.innerHTML = " ";
const para1 = document.createElement("p");
para1.textContent = `The quote is ${quoteLength} characters long.`;
const para2 = document.createElement("p");
para2.textContent = revisedQuote;
section.appendChild(para1);
section.appendChild(para2);