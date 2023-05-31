const fs = require ("fs");

const file = process.argv[2];

function countSpaces(file){
    let files = fs.readFileSync(file).toString();

    let arr = files.split('\n');

    return arr.length-1;
}

console.log(countSpaces(file))