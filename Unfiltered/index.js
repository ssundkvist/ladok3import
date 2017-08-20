module.exports = function(context, subscription) {
    context.log('Unfiltered message', subscription);
    context.done();
};