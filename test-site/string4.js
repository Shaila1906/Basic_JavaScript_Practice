/*
    Change the string from a regular string literal into a template literal.
    Replace the four asterisks with four template literal embedded expressions. These should be:
        The name of the theorem.
        The two number values we have.
        The length of the hypotenuse of a right-angled triangle, assuming the two other side lengths are the same as the two values we have. You'll need to look up how to calculate this from what you have. Do the calculation inside the placeholder.
*/
const theorem = "Pythagorean theorem";

const a = 5;
const b = 8;

// Don't edit the code above here!

// Edit the string literal
const myString =
  `Using ${theorem}, we can work out that if the two shortest sides of a right-angled triangle have lengths of ${a} and ${b}, the length of the hypotenuse is ${Math.sqrt(a**2 + b**2)}.`;

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = myString;
section.appendChild(para1);