// the built in os module can interact with the machine it's running on
const os = require('os');

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total mem = ${totalMemory}`);
console.log(`Free mem = ${freeMemory}`);