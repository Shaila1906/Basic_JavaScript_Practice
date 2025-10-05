/*
    Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
    Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". Note that startsWith() is a great way to check whether a string starts with a given character.
*/
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

let eagleIndex = birds.indexOf("Eagles");
birds.splice(eagleIndex, 1);
let eBirds=[];
for(i= 0; i<birds.length; i++){
  if(birds[i].startsWith("E")){
    eBirds.push(birds[i]);
  }else{
    continue;
  }
}
console.log(eBirds);
