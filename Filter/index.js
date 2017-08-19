module.exports = function(context, subscription) {
    context.log('Message', subscription);
    context.done();
};