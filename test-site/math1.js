let finalResult;
let evenOddResult;

let number1 = 6, number2 = 2, number3 = 7, number4 = 1, add12, sub34;
add12 = number1 + number2;
sub34 = number3 - number4;
finalResult = add12 * sub34;
if (finalResult % 2 === 0) {
    evenOddResult = 0;
} else {
    evenOddResult = 1;
}

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
    finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
    evenOddResult === 0
        ? "The final result is even!"
        : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);

