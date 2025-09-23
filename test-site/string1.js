/* qus
    Look up the other half of the quote, and add it to the example inside a variable called quoteEnd.
    Concatenate the two strings together to make a single string containing the complete quote. Save the result inside a variable called finalQuote.
    You'll find that you get an error at this point. Can you fix the problem with quoteStart, so that the full quote displays correctly?
*/

const quoteStart = "Don't judge each day by the harvest you reap, ";

// Add your code here
const qouteEnd = "but by the seeds that you plant.";
const finalQuote = quoteStart + qouteEnd;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = finalQuote;
section.appendChild(para1);