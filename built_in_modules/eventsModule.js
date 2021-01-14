// built in module 
// best to use this as an extention to a custom class you make
const EventEmitter = require('events');      // returns the EventEmitter Class so it needs an instance
const emitter = new EventEmitter;
//const emitter = new require('events')     // shorthand?

// register a listener to watch for events being emitted
emitter.on('messageLogged', (eventArg) => {   // takes an event name and a callback to be called on that event
    console.log("listener called", eventArg);
});

// to emit an event
// emitter.emit('messageLogged');

// optional second arg to be fed to callback
emitter.emit('messageLogged', { id: 1, url: 'butt.org' });

// raise an event called logging that sends with it a message called data

const message = "Juicy juice what what";

emitter.on('logging', (e) => {
    console.log('logging event called', e);
});

emitter.emit('logging', { data: message });