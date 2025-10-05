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
