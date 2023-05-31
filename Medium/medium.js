const fs = require('fs');

let arrPlanets = fs.readFileSync('medium.txt', 'utf-8').split(',')

for(i=0; i < arrPlanets.length; i++){
    console.log(arrPlanets[i]);
}