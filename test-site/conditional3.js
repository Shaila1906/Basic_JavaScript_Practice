let machineActive = true;
let pwd = "chxeese";

let machineResult;
let pwdResult;

if (machineActive) {
    machineResult = "The Machine is ON";
    pwdResult =
        pwd === "cheese" ? "Logged in successfully" : "Login attempt was not successful"
    console.log(pwdResult);
} else {
    machineResult = "The Machine is OFF";
}
console.log(machineResult);
