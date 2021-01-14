// path is a build in Node module
const path = require('path'); // without the ./ node assumes it's a built in module

const pathObject = path.parse(__filename);
console.log(pathObject);