var http = require('http')
var events = require('events')
var eventEmitter = new events.EventEmitter()

var eventHandler = () => {
    console.log("Event triggered")
}

eventEmitter.on('trigger', eventHandler)

eventEmitter.emit('trigger')