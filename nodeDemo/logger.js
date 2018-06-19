const EventEmitter = require('events');

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Raise an event
        console.log(message);

        this.emit('messageLogged', {
            id: 1,
            url: 'http://'
        });

        // Raise: logging (data: message)
        this.emit('logging', {
            message: 'UserLoggedIn'
        });
    }
}

module.exports = Logger;