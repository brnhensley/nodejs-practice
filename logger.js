const EventEmitter = require('events');      // returns the EventEmitter Class

let url = "http://somewebsite.com/log"; // fake logger api

class Logger extends EventEmitter {
    /**
     *  @param {string} message
     *  @returns {number}
    **/
    log = (message) => {
        // send http request
        console.log(message);

        // raise an event
        this.emit('messageLogged', { id: 1, url: 'butt.org' });
        let x = 1;
        return 1;

    };
}

// can export module parts with module object
// module.exports.log = log;   // this will export the log as an object with a function prop
module.exports = Logger;        // this is export the function alone
// can be enported with a different name like so
module.exports.apiEndpoint = url; 
