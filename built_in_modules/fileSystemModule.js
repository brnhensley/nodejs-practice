//the build in File System module
const fs = require('fs');

// const files = fs.readdirSync('../');     // will return and array of strings of files & dirs in the provided path
// console.log(files);

//async node functions take a callback as the second param, the callback takes an error and a var for a good result.
// then you have to handle the error or the good return in the callback
fs.readdir('./', function (err, result) {
    if (err) console.log(err);
    else console.log(result);   // if readdir is successful it will return an array as result
});   