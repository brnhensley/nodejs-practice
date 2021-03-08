// import modules with require function
const Logger = require('./logger');
const logger = new Logger;
const deepclone = require('lodash.clonedeep');

// register a listener to watch for events being emitted
logger.on('messageLogged', (e) => {   // takes an event name and a callback to be called on that event
    console.log("listener called", e);
});

const a = {
    id: 69,
    name: 'test'
};

const b = deepclone(a);

console.log(b);

logger.log('something');    // this method triggers an event emit that will register here
