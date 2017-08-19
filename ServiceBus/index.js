module.exports = function (context, timerTrigger) {
    var message = 'Service Bus queue message created at ' + timeStamp;
    context.log(message);   
    context.bindings.topic = message;
    context.done();
};