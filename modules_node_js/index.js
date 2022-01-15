const operations = require('./operations.js');

var args = process.argv.slice(2);

console.log("Adding numbers : ",args[0] ,'+', args[1],'=', operations.add(parseInt(args[0]),parseInt(args[1])));
console.log("Subtracting numbers : ",args[0] ,'-', args[1],'=', operations.sub(parseInt(args[0]),parseInt(args[1])));
console.log("Multiplying numbers : ",args[0] ,'x', args[1],'=', operations.mul(parseInt(args[0]),parseInt(args[1])));
console.log("Dividing numbers : ",args[0] ,'/', args[1],'=', operations.div(parseInt(args[0]),parseInt(args[1])));