const Rx = require("rxjs");
module.exports = function (context, input) {
    context.log("starting");
    Rx.Observable.range(1,i).subscribe(
        function (x) {
            context.log.verbose('Next: %d', x);
        },
        function (err) {
            context.log.error('Error: %s', err);
        },
        function () {
            context.log.info('Completed');
            context.done();
    });
    context.log("finished main");
}