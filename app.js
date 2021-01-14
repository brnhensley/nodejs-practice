// import modules with require function
const Logger = require('./logger');
const logger = new Logger;

// register a listener to watch for events being emitted
logger.on('messageLogged', (e) => {   // takes an event name and a callback to be called on that event
    console.log("listener called", e);
});

logger.log('something');    // this method triggers an event emit that will register here
