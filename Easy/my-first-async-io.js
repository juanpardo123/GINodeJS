const fs = require ("fs");

const file = process.argv[2];
let textArr = []
function countSpaces(file){
fs.readFile(file, "utf-8", function done(err, data){
    if (err) return err.message
    textArr = data.split('\n');
   console.log( data.split('\n').length -1);

   });
}

countSpaces(file)