/*
For this task you are given three variables:

    machineActive: Contains an indicator of whether the answer machine is switched on or not (true/false).
    score: Contains your score in an imaginary game. This score is fed into the answer machine, which provides a response to indicate how well you did.
    response: Begins uninitialized, but is later used to store a response that will be printed to the output panel.
*/

let response;
let score = 75;
let machineActive = false;

if(!machineActive){
  response = "Turn On The F*ing Machine"
}else{

    if(score<0||score>100) {
        response = "This is not possible, an error has occurred.";
    }else if(score>=0&&score<=19) {
        response =  "That was a terrible score — total fail!"
    }else if(score>=20&&score<=39){
        response =  "You know some things, but it's a pretty bad score. Needs improvement."
    }else if(score>=40&&score<=69) {
        response = "You did a passable job, not bad!";
    }else if(score >=70&&score<=89) {
        response = "That's a great score, you really know your stuff.";
    }else if(score>=90&&score<=100){ 
        response = "What an amazing score! Did you cheat? Are you for real?"
    }
}
console.log(`Your score is ${score}`);
console.log(response);
