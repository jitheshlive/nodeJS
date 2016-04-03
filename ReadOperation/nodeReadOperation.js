var fs = require("fs");

fs.readFile('ReadFile.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

var data = fs.readFileSync('ReadFile.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
